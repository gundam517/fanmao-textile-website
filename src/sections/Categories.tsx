import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Decor'

const CATEGORIES = [
  { no: '01', en: 'Nylon-Cotton Interwoven', desc: 'NC woven fabrics — nylon strength with a natural cotton hand.' },
  { no: '02', en: '4-Way Stretch', desc: 'Polyester / nylon spandex stretch for unrestricted movement.' },
  { no: '03', en: 'Taslan', desc: 'Nylon & polyester taslan — soft, crisp, abrasion- and tear-resistant.' },
  { no: '04', en: 'Coated & Laminated', desc: 'PU / TPU coating and 2–3 layer lamination for weather protection.' },
  { no: '05', en: 'Nylon', desc: 'Taffeta, oxford, taslan and microfiber nylon bases.' },
  { no: '06', en: 'Polyester', desc: 'Taffeta, pongee, jersey and mechanical-stretch polyester.' },
  { no: '07', en: 'Printed', desc: 'Custom prints on performance bases for fashion-led designs.' },
  { no: '08', en: 'Reflective Print', desc: 'Reflective printed fabrics for visibility and safety wear.' },
  { no: '09', en: 'Cotton-like', desc: 'Cotton look and touch with quick-dry synthetic performance.' },
  { no: '10', en: 'Linen', desc: 'Natural linen and linen blends — breathable premium fashion.' },
]

export default function Categories() {
  return (
    <section id="categories" className="relative bg-[#1a1a1a] py-24 text-[#f4f1ec] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <span className="font-tech text-sm font-bold text-[#f0531a]">02</span>
            <span className="h-px w-14 bg-[#f4f1ec]" />
            <span className="font-tech text-xs uppercase tracking-[0.3em] text-[#9a958c]">
              Fabric Categories
            </span>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
              BROWSE BY
              <br />
              <span className="text-[#f0531a]">MATERIAL</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#9a958c]">
              Ten core categories covering woven, knitted, coated and printed constructions.
              Every category is available in GRS-certified recycled versions on request.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px bg-[#3a3a3a] sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.no} delay={(i % 5) * 0.05} className="h-full">
              <a
                href="#contact"
                className="group flex h-full flex-col justify-between bg-[#1a1a1a] p-6 transition-colors duration-300 hover:bg-[#f0531a]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-tech text-xs text-[#6b665e] group-hover:text-[#ffd9c7]">
                    {c.no}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#6b665e] transition-all group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
                <div className="mt-10">
                  <h3 className="text-lg font-bold leading-snug group-hover:text-white">{c.en}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#9a958c] group-hover:text-[#ffe4d6]">
                    {c.desc}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 font-tech text-xs uppercase tracking-[0.2em] text-[#6b665e]">
            ▪ Need a spec sheet or swatches? <a href="#contact" className="text-[#f0531a] underline underline-offset-4">Send us an inquiry</a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
