import { ArrowDown, ArrowUpRight } from 'lucide-react'
import FabricRibbons from '../components/FabricRibbons'

export default function Hero() {
  return (
    <section id="top" className="hero-scene relative isolate overflow-hidden bg-[#f4f1ec]">
      <FabricRibbons>
        <div className="hero-scene-veil pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
        <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pt-28 md:px-10 2xl:pt-36">
          <div className="flex flex-wrap justify-between gap-3 border-b border-[#b8b2a7]/50 pb-4 font-tech text-[10px] uppercase tracking-[0.18em] text-[#6b665e]">
            <span>Fanmao Textile / Material perspectives</span><span>Shengze, Suzhou · Est. 2005</span>
          </div>
          <div className="flex flex-1 items-center pb-24 pt-12 md:pb-20 lg:pb-10 lg:pt-10">
            <div className="min-w-0 lg:w-[52%]">
              <p className="mb-5 font-tech text-xs uppercase tracking-[0.18em] text-[#a63810]">Fabric supplier to global outdoor brands</p>
              <h1 className="font-display text-[clamp(2.4rem,8.5vw,5.5rem)] leading-[1.02] tracking-tight">PERFORMANCE<br /><span className="text-[#f0531a]">FABRICS.</span></h1>
              <p className="mt-7 max-w-md text-base leading-relaxed text-[#59554e] md:text-lg">Materials for the outdoors, movement, warmth and everyday comfort.</p>
              <div className="pointer-events-auto mt-8 flex w-fit flex-wrap gap-3">
                <a href="#categories" className="inline-flex items-center gap-5 bg-[#1a1a1a] px-5 py-4 font-tech text-xs uppercase tracking-wider text-white transition-colors hover:bg-[#f0531a]">Browse fabrics <ArrowDown size={16} /></a>
                <a href="#about" className="inline-flex items-center gap-5 border border-[#b8b2a7] px-5 py-4 font-tech text-xs uppercase tracking-wider transition-colors hover:bg-[#ece8e0]">Our story <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </FabricRibbons>
    </section>
  )
}
