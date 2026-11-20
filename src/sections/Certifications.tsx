import { Recycle, ShieldCheck } from 'lucide-react'
import { Reveal, SectionLabel } from '../components/Decor'

const CERTS = [
  {
    icon: Recycle,
    name: 'GRS',
    full: 'Global Recycled Standard',
    scope: 'Fanmao / Company certification',
    desc: 'Fanmao holds GRS certification as part of our work with recycled textile materials.',
    note: 'Recycled materials',
  },
  {
    icon: ShieldCheck,
    name: 'OEKO-TEX®',
    full: 'STANDARD 100',
    scope: 'Shenghong / Dyeing partner',
    desc: 'We collaborate with Shenghong Group for dyeing. The partner dyeing facility complies with OEKO-TEX® STANDARD 100.',
    note: 'Dyeing partner compliance',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[#ece8e0] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionLabel index="04" label="Certifications & Partners" />
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-14">
            <h2 className="font-display text-5xl leading-[1.02] md:text-7xl">RESPONSIBLE<br /><span className="text-[#f0531a]">BY CHOICE.</span></h2>
            <p className="max-w-md text-base leading-relaxed text-[#59554e]">Company certification and dyeing partner compliance support our approach to textile development.</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
          {CERTS.map(c => (
            <article key={c.name} className="flex h-full min-w-0 flex-col border-t-2 border-[#f0531a] bg-[#f4f1ec] p-6 md:p-9">
              <p className="font-tech text-[13px] uppercase tracking-wider text-[#a63810]">{c.scope}</p>
              <div className="mt-6 flex items-center gap-4">
                <c.icon className="h-8 w-8 shrink-0 text-[#a63810]" strokeWidth={1.5} aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-display text-3xl">{c.name}</h3>
                  <p className="mt-1 font-tech text-[13px] uppercase tracking-wider text-[#6b665e]">{c.full}</p>
                </div>
              </div>
              <p className="mb-7 mt-6 text-base leading-relaxed text-[#3a3a3a]">{c.desc}</p>
              <p className="mt-auto border-t border-[#d8d3c8] pt-4 font-tech text-[13px] uppercase tracking-wider text-[#6b665e]">{c.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
