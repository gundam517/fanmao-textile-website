import { useState } from 'react'
import type { RefObject } from 'react'
import { X } from 'lucide-react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from './ui/dialog'
import type { FabricProduct } from '../data/products'
import { GARMENT_APPLICATIONS } from '../data/garments'
import { compositionText, displayReference, fabricName, imageUrl, previewSrcSet, weightText, widthText } from '../data/productPresentation'

function FabricImages({ product, initialView, initialGarmentId }: { product: FabricProduct; initialView: 'fabric' | 'garment'; initialGarmentId?: string }) {
  const garments = GARMENT_APPLICATIONS.filter(garment => product.garmentIds.includes(garment.id))
  const [garmentId, setGarmentId] = useState(initialGarmentId || garments[0]?.id)
  const garment = garments.find(item => item.id === garmentId) || garments[0]
  const images = [
    ...(product.images.swatch ? [{ id: 'fabric', path: product.images.swatch, label: 'Fabric sample', alt: `Fabric sample ${displayReference(product)}` }] : []),
    ...(garment?.views.map(view => ({
      id: `${garment.id}-${view}`, path: `garments/${garment.id}-${view}-960.jpg`,
      label: ({ front: 'Garment front', back: 'Garment back', texture: 'Fabric texture', alternate: 'Detail view' })[view],
      alt: `${garment.name} — ${({ front: 'front view', back: 'back view', texture: 'supplied fabric texture', alternate: 'detail view' })[view]}`,
    })) || []),
  ]
  const [active, setActive] = useState(initialView === 'garment' && product.images.swatch && garments.length ? 1 : 0)
  const image = images[active] || images[0]
  if (!image) return null
  return (
    <figure className="flex min-w-0 flex-col bg-[#faf9f7]">
      {garments.length > 1 && <div role="group" aria-label="Choose garment style" className="flex flex-wrap gap-2 border-b border-[#d8d3c8] p-3 md:p-4">
        {garments.map(item => <button key={item.id} type="button" aria-pressed={item.id === garment.id} onClick={() => { setGarmentId(item.id); setActive(product.images.swatch ? 1 : 0) }} className={`min-h-11 border px-3 py-2 text-sm transition-colors ${item.id === garment.id ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white' : 'border-[#c9c2b6] text-[#59554e] hover:border-[#a63810]'}`}>{item.shortName}</button>)}
      </div>}
      <div className="flex flex-1 items-center justify-center p-4 md:p-6">
        <img src={imageUrl(image.path)} srcSet={previewSrcSet(image.path)} sizes="(min-width: 768px) 550px, 92vw" alt={image.alt} decoding="async" className="h-[36dvh] w-full object-contain md:h-[49dvh]" />
      </div>
      {images.length > 1 && <div role="group" aria-label="Product images" className="flex flex-wrap gap-2 border-t border-[#d8d3c8] p-3 md:p-4">
        {images.map((item, index) => <button key={item.id} type="button" aria-pressed={index === active} onClick={() => setActive(index)} className={`min-h-11 border px-3 py-2 font-tech text-sm transition-colors ${index === active ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white' : 'border-[#c9c2b6] text-[#59554e] hover:border-[#a63810]'}`}>{item.label}</button>)}
      </div>}
      <figcaption className="sr-only" aria-live="polite">{image.alt}</figcaption>
    </figure>
  )
}

export default function FabricProductDialog({ product, onClose, opener, initialView = 'fabric', initialGarmentId }: {
  product: FabricProduct | null
  onClose: () => void
  opener?: RefObject<HTMLButtonElement | null>
  initialView?: 'fabric' | 'garment'
  initialGarmentId?: string
}) {
  return <Dialog open={product !== null} onOpenChange={open => { if (!open) onClose() }}>
    {product && <DialogContent showCloseButton={false}
      onCloseAutoFocus={event => { if (opener?.current) { event.preventDefault(); opener.current.focus({ preventScroll: true }) } }}
      className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-5xl gap-0 overflow-y-auto rounded-none border-[#c9c2b6] bg-[#f4f1ec] p-0 sm:max-w-5xl">
      <div className="sticky top-0 z-10 border-b border-[#d8d3c8] bg-[#f4f1ec] px-5 py-5 pr-20 md:px-7 md:pr-20">
        <p className="mb-2 font-tech text-[13px] uppercase tracking-widest text-[#a63810]">Fabric reference</p>
        <DialogTitle className="break-words font-tech text-lg font-bold leading-snug sm:text-xl">{displayReference(product)}</DialogTitle>
        <DialogDescription className="sr-only">Fabric images, garment applications and material specifications for {displayReference(product)}.</DialogDescription>
        <DialogClose asChild><button type="button" aria-label="Close fabric details" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-[#c9c2b6] bg-[#f4f1ec] transition-colors hover:bg-[#e4ded4]"><X size={21} aria-hidden="true" /></button></DialogClose>
      </div>
      <div className={`grid ${product.images.swatch || product.images.garment ? 'md:grid-cols-[1.15fr_1fr]' : ''}`}>
        <FabricImages key={`${product.id}-${initialGarmentId || ''}`} product={product} initialView={initialView} initialGarmentId={initialGarmentId} />
        <div className="p-5 md:p-7">
          <h3 className="font-display text-3xl">MATERIAL DETAILS.</h3>
          <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-6">
            <div className="col-span-2"><dt className="font-tech text-[13px] uppercase tracking-wider text-[#6b665e]">Composition</dt><dd className="mt-2 text-base leading-relaxed">{compositionText(product)}</dd></div>
            <div><dt className="font-tech text-[13px] uppercase tracking-wider text-[#6b665e]">Width</dt><dd className="mt-2 text-base">{widthText(product) || 'Not specified'}</dd></div>
            <div><dt className="font-tech text-[13px] uppercase tracking-wider text-[#6b665e]">Weight</dt><dd className="mt-2 text-base">{weightText(product) || 'Not specified'}</dd></div>
            <div className="col-span-2 border-t border-[#d8d3c8] pt-5"><dt className="font-tech text-[13px] uppercase tracking-wider text-[#6b665e]">Fabric description</dt><dd lang="en" className="mt-2 break-words text-base leading-relaxed">{fabricName(product) || 'Not specified'}</dd></div>
          </dl>
          {!product.images.swatch && !product.images.garment && <p className="mt-6 text-base text-[#59554e]">Sample photograph not available.</p>}
        </div>
      </div>
    </DialogContent>}
  </Dialog>
}
