"use client";

import { useState, useRef, useEffect } from "react";
import { anton, mono } from "../fonts";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
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

  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [loopWidth, setLoopWidth] = useState(0);

  const speed = 25;

  useEffect(() => {
    const calculateLoopWidth = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const singleLoopWidth = totalWidth / 2;

      setLoopWidth(singleLoopWidth);
      x.set(0);
    };

    calculateLoopWidth();

    const resizeObserver = new ResizeObserver(() => {
      calculateLoopWidth();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", calculateLoopWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateLoopWidth);
    };
  }, [isRtl, x]);

  useAnimationFrame((_, delta) => {
    if (isHovered || loopWidth <= 0) return;

    const movement = speed * (delta / 1000);

    let currentX = x.get();

    if (isRtl) {
      currentX += movement;

      if (currentX >= loopWidth) {
        currentX = 0;
      }
    } else {
      currentX -= movement;

      if (currentX <= -loopWidth) {
        currentX = 0;
      }
    }

    x.set(currentX);
  });

  const toggleReadMore = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="overflow-hidden bg-[#fdf1da] px-5 py-10 sm:px-10 sm:py-14"
    >
      <div className="mx-auto grid w-full max-w-[1500px] items-center gap-8 md:grid-cols-[0.38fr_0.62fr] md:gap-6">
        <div className="relative z-20 min-w-0 shrink-0 pl-2 sm:pl-4 lg:pl-12">
          <span
            className={`${anton.className} block text-[clamp(2rem,3vw,3.5rem)] uppercase leading-none ${language !== "en"?"pb-2":"pb-0"}`}
          >
            {language === "en"
              ? "MYTHS"
              : language === "ar"
              ? "الأساطير"
              : "افسانه‌ها"}
          </span>

          <span
            className={`${anton.className} mt-[-4px] inline-block bg-[#a87847] px-3 py-1 text-[clamp(2rem,3.5vw,4rem)] uppercase leading-none text-white rotate-[-2deg] sm:px-5 sm:py-2`}
          >
            {language === "en"
              ? "CREATINE IS ONLY FOR BODYBUILDERS."
              : language === "ar"
              ? "الكرياتين مخصص فقط لبناة الأجسام."
              : "کراتین فقط برای بدنسازان است."}
          </span>
        </div>

        <div className="relative min-w-0 overflow-hidden py-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#fdf1da] via-[#fdf1da]/80 to-transparent sm:w-16" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#fdf1da] via-[#fdf1da]/80 to-transparent sm:w-16" />

          <motion.div
            ref={trackRef}
            style={{
              x,
              direction: "ltr",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex w-max gap-4 will-change-transform ${
              isRtl ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {mythLoop.map((myth, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <motion.article
                  key={`${myth.title}-${index}`}
                  layout
                  dir={isRtl ? "rtl" : "ltr"}
                  className={`relative box-border w-[250px] shrink-0 rounded-[3px] bg-[#a87847] p-5 text-[#fdf1da] sm:w-[300px] sm:min-h-[390px] sm:p-6 lg:w-[270px] lg:min-h-[380px] ${
                    isExpanded
                      ? "z-30 min-h-[430px] shadow-xl"
                      : "z-0 min-h-[360px]"
                  }`}
                >
                  <div className="text-[1.875rem] leading-none">
                    &ldquo;
                  </div>

                  <h3
                    className={`${anton.className} mt-1 mb-0 text-[1.5rem] uppercase leading-[0.92] sm:text-[1.875rem]`}
                  >
                    {myth.title}
                  </h3>

                  <p
                    className={`${mono.className} mt-6 mb-0 pb-10 text-[19px] leading-[1.2] ${
                      isExpanded
                        ? "block overflow-visible"
                        : "line-clamp-6 overflow-hidden"
                    }`}
                  >
                    {myth.body}
                  </p>

                  <motion.button
                    type="button"
                    onClick={() => toggleReadMore(index)}
                    aria-expanded={isExpanded}
                    whileHover={{
                      x: isRtl ? -3 : 3,
                      opacity: 0.7,
                    }}
                    whileTap={{ scale: 0.96 }}
                    className={`${anton.className} absolute bottom-5 right-5 z-40 flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[1.4rem] uppercase leading-none text-[#fdf1da] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fdf1da] sm:bottom-6 sm:right-6`}
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
                      className={`text-[1.1rem] leading-none ${
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
        </div>
      </div>
    </section>
  );
}