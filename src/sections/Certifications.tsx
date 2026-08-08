import { Recycle, ShieldCheck } from 'lucide-react'
import { Reveal, SectionLabel } from '../components/Decor'

const CERTS = [
  {
    icon: Recycle,
    name: 'GRS',
    full: 'Global Recycled Standard',
    desc: 'Our quality assurance and sustainability are certified to the Global Recycled Standard (GRS) — underscoring our commitment to sustainable manufacturing and the integration of recycled materials across our supply chain.',
  },
  {
    icon: ShieldCheck,
    name: 'OEKO-TEX®',
    full: 'Standard 100',
    desc: 'All affiliated dyeing facilities are fully compliant with OEKO-TEX® Standard 100 — every fabric we produce is rigorously tested and verified free from harmful substances.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[#ece8e0] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionLabel index="04" label="Certifications & Compliance" />
          <h2 className="font-display text-5xl leading-[0.95] text-[#1a1a1a] md:text-7xl">
            RESPONSIBLE
            <br />
            <span className="text-[#f0531a]">BY CHOICE.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <div className="flex h-full flex-col border border-[#d8d3c8] bg-[#f4f1ec] p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#f0531a]">
                    <c.icon className="h-7 w-7 text-[#f0531a]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl uppercase tracking-tight">{c.name}</h3>
                    <p className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#6b665e]">
                      {c.full}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-[#3a3a3a]">{c.desc}</p>
                <span className="mt-auto pt-6 font-tech text-[11px] uppercase tracking-[0.2em] text-[#f0531a]">
                  ▪ Verified & audited
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
