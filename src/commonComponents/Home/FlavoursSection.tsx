"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { anton } from "../fonts";
import { useLanguage } from "@/app/context/languageUseContent";

type Language = "en" | "ar" | "fa";

type Flavour = {
  title: string;
  image: string;
  link: string;
};

const FLAVOURS: Flavour[] = [
  {
    title: "Blueberry",
    link: "/carddetail/blueberry",
    image: "/images/30-freaking-flavours/blue.jpg",
  },
  {
    title: "Mango",
    link: "/carddetail/mango",
    image: "/images/image 404.jpg",
  },
  {
    title: "Strawberry",
    link: "/carddetail/strawberry",
    image: "/images/image 405.jpg",
  },
  {
    title: "Green Apple",
    link: "/carddetail/green-apple",
    image: "/images/image 403.jpg",
  },
];

const LANGUAGE_CONTENT = {
  en: {
    firstLine: "We Have 30",
    highlight: "Freaking",
    lastLine: "Delicious Flavours",
    button: "View Details",
    direction: "ltr",
  },
  ar: {
    firstLine: "لدينا 30",
    highlight: "نكهة مذهلة",
    lastLine: "نكهات لذيذة",
    button: "عرض التفاصيل",
    direction: "rtl",
  },
  fa: {
    firstLine: "ما ۳۰",
    highlight: "طعم شگفت‌انگیز",
    lastLine: "طعم‌های خوشمزه",
    button: "مشاهده جزئیات",
    direction: "rtl",
  },
};

