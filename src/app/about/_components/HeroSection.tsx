"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import { useLanguage } from "@/app/context/languageUseContent";
import { mono } from "@/commonComponents/fonts";
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

function HeroSlides({
  activeIndex,
}: {
  activeIndex: number;
}) {
  const { language, isRTL } = useLanguage();

  const slides = HERO_SLIDES[language];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="relative mx-auto h-[175px] w-full max-w-full overflow-visible px-3 min-[376px]:h-[190px] min-[481px]:h-[200px] min-[481px]:px-4 sm:px-5 md:h-[220px] md:max-w-[44rem] md:px-4 lg:h-[230px] lg:max-w-[50rem] xl:h-[245px] xl:max-w-[54rem] 2xl:h-[260px] 2xl:max-w-[58rem] min-[1600px]:h-[270px] min-[1600px]:max-w-[60rem] min-[1920px]:h-[280px] min-[1920px]:max-w-[64rem]"
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        const isPrevious = index < activeIndex;

        return (
          <div
            key={`${language}-${index}`}
            className={`absolute inset-x-0 bottom-0 flex min-h-full items-center justify-center px-2 text-center transition-[transform,opacity] ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive
                ? "translate-y-0 opacity-100 duration-700"
                : isPrevious
                  ? "-translate-y-full opacity-0 duration-[1200ms]"
                  : "translate-y-full opacity-0 duration-700"
              }`}
          >
            {slide.type === "title" ? (
              <h1
                className={`m-0 max-w-4xl font-['Victory_Striker_Sans_Demo'] text-[clamp(1.75rem,9vw,2.4rem)] font-normal leading-[0.95] tracking-[-0.015em] text-white underline decoration-2 underline-offset-[5px] min-[376px]:text-[clamp(2rem,9vw,2.8rem)] min-[481px]:text-[clamp(2.2rem,8vw,3.5rem)] min-[481px]:underline-offset-[6px] md:text-[clamp(2.8rem,5.5vw,4rem)] lg:text-[clamp(3rem,4.8vw,4rem)] xl:text-[clamp(3.4rem,4.5vw,4.5rem)] 2xl:text-[clamp(3.8rem,4.5vw,4.8rem)] min-[1600px]:text-[clamp(4rem,4.3vw,5.4rem)] min-[1920px]:text-[clamp(4.5rem,4.2vw,6rem)] ${language === "en" ? "uppercase" : ""
                  }`}
              >
                {TITLE_LINES[language][0]}
                <br />
                {TITLE_LINES[language][1]}
              </h1>
            ) : (
              <p
                className={`${mono.className} m-0 w-full max-w-[30rem] text-[0.72rem] font-normal leading-[1.35] text-white min-[376px]:text-[0.75rem] min-[481px]:max-w-[34rem] min-[481px]:text-[clamp(0.8rem,2.4vw,1rem)] min-[481px]:leading-[1.4] md:max-w-[38rem] md:text-[clamp(0.85rem,1.8vw,1.1rem)] md:leading-[1.45] lg:max-w-[42rem] lg:text-[clamp(0.9rem,1.55vw,1.15rem)] xl:max-w-[44rem] xl:text-[clamp(0.95rem,1.45vw,1.25rem)] 2xl:max-w-[48rem] min-[1600px]:max-w-[50rem] min-[1600px]:text-[clamp(1rem,1.4vw,1.4rem)] min-[1920px]:max-w-[52rem] min-[1920px]:text-[clamp(1.15rem,1.35vw,1.5rem)]`}
              >
                {slide.content}
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
  const [languageStatus, setLanguageStatus] = useState(false);

  const { language, setLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const firstTimer = window.setTimeout(() => {
      setActiveIndex(1);
    }, 2000);

    const secondTimer = window.setTimeout(() => {
      setActiveIndex(2);
    }, 4000);

    return () => {
      window.clearTimeout(firstTimer);
      window.clearTimeout(secondTimer);
    };
  }, []);

  useEffect(() => {
    setLanguageStatus(false);
  }, [language]);

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative h-[220vh] w-full max-w-full overflow-clip min-[376px]:h-[220vh] min-[481px]:h-[230vh] md:h-[240vh] lg:h-[250vh] xl:h-[260vh] min-[1200px]:h-[260vh]"
    >
      <div className="sticky top-0 h-screen min-h-[460px] w-full overflow-hidden bg-[#0b1a2b] min-[376px]:min-h-[480px] min-[481px]:min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Athlete holding a Creatine + Taurine sachet outdoors"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <Navbar/>

        <div className="absolute inset-x-0 bottom-2 z-20 w-full min-[376px]:bottom-2 min-[481px]:bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-7 xl:bottom-8 2xl:bottom-9 min-[1600px]:bottom-9 min-[1920px]:bottom-10">
          <HeroSlides activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}