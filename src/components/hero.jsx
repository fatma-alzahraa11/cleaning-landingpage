import React, { useEffect, useCallback, memo } from "react";

const HeroSection = memo(() => {
  // دالة للانتقال السلس إلى قسم الخدمات - محسنة
  const scrollToServices = useCallback(() => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // دالة لتنفيذ العداد التصاعدي
  useEffect(() => {
    const startCounters = () => {
      // عداد العملاء السعداء
      const happyCustomersCounter = document.getElementById(
        "happy-customers-counter"
      );
      const happyCustomersTarget = 1200;
      let happyCustomersCount = 0;

      // عداد سنوات الخبرة
      const experienceCounter = document.getElementById("experience-counter");
      const experienceTarget = 5;
      let experienceCount = 0;

      // سرعة العداد (بالمللي ثانية)
      const speed = 2000;

      // تحديث عداد العملاء
      const updateHappyCustomersCounter = () => {
        const increment = Math.ceil(happyCustomersTarget / (speed / 20));
        happyCustomersCount = Math.min(
          happyCustomersCount + increment,
          happyCustomersTarget
        );
        happyCustomersCounter.innerText = `+ ${happyCustomersCount}`; // إضافة علامة +

        if (happyCustomersCount < happyCustomersTarget) {
          setTimeout(updateHappyCustomersCounter, 20);
        } else {
          happyCustomersCounter.innerText = `+ ${happyCustomersTarget}`; // إضافة علامة + عند الوصول للعدد المستهدف
        }
      };
      // تحديث عداد الخبرة
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

      // بدء العدادات
      updateHappyCustomersCounter();
      updateExperienceCounter();
    };

    // تشغيل العدادات عند ظهور القسم في الشاشة
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  // تحسين معالج النقر
  const handleContactClick = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="hero"
      className="relative text-white pt-10  flex items-center overflow-hidden"
    >
      <style jsx>{`
        #hero {
          background-image: url('/images/cleaning-team-hero.jpg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        
        /* استخدام scroll للأجهزة المحمولة فقط */
        @media (max-width: 767px), (hover: none), (pointer: coarse) {
          #hero {
            background-attachment: scroll !important;
          }
        }
      `}</style>
      {/* خلفية الصورة - محسنة مع تأثيرات أفضل */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/cleaning-team-hero.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
        }}
        role="img"
        aria-label="Sauberes Team bei der Arbeit"
      ></div>

      {/* طبقة شفافة زرقاء قاتمة فوق الصورة - محسنة */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-900/90"></div>

      {/* طبقة إضافية للتأثير البصري */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* عناصر زخرفية خلفية - محسنة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full opacity-25 blur-3xl"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-700 rounded-full opacity-35 blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* أيقونة واتساب متحركة على الجانب الأيمن */}
      <div className="fixed right-6 bottom-6 z-50">
        <a
          href="https://wa.me/4917672595018"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          aria-label="WhatsApp Kontakt"
        >
          <div className="relative">
            {/* الخلفية الخضراء مع تأثير النبض */}
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 animate-pulse">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            
            
          </div>
        </a>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* المحتوى - متمركز في الشاشات الصغيرة، يسار في الشاشات المتوسطة+ */}
          <div className="text-center md:text-left w-full md:w-1/2 mb-6 md:mb-8 lg:mb-0">
            {/* العنوان الرئيسي - متمركز في الشاشات الصغيرة، يسار في الشاشات المتوسطة+ */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 lg:mb-8 xl:mb-10 leading-tight font-oswald">
              <div className="text-white mb-2 drop-shadow-lg">
                SAUBERKEIT,DER SIE
              </div>
              <div className="text-yellow-400 drop-shadow-lg">
                VERTRAUEN KÖNNEN
              </div>
            </h1>

            {/* النص الوصفي - متمركز في الشاشات الصغيرة، يسار في الشاشات المتوسطة+ */}
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-blue-100 mb-6 md:mb-6 lg:mb-8 xl:mb-8 leading-relaxed font-oswald max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-lg mx-auto md:mx-0 drop-shadow-md">
              Wir sind Ihre Experten für Sauberkeit in Augsburg. Von der Haushaltsreinigung bis zur Büroreinigung – wir machen Ihr Leben einfacher. Schnell, zuverlässig und professionell.
            </p>

            {/* الأزرار - متمركزة في الشاشات الصغيرة، يسار في الشاشات المتوسطة+ */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-3 sm:py-4 md:py-5 lg:py-5 xl:py-6 px-5 sm:px-6 md:px-7 lg:px-7 xl:px-8 rounded-full font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 font-oswald shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Angebot Erhalten
              </button>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg text-blue-100 leading-relaxed font-oswald max-w-lg drop-shadow-md text-center md:text-left">
                Kostenlos und unverbindlich. Wir beraten Sie persönlich.
              </p>
            </div>

            {/* إحصائيات سريعة - متمركزة في الشاشات الصغيرة، يسار في الشاشات المتوسطة+ */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-4 xl:gap-4 mt-6 md:mt-6 lg:mt-8 xl:mt-8 pt-4 border-t border-blue-600/50 justify-center md:justify-start">
              <div className="text-center">
                <div
                  className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-yellow-400 font-oswald drop-shadow-lg"
                  id="happy-customers-counter"
                >
                  0
                </div>
                <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-blue-100 font-oswald">
                  Zufriedene Kunden
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-yellow-400 font-oswald drop-shadow-lg"
                  id="experience-counter"
                >
                  0
                </div>
                <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-blue-100 font-oswald">
                  Jahre Erfahrung
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-yellow-400 font-oswald drop-shadow-lg">
                  99%
                </div>
                <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-blue-100 font-oswald">
                  Zufriedenheitsrate
                </div>
              </div>
            </div>
          </div>

          {/* الصورة على اليمين - تظهر من 768px فما فوق (iPad+) */}
          <div className="hidden md:flex md:w-1/2 justify-center lg:justify-end ">
            <div className="relative">
              {/* الصورة بدون خلفية */}
              <img
                src="/images/cleaning-professional.png"
                alt="Professional cleaning staff member"
                className="w-99  rounded-xl object-cover md:mt-60 lg:mt-0"
                loading="lazy"
                decoding="async"
                width="700"
                height="700"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
