import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Search } from 'lucide-react'
import FabricProductDialog from '../components/FabricProductDialog'
import { compositionText, displayReference, fabricName, imageUrl, previewSrcSet, weightText, widthText } from '../data/productPresentation'
import type { FabricProduct } from '../data/products'
import type { FabricCategory } from '../data/fabricCategories'

const PAGE_SIZE = 8

export default function ProductCatalog({ category, products }: { category: FabricCategory; products: FabricProduct[] }) {
  const photoProducts = products.filter(product => product.images.swatch)
  const garmentProducts = products.filter(product => product.images.garment)
  const [scope, setScope] = useState<'photos' | 'garments' | 'all'>(photoProducts.length ? 'photos' : garmentProducts.length ? 'garments' : 'all')
  const [initialView, setInitialView] = useState<'fabric' | 'garment'>('fabric')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<FabricProduct | null>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  const resultsStart = useRef<HTMLParagraphElement>(null)
  const source = scope === 'photos' ? photoProducts : scope === 'garments' ? garmentProducts : products
  const term = query.trim().toLowerCase().replace(/\s/g, '')
  const results = source.filter(product => {
    if (!term) return true
    if (/^\d{3}$/.test(term)) return product.code.split('/')[0].match(/(\d{3})[A-Z]*$/)?.[1] === term
    return [product.code, product.composition, fabricName(product), product.english?.stretchType, product.english?.finish]
      .some(value => value?.toLowerCase().replace(/\s/g, '').includes(term))
  })
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function changePage(next: number) {
    setPage(next)
    resultsStart.current?.scrollIntoView({ behavior: 'instant', block: 'start' })
    resultsStart.current?.focus({ preventScroll: true })
  }

  function openProduct(product: FabricProduct, button: HTMLButtonElement) {
    opener.current = button
    setInitialView(scope === 'garments' ? 'garment' : 'fabric')
    setSelected(product)
  }

  return (
    <div id="category-browser" aria-label={`${category.name} products`} className="mt-8 bg-[#ece8e0] p-4 text-[#1a1a1a] md:p-7">
        <div className="flex flex-col gap-5 border-b border-[#c9c2b6] pb-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Category view">
            {([
              ...(photoProducts.length ? [['photos', `Photos (${photoProducts.length})`] as const] : []),
              ...(garmentProducts.length ? [['garments', `Garments (${garmentProducts.length})`] as const] : []),
              ['all', `References (${products.length})`],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={scope === value}
                aria-controls="catalog-results"
                onClick={() => { setScope(value); setPage(1) }}
                className={`min-h-11 px-2 py-3 font-tech text-[10px] transition-colors sm:px-4 sm:text-[11px] ${scope === value ? 'bg-[#1a1a1a] text-white' : 'text-[#59554e] hover:bg-[#ded8cd]'}`}
              >{label}</button>
            ))}
          </div>
          <div role="search" className="flex min-h-11 items-center gap-3 border-b border-[#9a9286] focus-within:border-[#f0531a] md:w-80">
            <Search size={17} className="shrink-0 text-[#6b665e]" aria-hidden="true" />
            <label className="sr-only" htmlFor="catalog-search">Search fabrics</label>
            <input
              id="catalog-search"
              type="search"
              autoComplete="off"
              value={query}
              onChange={event => { setQuery(event.target.value); setPage(1) }}
              placeholder="Search within this category"
              className="min-h-11 w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-[#6b665e]"
            />
          </div>
        </div>

        <p ref={resultsStart} tabIndex={-1} role="status" className="scroll-mt-[100px] py-4 font-tech text-[11px] text-[#59554e] outline-none md:py-5">
          {results.length} {results.length === 1 ? 'reference' : 'references'}{term ? ` matching “${query.trim()}”` : ` in ${category.name}`}
        </p>

        <div id="catalog-results">
          {results.length === 0 ? (
            <div className="border-t border-[#c9c2b6] py-14 text-center">
              <p className="text-lg font-semibold">No fabrics found.</p>
              <p className="mt-2 text-sm text-[#59554e]">Try another reference in this category.</p>
              <button type="button" onClick={() => { setQuery(''); setPage(1) }} className="mt-5 min-h-11 border-b border-[#a63810] px-3 text-sm text-[#a63810]">Clear search</button>
              {scope !== 'all' && <button type="button" onClick={() => { setScope('all'); setPage(1) }} className="ml-4 mt-5 min-h-11 border-b border-[#a63810] px-3 text-sm text-[#a63810]">Search all references in this category</button>}
            </div>
          ) : scope !== 'all' ? (
            <ul className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-6 sm:gap-y-9 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map(product => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={event => openProduct(product, event.currentTarget)}
                    aria-label={`View fabric ${displayReference(product)}`}
                    aria-describedby={fabricName(product) ? `fabric-name-${product.id}` : undefined}
                    aria-haspopup="dialog"
                    className="group block h-full w-full text-left"
                  >
                    <span className="relative block aspect-[4/3] overflow-hidden bg-[#ded8cd]">
                      <img
                        src={imageUrl((scope === 'garments' ? product.images.garment : product.images.swatch)!)}
                        srcSet={previewSrcSet((scope === 'garments' ? product.images.garment : product.images.swatch)!)}
                        sizes="(min-width: 1280px) 282px, (min-width: 1024px) 31vw, 47vw"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none ${scope === 'garments' ? 'object-contain p-2' : 'object-cover'}`}
                      />
                      {scope === 'garments' && <span className="absolute left-2 top-2 bg-[#f4f1ec]/95 px-2 py-1 font-tech text-[8px] uppercase tracking-wider text-[#59554e]">Garment application</span>}
                      <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-[#f4f1ec] text-[#1a1a1a] transition-colors group-hover:bg-[#f0531a] group-hover:text-white"><ArrowUpRight size={18} aria-hidden="true" /></span>
                    </span>
                    <span className="mt-4 block break-words font-tech text-[11px] font-bold tracking-wide group-hover:text-[#a63810] sm:text-sm">{displayReference(product)}</span>
                    {fabricName(product) && <span id={`fabric-name-${product.id}`} title={fabricName(product)} className="mt-2 line-clamp-2 text-xs font-medium leading-relaxed sm:text-sm">{fabricName(product)}</span>}
                    <span className="mt-2 block text-xs leading-relaxed text-[#59554e] sm:text-sm">{compositionText(product)}</span>
                    {weightText(product) && <span className="mt-2 block font-tech text-[10px] text-[#6b665e] sm:text-[11px]">{weightText(product)}</span>}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <div aria-hidden="true" className="hidden grid-cols-[180px_1fr_110px_120px_24px] gap-5 border-b border-[#c9c2b6] pb-3 font-tech text-[10px] uppercase tracking-wider text-[#6b665e] md:grid">
                <span>Reference</span><span>Fabric / Composition</span><span>Width</span><span>Weight</span><span />
              </div>
              <ul>
                {visible.map(product => (
                  <li key={product.id} className="border-b border-[#c9c2b6]">
                    <button type="button" aria-label={`View fabric ${displayReference(product)}`} aria-haspopup="dialog" onClick={event => openProduct(product, event.currentTarget)} className="group grid w-full grid-cols-[1fr_24px] items-center gap-x-5 gap-y-2 py-5 text-left transition-colors hover:bg-[#e4ded4] md:grid-cols-[180px_1fr_110px_120px_24px]">
                      <span className="min-w-0 break-words font-tech text-xs font-bold group-hover:text-[#a63810]">{displayReference(product)}</span>
                      <span className="col-start-1 min-w-0 text-sm leading-relaxed text-[#59554e] md:col-auto">{fabricName(product) && <span className="mb-1 block break-words font-medium text-[#1a1a1a]">{fabricName(product)}</span>}{compositionText(product)}</span>
                      <span className="col-start-1 text-xs text-[#6b665e] md:hidden">{[widthText(product), weightText(product)].filter(Boolean).join(' / ') || '—'}</span>
                      <span className="hidden text-xs text-[#6b665e] md:block">{widthText(product) || '—'}</span>
                      <span className="hidden text-xs text-[#6b665e] md:block">{weightText(product) || '—'}</span>
                      <ArrowUpRight size={19} aria-hidden="true" className="col-start-2 row-start-1 text-[#a63810] md:col-auto md:row-auto" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-[#c9c2b6] pt-5 md:gap-5">
            <button type="button" disabled={page === 1} onClick={() => changePage(page - 1)} className="inline-flex min-h-11 items-center gap-2 border border-[#9a9286] px-3 py-3 font-tech text-[11px] transition-colors hover:bg-[#1a1a1a] hover:text-white disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#1a1a1a]"><ArrowLeft size={15} aria-hidden="true" /> Previous</button>
            <p className="font-tech text-[10px] text-[#59554e]">Page {page} of {totalPages}</p>
            <button type="button" disabled={page === totalPages} onClick={() => changePage(page + 1)} className="inline-flex min-h-11 items-center gap-2 border border-[#9a9286] px-3 py-3 font-tech text-[11px] transition-colors hover:bg-[#1a1a1a] hover:text-white disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#1a1a1a]">Next <ArrowRight size={15} aria-hidden="true" /></button>
          </div>
        )}

      <FabricProductDialog product={selected} onClose={() => setSelected(null)} opener={opener} initialView={initialView} />
    </div>
  )
}
