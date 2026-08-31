"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/languageUseContent";
import Navbar from "@/commonComponents/Navbar";

const HERO_SLIDES = {
  en: [
    {
      type: "title",
      content: "ABOUT THE CREATINE COMPANY",
    },
    {
      type: "description",
      content:
        "At The Creatine Company, we believe that great performance starts with the right foundation. Our mission is to make premium-quality creatine simple, accessible, and convenient for everyone—from first-time gym-goers to professional athletes.",
    },
    {
      type: "description",
      content:
        "We focus on clean, science-backed formulations with no unnecessary fillers, delivering effective daily nutrition that supports strength, power, recovery, and long-term performance. Every product is designed to fit seamlessly into your lifestyle, whether you're at the gym, at work, or on the move.",
    },
  ],

  ar: [
    {
      type: "title",
      content: "عن شركة الكرياتين",
    },
    {
      type: "description",
      content:
        "في شركة الكرياتين، نؤمن بأن الأداء المتميز يبدأ من الأساس الصحيح. تتمثل مهمتنا في جعل الكرياتين عالي الجودة بسيطًا وسهل الوصول ومريحًا للجميع، بدءًا من المبتدئين في صالات الرياضة وحتى الرياضيين المحترفين.",
    },
    {
      type: "description",
      content:
        "نركز على تركيبات نظيفة ومدعومة علميًا، دون إضافات أو مواد مالئة غير ضرورية، لنقدم تغذية يومية فعالة تدعم القوة والطاقة والتعافي والأداء على المدى الطويل. تم تصميم كل منتج ليندمج بسلاسة مع أسلوب حياتك، سواء كنت في صالة الرياضة أو العمل أو أثناء التنقل.",
    },
  ],

  fa: [
    {
      type: "title",
      content: "درباره شرکت کراتین",
    },
    {
      type: "description",
      content:
        "در شرکت کراتین، ما باور داریم که عملکرد عالی از یک پایه درست شروع می‌شود. هدف ما این است که کراتین باکیفیت را برای همه ساده، در دسترس و راحت کنیم؛ از افرادی که تازه ورزش را شروع کرده‌اند تا ورزشکاران حرفه‌ای.",
    },
    {
      type: "description",
      content:
        "ما روی فرمولاسیون‌های خالص و مبتنی بر علم، بدون مواد پرکننده غیرضروری تمرکز می‌کنیم تا تغذیه روزانه مؤثری را ارائه دهیم که از قدرت، توان، ریکاوری و عملکرد بلندمدت پشتیبانی کند. هر محصول به گونه‌ای طراحی شده است که به‌راحتی با سبک زندگی شما هماهنگ شود؛ چه در باشگاه باشید، چه سر کار یا در حال حرکت.",
    },
  ],
} as const;

const TITLE_LINES = {
  en: ["ABOUT THE CREATINE", "COMPANY"],
  ar: ["عن الكرياتين", "شركة"],
  fa: ["درباره کراتین", "شرکت"],
};

