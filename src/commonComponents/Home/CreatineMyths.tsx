"use client";

import { useState, useRef, useEffect } from "react";
import { anton } from "../fonts";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  animate,
} from "framer-motion";
import { useLanguage } from "@/app/context/languageUseContent";

const MYTHS = [
  {
    title: "CREATINE BEYOND THE GYM.",
    body: "The ISSN notes that a daily 5g dose across the lifespan may support general health and fitness, not just elite athletic performance. Dietary creatine comes almost entirely from meat and fish.",
  },
  {
    title: "Creatine causes hair loss.",
    body: "The data says no. This fear traces back to a single 2009 study of 16 rugby players that measured a hormone (DHT), not actual hair loss. It has never been replicated.",
  },
  {
    title: "Creatine damages your kidneys.",
    body: "In healthy individuals, it does not. Creatine can slightly raise your blood levels. This is a harmless by-product of storing more creatine in your muscles, not a sign of kidney damage.",
  },
  {
    title: "Creatine makes you fat and puffy.",
    body: "Our sachet has 12 kcal and zero added sugar. It cannot add fat. Any initial weight change on the scale is intracellular water—water drawn directly inside your muscle cells to support high-intensity performance.",
  },
];

const arMyths = [
  {
    title: "الكرياتين يتجاوز حدود الصالة الرياضية.",
    body: "تشير الجمعية الدولية للتغذية الرياضية (ISSN) إلى أن تناول جرعة يومية قدرها 5 غرامات على مدى الحياة قد يدعم الصحة العامة واللياقة البدنية، وليس فقط الأداء الرياضي الاحترافي. ويأتي الكرياتين الغذائي تقريبًا بشكل كامل من اللحوم والأسماك.",
  },
  {
    title: "الكرياتين يسبب تساقط الشعر.",
    body: "البيانات تقول لا. يعود هذا الاعتقاد إلى دراسة واحدة أُجريت عام 2009 على 16 لاعبًا للرجبي، حيث قاست مستوى هرمون (DHT) وليس تساقط الشعر الفعلي. ولم يتم تكرار هذه النتائج في دراسات أخرى.",
  },
  {
    title: "الكرياتين يضر بالكلى.",
    body: "لدى الأشخاص الأصحاء، لا يسبب الكرياتين ضررًا للكلى. قد يؤدي الكرياتين إلى ارتفاع طفيف في مستوياته في الدم. وهذا ناتج ثانوي غير ضار عن تخزين المزيد من الكرياتين في العضلات، وليس علامة على تلف الكلى.",
  },
  {
    title: "الكرياتين يجعلك تكتسب الدهون ويزيد الانتفاخ.",
    body: "يحتوي ظرفنا على 12 سعرة حرارية وبدون سكر مضاف. ولا يمكنه أن يضيف دهونًا إلى الجسم. أي تغير أولي في الوزن على الميزان يكون بسبب الماء داخل الخلايا، حيث يتم سحب الماء مباشرة إلى داخل خلايا العضلات لدعم الأداء أثناء التمارين عالية الشدة.",
  },
];

const faMyths = [
  {
    title: "کراتین فراتر از باشگاه است.",
    body: "طبق نظر انجمن بین‌المللی تغذیه ورزشی (ISSN)، مصرف روزانه ۵ گرم کراتین در طولانی‌مدت می‌تواند از سلامت عمومی و آمادگی جسمانی حمایت کند، نه فقط عملکرد ورزشکاران حرفه‌ای. کراتین غذایی تقریباً به طور کامل از گوشت و ماهی دریافت می‌شود.",
  },
  {
    title: "کراتین باعث ریزش مو می‌شود.",
    body: "داده‌های موجود چنین چیزی را تأیید نمی‌کنند. این نگرانی از یک مطالعه در سال ۲۰۰۹ روی ۱۶ بازیکن راگبی ناشی شد که یک هورمون (DHT) را اندازه‌گیری کرد، نه ریزش واقعی مو را. این نتیجه تاکنون در مطالعات دیگر تکرار نشده است.",
  },
  {
    title: "کراتین به کلیه‌ها آسیب می‌زند.",
    body: "در افراد سالم، شواهدی از آسیب کلیوی ناشی از مصرف معمول کراتین وجود ندارد. کراتین ممکن است سطح کراتین خون را کمی افزایش دهد. این افزایش می‌تواند نتیجه ذخیره بیشتر کراتین در عضلات باشد و لزوماً نشانه آسیب کلیه نیست.",
  },
  {
    title: "کراتین باعث چاقی و پف‌کردگی می‌شود.",
    body: "ساشه ما فقط ۱۲ کالری دارد و هیچ شکر افزوده‌ای ندارد. بنابراین باعث افزایش چربی نمی‌شود. هر تغییر اولیه در وزن معمولاً مربوط به آب داخل سلول‌های عضلانی است؛ آبی که برای حمایت از عملکرد در تمرینات پرفشار مستقیماً وارد سلول‌های عضله می‌شود.",
  },
];

