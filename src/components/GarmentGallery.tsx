import { lazy, Suspense, useId, useRef, useState } from 'react'
import { garmentImage } from '../data/garments'
import type { GarmentApplication, GarmentView } from '../data/garments'

const GarmentFabricDetails = lazy(() => import('./GarmentFabricDetails'))

const VIEWS: { id: GarmentView; label: string }[] = [
  { id: 'front', label: 'Front' },
  { id: 'back', label: 'Back' },
  { id: 'texture', label: 'Fabric texture' },
  { id: 'alternate', label: 'Detail view' },
]

export default function GarmentGallery({ garments }: { garments: GarmentApplication[] }) {
  const [selected, setSelected] = useState(0)
  const [view, setView] = useState<GarmentView>('front')
  const [fabricNumber, setFabricNumber] = useState<string | null>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  const imageId = useId()
  const garment = garments[selected]

  return (
    <figure className="min-w-0">
      {garments.length > 1 && (
        <div role="group" aria-label="Choose garment application" className="mb-3 flex flex-wrap gap-2">
          {garments.map((item, i) => (
            <button key={item.id} type="button" aria-pressed={selected === i} aria-controls={imageId}
              onClick={() => { setSelected(i); setView('front') }}
              className={`min-h-11 border px-3 py-2 text-xs transition-colors ${selected === i ? 'border-[#1a1a1a] bg-[#1a1a1a] text-[#f4f1ec]' : 'border-[#c9c3b8] text-[#59554e] hover:border-[#1a1a1a]'}`}>
              {item.shortName}{item.fabricNumber && <span className="ml-2 font-tech text-[9px] opacity-70">{item.fabricNumber}</span>}
            </button>
          ))}
        </div>
      )}
      <div id={imageId} className="relative aspect-square overflow-hidden bg-[#faf9f7] sm:aspect-[5/4]">
        <img key={`${garment.id}-${view}`}
          src={garmentImage(garment.id, view, 960)}
          srcSet={`${garmentImage(garment.id, view, 480)} 480w, ${garmentImage(garment.id, view, 960)} 960w`}
          sizes="(min-width: 1280px) 572px, (min-width: 1024px) 45vw, (min-width: 640px) 85vw, 92vw"
          width={960} height={view === 'texture' ? 1280 : 960}
          loading="lazy" decoding="async"
          alt={view === 'texture' ? `Fabric reference supplied for ${garment.name.toLowerCase()}` : `${view === 'front' ? 'Front' : view === 'back' ? 'Back' : 'Detail'} view of ${garment.name.toLowerCase()}`}
          className={`absolute inset-0 h-full w-full object-contain ${view === 'texture' ? 'p-5' : 'p-3 sm:p-5'}`} />
        <span className="pointer-events-none absolute left-3 top-3 bg-[#f4f1ec]/95 px-2 py-1 font-tech text-[9px] uppercase tracking-wider text-[#59554e]">
          {view === 'texture' ? 'Fabric reference' : 'Garment application'}
        </span>
      </div>
      <div role="group" aria-label="Choose image view" className="flex border-b border-[#c9c3b8]">
        {VIEWS.filter(item => garment.views.includes(item.id)).map(item => (
          <button key={item.id} type="button" aria-pressed={view === item.id} aria-controls={imageId} onClick={() => setView(item.id)}
            className={`min-h-12 flex-1 border-b-2 px-2 py-3 font-tech text-[10px] uppercase tracking-wider transition-colors ${view === item.id ? 'border-[#f0531a] text-[#a63810]' : 'border-transparent text-[#59554e] hover:text-[#a63810]'}`}>
            {item.label}
          </button>
        ))}
      </div>
      <figcaption className="mt-4" aria-live="polite" aria-atomic="true">
        <p className="text-sm font-semibold">{garment.name}</p>
        <p className="mt-1 text-xs leading-relaxed text-[#6b665e]">{garment.material}</p>
        {garment.fabricNumber && <button ref={opener} type="button" aria-haspopup="dialog" onClick={() => setFabricNumber(garment.fabricNumber!)} className="mt-3 inline-flex min-h-11 items-center gap-3 border-b border-[#a63810] font-tech text-[11px] uppercase tracking-wide text-[#a63810]">View fabric {garment.fabricNumber}<span aria-hidden="true">↗</span></button>}
      </figcaption>
      {fabricNumber && <Suspense fallback={<p role="status" className="mt-3 text-sm text-[#59554e]">Loading fabric details…</p>}><GarmentFabricDetails number={fabricNumber} garmentId={garment.id} onClose={() => setFabricNumber(null)} opener={opener} /></Suspense>}
    </figure>
  )
}
