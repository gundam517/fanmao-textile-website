import { Reveal, SectionLabel, Cross } from '../components/Decor'

const PARTNERS = ['HLA', 'Asmara', 'Tom Tailor', 'MCS', 'Olsen']

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f4f1ec] py-16 md:py-24">
      <Cross className="right-[6%] top-20 hidden md:block" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionLabel index="03" label="Who We Are" />
          <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-14">
            <h2 className="font-display text-5xl leading-[1.02] md:text-7xl">FROM SHENGZE.<br /><span className="text-[#f0531a]">FOR THE WORLD.</span></h2>
            <p className="max-w-lg text-lg leading-relaxed text-[#59554e]">Functional fabrics developed in Suzhou, for outdoor, sports, thermal and everyday comfort applications.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-10 border-t border-[#d8d3c8] pt-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
              <p className="font-display text-[6rem] leading-none text-[#f0531a] md:text-[8rem]">2005</p>
              <p className="pb-2 font-tech text-[11px] uppercase leading-relaxed tracking-widest text-[#6b665e]">Established in<br />Shengze, Suzhou</p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[#d8d3c8] pt-6">
              <div><dt className="font-tech text-[10px] uppercase tracking-wider text-[#6b665e]">Application lines</dt><dd className="mt-2 font-display text-4xl">04</dd></div>
              <div><dt className="font-tech text-[10px] uppercase tracking-wider text-[#6b665e]">Fabric categories</dt><dd className="mt-2 font-display text-4xl">10</dd></div>
            </dl>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-[#3a3a3a]">
            <h3 className="text-xl font-semibold leading-snug">Suzhou Fanmao Textile<br />Technology Co., Ltd.</h3>
            <p>Founded in 2005, Fanmao develops and supplies high-performance fabrics for global apparel brands. Our collections span protective outdoor fabrics, materials for movement, down-proof shells and breathable linen-cotton textiles.</p>
            <p>Based in Shengze, Suzhou, we bring together fabric development, manufacturing and textile production relationships, including collaboration with Shenghong Group for dyeing.</p>
            <p>Our brand relationships include HLA, Asmara, Tom Tailor, MCS and Olsen.</p>
            <a href="#certifications" className="inline-flex min-h-11 items-center gap-4 border-b border-[#a63810] font-tech text-[11px] uppercase tracking-wider text-[#a63810]">Explore certifications <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="mt-12 border-y border-[#d8d3c8] py-6 md:mt-16">
          <p className="font-tech text-[10px] uppercase tracking-widest text-[#6b665e]">Selected brand relationships</p>
          <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-5 md:justify-between">
            {PARTNERS.map(partner => <li key={partner} className="text-xl font-semibold tracking-tight text-[#3a3a3a] md:text-2xl">{partner}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
