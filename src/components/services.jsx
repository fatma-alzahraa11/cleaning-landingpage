"use client";

import { useMemo, useCallback } from "react";
import {
  BrushIcon as Broom,
  Truck,
  Wrench,
  CheckCircle2,
  ArrowDownRight,
} from "lucide-react";

export default function Services() {
  const services = useMemo(
    () => [
      {
        icon: <Broom className="size-6 text-blue-700" />,
        title: "Professionelle Reinigungsdienste",
        desc: "Umfassende und zuverlässige Reinigungslösungen für Büros, Wohnungen oder Unternehmen. Wir schaffen eine saubere, gesunde und komfortable Umgebung. Mit modernster Ausrüstung und Produkten übertreffen wir Ihre Erwartungen.",
        img: "/images/service-cleaning.png",
        bullets: ["Deep & standard", "Eco‑friendly", "Kitchens & baths"],
        imagePosition: "right",
      },
      {
        icon: <Truck className="size-6 text-blue-700" />,
        title: "Schnelle und sichere Umzugsdienste",
        desc: "Wir bieten Ihnen einen einfachen und stressfreien Umzug. Wir sind spezialisiert auf den Transport von Möbeln und Habseligkeiten innerhalb einer Stadt oder zwischen deutschen Städten. Sichere und pünktliche Ankunft mit größter Sorgfalt und Präzision.",
        img: "/images/service-moving.png",
        bullets: ["In‑home moves", "Load & unload", "Protective padding"],
        imagePosition: "left",
      },
      {
        icon: <Wrench className="size-6 text-blue-700" />,
        title: "Bau- und Sanierungsdienste (Baustelle)",
        desc: "Integrierte Dienstleistungen im Bau- und Sanierungsbereich. Unser Team aus erfahrenen Fachleuten verfügt über umfassende Expertise in allen Renovierungs- und Wartungsarbeiten. Von strukturellen Reparaturen bis hin zu internen Verbesserungen sind wir auf hohe Qualitätsstandards und Präzision verpflichtet für dauerhafte Ergebnisse.",
        img: "/images/service-maintenance.png",
        bullets: ["Repairs & fixes", "Assembly", "Preventative checks"],
        imagePosition: "right",
      },
    ],
    []
  );

  const handleScrollToContact = useCallback((event) => {
    event.preventDefault();
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-all duration-700 will-change-transform"
          data-animate
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-oswald">
            Unsere Dienstleistungen
          </h2>
          <p className="text-slate-600 mt-3 font-oswald">
            Drei Wege, um Ihr Leben einfacher zu machen – wählen Sie einen oder
            bündeln Sie für die reibungsloseste Erfahrung.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className={`group relative transition-all duration-700 will-change-transform ${
                idx === 0 || idx === 2
                  ? "bg-gradient-to-br from-blue-50 to-blue-100/80 rounded-3xl pt-6 px-10 lg:pt-6 px-10 shadow-lg -mx-4 sm:-mx-6 lg:-mx-8"
                  : ""
              }`}
              data-animate
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  s.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* النص */}
                <div
                  className={`space-y-6 ${
                    s.imagePosition === "left" ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {s.icon}
                    <h3 className="text-2xl sm:text-3xl font-bold font-oswald text-[#2B3A64]">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-lg text-slate-700 font-oswald leading-relaxed">
                    {s.desc}
                  </p>

                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-slate-700 font-oswald"
                      >
                        <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0" />
                        <span className="text-base">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <a
                      href="#contact"
                      onClick={handleScrollToContact}
                      className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold font-oswald text-lg px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      Angebot Anfordern
                    </a>
                  </div>
                </div>

                {/* الصورة */}
                <div
                  className={`relative overflow-hidden rounded-2xl  ${
                    s.imagePosition === "left" ? "lg:col-start-1" : ""
                  }`}
                >
                  <img
                    src={s.img || "/placeholder.svg"}
                    alt={`${s.title} service`}
                    className={`w-full h-100 sm:h-[50rem] lg:h-[32rem] transition-transform duration-700 group-hover:scale-105 ${
                      s.title === "Professionelle Reinigungsdienste"
                        ? "object-contain"
                        : "object-cover"
                    }`}
                    style={{
                      objectPosition:
                        s.title === "Professionelle Reinigungsdienste"
                          ? "center"
                          : "center",
                    }}
                  />
                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
