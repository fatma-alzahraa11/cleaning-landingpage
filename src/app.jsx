"use client"

import { useEffect, useRef, useCallback } from "react"
import Header from "./components/header.jsx"
import Hero from "./components/hero.jsx"
import Reviews from "./components/reviews.jsx"
import About from "./components/about.jsx"
import Services from "./components/services.jsx"
import WhyChooseUs from "./components/why-choose-us.jsx"
import ContactForm from "./components/contact-form.jsx"
import Footer from "./components/footer.jsx"

export default function App() {
  const contactRef = useRef(null)

  const scrollToContact = useCallback(() => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  // Reveal-on-scroll animation - محسن
  useEffect(() => {
    const els = document.querySelectorAll("[data-animate]")
    
    // إضافة classes مسبقاً
    els.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6")
    })
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6")
            entry.target.classList.add("opacity-100", "translate-y-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '50px' }
    )
    
    els.forEach((el) => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header onCTA={scrollToContact} />
      <main>
        <Hero onCTA={scrollToContact} />
        <Reviews />
        <About />
        <Services />
        <WhyChooseUs />
        <ContactForm refObj={contactRef} />
      </main>
      <Footer onCTA={scrollToContact} />
    </div>
  )
}