function HeroSlides({ activeIndex }: { activeIndex: number }) {
  const { language, isRTL } = useLanguage();

  const slides = HERO_SLIDES[language];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="
        relative mx-auto
        h-[250px]
        w-full
        max-w-[96%]
        overflow-hidden
        min-[376px]:h-[260px]
        min-[481px]:h-[270px]
        sm:h-[280px]
        md:h-[220px]
        lg:h-[240px]
        xl:h-[260px]
        2xl:h-[280px]
      "
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        const isPrevious =
          index ===
          (activeIndex - 1 + slides.length) % slides.length;

        return (
          <div
            key={`${language}-${index}`}
            className={`
              absolute inset-0
              flex
              items-center
              justify-center
              px-2
              min-[376px]:px-3
              min-[481px]:px-4
              sm:px-5
              md:px-3
              text-center

              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isActive
                  ? "z-20 translate-y-0 opacity-100"
                  : isPrevious
                    ? "z-10 -translate-y-full opacity-0"
                    : "z-0 translate-y-full opacity-0"
              }
            `}
          >
            {slide.type === "title" ? (
              <h1
                dir={isRTL ? "rtl" : "ltr"}
                className={`
                  m-0
                  max-w-[95%]
                  font-victory
                  font-normal
                  text-[clamp(1.65rem,7vw,6rem)]
                  min-[376px]:text-[clamp(1.8rem,6.5vw,6rem)]
                  min-[481px]:text-[clamp(1.9rem,6vw,6rem)]
                  sm:text-[clamp(2rem,5vw,6rem)]
                  md:text-[clamp(1.9rem,7vw,6rem)]
                  leading-[1.1]
                  sm:leading-[1.1]
                  md:leading-[1]
                  lg:leading-[0.92]
                  tracking-[-0.02em]
                  text-white
                  flex
                  flex-col
                  gap-1
                  sm:gap-2

                  ${language === "en" ? "uppercase" : ""}
                `}
              >
                <span
                  className="
                    block
                    underline
                    decoration-2
                    underline-offset-[5px]
                    pb-1
                    sm:pb-1.5
                    md:pb-2
                  "
                >
                  {TITLE_LINES[language][0]}
                </span>

                <span
                  className="
                    block
                    underline
                    decoration-2
                    underline-offset-[5px]
                    md:mt-5
                  "
                >
                  {TITLE_LINES[language][1]}
                </span>
              </h1>
            ) : (
              <p
                dir={isRTL ? "rtl" : "ltr"}
                lang={language === "fa" ? "fa" : language === "ar" ? "ar" : "en"}
                className="
                  m-0
                  w-full
                  max-w-[98%]

                  min-[376px]:max-w-[94%]
                  min-[481px]:max-w-[92%]
                  sm:max-w-[90%]

                  md:max-w-[42rem]
                  lg:max-w-[50rem]
                  xl:max-w-[58rem]

                  font-tungsten
                  font-semibold
                  text-white

                  text-[clamp(1.05rem,4.2vw,1.55rem)]
                  min-[376px]:text-[clamp(1.1rem,4vw,1.6rem)]
                  min-[481px]:text-[clamp(1.15rem,3.8vw,1.7rem)]
                  sm:text-[clamp(1.2rem,3.5vw,1.8rem)]

                  md:text-[clamp(1.5rem,1vw,4rem)]
                  lg:text-[clamp(2rem,2vw,6rem)]

                  leading-[1.45]
                  min-[376px]:leading-[1.45]
                  min-[481px]:leading-[1.45]
                  sm:leading-[1.4]

                  md:leading-[1.45]

                  tracking-[0.01em]
                  [unicode-bidi:plaintext]
                "
              >
                {language === "en"
                  ? slide.content.toUpperCase()
                  : slide.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { language, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-hero");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollDistance = sectionHeight - viewportHeight;

      if (scrollDistance <= 0) return;

      const scrolled = Math.max(
        0,
        Math.min(-rect.top, scrollDistance)
      );

      const progress = scrolled / scrollDistance;

      const slideCount = HERO_SLIDES[language].length;

      let newIndex = Math.floor(progress * slideCount);

      if (newIndex >= slideCount) {
        newIndex = slideCount - 1;
      }

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [language]);

  useEffect(() => {
    setActiveIndex(0);
  }, [language]);

  return (
    <section
      id="about-hero"
      dir={isRTL ? "rtl" : "ltr"}
      className="
        relative
        h-[300vh]
        w-full
        max-w-full
        overflow-clip

        min-[376px]:h-[220vh]
        min-[481px]:h-[230vh]

        md:h-[240vh]
        lg:h-[250vh]
        xl:h-[260vh]
        min-[1200px]:h-[260vh]
      "
    >
      <div
        className="
          sticky
          top-0
          h-screen
          min-h-[460px]
          w-full
          overflow-hidden
          bg-[#0b1a2b]

          min-[376px]:min-h-[480px]
          min-[481px]:min-h-[500px]

          md:min-h-[550px]
          lg:min-h-[600px]
        "
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Athlete holding a Creatine + Taurine sachet outdoors"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <Navbar />

        <div
          className="
            absolute
            inset-x-0
            bottom-2
            z-20
            w-full

            min-[376px]:bottom-2
            min-[481px]:bottom-4
            sm:bottom-5
            md:bottom-6
            lg:bottom-7
            xl:bottom-8
            2xl:bottom-9
          "
        >
          <HeroSlides activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}