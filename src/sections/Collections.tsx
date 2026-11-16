import { Mountain, Zap, Thermometer, Leaf } from 'lucide-react'
import { Reveal, SectionLabel, Cross } from '../components/Decor'
import GarmentGallery from '../components/GarmentGallery'
import { GARMENT_APPLICATIONS } from '../data/garments'

const COLLECTIONS = [
  {
    no: '01',
    icon: Mountain,
    title: 'Outdoor Protection',
    subtitle: 'Outdoor Apparel Fabrics',
    desc: 'Engineered for mountaineering, hiking, skiing and fishing — with protective functionality at the core.',
    items: [
      ['Nylon / Cotton + TPU', 'Nylon-cotton fabrics laminated with TPU for technical outerwear, including fleece-lined constructions.'],
      ['Nylon Oxford Fabric', 'High tenacity & abrasion resistance for softshell jackets, backpacks and tents.'],
      ['Waterproof & Breathable', 'PU / TPU lamination or coating balancing waterproofness and breathability — for hardshell and ski wear.'],
      ['Windproof Laminated', '2-layer / 3-layer bonded constructions for warmth and wind protection.'],
      ['Nylon Taslan', 'Soft hand feel, abrasion- and tear-resistant — windproof jackets and hardshells.'],
      ['Polyester Taslan', 'Crisp and cost-effective — everyday outdoor jackets and workwear.'],
    ],
  },
  {
    no: '02',
    icon: Zap,
    title: 'Sports Performance',
    subtitle: 'Stretch & Activewear Fabrics',
    desc: 'Built for fitness, running, yoga and ball sports — quick-dry performance and comfort first.',
    items: [
      ['4-Way / Mechanical Stretch', 'Polyester & nylon stretch fabrics for full freedom of movement — softshell and hiking pants.'],
      ['Moisture-Wicking Single Jersey', 'The classic sports T-shirt fabric — polyester, nylon and recycled versions.'],
      ['Mesh Fabric', 'Extreme breathability for panels and tank-top linings.'],
      ['Poly Spandex Interlock', '4-way stretch with a fine hand — yoga and compression wear.'],
      ['Nylon Spandex Knit', 'Skin-friendly and soft — premium sports underwear and yoga pants.'],
      ['Cool Touch & Quick-Dry', 'Cooling finish on wicking bases — instant cool sensation on skin contact.'],
      ['Cotton-like Sport Fabric', 'Cotton look and feel with wicking performance — urban athleisure.'],
    ],
  },
  {
    no: '03',
    icon: Thermometer,
    title: 'Thermal Solutions',
    subtitle: 'Jacket, Padded & Down-Proof Fabrics',
    desc: 'Down-proof performance, high density, smooth hand feel and reliable insulation.',
    items: [
      ['Nylon Taffeta', 'Fine denier, high density — the classic down-jacket shell with a smooth touch.'],
      ['Polyester Taffeta', 'Crisp, down-proof and cost-efficient — shell or lining for padded and down garments.'],
      ['Polyester Pongee', 'Softer than standard taffeta, semi-dull & full-dull options — mid-to-high-end down jackets.'],
      ['Memory Fabric', 'Shape-memory hand feel, down-proof and wrinkle-resistant — fashion outerwear.'],
      ['Microfiber Nylon', 'Ultra-high density, exceptionally light and soft — lightweight down jackets.'],
      ['TC / NC Blending', 'Synthetic strength with a cotton touch — casual jackets and padded coats.'],
      ['Metallic / Luster Down-Proof', 'Pearlescent and metallic finishes for fashion-forward down garments.'],
    ],
  },
  {
    no: '04',
    icon: Leaf,
    title: 'Breathable Comfort',
    subtitle: 'Linen / Cotton Trouser Fabrics',
    desc: 'Breathable linen-cotton fabrics for everyday trousers and shorts, combining natural texture with relaxed comfort.',
    items: [
      ['Linen / Cotton Blends', 'Linen-cotton fabrics for casual trousers and warm-weather shorts.'],
      ['Plain & Textured Weaves', 'Woven textures featured in the navy and brown trouser applications.'],
      ['Striped Weaves', 'Striped linen-cotton fabric featured in the khaki shorts application.'],
    ],
  },
]

