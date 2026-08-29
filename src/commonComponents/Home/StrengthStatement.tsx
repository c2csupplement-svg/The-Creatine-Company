"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { anton, mono } from "../fonts";
import { useLanguage } from "../../app/context/languageUseContent";

const CONTENT = {
  en: {
    lines: ["DECIDE", "WITH EVIDENCE.", "READ YOUR", "BATCH REPORT TODAY"],
    description:
      "Most brands ask for your trust. We give you the data. No marketing hype, just a permanent PDF showing exactly what you are about to drink.",
  },

  ar: {
    lines: ["قرر", "بالأدلة.", "اقرأ تقرير", "دفعتك اليوم"],
    description:
      "معظم العلامات التجارية تطلب ثقتك. نحن نقدم لك البيانات. لا دعاية تسويقية، مجرد ملف PDF دائم يظهر بالضبط ما على وشك أن تشربه.",
  },

  fa: {
    lines: ["تصمیم بگیرید", "با شواهد.", "گزارش بچ خود را", "امروز بخوانید"],
    description:
      "بیشتر برندها از شما می‌خواهند به آن‌ها اعتماد کنید. ما داده‌ها را در اختیار شما قرار می‌دهیم. بدون تبلیغات اغراق‌آمیز؛ فقط یک فایل PDF دائمی که دقیقاً نشان می‌دهد چه چیزی قرار است مصرف کنید.",
  },
};

export default function StrengthStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  const { language, isRTL } = useLanguage();
  const content = CONTENT[language];
  const lines = content.lines;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

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
          const start = index / lines.length;
          const end = (index + 1) / lines.length;

          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.08, end - 0.08, end],
            [0.25, 1, 1, 0.25]
          );

          const y = useTransform(
            scrollYProgress,
            [start, start + 0.08],
            [35, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [start, start + 0.08],
            [0.96, 1]
          );

          return (
            <span key={`${language}-${line}`}>
              <motion.span
                style={{
                  opacity,
                  y,
                  scale,
                }}
                className="mt-5 inline-block max-w-full origin-center text-[#fdf1da] will-change-transform font-victory"
              >
                {line}
              </motion.span>

              {index < lines.length - 1 && <br />}
            </span>
          );
        })}
      </h2>

      <div className="relative mx-auto mt-6 min-h-[70px] w-full max-w-full overflow-hidden px-1 min-[400px]:mt-6 min-[400px]:px-0.5 min-[640px]:mt-[30px] min-[640px]:min-h-[50px] min-[640px]:max-w-[600px] min-[640px]:px-0 md:mt-7 md:min-h-[50px] md:max-w-[50rem]">
        <motion.p
  className={`${mono.className} m-0 w-full py-4 text-[14px] leading-[1.5] text-[#fdf1da] will-change-transform min-[640px]:text-base min-[640px]:leading-[1.45] md:text-[19px]`}
  style={{
    y: useTransform(scrollYProgress, [0.75, 1], [50, 0]),
    opacity: useTransform(scrollYProgress, [0.75, 0.9], [0, 1]),
  }}
>
  {content.description}
</motion.p>
      </div>
    </section>
  );
}