export default function CreatineMyths() {
  const { language } = useLanguage();

  const isRtl = language === "ar" || language === "fa";

  const myths =
    language === "ar"
      ? arMyths
      : language === "fa"
        ? faMyths
        : MYTHS;

  const mythLoop = [...myths, ...myths];

  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  const [loopWidth, setLoopWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const speed = 25;

  useEffect(() => {
    const calculateDimensions = () => {
      const track = trackRef.current;

      if (!track) return;

      const cards = Array.from(
        track.children
      ) as HTMLElement[];

      if (!cards.length) return;

      const firstLoopCards = cards.slice(0, myths.length);

      if (!firstLoopCards.length) return;

      const firstCard = firstLoopCards[0];

      const styles = window.getComputedStyle(track);

      const gap = parseFloat(styles.gap || "0");

      const totalCardsWidth = firstLoopCards.reduce(
        (total, card) => total + card.offsetWidth,
        0
      );

      const calculatedLoopWidth =
        totalCardsWidth + gap * (firstLoopCards.length - 1);

      setLoopWidth(calculatedLoopWidth);

      setCardWidth(firstCard.offsetWidth + gap);

      x.set(isRtl ? -calculatedLoopWidth : 0);
    };

    const timer = window.setTimeout(calculateDimensions, 50);

    const resizeObserver = new ResizeObserver(() => {
      calculateDimensions();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [isRtl, myths.length, x]);

  useAnimationFrame((_, delta) => {
    if (isPaused || loopWidth <= 0) return;

    const movement = speed * (delta / 1000);

    let currentX = x.get();

    if (isRtl) {
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

  const moveCarousel = (direction: "left" | "right") => {
    if (!cardWidth || !loopWidth) return;

    setIsPaused(true);

    const currentX = x.get();

    let movement: number;

    if (isRtl) {
      movement =
        direction === "left" ? cardWidth : -cardWidth;
    } else {
      movement =
        direction === "left" ? -cardWidth : cardWidth;
    }

    let targetX = currentX + movement;

    if (!isRtl) {
      if (targetX <= -loopWidth) {
        targetX = 0;
      }

      if (targetX > 0) {
        targetX = -loopWidth + cardWidth;
      }
    } else {
      if (targetX >= 0) {
        targetX = -loopWidth;
      }

      if (targetX < -loopWidth) {
        targetX = 0;
      }
    }

    animate(x, targetX, {
      duration: 0.45,
      ease: "easeInOut",
    });

    window.setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  const toggleReadMore = (index: number) => {
    setExpandedCard((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="overflow-hidden bg-[#fdf1da] px-5 py-10 sm:px-10 sm:py-14"
    >
      <div className="mx-auto grid w-full max-w-[1500px] items-center gap-8 md:grid-cols-[0.38fr_0.62fr] md:gap-6">
        <div
          className={`relative z-20 min-w-0 shrink-0 ${
            isRtl
              ? "pr-2 sm:pr-4 lg:pr-12"
              : "pl-2 sm:pl-4 lg:pl-12"
          }`}
        >
          <span
            className={`${anton.className} block text-[clamp(2rem,3vw,3.5rem)] uppercase leading-none ${
              language !== "en" ? "pb-2" : "pb-0"
            }`}
          >
            {language === "en"
              ? "MYTHS"
              : language === "ar"
                ? "الأساطير"
                : "افسانه‌ها"}
          </span>

          <span
            dir={isRtl ? "rtl" : "ltr"}
            className={`${anton.className} mt-[-4px] inline-block max-w-full rotate-[-2deg] bg-[#a87847] px-3 py-2 text-[clamp(1.8rem,3.2vw,4rem)] uppercase leading-[0.9] text-white sm:px-5 sm:py-3`}
          >
            {language === "en"
              ? "CREATINE IS ONLY FOR BODYBUILDERS."
              : language === "ar"
                ? "الكرياتين مخصص فقط لبناة الأجسام."
                : "کراتین فقط برای بدنسازان است."}
          </span>
        </div>

        <div
          className="relative min-w-0 overflow-hidden pb-16 pt-2"
          dir="ltr"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#fdf1da] via-[#fdf1da]/80 to-transparent sm:w-16" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#fdf1da] via-[#fdf1da]/80 to-transparent sm:w-16" />

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
            onDragStart={() => setIsPaused(true)}
            onDragEnd={() => {
              window.setTimeout(() => {
                setIsPaused(false);
              }, 300);
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex w-max cursor-grab flex-row gap-5 will-change-transform active:cursor-grabbing"
          >
            {mythLoop.map((myth, index) => {
              const isExpanded = expandedCard === index;

              return (
                <motion.article
                  key={`${myth.title}-${index}`}
                  layout
                  dir={isRtl ? "rtl" : "ltr"}
                  transition={{
                    layout: {
                      duration: 0.35,
                      ease: "easeInOut",
                    },
                  }}
                  className={`relative box-border flex w-[300px] shrink-0 flex-col rounded-[20px] border-[3px] bg-gradient-to-br from-[#d99a55] via-[#a8703c] to-[#7a4d28] p-6 text-[#fdf1da] shadow-lg sm:w-[340px] sm:p-7 lg:w-[400px] lg:p-8 ${
                    isExpanded
                      ? "z-30 min-h-[520px] shadow-2xl"
                      : "z-0 min-h-[390px]"
                  }`}
                >
                  <div className="mb-0 text-[3rem] leading-none text-[#fdf1da] sm:text-[10rem]">
                    &ldquo;
                  </div>

                  <h3
                    className={`${anton.className} mb-0 text-[1.8rem] uppercase leading-[1.05] sm:mt-3 sm:text-[2rem] lg:-mt-10 lg:text-[2.2rem] ${
                      isRtl ? "text-right" : "text-left"
                    }`}
                  >
                    {myth.title}
                  </h3>

                  <p
                    className={`mt-3 mb-0 flex-1 font-sf text-[21px] font-semibold leading-[1.3] sm:text-[22px] lg:text-[23px] ${
                      isExpanded
                        ? "block overflow-visible"
                        : "line-clamp-3 overflow-hidden"
                    } ${
                      isRtl ? "text-right" : "text-left"
                    }`}
                  >
                    {myth.body}
                  </p>

                  <motion.button
                    type="button"
                    onClick={() => toggleReadMore(index)}
                    aria-expanded={isExpanded}
                    whileTap={{ scale: 0.96 }}
                    dir={isRtl ? "rtl" : "ltr"}
                    className={`${anton.className} z-40 mt-6 flex cursor-pointer items-center gap-2 self-end border-0 bg-transparent p-0 text-[1.5rem] uppercase leading-none text-[#fdf1da] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fdf1da] sm:text-[1.6rem] lg:text-[1.7rem]`}
                  >
                    {isRtl
                      ? isExpanded
                        ? language === "fa"
                          ? "کمتر بخوانید"
                          : "اقرأ أقل"
                        : language === "fa"
                          ? "بیشتر بخوانید"
                          : "اعرف أكثر"
                      : isExpanded
                        ? "READ LESS"
                        : "READ MORE"}

                    <span
                      className={`text-[1.3rem] leading-none sm:text-[1.4rem] ${
                        isRtl ? "rotate-180" : ""
                      }`}
                    >
                      →
                    </span>
                  </motion.button>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="absolute bottom-1 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
            <button
              type="button"
              aria-label={
                isRtl ? "البطاقة السابقة" : "Previous card"
              }
              onClick={() => moveCarousel("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#502300] text-2xl leading-none text-[#fdf1da] shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 sm:h-12 sm:w-12"
            >
              {isRtl ? "→" : "←"}
            </button>

            <button
              type="button"
              aria-label={
                isRtl ? "البطاقة التالية" : "Next card"
              }
              onClick={() => moveCarousel("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#502300] text-2xl leading-none text-[#fdf1da] shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 sm:h-12 sm:w-12"
            >
              {isRtl ? "←" : "→"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}