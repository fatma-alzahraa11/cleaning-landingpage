import { ShieldCheck, Clock, Users, Star, Award, Heart } from "lucide-react";
import { useEffect } from "react";

function Badge({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 shadow-sm hover:bg-blue-100 transition-colors duration-300">
      <span className="text-blue-600">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
}

function StatCard({ number, label, icon, id }) {
  return (
    <div className="text-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex justify-center mb-2">
        <div className="p-2 rounded-full bg-blue-100 text-blue-600">{icon}</div>
      </div>
      <div
        className="text-3xl font-bold text-blue-600 mb-1 font-oswald"
        id={id}
      >
        {number} {/* Hier wird die Zahl mit + direkt angezeigt */}
      </div>
      <div className="text-xs sm:text-sm text-slate-600 font-oswald break-words leading-tight">{label}</div>
    </div>
  );
}

export default function About() {
  // Funktion zur Ausführung des Zählers
  useEffect(() => {
    const startCounters = () => {
      // Zähler für zufriedene Kunden
      const happyCustomersCounter = document.getElementById(
        "about-happy-customers-counter"
      );
      const happyCustomersTarget = 1200;
      let happyCustomersCount = 0;

      // Zähler für Jahre an Erfahrung
      const experienceCounter = document.getElementById(
        "about-experience-counter"
      );
      const experienceTarget = 5;
      let experienceCount = 0;

      // Zähler für Zufriedenheitsrate
      const satisfactionCounter = document.getElementById(
        "about-satisfaction-counter"
      );
      const satisfactionTarget = 99; // Zufriedenheitsrate
      let satisfactionCount = 0;

      // Geschwindigkeit des Zählers (in Millisekunden)
      const speed = 3000;

      // Aktualisierung des Kunden-Zählers
      const updateHappyCustomersCounter = () => {
        const increment = Math.ceil(happyCustomersTarget / (speed / 20));
        happyCustomersCount = Math.min(
          happyCustomersCount + increment,
          happyCustomersTarget
        );
        happyCustomersCounter.innerText = `+${happyCustomersCount}`; // + nach der Zahl hinzufügen

        if (happyCustomersCount < happyCustomersTarget) {
          setTimeout(updateHappyCustomersCounter, 20);
        } else {
          happyCustomersCounter.innerText = `+${happyCustomersTarget}`; // + hinzufügen, wenn das Ziel erreicht ist
        }
      };

      // Aktualisierung des Erfahrung-Zählers
      const updateExperienceCounter = () => {
        const increment = Math.ceil(experienceTarget / (speed / 100));
        experienceCount = Math.min(
          experienceCount + increment,
          experienceTarget
        );
        experienceCounter.innerText = experienceCount;

        if (experienceCount < experienceTarget) {
          setTimeout(updateExperienceCounter, 100);
        } else {
          experienceCounter.innerText = experienceTarget;
        }
      };

      // Aktualisierung des Zufriedenheit-Zählers
      const updateSatisfactionCounter = () => {
        const increment = Math.ceil(satisfactionTarget / (speed / 30)); // Geschwindigkeit hier erhöhen
        satisfactionCount = Math.min(
          satisfactionCount + increment,
          satisfactionTarget
        );
        satisfactionCounter.innerText = satisfactionCount + "%"; // % zur Zahl hinzufügen

        if (satisfactionCount < satisfactionTarget) {
          setTimeout(updateSatisfactionCounter, 30); // Zeit anpassen, je nach gewünschter Geschwindigkeit
        } else {
          satisfactionCounter.innerText = satisfactionTarget + "%";
        }
      };

      // Zähler starten
      updateHappyCustomersCounter();
      updateExperienceCounter();
      updateSatisfactionCounter();
    };

    // Zähler ausführen, wenn der Abschnitt auf dem Bildschirm sichtbar wird
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hauptüberschrift */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Star className="size-4" />
            Vertrauen von +1200 Kunden
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-oswald text-[#2B3A64] mb-6">
            Über unser Unternehmen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-oswald leading-relaxed">
            Wir sind nicht nur ein Reinigungsservice – wir sind Ihr
            vertrauenswürdiger Partner, der schöne und gesunde Räume schafft und
            pflegt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Inhalt auf der linken Seite */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#2B3A64] font-oswald">
                Unsere Mission & Vision
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg font-oswald">
                Wir sind ein Team von engagierten Fachleuten, das sich darauf
                spezialisiert hat, Häuser erstrahlen zu lassen und Umzüge
                mühelos zu gestalten. Unsere Mission ist es, zuverlässige,
                qualitativ hochwertige Dienstleistungen mit persönlichem Touch
                zu bieten – damit Sie sich auf das Wesentliche konzentrieren
                können.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg font-oswald">
                Mit transparenter Preisgestaltung, flexiblen Zeitplänen und
                geprüften Experten sorgen wir für Konsistenz und Pflege bei
                jedem Besuch – egal ob es sich um eine gründliche Reinigung,
                Möbeltransporte oder präventive Wartung handelt.
              </p>
            </div>

            {/* Vorteile */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#2B3A64] font-oswald">
                Warum unser Team wählen?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Badge
                  icon={<ShieldCheck className="size-4" />}
                  label="Vollständig versichert"
                />
                <Badge icon={<Clock className="size-4" />} label="Pünktlich" />
                <Badge icon={<Users className="size-4" />} label="Profi-Team" />
              </div>
            </div>

            {/* Statistiken */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard
                number="+1200"
                label="Zufriedene Kunden"
                icon={<Heart className="size-5" />}
                id="about-happy-customers-counter"
              />
              <StatCard
                number="5"
                label="Jahre Erfahrung"
                icon={<Award className="size-5" />}
                id="about-experience-counter"
              />
              <StatCard
                number="99%"
                label="Zufriedenheitsrate"
                icon={<Star className="size-5" />}
                id="about-satisfaction-counter"
              />
            </div>
          </div>

          {/* Bild auf der rechten Seite */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/60 to-purple-100/60 blur-3xl rounded-3xl -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
              <img
                src="/images/about-team.png"
                alt="Unser professionelles Team bereit zu helfen"
                className="w-full h-[300px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                width="1200"
                height="675"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>

              {/* Informationsleiste */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-600 font-oswald">
                      Unser Team
                    </div>
                    <div className="font-semibold text-[#2B3A64] font-oswald">
                      Professionell & Zertifiziert
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 text-yellow-400 fill-current" />
                    <Star className="size-4 text-yellow-400 fill-current" />
                    <Star className="size-4 text-yellow-400 fill-current" />
                    <Star className="size-4 text-yellow-400 fill-current" />
                    <Star className="size-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zusätzlicher Abschnitt */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#2B3A64] mb-6 font-oswald">
                Unser Engagement für Exzellenz
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-green-100 text-green-600 mt-1">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2B3A64] font-oswald">
                      Qualitätssicherung
                    </h4>
                    <p className="text-slate-600 font-oswald">
                      Jede Dienstleistung wird von unserer
                      Zufriedenheitsgarantie unterstützt
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600 mt-1">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2B3A64] font-oswald">
                      Zuverlässige Terminplanung
                    </h4>
                    <p className="text-slate-600 font-oswald">
                      Wir respektieren Ihre Zeit und kommen immer pünktlich
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600 mt-1">
                    <Users className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2B3A64] font-oswald">
                      Experten-Team
                    </h4>
                    <p className="text-slate-600 font-oswald">
                      Geschulte Fachleute mit jahrelanger Erfahrung
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center size-24 rounded-full bg-blue-100 mb-4">
                <Award className="size-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-[#2B3A64] mb-2 font-oswald">
                Branchenerkennung
              </h4>
              <p className="text-slate-600 font-oswald">
                Ausgezeichnet für herausragende Servicequalität und
                Kundenzufriedenheit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
