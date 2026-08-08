import { motion } from 'framer-motion'
import FlowBackground from '../components/FlowBackground'
import { Cross } from '../components/Decor'
import logo from '../assets/logo.jpg'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <FlowBackground className="absolute inset-0 h-full w-full" />

      {/* corner metadata */}
      <div className="pointer-events-none absolute left-5 top-20 md:left-10 md:top-24">
        <p className="font-tech text-xs text-[#6b665e]">EST.</p>
        <p className="font-tech text-sm font-bold text-[#f0531a]">2005</p>
        <div className="mt-3 h-16 w-px bg-[#1a1a1a]" />
        <div className="mt-2 flex flex-col gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-[#6b665e]" />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute right-5 top-20 text-right md:right-10 md:top-24">
        <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-[#6b665e]">
          Global Perspective
        </p>
        <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-[#6b665e]">
          Engineered Future
        </p>
        <div className="ml-auto mt-3 h-16 w-px bg-[#1a1a1a]" />
        <div className="ml-auto mt-2 h-1.5 w-1.5 rounded-full bg-[#f0531a]" />
      </div>

      <Cross className="left-[8%] top-[38%] hidden md:block" />
      <Cross className="right-[12%] top-[30%] hidden md:block" />
      <Cross className="bottom-[18%] left-[16%] hidden md:block" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-28 pt-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-5"
        >
          <img
            src={logo}
            alt="Suzhou Fanmao Textile logo"
            className="h-20 w-20 object-cover md:h-24 md:w-24"
          />
          <div>
            <h2 className="text-xl font-bold leading-tight md:text-2xl">Suzhou Fanmao</h2>
            <p className="text-sm text-[#3a3a3a] md:text-base">Textile Technology Co., Ltd.</p>
            <span className="mt-1 block h-0.5 w-10 bg-[#f0531a]" />
          </div>
        </motion.div>

        <h1 className="mt-10 font-display leading-[0.92] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="block text-[16vw] text-[#1a1a1a] md:text-[9.5rem]"
          >
            PERFORMANCE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="block text-[16vw] text-[#f0531a] md:text-[9.5rem]"
          >
            FABRICS
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-16 bg-[#1a1a1a]" />
              <span className="flex gap-1.5">
                <i className="h-1.5 w-1.5 rounded-full bg-[#1a1a1a]" />
                <i className="h-1.5 w-1.5 rounded-full bg-[#1a1a1a]" />
                <i className="h-1.5 w-1.5 rounded-full bg-[#1a1a1a]" />
              </span>
            </div>
            <p className="max-w-md text-lg font-semibold uppercase tracking-wide md:text-xl">
              For Outdoor, Sports &amp; Thermal Apparel
            </p>
            <p className="mt-2 font-tech text-xs uppercase tracking-[0.2em] text-[#6b665e]">
              Since 2005 — Shengze, Suzhou, China
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#collections"
              className="bg-[#f0531a] px-6 py-3 font-tech text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#1a1a1a]"
            >
              Explore Fabrics
            </a>
            <a
              href="#contact"
              className="border border-[#1a1a1a] px-6 py-3 font-tech text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[#1a1a1a] hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* bottom marquee */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-[#d8d3c8] bg-[#f4f1ec]/70 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-10">
                {['Outdoor Protection', 'Sports Performance', 'Thermal Solutions', "Women's Fashion"].map(
                  (t) => (
                    <span
                      key={t}
                      className="flex items-center gap-10 font-tech text-xs uppercase tracking-[0.3em] text-[#3a3a3a]"
                    >
                      {t}
                      <span className="text-[#f0531a]">/</span>
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