const PRESENTATIONS = [
  { headline: 'Ready for the elements.', applications: ['Shell jackets', 'Hiking trousers', 'Outdoor equipment'], direction: 'Protection / Structure / Durability' },
  { headline: 'Made for movement.', applications: ['Training trousers', 'Running tops', 'Yoga & athleisure'], direction: 'Stretch / Airflow / Comfort' },
  { headline: 'Light layers. Lasting comfort.', applications: ['Down jackets', 'Padded coats', 'Shells & linings'], direction: 'Lightness / Density / Softness' },
  { headline: 'Natural texture. Everyday ease.', applications: ['Casual trousers', 'Summer shorts', 'Cargo trousers'], direction: 'Breathability / Texture / Comfort' },
]

export default function Collections() {
  return (
    <section id="collections" className="relative bg-[#ece8e0] py-16 md:py-24">
      <Cross className="right-[6%] top-16 hidden md:block" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionLabel index="01" label="Fabric Collections" />
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-12">
            <h2 className="font-display text-5xl leading-[1.02] md:text-7xl">FOUR LINES.<br /><span className="text-[#f0531a]">ONE STANDARD.</span></h2>
            <p className="max-w-md text-sm leading-relaxed text-[#59554e]">From outdoor shells to breathable linen-cotton trousers. Explore the applications, material directions and fabric types behind each collection.</p>
          </div>
        </Reveal>
        <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
          {COLLECTIONS.map((c, i) => {
            const presentation = PRESENTATIONS[i]
            const garmentCollection = (['outdoor', 'sports', 'thermal', 'comfort'] as const)[i]
            const garments = GARMENT_APPLICATIONS.filter(item => item.collection === garmentCollection)
            return (
              <article key={c.no} id={`collection-${i + 1}`} className="grid items-center gap-8 border-t border-[#c9c3b8] pt-6 lg:grid-cols-2 lg:gap-14">
                <div className={`min-w-0 ${i % 2 ? 'lg:order-2' : ''}`}>
                  <GarmentGallery garments={garments} />
                </div>
                <div className={`min-w-0 ${i % 2 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 text-[#a63810]"><c.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" /><p className="font-tech text-[10px] uppercase tracking-[0.18em]">{c.no} / {c.subtitle}</p></div>
                  <h3 className="mt-4 font-display text-4xl uppercase leading-tight md:text-5xl">{c.title}</h3>
                  <p className="mt-4 text-lg font-medium text-[#3a3a3a]">{presentation.headline}</p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#59554e]">{c.desc}</p>
                  <div className="mt-7 border-t border-[#c9c3b8] pt-5">
                    <p className="font-tech text-[10px] uppercase tracking-widest text-[#6b665e]">Typical applications</p>
                    <ul className="mt-3 flex flex-wrap gap-2">{presentation.applications.map(application => <li key={application} className="bg-[#e1dbd0] px-3 py-2 text-xs text-[#3a3a3a]">{application}</li>)}</ul>
                    <p className="mt-4 text-xs text-[#6b665e]">{presentation.direction}</p>
                  </div>
                  <details className="collection-details mt-6 border-y border-[#c9c3b8]">
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-tech text-[11px] uppercase tracking-wider"><span>Explore fabric types ({c.items.length})</span><span className="collection-details-icon text-xl text-[#a63810]" aria-hidden="true">+</span></summary>
                    <ul className="divide-y divide-[#d8d3c8] pb-3">{c.items.map(([name, detail]) => <li key={name} className="py-3"><h4 className="text-sm font-semibold">{name}</h4><p className="mt-1 text-[13px] leading-relaxed text-[#59554e]">{detail}</p></li>)}</ul>
                  </details>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