export default function FlavoursSection() {
  const { language } = useLanguage();

  const currentLanguage: Language =
    language === "ar" || language === "fa"
      ? language
      : "en";

  const isRtl = currentLanguage !== "en";

  const content = LANGUAGE_CONTENT[currentLanguage];

  const sliderRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const slides =
      slider.querySelectorAll(".flavour-slide");

    if (!slides.length) return;

    const currentSlide = slides[
      currentIndex
    ] as HTMLElement | undefined;

    if (!currentSlide) return;

    const slideWidth = currentSlide.offsetWidth;

    const computedStyle =
      window.getComputedStyle(slider);

    const gap =
      parseFloat(
        computedStyle.columnGap ||
        computedStyle.gap ||
        "0"
      ) || 0;

    const scrollAmount = slideWidth + gap;

    let nextIndex = currentIndex;

    if (direction === "right") {
      nextIndex = Math.min(
        currentIndex + 1,
        FLAVOURS.length - 1
      );
    } else {
      nextIndex = Math.max(
        currentIndex - 1,
        0
      );
    }

    if (nextIndex === currentIndex) return;

    const targetSlide = slides[
      nextIndex
    ] as HTMLElement | undefined;

    if (!targetSlide) return;

    const sliderRect =
      slider.getBoundingClientRect();

    const slideRect =
      targetSlide.getBoundingClientRect();

    const currentScroll = slider.scrollLeft;

    let targetScroll =
      currentScroll +
      (slideRect.left - sliderRect.left);

    if (isRtl) {
      targetScroll =
        currentScroll +
        (slideRect.right - sliderRect.right);
    }

    if (!Number.isFinite(targetScroll)) {
      targetScroll =
        direction === "right"
          ? currentScroll + scrollAmount
          : currentScroll - scrollAmount;
    }

    slider.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setCurrentIndex(nextIndex);
  };

  return (
    <section
      dir={content.direction}
      className="box-border w-full overflow-hidden bg-[#fdf1da] px-[10px] py-6 min-[375px]:px-3 min-[375px]:py-7 min-[480px]:px-5 min-[480px]:py-8 sm:px-8 sm:py-10 md:px-8 md:py-[45px] lg:px-10 lg:py-[50px] xl:px-[50px] xl:py-[55px] min-[1440px]:px-[60px] min-[1440px]:py-[65px] min-[1920px]:px-20 min-[1920px]:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1500px] items-center gap-3.5 min-[375px]:gap-[18px] min-[480px]:gap-[22px] sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 min-[1440px]:max-w-[1500px] min-[1440px]:grid-cols-[0.85fr_1.15fr] min-[1440px]:gap-12 min-[1920px]:max-w-[1700px] min-[1920px]:gap-[60px]">
        {/* LEFT CONTENT */}

        <div>
          <div className="relative z-10 min-w-0 pl-0.5 min-[375px]:pl-1 min-[480px]:pl-2 sm:pl-4 md:pl-0 min-[1440px]:pl-20">
            <h2
              className={`${anton.className} m-0 text-[#502300] uppercase leading-[0.84] tracking-[-0.02em] text-[clamp(1.8rem,10vw,2.5rem)] min-[375px]:text-[clamp(2.2rem,10vw,3.2rem)] min-[480px]:text-[clamp(2.8rem,9vw,4.2rem)] sm:text-[clamp(3.5rem,8vw,5rem)] md:text-[clamp(3rem,6vw,4.5rem)] lg:text-[clamp(3.5rem,5.5vw,5rem)] xl:text-[clamp(4rem,5vw,5.5rem)] min-[1440px]:text-[clamp(4.5rem,5vw,5.5rem)] min-[1920px]:text-[6rem]`}
            >
              {content.firstLine}
            </h2>

            <div className="mt-1 inline-block max-w-full box-border bg-[#a87847] px-2 py-1 rotate-[-2deg] min-[375px]:px-2.5 min-[480px]:px-3.5 sm:px-5 md:px-4 lg:px-[18px] xl:px-5 min-[1440px]:px-[22px] min-[1920px]:px-[26px] min-[1440px]:py-2.5 min-[1920px]:py-3">
              <span
                className={`${anton.className} block whitespace-normal text-[#fdf1da] uppercase leading-[0.84] text-[clamp(1.8rem,9vw,2.4rem)] min-[375px]:text-[clamp(2rem,9.5vw,3rem)] min-[480px]:text-[clamp(2.5rem,8.5vw,4rem)] sm:text-[clamp(3rem,7vw,4.5rem)] md:text-[clamp(2.8rem,5.5vw,4.2rem)] lg:text-[clamp(3.2rem,5vw,4.8rem)] xl:text-[clamp(3.5rem,4.8vw,5.2rem)] min-[1440px]:text-[clamp(4rem,4.8vw,5.2rem)] min-[1920px]:text-[5.6rem]`}
              >
                {content.highlight}
              </span>
            </div>

            <h2
              className={`${anton.className} m-0 text-[#502300] uppercase leading-[0.82] tracking-[-0.02em] text-[clamp(1.8rem,10vw,2.5rem)] min-[375px]:text-[clamp(2.2rem,10vw,3.2rem)] min-[480px]:text-[clamp(2.8rem,9vw,4.2rem)] sm:text-[clamp(3.5rem,8vw,5rem)] md:text-[clamp(3rem,6vw,4.5rem)] lg:text-[clamp(3.5rem,5.5vw,5rem)] xl:text-[clamp(4rem,5vw,5.5rem)] min-[1440px]:text-[clamp(4.5rem,5vw,5.5rem)] min-[1920px]:text-[6rem]`}
            >
              {content.lastLine}
            </h2>
          </div>

          <Link
            href="/carddetail/blueberry"
            className="group mt-10 inline-block"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-amber-500 hover:to-amber-600 hover:shadow-xl active:translate-y-0">
              {isRtl && (
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              )}

              <span>{content.button}</span>

              {!isRtl && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </span>
          </Link>
        </div>

        {/* SLIDER */}

        <div
          className="w-full min-w-0 overflow-hidden"
          dir="ltr"
        >
          <div
            ref={sliderRef}
            className="flex w-full gap-2 overflow-x-auto overflow-y-hidden px-0.5 pb-4 pt-2.5 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] min-[375px]:gap-3 min-[375px]:px-1 min-[375px]:pb-[18px] min-[375px]:pt-3 min-[480px]:gap-3.5 min-[480px]:px-1.5 min-[480px]:pb-5 min-[480px]:pt-3.5 sm:gap-4 sm:pt-4 md:gap-[18px] min-[1920px]:gap-6 min-[1920px]:px-2.5 min-[1920px]:pb-[25px] min-[1920px]:pt-5 [&::-webkit-scrollbar]:hidden"
          >
            {FLAVOURS.map((flavour) => {
              const isStrawberry =
                flavour.title === "Strawberry";

              return (
                <div
                  key={flavour.title}
                  className={`flavour-slide relative flex h-[clamp(230px,78vw,290px)] w-full shrink-0 snap-start items-center justify-center overflow-hidden rotate-[-3deg] min-[375px]:h-[clamp(270px,78vw,360px)] min-[480px]:h-[clamp(340px,72vw,430px)] sm:h-[400px] md:h-[420px] lg:h-[440px] xl:h-[470px] min-[1440px]:h-[500px] min-[1920px]:h-[580px] ${isStrawberry
                      ? "overflow-visible rounded-none"
                      : ""
                    }`}
                >
                  <Link
                    href={flavour.link}
                    className={`relative block h-full w-full overflow-hidden rounded-[22px] isolate min-[375px]:rounded-[26px] min-[480px]:rounded-[30px] sm:rounded-[30px] md:rounded-[30px] min-[1440px]:rounded-[40px] min-[1920px]:rounded-[40px] ${isStrawberry
                        ? "rounded-[25px] [clip-path:inset(0_round_25px)] translate-z-0 min-[375px]:rounded-[25px] min-[480px]:rounded-[30px] sm:rounded-[30px] md:rounded-[30px] min-[1440px]:rounded-[40px]"
                        : ""
                      }`}
                  >
                    <Image
                      src={flavour.image}
                      alt={`${flavour.title} creatine`}
                      fill
                      sizes="(max-width: 768px) 100vw, 65vw"
                      className={`object-contain object-center ${isStrawberry
                          ? "!absolute !left-[5%] !top-0 !block !h-full !w-[90%] !object-cover !object-center !rounded-[25px] [clip-path:inset(0_round_25px)] translate-z-0 min-[375px]:!rounded-[25px] min-[480px]:!rounded-[30px] sm:!rounded-[30px] md:!rounded-[30px] min-[1440px]:!rounded-[40px]"
                          : "rounded-[22px] min-[375px]:rounded-[26px] min-[480px]:rounded-[30px] sm:rounded-[30px] md:rounded-[30px] min-[1440px]:rounded-[40px] min-[1920px]:rounded-[40px]"
                        }`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* CONTROLS */}

          <div className="flex w-full items-center justify-end gap-1.5 pr-2.5 pt-1 min-[375px]:gap-2 min-[375px]:pr-5 min-[480px]:pr-[30px] sm:gap-2 sm:pt-2 sm:pr-[50px] md:gap-2.5 md:pr-[70px] lg:pr-[100px] xl:pr-[130px] min-[1440px]:pr-[150px] min-[1920px]:pr-[180px]">
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              disabled={currentIndex === 0}
              aria-label={
                currentLanguage === "fa"
                  ? "طعم قبلی"
                  : currentLanguage === "ar"
                    ? "النكهة السابقة"
                    : "Previous flavour"
              }
              className="flex h-[34px] w-[34px] min-h-[34px] min-w-[34px] cursor-pointer items-center justify-center border-0 bg-[#502300] p-0 text-[18px] leading-none text-[#fdf1da] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 min-[375px]:h-[38px] min-[375px]:w-[38px] min-[375px]:min-h-[38px] min-[375px]:min-w-[38px] min-[375px]:text-[20px] min-[480px]:h-[42px] min-[480px]:w-[42px] min-[480px]:min-h-[42px] min-[480px]:min-w-[42px] min-[480px]:text-[22px] sm:h-[44px] sm:w-[44px] sm:min-h-[44px] sm:min-w-[44px] sm:text-[24px] md:h-[46px] md:w-[46px] md:min-h-[46px] md:min-w-[46px] md:text-[25px] min-[1920px]:h-[58px] min-[1920px]:w-[58px] min-[1920px]:min-h-[58px] min-[1920px]:min-w-[58px] min-[1920px]:text-[32px]"
            >
              &larr;
            </button>

            <button
              type="button"
              onClick={() => scrollSlider("right")}
              disabled={
                currentIndex === FLAVOURS.length - 1
              }
              aria-label={
                currentLanguage === "fa"
                  ? "طعم بعدی"
                  : isRtl
                    ? "النكهة التالية"
                    : "Next flavour"
              }
              className="flex h-[34px] w-[34px] min-h-[34px] min-w-[34px] cursor-pointer items-center justify-center border-0 bg-[#502300] p-0 text-[18px] leading-none text-[#fdf1da] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 min-[375px]:h-[38px] min-[375px]:w-[38px] min-[375px]:min-h-[38px] min-[375px]:min-w-[38px] min-[375px]:text-[20px] min-[480px]:h-[42px] min-[480px]:w-[42px] min-[480px]:min-h-[42px] min-[480px]:min-w-[42px] min-[480px]:text-[22px] sm:h-[44px] sm:w-[44px] sm:min-h-[44px] sm:min-w-[44px] sm:text-[24px] md:h-[46px] md:w-[46px] md:min-h-[46px] md:min-w-[46px] md:text-[25px] min-[1920px]:h-[58px] min-[1920px]:w-[58px] min-[1920px]:min-h-[58px] min-[1920px]:min-w-[58px] min-[1920px]:text-[32px]"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}