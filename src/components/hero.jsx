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
      {/* خلفية الصورة - محسنة مع تأثيرات أفضل */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed "
        style={{
          backgroundImage: "url('/images/cleaning-team-hero.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* طبقة شفافة زرقاء قاتمة فوق الصورة - محسنة */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-900/90"></div>

      {/* طبقة إضافية للتأثير البصري */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* عناصر زخرفية خلفية - محسنة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full opacity-25 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-700 rounded-full opacity-35 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400 rounded-full opacity-25 blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* المحتوى - متمركز في الشاشات الصغيرة، يسار في الشاشات المتوسطة+ */}
          <div className="text-center md:text-left w-full md:w-1/2 mb-6 md:mb-8 lg:mb-0">
            {/* العنوان الرئيسي - متمركز في الشاشات الصغيرة، يسار في الشاشات المتوسطة+ */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 lg:mb-8 xl:mb-10 leading-tight font-oswald">
              <div className="text-white mb-2 drop-shadow-lg">
                SAUBERKEIT,DER SIE
              </div>
              <div className="text-yellow-400 drop-shadow-lg">
                VERTRAUEN KÖNNEN
              </div>
            </h1>

            {/* النص الوصفي - متمركز في الشاشات الصغيرة، يسار في الشاشات المتوسطة+ */}
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-blue-100 mb-6 md:mb-6 lg:mb-8 xl:mb-8 leading-relaxed font-oswald max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-lg mx-auto md:mx-0 drop-shadow-md">
              Professionelle Reinigungsdienstleistungen für Ihr Zuhause und Ihr
              Unternehmen. Qualität, die Sie sehen und spüren können.
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
