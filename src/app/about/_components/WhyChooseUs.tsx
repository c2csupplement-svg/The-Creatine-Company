"use client";

import { anton } from "../../../commonComponents/fonts";
import { IconPurity, IconSachet, IconFlask } from "./icons";
import { useLanguage } from "@/app/context/languageUseContent";

const FEATURES = [
  {
    title: "100% Pure & High-Quality Creatine",
    arTitle: "كرياتين نقي وعالي الجودة بنسبة 100%",
    faTitle: "کراتین ۱۰۰٪ خالص و باکیفیت",
    icon: IconPurity,
  },
  {
    title: "Easy-to-Carry Single-Serve Sachets",
    arTitle: "أظرف فردية سهلة الحمل والاستخدام",
    faTitle: "ساشه‌های تک‌مصرف و قابل حمل آسان",
    icon: IconSachet,
  },
  {
    title: "Lab-Tested & Trusted Quality",
    arTitle: "جودة موثوقة ومختبرة في المختبر",
    faTitle: "کیفیت قابل اعتماد و آزمایش‌شده در آزمایشگاه",
    icon: IconFlask,
  },
];

const CONTENT = {
  en: {
    why: "WHY",
    choose: "CHOOSE US",
    paragraphOne:
      "At The Creatine Company, we believe creatine should be simple, effective, and uncompromising in quality. That's why we focus on delivering premium-grade creatine with exceptional purity, rigorous quality testing, and convenient single-serve sachets that fit seamlessly into your daily routine.",
    paragraphTwo:
      "Whether you're training for strength, muscle growth, or improved performance, every serving is designed to help you perform at your best—without unnecessary fillers or complexity.",
  },

  ar: {
    why: "لماذا",
    choose: "اخترنا",
    paragraphOne:
      "في شركة الكرياتين، نحن نؤمن بأن الكرياتين يجب أن يكون بسيطًا وفعالًا وبدون التهاون في الجودة. لهذا السبب نركز على تقديم كرياتين عالي الجودة بنقاء استثنائي، واختبارات جودة صارمة، وأكياس فردية مريحة تناسب روتينك اليومي بسهولة.",
    paragraphTwo:
      "سواء كنت تتدرب من أجل القوة أو زيادة العضلات أو تحسين الأداء، كل حصة مصممة لمساعدتك على تقديم أفضل أداء لديك—دون إضافات غير ضرورية أو تعقيدات.",
  },

  fa: {
    why: "چرا",
    choose: "ما را انتخاب کنید",
    paragraphOne:
      "در شرکت کراتین، ما باور داریم که کراتین باید ساده، مؤثر و از نظر کیفیت بدون هیچ‌گونه سازش باشد. به همین دلیل، ما بر ارائه کراتین باکیفیت و خلوص بالا، آزمایش‌های دقیق کیفیت و ساشه‌های تک‌مصرف و راحت تمرکز می‌کنیم که به‌راحتی با برنامه روزانه شما هماهنگ می‌شوند.",
    paragraphTwo:
      "چه برای افزایش قدرت، رشد عضلات یا بهبود عملکرد تمرین می‌کنید، هر وعده به گونه‌ای طراحی شده است که به شما کمک کند بهترین عملکرد خود را داشته باشید؛ بدون مواد پرکننده غیرضروری یا پیچیدگی.",
  },
};

