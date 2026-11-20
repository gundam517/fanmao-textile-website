import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

const LINKS = [
  { href: '#collections', label: 'Collections' },
  { href: '#categories', label: 'Fabrics' },
  { href: '#about', label: 'About' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const dismissOutside = (event: PointerEvent | FocusEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onDesktop = () => { if (desktop.matches) setOpen(false) }
    const onNavigation = () => setOpen(false)
    document.addEventListener('pointerdown', dismissOutside)
    document.addEventListener('focusin', dismissOutside)
    document.addEventListener('keydown', onKey)
    window.addEventListener('hashchange', onNavigation)
    desktop.addEventListener('change', onDesktop)
    return () => {
      document.removeEventListener('pointerdown', dismissOutside)
      document.removeEventListener('focusin', dismissOutside)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('hashchange', onNavigation)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [open])

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-[#d8d3c8] bg-[#f4f1ec]/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <img src={logo} alt="Fanmao Textile logo" className="h-10 w-10 object-cover" />
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-wide">SUZHOU FANMAO</p>
            <p className="font-tech text-xs uppercase tracking-[0.2em] text-[#6b665e]">
              Textile Technology
            </p>
          </div>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-tech text-sm uppercase tracking-wider text-[#3a3a3a] transition-colors hover:text-[#f0531a]"
            >
              {l.label}
            </a>
          ))}

        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-[#d8d3c8] bg-[#f4f1ec] px-5 py-4 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-tech text-base uppercase tracking-wider text-[#3a3a3a]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
