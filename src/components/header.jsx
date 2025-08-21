"use client";

import { useState, useCallback } from "react";
// import { ArrowDownRight } from "lucide-react"

export default function Header({ onCTA }) {
  const [open, setOpen] = useState(false);

  // Funktion für das sanfte Scrollen zu den Abschnitten ohne URL-Änderung - محسن
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // تحسين معالج القائمة المتنقلة
  const handleMenuToggle = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  // تحسين إغلاق القائمة
  const handleMenuClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-0.5 lg:px-8 xl:px-8 h-16 sm:h-18 md:h-20 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 sm:gap-3 md:gap-0.5 hover:opacity-80 transition-opacity"
        >
          {/* Logo aus Bild */}
          <img
            src="/images/our-logo.png"
            alt="GEBÄUDEREINIGUNG Logo"
            className="h-10 w-auto sm:h-12 md:h-16  lg:h-18 xl:h-20"
            loading="eager"
          />

          <span className="font-bold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-oswald text-[#2B3A64]">
            GEBÄUDEREINIGUNG
          </span>
        </button>

        {/* Navigation - يظهر من 768px فما فوق (iPad+) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-4 xl:gap-6 text-sm font-oswald">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-700 transition-colors font-oswald px-2 py-1"
          >
            Über uns
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="hover:text-blue-700 transition-colors font-oswald px-2 py-1"
          >
            Bewertungen
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-blue-700 transition-colors font-oswald px-2 py-1"
          >
            Dienstleistungen
          </button>
          <button
            onClick={() => scrollToSection("why")}
            className="hover:text-blue-700 transition-colors font-oswald px-2 py-1"
          >
            Warum wir
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-700 transition-colors font-oswald px-2 py-1"
          >
            Kontakt
          </button>
          <button
            onClick={onCTA}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-3 py-2 lg:px-4 text-white shadow-sm hover:bg-blue-700 active:bg-blue-800 transition-all font-oswald text-sm ml-2"
          >
            Angebot Anfordern
            {/* <ArrowDownRight className="size-4" /> */}
          </button>
        </nav>

        {/* Mobile Menu Button - يظهر فقط تحت 768px */}
        <button
          className="md:hidden inline-flex items-center justify-center size-10 rounded-md border border-slate-200 hover:bg-slate-50"
          onClick={handleMenuToggle}
          aria-label="Menü umschalten"
        >
          <span className="sr-only">Menü</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-800"></span>
            <span className="block h-0.5 w-5 bg-slate-800"></span>
            <span className="block h-0.5 w-5 bg-slate-800"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - يظهر فقط تحت 768px */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
            <button
              onClick={() => {
                scrollToSection("about");
                handleMenuClose();
              }}
              className="py-3 px-2 font-oswald text-left hover:text-blue-700 transition-colors border-b border-slate-100"
            >
              Über uns
            </button>
            <button
              onClick={() => {
                scrollToSection("reviews");
                handleMenuClose();
              }}
              className="py-3 px-2 font-oswald text-left hover:text-blue-700 transition-colors border-b border-slate-100"
            >
              Bewertungen
            </button>
            <button
              onClick={() => {
                scrollToSection("services");
                handleMenuClose();
              }}
              className="py-3 px-2 font-oswald text-left hover:text-blue-700 transition-colors border-b border-slate-100"
            >
              Dienstleistungen
            </button>
            <button
              onClick={() => {
                scrollToSection("why");
                handleMenuClose();
              }}
              className="py-3 px-2 font-oswald text-left hover:text-blue-700 transition-colors border-b border-slate-100"
            >
              Warum wir?
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                handleMenuClose();
              }}
              className="py-3 px-2 font-oswald text-left hover:text-blue-700 transition-colors border-b border-slate-100"
            >
              Kontakt
            </button>
            <button
              onClick={() => {
                handleMenuClose();
                onCTA();
              }}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-white shadow-sm hover:bg-blue-700 active:bg-blue-800 transition-all font-oswald md:px-6 md:py-1 "
            >
              Angebot anfordern
              {/* <ArrowDownRight className="size-4" /> */}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
