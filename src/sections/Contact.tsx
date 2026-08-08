import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { Reveal } from '../components/Decor'
import logo from '../assets/logo.jpg'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#1a1a1a] py-24 text-[#f4f1ec] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <span className="font-tech text-sm font-bold text-[#f0531a]">05</span>
            <span className="h-px w-14 bg-[#f4f1ec]" />
            <span className="font-tech text-xs uppercase tracking-[0.3em] text-[#9a958c]">Contact</span>
          </div>
          <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
            LET'S TALK
            <br />
            <span className="text-[#f0531a]">FABRIC.</span>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#9a958c]">
            Swatches, spec sheets, custom developments or bulk orders — our team responds within
            one business day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal delay={0}>
            <a
              href="https://wa.me/8618901523666"
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col border border-[#3a3a3a] p-8 transition-colors hover:border-[#f0531a]"
            >
              <MessageCircle className="h-7 w-7 text-[#f0531a]" strokeWidth={1.5} />
              <p className="mt-6 font-tech text-[11px] uppercase tracking-[0.2em] text-[#9a958c]">
                WhatsApp
              </p>
              <p className="mt-2 text-xl font-bold group-hover:text-[#f0531a]">+86 189 0152 3666</p>
              <p className="mt-1 text-xs text-[#6b665e]">Fastest response — chat directly</p>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="mailto:gundam@mekinge.com"
              className="group flex h-full flex-col border border-[#3a3a3a] p-8 transition-colors hover:border-[#f0531a]"
            >
              <Mail className="h-7 w-7 text-[#f0531a]" strokeWidth={1.5} />
              <p className="mt-6 font-tech text-[11px] uppercase tracking-[0.2em] text-[#9a958c]">Email</p>
              <p className="mt-2 text-xl font-bold group-hover:text-[#f0531a]">gundam@mekinge.com</p>
              <p className="mt-1 text-xs text-[#6b665e]">For inquiries & documentation</p>
            </a>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col border border-[#3a3a3a] p-8">
              <MapPin className="h-7 w-7 text-[#f0531a]" strokeWidth={1.5} />
              <p className="mt-6 font-tech text-[11px] uppercase tracking-[0.2em] text-[#9a958c]">
                Headquarters
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                4F, Building 12, Shenghong Science &amp; Technology Park, Shengze Town, Wujiang
                District, Suzhou, Jiangsu, China
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-7xl border-t border-[#3a3a3a] px-5 pt-10 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Fanmao Textile logo" className="h-9 w-9 object-cover" />
            <div className="leading-tight">
              <p className="text-sm font-bold">SUZHOU FANMAO TEXTILE TECHNOLOGY CO., LTD.</p>
              <p className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#6b665e]">
                Performance fabrics since 2005
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-tech text-[10px] uppercase tracking-[0.2em] text-[#6b665e]">
              <Phone className="h-3.5 w-3.5" /> +86 189 0152 3666
            </span>
            <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#6b665e]">
              GRS · OEKO-TEX®
            </span>
          </div>
        </div>
        <p className="mt-8 pb-8 text-center font-tech text-[10px] uppercase tracking-[0.25em] text-[#4a4a4a]">
          © {new Date().getFullYear()} Suzhou Fanmao Textile Technology Co., Ltd. — All rights reserved
        </p>
      </footer>
    </section>
  )
}