export default function WhyChooseUs() {
  const { language, isRTL } = useLanguage();

  const content = CONTENT[language];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full overflow-hidden bg-[#fdf1da] px-4 py-14 text-[#3a2416] min-[376px]:px-5 min-[376px]:py-16 sm:px-6 sm:py-18 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 xl:py-26 2xl:px-16 2xl:py-28 min-[1600px]:px-16 min-[1600px]:py-28 min-[1920px]:px-20 min-[1920px]:py-32"
    >
      <div className="mx-auto w-full max-w-5xl text-center min-[1280px]:max-w-[56rem] min-[1440px]:max-w-[60rem] min-[1600px]:max-w-[64rem] min-[1920px]:max-w-6xl">
        <h2
          className={`font-victory text-[#502300] uppercase leading-[0.95] tracking-[-0.04em] text-[clamp(2.5rem,11vw,3.5rem)] min-[376px]:text-[clamp(2.6rem,10vw,3.7rem)] sm:text-[3.2rem] md:text-[clamp(3rem,7vw,4rem)] lg:text-[clamp(3.5rem,5vw,4.5rem)] 
          xl:text-[clamp(4rem,5vw,5.5rem)] 2xl:text-[clamp(5rem,5vw,6.5rem)] min-[1600px]:text-[clamp(5.5rem,5vw,7rem)] min-[1920px]:text-[7rem] ${language === "fa"?"mb-5":"mb-1"}`}
        >
          {content.why}
        </h2>

        <div className="mx-auto inline-block max-w-full rotate-[-2deg] bg-[#a87847] px-4 py-2 text-white min-[376px]:px-5 sm:px-7 sm:py-2 md:px-8 lg:px-10 xl:px-12 2xl:px-14 min-[1600px]:px-16 min-[1920px]:px-18">
          <h2
            className={`font-victory mt-3 text-[clamp(2.2rem,9vw,3.5rem)] uppercase leading-[0.95] tracking-[-0.02em] text-white min-[376px]:text-[clamp(2.3rem,8.5vw,3.7rem)] sm:text-[3.2rem] md:text-[clamp(3rem,6vw,4rem)] lg:text-[clamp(3.5rem,5vw,4.8rem)] xl:text-[clamp(4rem,4.5vw,5rem)] 2xl:text-[5rem] min-[1600px]:text-[5.2rem] min-[1920px]:text-[5.5rem]`}
          >
            {content.choose}
          </h2>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col gap-5 text-[0.9rem] leading-[1.7] sm:mt-9 sm:gap-6 sm:text-[0.95rem] sm:leading-[1.75] md:mt-10 md:max-w-[42rem] md:text-[0.95rem] md:leading-[1.8] lg:max-w-[48rem] lg:text-[1rem] lg:leading-[1.9] xl:max-w-[52rem] xl:text-[1.05rem] xl:leading-[1.95] 2xl:max-w-[60rem] 2xl:text-[1.15rem] 2xl:leading-[2]">
          <p className="m-0">{content.paragraphOne}</p>

          <p className="m-0">{content.paragraphTwo}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 min-[376px]:mt-11 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:max-w-4xl md:grid-cols-3 md:gap-4 lg:mt-14 lg:max-w-5xl lg:gap-5 xl:max-w-[68rem] xl:gap-5 2xl:mt-16 2xl:max-w-[74rem] 2xl:gap-6 min-[1600px]:max-w-[78rem] min-[1600px]:gap-6 min-[1920px]:mt-[4.5rem] min-[1920px]:max-w-[82rem] min-[1920px]:gap-7">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;

          const title =
            language === "en"
              ? feature.title
              : language === "ar"
                ? feature.arTitle
                : feature.faTitle;

          return (
            <article
              key={feature.title}
              className={`flex min-w-0 flex-col rounded-xl bg-[#a87847] p-6 text-white transition-transform duration-300 hover:-translate-y-1 min-[376px]:p-6 sm:p-6 sm:text-[1rem] md:p-5 md:text-[1rem] lg:p-6 lg:text-[1.08rem] xl:p-7 xl:text-[1.18rem] 2xl:p-9 2xl:text-[1.28rem] min-[1600px]:p-9 min-[1600px]:text-[1.3rem] min-[1920px]:rounded-2xl min-[1920px]:p-10 min-[1920px]:text-[1.35rem] ${
                isRTL ? "items-end text-right" : "items-start text-left"
              }`}
            >
              <Icon
                className="mb-4 h-8 w-8 shrink-0 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 2xl:h-11 2xl:w-11 min-[1920px]:mb-5 min-[1920px]:h-11 min-[1920px]:w-11"
              />

              <span
                className={`${anton.className} text-[1rem] uppercase leading-[1.2] min-[376px]:text-[1.05rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.08rem] xl:text-[1.18rem] 2xl:text-[1.28rem] min-[1600px]:text-[1.3rem] min-[1920px]:text-[1.35rem]`}
              >
                {title}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}