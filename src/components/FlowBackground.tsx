import { useEffect, useRef } from 'react'

interface Ribbon {
  baseY: number // relative vertical anchor (0-1)
  rise: number // diagonal lift across the width
  amp1: number
  amp2: number
  freq1: number
  freq2: number
  speed: number
  phase: number
  thickness: number
  color: [number, number, number]
  alpha: number
  fadeTop: boolean
}

const RIBBONS: Ribbon[] = [
  { baseY: 1.08, rise: 0.30, amp1: 90, amp2: 42, freq1: 0.0016, freq2: 0.0007, speed: 0.00016, phase: 0.0, thickness: 210, color: [172, 176, 180], alpha: 0.22, fadeTop: true },
  { baseY: 1.16, rise: 0.34, amp1: 96, amp2: 46, freq1: 0.0013, freq2: 0.0006, speed: 0.00013, phase: 1.8, thickness: 150, color: [128, 132, 136], alpha: 0.18, fadeTop: true },
  { baseY: 1.22, rise: 0.38, amp1: 78, amp2: 36, freq1: 0.0018, freq2: 0.0008, speed: 0.00021, phase: 3.1, thickness: 85, color: [240, 83, 26], alpha: 1.0, fadeTop: true },
  { baseY: 1.27, rise: 0.42, amp1: 84, amp2: 30, freq1: 0.0015, freq2: 0.0009, speed: 0.00018, phase: 4.4, thickness: 48, color: [244, 118, 62], alpha: 0.85, fadeTop: true },
  { baseY: 1.32, rise: 0.46, amp1: 70, amp2: 28, freq1: 0.0021, freq2: 0.0010, speed: 0.00024, phase: 5.6, thickness: 22, color: [233, 79, 20], alpha: 0.95, fadeTop: true },
  { baseY: 1.38, rise: 0.52, amp1: 78, amp2: 34, freq1: 0.0014, freq2: 0.0007, speed: 0.00015, phase: 2.5, thickness: 120, color: [224, 224, 220], alpha: 0.95, fadeTop: true },
]

/**
 * Flowing fabric-ribbon background, drawn on canvas.
 * Layered sine ribbons drift slowly like cloth in wind.
 */
export default function FlowBackground({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const waveY = (r: Ribbon, x: number, t: number) =>
      h * r.baseY -
      x * r.rise +
      Math.sin(x * r.freq1 + t * r.speed + r.phase) * r.amp1 +
      Math.sin(x * r.freq2 - t * r.speed * 0.62 + r.phase * 1.7) * r.amp2

    const drawRibbon = (r: Ribbon, t: number) => {
      const step = 10
      const [cr, cg, cb] = r.color

      let yMin = Infinity
      let yMax = -Infinity
      ctx.beginPath()
      ctx.moveTo(-60, waveY(r, -60, t))
      for (let x = -60; x <= w + 60; x += step) {
        const y = waveY(r, x, t)
        if (y < yMin) yMin = y
        ctx.lineTo(x, y)
      }
      for (let x = w + 60; x >= -60; x -= step) {
        const y = waveY(r, x, t) + r.thickness
        if (y > yMax) yMax = y
        ctx.lineTo(x, y)
      }
      ctx.closePath()

      const grad = ctx.createLinearGradient(0, yMin, 0, yMax)
      if (r.fadeTop) {
        grad.addColorStop(0, `rgba(${cr},${cg},${cb},0)`)
        grad.addColorStop(0.45, `rgba(${cr},${cg},${cb},${r.alpha})`)
        grad.addColorStop(1, `rgba(${cr},${cg},${cb},${r.alpha * 0.2})`)
      } else {
        grad.addColorStop(0, `rgba(${cr},${cg},${cb},${r.alpha})`)
        grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`)
      }
      ctx.fillStyle = grad
      ctx.fill()
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'multiply'
      for (const r of RIBBONS) drawRibbon(r, t)
      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true" />
}
