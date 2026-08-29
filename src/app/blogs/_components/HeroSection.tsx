"use client";

import Image from "next/image";
import Link from "next/link";
import { anton, mono } from "@/commonComponents/fonts";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import { useLanguage } from "@/app/context/languageUseContent";
import { useState } from "react";
import Navbar from "@/commonComponents/Navbar";

const LANGUAGE_NAMES = {
  en: "English",
  ar: "العربية",
  fa: "فارسی",
};

const HERO_CONTENT = {
  en: {
    title: "BLOGS",
    subtitle: "AND ARTICLES",
    description:
      "Explore practical guides, science-based articles, dosage tips, common myths, and the latest research to help you understand creatine and make smarter choices for your fitness journey.",
  },
  ar: {
    title: "المدونات",
    subtitle: "والمقالات",
    description:
      "استكشف الأدلة العملية، والمقالات العلمية، ونصائح الجرعات، والأساطير الشائعة، وأحدث الأبحاث لمساعدتك على فهم الكرياتين واتخاذ قرارات أذكى في رحلتك اللياقية.",
  },
  fa: {
    title: "وبلاگ‌ها",
    subtitle: "و مقالات",
    description:
      "راهنماهای کاربردی، مقالات علمی، نکات مربوط به دوز مصرف، باورهای رایج و جدیدترین تحقیقات را بررسی کنید تا کراتین را بهتر بشناسید و برای مسیر تناسب اندام خود انتخاب‌های هوشمندانه‌تری داشته باشید.",
  },
};

function HeroCopy() {
  const { language, isRTL } = useLanguage();

  const content = HERO_CONTENT[language];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={isRTL ? "text-right" : "text-left"}
    >
      <h1
        className={`font-victory m-0 text-[3.75rem] leading-[0.9] tracking-wide sm:text-[4.5rem] lg:text-[6rem] ${
          language === "en" ? "uppercase" : ""
        }`}
      >
        {content.title}
      </h1>

      <div
        className={`mt-2 inline-block bg-[#a87847] px-4 py-2 sm:px-6 sm:py-3 ${
          isRTL ? "rotate-[2deg]" : "rotate-[-2deg]"
        }`}
      >
        <span
          className={`font-victory block text-[2.25rem] leading-none text-[#fdf1da] sm:text-[3rem] lg:text-[3.75rem] ${
            language === "en" ? "uppercase" : ""
          }`}
        >
          {content.subtitle}
        </span>
      </div>

      <p
        className={`font-sf mt-6 max-w-[28rem] text-sm leading-relaxed text-white/85 lg:text-base`}
      >
        {content.description}
      </p>
    </div>
  );
}

export default function HeroSection() {
  const [languageStatus, setLanguageStatus] = useState(false);

  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-black px-6 pt-6 text-white sm:px-10 sm:pt-8"
    >
      <Navbar/>

      <div className="relative z-10 block pb-14 pt-8 sm:hidden">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[20rem]">
          <Image
            src="/images/hero-bg-blogs.png"
            alt="The Creatine Company — Creatine + Taurine tube"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <div className="mt-8">
          <HeroCopy />
        </div>
      </div>

      <div className="relative hidden sm:block">
        <div
          className={`pointer-events-none absolute inset-y-0 w-[58%] ${
            isRTL ? "right-0" : "left-0"
          }`}
        >
          <Image
            src="/images/hero-bg-blogs.png"
            alt="The Creatine Company — Creatine + Taurine tube"
            fill
            priority
            sizes="58vw"
            className={`object-contain ${
              isRTL ? "object-right" : "object-left"
            }`}
          />
        </div>

        <div className="relative z-10 flex min-h-[620px] items-center py-16 lg:min-h-[760px]">
          <div
            className={`w-1/2 max-w-[36rem] ${
              isRTL ? "ml-[5%] mr-auto" : "ml-auto mr-[5%]"
            }`}
          >
            <HeroCopy />
          </div>
        </div>
      </div>
    </section>
  );
}