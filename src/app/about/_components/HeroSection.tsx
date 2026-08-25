"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import { useLanguage } from "@/app/context/languageUseContent";
import { anton, mono } from "@/commonComponents/fonts";

const HERO_SLIDES = [
  {
    type: "title",
    content: "ABOUT THE CREATINE COMPANY",
    arContent: "عن شركة الكرياتين",
  },
  {
    type: "description",
    content:
      "At The Creatine Company, we believe that great performance starts with the right foundation. Our mission is to make premium-quality creatine simple, accessible, and convenient for everyone—from first-time gym-goers to professional athletes.",
    arContent:
      "في شركة الكرياتين، نؤمن بأن الأداء المتميز يبدأ من الأساس الصحيح. تتمثل مهمتنا في جعل الكرياتين عالي الجودة بسيطًا وسهل الوصول ومريحًا للجميع، بدءًا من المبتدئين في صالات الرياضة وحتى الرياضيين المحترفين.",
  },
  {
    type: "description",
    content:
      "We focus on clean, science-backed formulations with no unnecessary fillers, delivering effective daily nutrition that supports strength, power, recovery, and long-term performance. Every product is designed to fit seamlessly into your lifestyle, whether you're at the gym, at work, or on the move.",
    arContent:
      "نركز على تركيبات نظيفة ومدعومة علميًا، دون إضافات أو مواد مالئة غير ضرورية، لنقدم تغذية يومية فعالة تدعم القوة والطاقة والتعافي والأداء على المدى الطويل. تم تصميم كل منتج ليندمج بسلاسة مع أسلوب حياتك، سواء كنت في صالة الرياضة أو العمل أو أثناء التنقل.",
  },
]

function HeroSlides({ activeIndex }: { activeIndex: number }) {

  const { language } = useLanguage();

  return (
    <div
    dir={language === "ar"?"rtl" : "ltr"}
      className="
        relative
        mx-auto
        h-[175px]
        w-full
        max-w-full
        overflow-visible
        px-3

        min-[376px]:h-[190px]

        min-[481px]:h-[200px]
        min-[481px]:px-4

        sm:px-5

        md:h-[220px]
        md:max-w-[44rem]
        md:px-4

        lg:h-[230px]
        lg:max-w-[50rem]

        xl:h-[245px]
        xl:max-w-[54rem]

        2xl:h-[260px]
        2xl:max-w-[58rem]

        min-[1600px]:h-[270px]
        min-[1600px]:max-w-[60rem]

        min-[1920px]:h-[280px]
        min-[1920px]:max-w-[64rem]
      "
    >
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        const isPrevious = index < activeIndex;

        return (
          <div
            key={slide.content}
            className={`
              absolute
              inset-x-0
              bottom-0
              flex
              min-h-full
              items-center
              justify-center
              px-2
              text-center

              transition-[transform,opacity]
              ease-[cubic-bezier(0.76,0,0.24,1)]

              ${isActive
                ? "translate-y-0 opacity-100 duration-700"
                : isPrevious
                  ? "-translate-y-full opacity-0 duration-[1200ms]"
                  : "translate-y-full opacity-0 duration-700"
              }
            `}
          >
            {slide.type === "title" ? (
              <h1
                className="
                  m-0
                  max-w-4xl
                  font-['Victory_Striker_Sans_Demo']
                  text-[clamp(1.75rem,9vw,2.4rem)]
                  font-normal
                  uppercase
                  leading-[0.95]
                  tracking-[-0.015em]
                  text-white
                  underline
                  decoration-2
                  underline-offset-[5px]

                  min-[376px]:text-[clamp(2rem,9vw,2.8rem)]

                  min-[481px]:text-[clamp(2.2rem,8vw,3.5rem)]
                  min-[481px]:underline-offset-[6px]

                  md:text-[clamp(2.8rem,5.5vw,4rem)]

                  lg:text-[clamp(3rem,4.8vw,4rem)]

                  xl:text-[clamp(3.4rem,4.5vw,4.5rem)]

                  2xl:text-[clamp(3.8rem,4.5vw,4.8rem)]

                  min-[1600px]:text-[clamp(4rem,4.3vw,5.4rem)]

                  min-[1920px]:text-[clamp(4.5rem,4.2vw,6rem)]
                "
              >
                {language !== "ar"?"ABOUT THE CREATINE":"عن الكرياتين"}
                <br />
                {language !== "ar"? "COMPANY":"شركة"}
              </h1>
            ) : (
              <p
                className="
                  m-0
                  w-full
                  max-w-[30rem]
                  font-['Tungsten']
                  text-[0.72rem]
                  font-normal
                  uppercase
                  leading-[1.35]
                  text-white

                  min-[376px]:text-[0.75rem]

                  min-[481px]:max-w-[34rem]
                  min-[481px]:text-[clamp(0.8rem,2.4vw,1rem)]
                  min-[481px]:leading-[1.4]

                  md:max-w-[38rem]
                  md:text-[clamp(0.85rem,1.8vw,1.1rem)]
                  md:leading-[1.45]

                  lg:max-w-[42rem]
                  lg:text-[clamp(0.9rem,1.55vw,1.15rem)]

                  xl:max-w-[44rem]
                  xl:text-[clamp(0.95rem,1.45vw,1.25rem)]

                  2xl:max-w-[48rem]

                  min-[1600px]:max-w-[50rem]
                  min-[1600px]:text-[clamp(1rem,1.4vw,1.4rem)]

                  min-[1920px]:max-w-[52rem]
                  min-[1920px]:text-[clamp(1.15rem,1.35vw,1.5rem)]
                "
              >
                {language !== "ar"?slide.content:slide.arContent}
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

  const { language, setLanguage } = useLanguage();

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

  return (
    <section
      className="
        relative
        h-[220vh]
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
          className="
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            inset-0
            z-10
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        <header
          className="
          w-full
            absolute
            left-3
            top-3
            z-30
            flex
            items-center
            gap-1
            text-white

            min-[376px]:left-3
            min-[376px]:top-3

            min-[481px]:left-4
            min-[481px]:top-4
            min-[481px]:gap-2

            sm:left-5
            sm:top-5

            md:left-7
            md:top-6

            lg:left-8
            lg:top-7

            xl:left-9
            xl:top-8

            2xl:left-10
            2xl:top-8

            min-[1600px]:left-11
            min-[1600px]:top-9

            min-[1920px]:left-12
            min-[1920px]:top-10
          "
        >
          <Link
            href="/"
            aria-label="The Creatine Company home"
            className="
              block
              w-[68px]
              shrink-0

              min-[376px]:w-[72px]

              min-[481px]:w-[82px]

              sm:w-[88px]

              md:w-[95px]

              lg:w-[105px]

              xl:w-[115px]

              2xl:w-[125px]

              min-[1600px]:w-[130px]

              min-[1920px]:w-[140px]
            "
          >
            <Image
              src="/images/real-logo.png"
              alt="The Creatine Company"
              width={125}
              height={99}
              priority
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </Link>

          <NavigationMenu backgroundImage="/images/hero-bg.jpg" />

          <fieldset
            className={`
                      ${mono.className}
                      absolute
                      right-10
                      lg:right-15
                      top-0
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
        </header>

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

            min-[1600px]:bottom-9

            min-[1920px]:bottom-10
          "
        >
          <HeroSlides activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}