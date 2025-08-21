import { ShieldCheck, Clock, Users, Inbox } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="size-6 text-blue-700" />,
      title: "Zuverlässig & Geprüft",
      desc: "Professionals, denen Sie vertrauen können – Hintergrundüberprüft und geschult.",
    },
    {
      icon: <Clock className="size-6 text-blue-700" />,
      title: "Flexible Terminplanung",
      desc: "Wir arbeiten nach Ihrem Zeitplan, nicht umgekehrt.",
    },
    {
      icon: <Users className="size-6 text-blue-700" />,
      title: "Kundenorientiert",
      desc: "Konstante Qualität, transparente Preise, keine Überraschungen.",
    },
    {
      icon: <Inbox className="size-6 text-blue-700" />,
      title: "Nahtlose Erfahrung",
      desc: "Ein Team für Reinigung, Umzug und Wartung.",
    },
  ]

  return (
    <section id="why" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 transition-all duration-700 will-change-transform"
          data-animate
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-oswald text-[#2B3A64]">Warum uns wählen?</h2>
          <p className="text-slate-600 mt-3 font-oswald">Wir konzentrieren uns auf das, was zählt: Konsistenz, Fürsorge und Kommunikation.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all will-change-transform"
              data-animate
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="size-11 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg font-oswald text-[#2B3A64]">{f.title}</h3>
              <p className="text-slate-600 mt-2 font-oswald">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
