"use client";

import Image from "next/image";
import Link from "next/link";
import { anton, mono } from "@/commonComponents/fonts";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import { useLanguage } from "@/app/context/languageUseContent";

function HeroCopy() {

  const { language } = useLanguage();

  return (
    <>
      <h1
        className={`${anton.className} m-0 text-[3.75rem] leading-[0.9] tracking-wide sm:text-[4.5rem] lg:text-[6rem]`}
      >
        {language !== "ar" ? "BLOGS" : "مدونات"}
      </h1>

      <div className="mt-3 inline-block rotate-[-2deg] bg-[#a87847] px-4 py-1 sm:px-6 sm:py-2">
        <span
          className={`${anton.className} block text-[2.25rem] leading-none text-[#fdf1da] sm:text-[3rem] lg:text-[3.75rem]`}
        >
          {language !== "ar" ? "AND ARTICLES" : "والمقالات"}
        </span>
      </div>

      <p className="mt-6 max-w-[28rem] text-sm leading-relaxed text-white/85 lg:text-base">
        {language !== "ar" ? <span>Explore practical guides, science-based articles, dosage tips, common
          myths, and the latest research to help you understand creatine and make
          smarter choices for your fitness journey.</span> : <span>استكشف الأدلة العملية، والمقالات العلمية، ونصائح الجرعات، والأساطير الشائعة، وأحدث الأبحاث لمساعدتك على فهم الكرياتين واتخاذ قرارات أذكى في رحلتك اللياقية.</span>}
      </p>
    </>
  );
}

export default function HeroSection() {

  const { language, setLanguage } = useLanguage();

  return (
    <section
    
     className="relative overflow-hidden bg-black px-6 pt-6 text-white sm:px-10 sm:pt-8">
      <div className="absolute left-4 top-4 z-50 sm:left-6 sm:top-6 lg:left-10 lg:top-8 w-full">
        <Link href="/" aria-label="The Creatine Company home">
          <Image
            src="/images/real-logo.png"
            alt="The Creatine Company"
            width={125}
            height={99}
            priority
            className="h-auto w-[75px] sm:w-[100px] md:w-[110px] lg:w-[125px]"
          />
        </Link>

        <fieldset
          className={`
                    ${mono.className}
                    absolute
                    top-0
                    right-10
                    lg:right-15
                    flex
                    items-center
                    gap-1
                    rounded-full
                    border
                    border-white/30
                    bg-black/20
                    px-1.5
                    py-1
                    text-[0.65rem]
                    backdrop-blur-sm
        
                    min-[480px]:gap-1.5
                    min-[480px]:px-2
                    min-[480px]:text-[0.7rem]
        
                    sm:text-xs
                    lg:text-sm
                  `}
        >
          <legend className="sr-only">Choose language</legend>

          <label
            className={`
                      flex
                      cursor-pointer
                      items-center
                      gap-1
                      rounded-full
                      px-2
                      py-0.5
                      transition-colors
                      duration-150
                      ${language === "en" ? "bg-[#fdf1da] text-[#502300]" : "text-white/80"}
                    `}
          >
            <input
              type="radio"
              name="language"
              value="en"
              checked={language === "en"}
              onChange={() => setLanguage("en")}
              className="sr-only"
            />
            EN
          </label>

          <label
            className={`
                      flex
                      cursor-pointer
                      items-center
                      gap-1
                      rounded-full
                      px-2
                      py-0.5
                      transition-colors
                      duration-150
                      ${language === "ar" ? "bg-[#fdf1da] text-[#502300]" : "text-white/80"}
                    `}
          >
            <input
              type="radio"
              name="language"
              value="ar"
              checked={language === "ar"}
              onChange={() => setLanguage("ar")}
              className="sr-only"
            />
            AR
          </label>
        </fieldset>
      </div>

      <NavigationMenu backgroundImage="/images/hero-bg-blogs.png" />

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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[58%]">
          <Image
            src="/images/hero-bg-blogs.png"
            alt="The Creatine Company — Creatine + Taurine tube"
            fill
            priority
            sizes="58vw"
            className="object-contain object-left"
          />
        </div>

        <div className="relative z-10 flex min-h-[620px] items-center justify-end py-16 lg:min-h-[760px]">
          <div className="mr-[5%] w-1/2 max-w-[36rem]">
            <HeroCopy />
          </div>
        </div>
      </div>
    </section>
  );
}