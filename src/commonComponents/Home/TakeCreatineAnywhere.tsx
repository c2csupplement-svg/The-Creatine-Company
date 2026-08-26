"use client";

import Image from "next/image";
import { anton, mono } from "../fonts";
import { useLanguage } from "@/app/context/languageUseContent";

const CONTENT = {
  en: {
    title: "Take Your Daily Creatine",
    highlight: "Anywhere. Anytime.",
    description:
      "A SINGLE Dhs. 1/- sachet fits in a wallet, a gym bag, or a laptop sleeve. Tear, pour into 200-500ml of water, stir, done. No plastic tub dominating the kitchen counter. No spoon hunting. No half-scoop guesswork. Your daily 5g goes where you go.",
  },

  ar: {
    title: "خذ الكرياتين اليومي الخاص بك",
    highlight: "في أي مكان. في أي وقت.",
    description:
      "كيس واحد بسعر 1 درهم يناسب المحفظة، حقيبة الرياضة، أو غلاف الكمبيوتر المحمول. افتحه، اسكبه في 200-500 مل من الماء، حرّكه، وانتهى. لا توجد عبوات بلاستيكية تسيطر على سطح المطبخ. لا حاجة للبحث عن ملعقة. لا تخمين لنصف المكيال. جرعتك اليومية البالغة 5 غرامات معك أينما ذهبت.",
  },

  fa: {
    title: "کراتین روزانه خود را مصرف کنید",
    highlight: "هر جا. هر زمان.",
    description:
      "یک ساشه کراتین با قیمت ۱ درهم به‌راحتی در کیف پول، ساک ورزشی یا کاور لپ‌تاپ شما جا می‌شود. آن را باز کنید، داخل ۲۰۰ تا ۵۰۰ میلی‌لیتر آب بریزید، هم بزنید و تمام. بدون بسته‌های پلاستیکی بزرگ روی پیشخوان آشپزخانه. بدون جست‌وجوی پیمانه. بدون حدس زدن مقدار نصف پیمانه. ۵ گرم کراتین روزانه شما هر جا که می‌روید همراه شماست.",
  },
};

export default function TakeCreatineAnywhere() {
  const { language, isRTL } = useLanguage();

  const content = CONTENT[language];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full bg-[#843b02] text-white"
    >
      <div className="grid min-h-0 grid-cols-1 md:min-h-[700px] md:grid-cols-2 min-[1440px]:min-h-[760px]">
        <div className="relative h-[380px] min-h-[380px] w-full overflow-hidden min-[481px]:h-[420px] min-[481px]:min-h-[420px] md:h-[700px] md:min-h-[700px] min-[1440px]:h-[760px] min-[1440px]:min-h-[760px]">
          <Image
            src="/images/hero-4.png"
            alt="Creatine sachet in pocket"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-5 py-10 min-[481px]:px-6 min-[481px]:py-12 sm:px-10 sm:py-12 md:px-[7%] md:py-12 lg:px-[8%] min-[1440px]:px-[8%]">
          <div className="w-full max-w-[760px]">
            <h2
              className={`${anton.className} m-0 text-[clamp(2rem,10vw,3rem)] uppercase leading-[0.85] min-[481px]:text-[clamp(2.2rem,8vw,3.5rem)] sm:text-[clamp(2.4rem,6vw,4.5rem)] md:text-[clamp(2.2rem,3.7vw,5.2rem)] ${language !== "en"?"pb-2":"pb-0"}`}
            >
              {content.title}
            </h2>

            <div className="mt-2 inline-block max-w-full bg-[#a87847] px-3 py-2 rotate-[-1.4deg] sm:px-5 sm:py-2.5">
              <span
                className={`${anton.className} block break-words text-[clamp(2rem,10vw,3rem)] uppercase leading-[0.82] min-[481px]:text-[clamp(2.2rem,8vw,3.5rem)] sm:text-[clamp(2.4rem,6vw,4.5rem)] md:text-[clamp(2.2rem,3.7vw,5.1rem)]`}
              >
                {content.highlight}
              </span>
            </div>

            <p
              className={`${mono.className} m-0 mt-6 max-w-[720px] text-[14px] leading-[1.5] min-[481px]:text-[15px] sm:text-base md:text-[16px] lg:text-sm`}
            >
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}