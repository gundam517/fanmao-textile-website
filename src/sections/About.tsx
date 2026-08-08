import { Reveal, SectionLabel, Cross } from '../components/Decor'
import FlowBackground from '../components/FlowBackground'

const STATS = [
  { value: '2005', label: 'Established' },
  { value: '20+', label: 'Years of Expertise' },
  { value: '3', label: 'Global Brand Partners' },
  { value: '10', label: 'Fabric Categories' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <FlowBackground className="absolute inset-0 h-full w-full opacity-40" />
      <Cross className="left-[10%] top-20 hidden md:block" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionLabel index="03" label="Who We Are" />
            <h2 className="font-display text-5xl leading-[0.95] text-[#1a1a1a] md:text-7xl">
              ENGINEERED
              <br />
              FOR EXTREME
              <br />
              <span className="text-[#f0531a]">CONDITIONS</span>
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-px bg-[#d8d3c8]">
              {STATS.map((s) => (
                <div key={s.label} className="bg-[#f4f1ec] p-6">
                  <p className="font-display text-4xl text-[#f0531a]">{s.value}</p>
                  <p className="mt-1 font-tech text-[11px] uppercase tracking-[0.2em] text-[#6b665e]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col justify-center">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3a3a3a]">
              <p>
                Founded in <strong className="text-[#1a1a1a]">2005</strong>, Suzhou Fanmao Textile
                Technology Co., Ltd. has built an outstanding reputation as a specialized developer
                and manufacturer of high-performance textile solutions.
              </p>
              <p>
                With nearly two decades of industry experience, we maintain long-term partnerships
                with renowned European and American brands — including{' '}
                <strong className="text-[#1a1a1a]">Tom Tailor, MCS and Olsen</strong> —
                consistently delivering materials that meet the exacting standards of the
                mid-to-high-end apparel industry.
              </p>
              <p>
                Guided by technical excellence, environmental responsibility and unwavering
                customer commitment, our mission is to provide global partners with innovative,
                compliant and commercially viable textile solutions.
              </p>
            </div>
            <div className="mt-8 border-l-2 border-[#f0531a] pl-5">
              <p className="font-tech text-xs uppercase tracking-[0.2em] text-[#6b665e]">
                Sustainable by choice.
              </p>
              <p className="font-tech text-xs uppercase tracking-[0.2em] text-[#6b665e]">
                Built for performance.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
