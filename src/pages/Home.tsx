import { lazy, Suspense, useEffect } from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Collections from '../sections/Collections'
import About from '../sections/About'
import Certifications from '../sections/Certifications'
import Contact from '../sections/Contact'

const Categories = lazy(() => import('../sections/Categories'))

export default function Home() {
  useEffect(() => {
    const initialHash = window.location.hash
    if (!initialHash) return
    let active = true
    let interacted = false
    let frame = 0
    const markInteraction = () => { interacted = true }
    const align = () => {
      if (!active || interacted || window.location.hash !== initialHash) return
      let id: string
      try { id = decodeURIComponent(initialHash.slice(1)) } catch { return }
      if (id === 'catalog') id = 'categories'
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
    // React mounts after the browser's initial fragment lookup. Repeat after
    // fonts settle, unless the visitor has already interacted with the page.
    frame = requestAnimationFrame(align)
    void document.fonts.ready.then(align)
    window.addEventListener('fabric-categories-ready', align)
    window.addEventListener('wheel', markInteraction, { passive: true })
    window.addEventListener('pointerdown', markInteraction, { passive: true })
    window.addEventListener('keydown', markInteraction)
    return () => {
      active = false
      cancelAnimationFrame(frame)
      window.removeEventListener('fabric-categories-ready', align)
      window.removeEventListener('wheel', markInteraction)
      window.removeEventListener('pointerdown', markInteraction)
      window.removeEventListener('keydown', markInteraction)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#f4f1ec]">
      <Navbar />
      <Hero />
      <Collections />
      <Suspense fallback={<section id="categories" aria-label="Fabrics and finishes" aria-busy="true" className="relative min-h-[600px] bg-[#1a1a1a] px-5 py-16 text-sm text-[#bfb9ad]"><span id="catalog" className="absolute top-0" />Loading fabric categories…</section>}>
        <Categories />
      </Suspense>
      <About />
      <Certifications />
      <Contact />
    </main>
  )
}
