import { Mountain, Zap, Thermometer, Sparkles } from 'lucide-react'
import { Reveal, SectionLabel, Cross } from '../components/Decor'

const COLLECTIONS = [
  {
    no: '01',
    icon: Mountain,
    title: 'Outdoor Protection',
    subtitle: 'Outdoor Apparel Fabrics',
    desc: 'Engineered for mountaineering, hiking, skiing and fishing — with protective functionality at the core.',
    items: [
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
    subtitle: 'Moisture-Wicking Fabrics',
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
    icon: Sparkles,
    title: "Women's Fashion",
    subtitle: 'Tencel™ & Linen Fabrics',
    desc: 'Premium Tencel™ (lyocell) and linen — prized for breathability, natural softness and refined aesthetics.',
    items: [
      ['Tencel™ Lyocell', 'Silky drape, natural softness and excellent moisture management.'],
      ['Linen & Linen Blends', 'Airy, breathable and textured — elevated warm-weather apparel.'],
    ],
  },
]

export default function Collections() {
  return (
    <section id="collections" className="relative bg-[#ece8e0] py-24 md:py-32">
      <Cross className="right-[6%] top-16 hidden md:block" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionLabel index="01" label="Fabric Collections" />
          <h2 className="font-display text-5xl leading-[0.95] text-[#1a1a1a] md:text-7xl">
            FOUR LINES.
            <br />
            <span className="text-[#f0531a]">ONE STANDARD.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[#3a3a3a]">
            From hardshell shells to down-proof taffeta — every fabric is developed and manufactured
            to meet the demanding standards of mid-to-high-end apparel.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col border border-[#d8d3c8] bg-[#f4f1ec] p-7 transition-all duration-300 hover:border-[#1a1a1a] hover:shadow-[8px_8px_0_0_#f0531a] md:p-9">
                <div className="flex items-start justify-between">
                  <c.icon className="h-8 w-8 text-[#f0531a]" strokeWidth={1.5} />
                  <span className="font-display text-5xl text-[#d8d3c8] transition-colors group-hover:text-[#f0531a]">
                    {c.no}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl uppercase tracking-tight md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-1 font-tech text-[11px] uppercase tracking-[0.2em] text-[#6b665e]">
                  {c.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#3a3a3a]">{c.desc}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-[#d8d3c8] pt-5">
                  {c.items.map(([name, detail]) => (
                    <li key={name} className="text-sm">
                      <span className="font-semibold text-[#1a1a1a]">
                        <span className="mr-2 text-[#f0531a]">▪</span>
                        {name}
                      </span>
                      <span className="mt-0.5 block pl-5 text-[13px] leading-relaxed text-[#6b665e]">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
