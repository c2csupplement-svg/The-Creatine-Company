"use client";

import Image from "next/image";
import { anton } from "../fonts";
import { useLanguage } from "@/app/context/languageUseContent";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const INSTAGRAM_POSTS = ["1.png", "2.png", "3.png", "4.png"];

const INSTAGRAM_URL =
  "https://www.instagram.com/the.creatine.company/";

const CONTENT = {
  en: {
    follow: "Follow",
    company: "The Creatine Company",
    profile: "View Profile",
    instagram: "Explore Our Instagram",
  },
  ar: {
    follow: "تابع",
    company: "شركة الكرياتين",
    profile: "عرض الملف الشخصي",
    instagram: "اكتشف حسابنا على إنستغرام",
  },
  fa: {
    follow: "دنبال کنید",
    company: "شرکت کراتین",
    profile: "مشاهده پروفایل",
    instagram: "اینستاگرام ما را ببینید",
  },
};

export default function InstagramSection() {
  const { language, isRTL } = useLanguage();

  const content = CONTENT[language];

  // Duplicate posts for seamless infinite loop
  const posts = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  const [loopWidth, setLoopWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const speed = 25;

  // -----------------------------------------
  // Calculate width of one complete set
  // -----------------------------------------
  useEffect(() => {
    const calculateDimensions = () => {
      const track = trackRef.current;

      if (!track) return;

      const cards = Array.from(
        track.children
      ) as HTMLElement[];

      if (!cards.length) return;

      const firstLoopCards = cards.slice(0, INSTAGRAM_POSTS.length);

      if (!firstLoopCards.length) return;

      const styles = window.getComputedStyle(track);

      const gap = parseFloat(styles.gap || "0");

      const totalCardsWidth = firstLoopCards.reduce(
        (total, card) => total + card.offsetWidth,
        0
      );

      const calculatedLoopWidth =
        totalCardsWidth +
        gap * (firstLoopCards.length - 1);

      setLoopWidth(calculatedLoopWidth);

      // Start RTL from the end of the first loop
      x.set(isRTL ? -calculatedLoopWidth : 0);
    };

    const timer = window.setTimeout(
      calculateDimensions,
      50
    );

    const resizeObserver = new ResizeObserver(() => {
      calculateDimensions();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener(
      "resize",
      calculateDimensions
    );

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        calculateDimensions
      );
    };
  }, [isRTL, x]);

  // -----------------------------------------
  // Automatic scrolling
  // -----------------------------------------
  useAnimationFrame((_, delta) => {
    if (isPaused || loopWidth <= 0) return;

    const movement = speed * (delta / 1000);

    let currentX = x.get();

    if (isRTL) {
      currentX += movement;

      if (currentX >= 0) {
        currentX = -loopWidth;
      }
    } else {
      currentX -= movement;

      if (currentX <= -loopWidth) {
        currentX = 0;
      }
    }

    x.set(currentX);
  });

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="overflow-hidden bg-[#fdf1da] px-4 pb-16 pt-6 min-[481px]:px-5 sm:px-10 sm:pb-20 sm:pt-8"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* =========================================
            HEADING
        ========================================= */}
        <div className="mb-7">
          <span
            className={`${anton.className} block text-[clamp(2rem,3.5vw,4rem)] uppercase leading-none text-[#502300] ${
              language !== "en"
                ? "pb-2"
                : "pb-0"
            }`}
          >
            {content.follow}
          </span>

          <span
            className={`${anton.className} mt-[-4px] inline-block rotate-[1deg] bg-[#a87847] px-3 py-1 text-[clamp(2rem,3.5vw,4rem)] uppercase leading-none text-white sm:px-5 sm:py-2`}
          >
            {content.company}
          </span>
        </div>

        {/* =========================================
            INSTAGRAM CAROUSEL
        ========================================= */}
        <div className="relative w-full overflow-hidden">

          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#fdf1da] via-[#fdf1da]/80 to-transparent sm:w-16" />

          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#fdf1da] via-[#fdf1da]/80 to-transparent sm:w-16" />

          <motion.div
            ref={trackRef}
            style={{
              x,
              direction: "ltr",
            }}
            drag="x"
            dragConstraints={{
              left: -loopWidth,
              right: 0,
            }}
            dragElastic={0.08}
            onDragStart={() => {
              setIsPaused(true);
            }}
            onDragEnd={() => {
              window.setTimeout(() => {
                setIsPaused(false);
              }, 300);
            }}
            onMouseEnter={() => {
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
            }}
            className="
              flex
              w-max
              cursor-grab
              flex-row
              gap-2.5
              will-change-transform
              active:cursor-grabbing
              touch-pan-y
              sm:gap-5
            "
          >
            {posts.map((file, index) => (
              <a
                key={`${file}-${index}`}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  w-[calc(50vw-0.9375rem)]
                  min-w-[calc(50vw-0.9375rem)]
                  overflow-hidden
                  bg-white
                  no-underline

                  sm:w-[calc(25vw-3.75rem)]
                  sm:min-w-[calc(25vw-3.75rem)]

                  lg:w-[260px]
                  lg:min-w-[260px]
                "
              >
                <div className="relative aspect-[908/1578] w-full overflow-hidden">
                  <Image
                    src={`/images/instagram/${file}`}
                    alt="The Creatine Company Instagram post"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-[1.03]"
                  />
                </div>

                <div
                  className={`${anton.className} flex items-center justify-between gap-2 px-2 py-2 text-[8px] uppercase text-[#502300] sm:px-3 sm:py-2 sm:text-xs`}
                >
                  <span>thecreatine.co</span>

                  <span>
                    {content.profile}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* =========================================
            INSTAGRAM BUTTON
        ========================================= */}
        <div className="mt-8 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${anton.className} inline-flex items-center gap-3 bg-[#a87847] px-5 py-3 text-sm uppercase text-white no-underline transition-transform duration-300 hover:scale-105 sm:text-base`}
          >
            <span>
              {content.instagram}
            </span>

            <span>
              {isRTL ? "←" : "→"}
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}