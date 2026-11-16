import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { FABRIC_CATEGORIES, fabricCategoryIds } from '../data/fabricCategories'
import type { FabricCategoryId } from '../data/fabricCategories'
import { CATALOG_PRODUCTS } from '../data/catalogProducts'
import ProductCatalog from './ProductCatalog'

const GROUPS = FABRIC_CATEGORIES.map(category => {
  const products = CATALOG_PRODUCTS.filter(product => fabricCategoryIds(product).includes(category.id))
  return { ...category, products, photoCount: products.filter(product => product.images.swatch).length, garmentCount: products.filter(product => product.images.garment).length }
})

export default function Categories() {
  const [activeId, setActiveId] = useState<FabricCategoryId | null>(null)
  const section = useRef<HTMLElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const categoryButtons = useRef<Partial<Record<FabricCategoryId, HTMLButtonElement | null>>>({})
  const lastCategory = useRef<FabricCategoryId | null>(null)
  const active = GROUPS.find(category => category.id === activeId)

  useEffect(() => { window.dispatchEvent(new Event('fabric-categories-ready')) }, [])

  useEffect(() => {
    if (activeId) heading.current?.focus({ preventScroll: true })
    else if (lastCategory.current) categoryButtons.current[lastCategory.current]?.focus({ preventScroll: true })
  }, [activeId])

  function chooseCategory(id: FabricCategoryId | null) {
    if (id) lastCategory.current = id
    setActiveId(id)
    section.current?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }

  return (
    <section ref={section} id="categories" aria-labelledby="category-title" className="relative bg-[#1a1a1a] py-12 text-[#f4f1ec] md:py-24">
      <span id="catalog" aria-hidden="true" className="absolute left-0 top-0 scroll-mt-[90px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-7 flex items-center gap-4 md:mb-10">
          <span className="font-tech text-sm font-bold text-[#f0531a]">02</span>
          <span className="h-px w-14 bg-[#f4f1ec]" />
          <span className="font-tech text-[11px] uppercase tracking-[0.22em] text-[#bfb9ad]">Fabrics &amp; Finishes</span>
        </div>
        {active ? (
          <>
            <button type="button" onClick={() => chooseCategory(null)} className="mb-5 inline-flex min-h-11 items-center gap-3 font-tech text-xs text-[#ff956e] hover:text-white"><ArrowLeft size={17} aria-hidden="true" /> All categories</button>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 ref={heading} tabIndex={-1} id="category-title" className="max-w-2xl font-display text-4xl uppercase leading-[1.05] outline-none sm:text-5xl md:text-6xl">{active.name}<span className="text-[#f0531a]">.</span></h2>
              <p className="max-w-sm text-sm leading-relaxed text-[#bfb9ad]">{active.description}</p>
            </div>
            <ProductCatalog key={active.id} category={active} products={active.products} />
          </>
        ) : (
          <>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 ref={heading} tabIndex={-1} id="category-title" className="font-display text-5xl leading-[0.95] outline-none md:text-7xl">FABRICS &amp;<br /><span className="text-[#f0531a]">FINISHES.</span></h2>
            <p className="max-w-md text-sm leading-relaxed text-[#bfb9ad]">Choose a material or finish to explore its fabric references and sample photographs.</p>
          </div>
          <ul id="category-browser" className="mt-9 grid grid-cols-2 gap-3 md:mt-12 md:gap-4 lg:grid-cols-5">
            {GROUPS.map(category => (
              <li key={category.id}>
                <button ref={button => { categoryButtons.current[category.id] = button }} type="button" aria-label={`Browse ${category.name}`} aria-controls="category-browser" onClick={() => chooseCategory(category.id)} className="group flex h-full w-full flex-col border border-[#45423c] bg-[#222221] p-4 text-left transition-colors hover:border-[#f0531a] hover:bg-[#2d2722] md:p-5">
                  <span className="mb-6 flex w-full items-center justify-between text-[#ff956e]"><span className="font-tech text-[11px]">{category.no}</span><ArrowUpRight size={19} aria-hidden="true" /></span>
                  <span className="text-base font-semibold leading-snug">{category.name}</span>
                  <span className="mb-6 mt-3 block text-xs leading-relaxed text-[#bfb9ad]">{category.description}</span>
                  <span className="mt-auto block border-t border-[#45423c] pt-4 font-tech text-[10px] leading-relaxed text-[#bfb9ad]">{category.products.length} {category.products.length === 1 ? 'reference' : 'references'}{category.photoCount > 0 && <span className="mt-1 block text-[#ff956e]">{category.photoCount} sample photos</span>}{category.garmentCount > 0 && <span className="mt-1 block">{category.garmentCount} garment applications</span>}</span>
                </button>
              </li>
            ))}
          </ul>
          </>
        )}
      </div>
    </section>
  )
}
