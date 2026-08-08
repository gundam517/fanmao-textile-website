import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-[#d8d3c8] bg-[#f4f1ec]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Fanmao Textile logo" className="h-10 w-10 object-cover" />
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-wide">SUZHOU FANMAO</p>
            <p className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#6b665e]">
              Textile Technology
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-tech text-xs uppercase tracking-[0.18em] text-[#3a3a3a] transition-colors hover:text-[#f0531a]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1a1a1a] px-5 py-2.5 font-tech text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#f0531a]"
          >
            Get a Quote
          </a>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#d8d3c8] bg-[#f4f1ec] px-5 py-4 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-tech text-sm uppercase tracking-[0.18em] text-[#3a3a3a]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
