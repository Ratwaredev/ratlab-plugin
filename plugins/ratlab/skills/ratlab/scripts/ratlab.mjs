#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const [command, ...args] = process.argv.slice(2)
const help = `RatLab local game tools

Commands:
  capture <http://127.0.0.1:PORT> [--out FILE] [--width PX] [--height PX]
  fps     <http://127.0.0.1:PORT> [--seconds N] [--target N]

Requires playwright-core and an installed Chrome, Chromium, or Edge executable.
Set RATLAB_BROWSER_EXECUTABLE if the browser is not found automatically.
`

function option(name, fallback) {
  const index = args.indexOf(name)
  return index < 0 ? fallback : args[index + 1]
}

function localUrl(value) {
  let url
  try { url = new URL(value) } catch { throw Error('Enter a full local URL, for example http://127.0.0.1:4179') }
  if (!['http:', 'https:'].includes(url.protocol) || !['localhost', '127.0.0.1', '::1', '[::1]'].includes(url.hostname)) {
    throw Error('RatLab browser tools only open a local game URL (localhost, 127.0.0.1, or ::1).')
  }
  return url.href
}

async function browserPath() {
  if (process.env.RATLAB_BROWSER_EXECUTABLE) return process.env.RATLAB_BROWSER_EXECUTABLE
  const candidates = process.platform === 'win32'
    ? [
        path.join(process.env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)', 'Microsoft/Edge/Application/msedge.exe'),
        path.join(process.env.PROGRAMFILES || 'C:\\Program Files', 'Microsoft/Edge/Application/msedge.exe'),
        path.join(process.env.PROGRAMFILES || 'C:\\Program Files', 'Google/Chrome/Application/chrome.exe'),
        path.join(process.env.LOCALAPPDATA || '', 'Google/Chrome/Application/chrome.exe')
      ]
    : process.platform === 'darwin'
      ? ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge', '/Applications/Chromium.app/Contents/MacOS/Chromium']
      : ['/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome', '/usr/bin/microsoft-edge']
  for (const candidate of candidates) {
    try { await fs.access(candidate); return candidate } catch {}
  }
  throw Error('Could not find Chrome, Chromium, or Edge. Set RATLAB_BROWSER_EXECUTABLE to its executable path.')
}

async function openPage(url, viewport) {
  let chromium
  try { ({ chromium } = require('playwright-core')) }
  catch { throw Error('playwright-core is not installed in this project. Install it only if you want browser capture/FPS tools: npm install --save-dev playwright-core') }
  const executablePath = await browserPath()
  const browser = await chromium.launch({ headless: true, executablePath })
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 })
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 })
    await page.waitForTimeout(500)
  } catch (error) {
    await browser.close()
    throw error
  }
  return { browser, page }
}

async function capture() {
  const url = localUrl(args[0])
  const width = Number(option('--width', 1280))
  const height = Number(option('--height', 720))
  if (!Number.isInteger(width) || width < 320 || width > 7680 || !Number.isInteger(height) || height < 240 || height > 4320) throw Error('Viewport dimensions are outside supported bounds.')
  const stamp = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-')
  const out = path.resolve(option('--out', path.join('artifacts', `ratlab-${stamp}.png`)))
  await fs.mkdir(path.dirname(out), { recursive: true })
  const { browser, page } = await openPage(url, { width, height })
  try { await page.screenshot({ path: out, animations: 'disabled' }) }
  finally { await browser.close() }
  console.log(`Screenshot: ${out} (${width}x${height})`)
}

async function fps() {
  const url = localUrl(args[0])
  const seconds = Number(option('--seconds', 4))
  const target = Number(option('--target', 60))
  if (!Number.isFinite(seconds) || seconds < 1 || seconds > 30) throw Error('--seconds must be between 1 and 30')
  if (!Number.isFinite(target) || target < 1 || target > 240) throw Error('--target must be between 1 and 240')
  const { browser, page } = await openPage(url, { width: 1280, height: 720 })
  try {
    const result = await page.evaluate(async ({ durationMs, targetFps }) => {
      const frames = []
      const start = performance.now()
      let previous = start
      await new Promise(resolve => {
        const tick = now => {
          frames.push(now - previous)
          previous = now
          if (now - start < durationMs) requestAnimationFrame(tick)
          else resolve()
        }
        requestAnimationFrame(tick)
      })
      const intervals = frames.slice(1).sort((a, b) => a - b)
      const percentile = p => intervals[Math.min(intervals.length - 1, Math.floor((intervals.length - 1) * p))] || 0
      const meanFrameMs = intervals.reduce((sum, frame) => sum + frame, 0) / Math.max(1, intervals.length)
      const slowFrameMs = percentile(0.99)
      return {
        measuredSeconds: Number(((performance.now() - start) / 1000).toFixed(2)),
        averageFps: Number((1000 / meanFrameMs).toFixed(1)),
        onePercentLowFps: Number((1000 / slowFrameMs).toFixed(1)),
        frameCount: intervals.length,
        framesOverTarget: intervals.filter(frame => frame > 1000 / targetFps).length,
        targetFps
      }
    }, { durationMs: seconds * 1000, targetFps: target })
    console.log(JSON.stringify(result, null, 2))
  } finally { await browser.close() }
}

try {
  if (command === '--help' || command === '-h' || !command) console.log(help)
  else if (command === 'capture') await capture()
  else if (command === 'fps') await fps()
  else throw Error(`Unknown command: ${command}\n\n${help}`)
} catch (error) {
  console.error(error.message || String(error))
  process.exitCode = 1
}
