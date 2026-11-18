import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

// Stylized surfaces based on the four supplied layer references.
// Collection links are presentation navigation, not fabric specifications.
const fabrics = [
  { name: 'Breathable comfort', material: 'Linen / cotton', href: '#collection-4', color: [179, 199, 163], mesh: false },
  { name: 'Thermal solutions', material: 'White mesh', href: '#collection-3', color: [235, 231, 222], mesh: true },
  { name: 'Outdoor protection', material: 'Charcoal weave', href: '#collection-1', color: [70, 79, 84], mesh: false },
  { name: 'Sports performance', material: 'Orange mesh', href: '#collection-2', color: [241, 94, 31], mesh: true },
]
type Point = { x: number; y: number; z: number }
type Face = { points: Point[]; depth: number; shade: number; fabric: number; edge: number }

export default function FabricRibbons({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const selectedRef = useRef<number | null>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)
  const pausedRef = useRef(false)
  const requestDrawRef = useRef<() => void>(() => {})
  const select = (value: number | null) => {
    selectedRef.current = value
    setSelected(value)
    requestDrawRef.current()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    let width = 1, height = 1, frame = 0, time = 0, last = 0, visible = true
    let columns = 76, rows = 16, interval = 1000 / 30, geometryDirty = true
    let faces: Face[] = []
    let mouseX = 0, mouseY = 0, tiltX = 0, tiltY = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const compact = window.matchMedia('(max-width: 767px), (pointer: coarse)')
    const schedule = () => {
      if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw)
    }
    requestDrawRef.current = schedule
    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      // Fewer surface cells and pixels on phones; preserve the four silhouettes.
      columns = compact.matches ? 36 : 76
      rows = compact.matches ? 10 : 16
      interval = 1000 / (compact.matches ? 24 : 30)
      // Bound the pixel budget even when the scene fills a large screen.
      const ratio = Math.min(window.devicePixelRatio || 1, compact.matches ? 1.25 : 1.5, Math.sqrt(2400000 / Math.max(width * height, 1)))
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      geometryDirty = true
      schedule()
    }
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      cancelAnimationFrame(frame)
      frame = 0
      last = 0
      if (visible) schedule()
    })
    intersection.observe(canvas)

    const surface = (u: number, v: number, i: number): Point => {
      const phase = i * 1.3
      const x = (u - .5) * 5.1
      const envelope = Math.sin(Math.PI * u)
      const twist = Math.sin(u * Math.PI * 2 + phase + time * .19) * 1.05 + .15
      const breadth = .23 + envelope * .34
      const fold = Math.sin(v * Math.PI * 2 + u * 9 + time * .3) * .035 * envelope
      return {
        x,
        y: (i - 1.5) * .53 - x * .35 + Math.sin(u * 7 + phase + time * .2) * .12 + v * breadth * Math.cos(twist),
        z: Math.sin(u * 6 + phase + time * .2) * .16 + v * breadth * Math.sin(twist) + fold,
      }
    }
    const project = (p: Point): Point => {
      const x = p.x * Math.cos(tiltX) + p.z * Math.sin(tiltX)
      const z = -p.x * Math.sin(tiltX) + p.z * Math.cos(tiltX)
      const y = p.y * Math.cos(tiltY) - z * Math.sin(tiltY)
      const depth = p.y * Math.sin(tiltY) + z * Math.cos(tiltY)
      // Let the fabric extend beyond the viewport, with space for the copy
      // at the left on desktop and above the folds on smaller screens.
      const narrow = width < 1024
      const scale = Math.max(width / 5.1, height / (narrow ? 5.2 : 4.2)) * 6 / (6 + depth)
      return { x: width * (narrow ? .65 : .64) + x * scale, y: height * (narrow ? .69 : .55) + y * scale, z: depth }
    }
    const path = (points: Point[]) => {
      ctx.beginPath()
      points.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y))
      ctx.closePath()
    }
    const draw = (now: number) => {
      frame = 0
      if (!visible || document.hidden) return
      if (now - last < interval) { schedule(); return }
      const delta = last ? Math.min((now - last) / 1000, .05) : 0
      last = now
      const animated = !reduced.matches && !pausedRef.current
      const targetX = reduced.matches || compact.matches ? 0 : mouseX * .12
      const targetY = reduced.matches || compact.matches ? 0 : mouseY * .08
      const tilting = Math.abs(targetX - tiltX) + Math.abs(targetY - tiltY) > .0005
      if (animated) time += delta
      tiltX = tilting ? tiltX + (targetX - tiltX) * .12 : targetX
      tiltY = tilting ? tiltY + (targetY - tiltY) * .12 : targetY
      if (animated || tilting || geometryDirty) {
        faces = []
        fabrics.forEach((_, i) => {
          const points = Array.from({ length: columns + 1 }, (_, u) => Array.from({ length: rows + 1 }, (_, v) => surface(u / columns, v / rows * 2 - 1, i)))
          for (let u = 0; u < columns; u++) for (let v = 0; v < rows; v++) {
            const a = points[u][v], b = points[u + 1][v], c = points[u + 1][v + 1], d = points[u][v + 1]
            const ab = { x: b.x - a.x, y: b.y - a.y, z: b.z - a.z }
            const ad = { x: d.x - a.x, y: d.y - a.y, z: d.z - a.z }
            const nx = ab.y * ad.z - ab.z * ad.y, ny = ab.z * ad.x - ab.x * ad.z, nz = ab.x * ad.y - ab.y * ad.x
            const light = Math.abs((nx * -.3 + ny * -.45 + nz * .84) / (Math.hypot(nx, ny, nz) || 1))
            const projected = [a, b, c, d].map(project)
            faces.push({ points: projected, depth: projected.reduce((sum, p) => sum + p.z, 0) / 4, shade: .55 + light * .55, fabric: i, edge: v === 0 ? -1 : v === rows - 1 ? 1 : 0 })
          }
        })
        faces.sort((a, b) => b.depth - a.depth)
        geometryDirty = false
      }
      ctx.clearRect(0, 0, width, height)
      for (const face of faces) {
        const fabric = fabrics[face.fabric]
        const active = selectedRef.current
        const dim = active !== null && active !== face.fabric ? .48 : 1
        const light = face.shade + (active === face.fabric ? .1 : 0)
        const color = fabric.color.map(c => Math.min(255, Math.round(c * light)))
        path(face.points)
        ctx.fillStyle = `rgba(${color.join(',')},${(fabric.mesh ? .30 : .97) * dim})`
        ctx.fill()
        ctx.strokeStyle = `rgba(${color.map(c => Math.min(255, c + (fabric.mesh ? 12 : 32))).join(',')},${(fabric.mesh ? .88 : .30) * dim})`
        ctx.lineWidth = fabric.mesh ? .8 : .38
        ctx.stroke()
        // Longitudinal fiber highlights follow the same deformed surface.
        if (!fabric.mesh) {
          const [a, b, c, d] = face.points
          ctx.beginPath()
          ctx.moveTo((a.x + d.x) / 2, (a.y + d.y) / 2)
          ctx.lineTo((b.x + c.x) / 2, (b.y + c.y) / 2)
          ctx.strokeStyle = `rgba(255,253,241,${(face.fabric === 0 ? .30 : .13) * dim})`
          ctx.lineWidth = .5
          ctx.stroke()
        }
        if (face.edge) {
          const [a, b, c, d] = face.points
          ctx.beginPath()
          const first = face.edge < 0 ? a : d
          const second = face.edge < 0 ? b : c
          ctx.moveTo(first.x, first.y)
          ctx.lineTo(second.x, second.y)
          ctx.strokeStyle = `rgba(255,250,230,${.45 * dim})`
          ctx.lineWidth = .7
          ctx.stroke()
        }
      }
      if (animated || tilting) schedule()
    }
    const pick = (event: PointerEvent | MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left, y = event.clientY - rect.top
      for (let i = faces.length - 1; i >= 0; i--) {
        const points = faces[i].points
        let inside = false
        for (let a = 0, b = 3; a < 4; b = a++) {
          if ((points[a].y > y) !== (points[b].y > y) && x < (points[b].x - points[a].x) * (y - points[a].y) / (points[b].y - points[a].y) + points[a].x) inside = !inside
        }
        if (inside) return faces[i].fabric
      }
      return null
    }
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      const rect = canvas.getBoundingClientRect()
      mouseX = (event.clientX - rect.left) / width * 2 - 1
      mouseY = (event.clientY - rect.top) / height * 2 - 1
      const next = pick(event)
      if (next !== selectedRef.current) select(next)
      canvas.style.cursor = next === null ? 'default' : 'pointer'
      schedule()
    }
    const leave = () => { mouseX = mouseY = 0; select(null); schedule() }
    const click = (event: MouseEvent) => {
      const index = pick(event)
      if (index !== null) window.location.hash = fabrics[index].href
    }
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerleave', leave)
    canvas.addEventListener('click', click)
    const onVisibility = () => {
      cancelAnimationFrame(frame)
      frame = 0
      last = 0
      if (!document.hidden) schedule()
    }
    document.addEventListener('visibilitychange', onVisibility)
    reduced.addEventListener('change', schedule)
    compact.addEventListener('change', resize)
    resize()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      intersection.disconnect()
      requestDrawRef.current = () => {}
      document.removeEventListener('visibilitychange', onVisibility)
      reduced.removeEventListener('change', schedule)
      compact.removeEventListener('change', resize)
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerleave', leave)
      canvas.removeEventListener('click', click)
    }
  }, [])

  return (
    <div className="hero-scene-layout relative flex flex-col">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      {children}
      <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-7xl items-end justify-between gap-3 px-5 pb-5 md:px-10">
        <div className="min-w-0 text-[#3b352f]">
          <p className="font-tech text-[9px] uppercase tracking-wider">{selected === null ? 'Select a form to explore' : fabrics[selected].material}</p>
          <p className="mt-1 font-display text-lg uppercase md:text-xl">{selected === null ? 'Four material perspectives' : fabrics[selected].name}</p>
          <p className="mt-2 font-tech text-[8px] uppercase tracking-wider text-[#6b665e]">Illustrative fabric forms</p>
        </div>
        <button type="button" onClick={() => { pausedRef.current = !paused; setPaused(!paused); requestDrawRef.current() }} aria-pressed={paused} className="pointer-events-auto min-h-11 shrink-0 bg-[#f4f1ec]/80 px-3 py-2 font-tech text-[9px] uppercase tracking-wider text-[#59554e] underline decoration-[#b8b2a7] underline-offset-4">{paused ? 'Play motion' : 'Pause motion'}</button>
      </div>
      <nav aria-label="Fabric forms" className="relative z-10 grid grid-cols-2 gap-x-4 border-t border-[#b8b2a7]/50 bg-[#f4f1ec]/90 px-5 py-3 md:grid-cols-4 md:px-10 md:py-4">
        {fabrics.map((fabric, i) => <a key={fabric.href} href={fabric.href} onFocus={() => select(i)} onBlur={() => select(null)} onMouseEnter={() => select(i)} onMouseLeave={() => select(null)} className={`flex min-h-12 items-center gap-3 py-2 text-[11px] transition-colors ${selected === i ? 'text-[#a63810]' : 'text-[#59554e]'}`}><span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: `rgb(${fabric.color.join(',')})` }} /><span>{fabric.name}</span></a>)}
      </nav>
    </div>
  )
}
