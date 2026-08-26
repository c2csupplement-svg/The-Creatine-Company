"use client";

import { useEffect, useRef, useState } from "react";
import { anton, mono } from "../fonts";
import { useLanguage } from "../../app/context/languageUseContent";

const CONTENT = {
  en: {
    lines: [
      "DECIDE",
      "WITH EVIDENCE.",
      "READ YOUR",
      "BATCH REPORT TODAY",
    ],
    description:
      "Most brands ask for your trust. We give you the data. No marketing hype, just a permanent PDF showing exactly what you are about to drink.",
  },

  ar: {
    lines: [
      "قرر",
      "بالأدلة.",
      "اقرأ تقرير",
      "دفعتك اليوم",
    ],
    description:
      "معظم العلامات التجارية تطلب ثقتك. نحن نقدم لك البيانات. لا دعاية تسويقية، مجرد ملف PDF دائم يظهر بالضبط ما على وشك أن تشربه.",
  },

  fa: {
    lines: [
      "تصمیم بگیرید",
      "با شواهد.",
      "گزارش بچ خود را",
      "امروز بخوانید",
    ],
    description:
      "بیشتر برندها از شما می‌خواهند به آن‌ها اعتماد کنید. ما داده‌ها را در اختیار شما قرار می‌دهیم. بدون تبلیغات اغراق‌آمیز؛ فقط یک فایل PDF دائمی که دقیقاً نشان می‌دهد چه چیزی قرار است مصرف کنید.",
  },
};

export default function StrengthStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  const [progress, setProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { language, isRTL } = useLanguage();

  const content = CONTENT[language];
  const lines = content.lines;

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startPoint = viewportHeight * 0.8;
      const endPoint = viewportHeight * 0.2;

      const totalDistance = startPoint - endPoint;
      const currentDistance = startPoint - rect.bottom;

      let value = currentDistance / totalDistance;

      value = Math.max(0, Math.min(1, value));

      if (rect.top >= viewportHeight * 0.75) {
        value = 0;
      }

      if (rect.bottom <= viewportHeight * 0.15) {
        value = 1;
      }

      setProgress(value);
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why"
      dir={isRTL ? "rtl" : "ltr"}
      className="box-border w-full overflow-hidden bg-[#502300] px-3 py-12 text-center text-[#fdf1da] min-[400px]:px-3 min-[400px]:py-12 sm:px-4 sm:py-[55px] min-[640px]:px-7 min-[640px]:py-[60px] md:px-6 md:py-20"
    >
      <h2
        className={`${anton.className} mx-auto w-full max-w-[64rem] text-[9.5vw] uppercase leading-[0.94] tracking-[-0.02em] min-[400px]:text-[9.5vw] min-[640px]:text-[clamp(2.8rem,8vw,4.5rem)] md:text-[clamp(1.7rem,5.8vw,6.5rem)] md:leading-[0.95]`}
      >
        {lines.map((line, index) => {
          const isActive =
            hoveredIndex !== null && index <= hoveredIndex;

          return (
            <span key={`${language}-${line}`}>
              <span
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`inline-block max-w-full cursor-default transition-colors duration-300 ${
                  isActive
                    ? "text-[#fdf1da]"
                    : "text-[#a87847]"
                }`}
              >
                {line}
              </span>

              {index < lines.length - 1 && <br />}
            </span>
          );
        })}
      </h2>

      <div className="relative mx-auto mt-6 min-h-[70px] w-full max-w-full overflow-hidden px-1 min-[400px]:mt-6 min-[400px]:px-0.5 min-[640px]:mt-[30px] min-[640px]:min-h-[50px] min-[640px]:max-w-[600px] min-[640px]:px-0 md:mt-7 md:min-h-[50px] md:max-w-[50rem]">
        <p
          className={`${mono.className} m-0 w-full text-[#fdf1da] will-change-transform text-[14px] leading-[1.5] min-[640px]:text-base min-[640px]:leading-[1.45] md:text-[19px]`}
          style={{
            transform: `translateY(${100 - progress * 100}%)`,
            opacity: progress,
          }}
        >
          {content.description}
        </p>
      </div>
    </section>
  );
}