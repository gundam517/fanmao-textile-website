import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Small technical cross marker used across the layout */
export function Cross({ className = '' }: { className?: string }) {
  return (
    <span className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <span className="absolute left-[-9px] top-0 h-px w-[18px] bg-[#8f8a80]" />
      <span className="absolute left-0 top-[-9px] h-[18px] w-px bg-[#8f8a80]" />
    </span>
  )
}

/** Section index + label, e.g. "02 — FABRIC COLLECTION" */
export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-tech text-sm font-bold text-[#f0531a]">{index}</span>
      <span className="h-px w-14 bg-[#1a1a1a]" />
      <span className="font-tech text-xs uppercase tracking-[0.3em] text-[#6b665e]">{label}</span>
    </div>
  )
}

/** Scroll-reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
