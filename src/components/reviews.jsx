"use client"

import { useMemo, useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const reviews = useMemo(
    () => [
      {
        name: "Klaus Müller",
        rating: 5,
        comment: "Ausgezeichneter Service! Das Team war sehr professionell und gründlich. Unsere Wohnung sieht jetzt wie neu aus. Sehr empfehlenswert!",
        service: "Reinigung"
      },
      {
        name: "Anna Schmidt",
        rating: 5,
        comment: "Fantastische Arbeit beim Umzug unserer Möbel. Alles wurde mit größter Sorgfalt behandelt. Schnell, zuverlässig und preiswert!",
        service: "Möbeltransport"
      },
      {
        name: "Hans Weber",
        rating: 5,
        comment: "Hervorragende Wartungsarbeiten in unserem Haus. Der Techniker war kompetent und hat alle Probleme professionell gelöst.",
        service: "Wartung"
      },
      {
        name: "Maria Fischer",
        rating: 5,
        comment: "Der beste Reinigungsservice, den wir je hatten! Ökologisch, gründlich und das Team ist sehr freundlich. Wir sind begeistert!",
        service: "Reinigung"
      },
      {
        name: "Peter Wagner",
        rating: 5,
        comment: "Schneller und zuverlässiger Service. Unsere Möbel wurden sicher transportiert und alles lief reibungslos ab.",
        service: "Möbeltransport"
      },
      {
        name: "Lisa Hoffmann",
        rating: 5,
        comment: "Professionelle Wartungsarbeiten zu einem fairen Preis. Der Service war pünktlich und die Qualität der Arbeit ist erstklassig.",
        service: "Wartung"
      }
    ],
    []
  )

  // التمرير التلقائي كل 5 ثواني في الأحجام الصغيرة
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [reviews.length])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`size-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-all duration-700 will-change-transform"
          data-animate
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-oswald text-[#2B3A64]">Kundenbewertungen</h2>
          <p className="text-slate-600 mt-3 font-oswald">
            Was unsere zufriedenen Kunden über unsere Dienstleistungen sagen
          </p>
        </div>
        
        {/* عرض التقيمات - شبكة عادية للشاشات المتوسطة+ */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={review.name}
              className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6"
              data-animate
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Quote className="size-5 text-blue-600" />
                <span className="text-sm text-blue-600 font-medium font-oswald">{review.service}</span>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-slate-700 mb-4 font-oswald leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#2B3A64] font-oswald">{review.name}</span>
                <div className="text-sm text-slate-500 font-oswald">
                  {review.rating}/5 Sterne
                </div>
              </div>
              
              <div className="pointer-events-none absolute -z-10 inset-0 rounded-2xl ring-1 ring-blue-200/0 group-hover:ring-blue-200/80 transition"></div>
            </div>
          ))}
        </div>

        {/* عرض التقيمات - تمرير تلقائي للشاشات الصغيرة */}
        <div className="md:hidden relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review, idx) => (
              <div
                key={review.name}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Quote className="size-5 text-blue-600" />
                    <span className="text-sm text-blue-600 font-medium font-oswald">{review.service}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-slate-700 mb-4 font-oswald leading-relaxed">
                    "{review.comment}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#2B3A64] font-oswald">{review.name}</span>
                    <div className="text-sm text-slate-500 font-oswald">
                      {review.rating}/5 Sterne
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* مؤشرات التنقل */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div
          className="text-center mt-12 transition-all duration-700 will-change-transform"
          data-animate
        >
          <div className="inline-flex items-center gap-2 text-blue-700 font-medium font-oswald">
            <span>Alle Bewertungen anzeigen</span>
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
