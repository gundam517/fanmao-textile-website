import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Collections from '../sections/Collections'
import Categories from '../sections/Categories'
import About from '../sections/About'
import Certifications from '../sections/Certifications'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ec]">
      <Navbar />
      <Hero />
      <Collections />
      <Categories />
      <About />
      <Certifications />
      <Contact />
    </main>
  )
}
