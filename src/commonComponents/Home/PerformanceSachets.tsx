"use client";

import Image from "next/image";
import { anton, mono } from "../fonts";
import { useLanguage } from "@/app/context/languageUseContent";

const CONTENT = {
  en: {
    title: "10 Daily",
    highlight: "Performance Sachets",
    description:
      "Stop overpaying for basic creatine. While big brands charge massive markups on bulky tubs, we’re disrupting the entire market. Get our 10 Daily Performance Sachets for just Dhs. 9/-. That’s 10 days of pure strength and peak power for under Dhs. 1/- a serving. Claim yours today!",
  },

  ar: {
    title: "10 يوميًا",
    highlight: "أكياس الأداء",
    description:
      "توقف عن دفع مبالغ زائدة مقابل الكرياتين الأساسي. بينما تفرض العلامات التجارية الكبرى زيادات ضخمة على العلب الكبيرة، نحن نحدث ثورة في السوق بأكمله. احصل على 10 أكياس أداء يومية مقابل 9 دراهم فقط. هذا يعني 10 أيام من القوة النقية والطاقة القصوى بأقل من درهم واحد لكل جرعة. احصل على حصتك اليوم!",
  },

  fa: {
    title: "۱۰ روزانه",
    highlight: "ساشه‌های عملکرد",
    description:
      "برای کراتین معمولی هزینه اضافی پرداخت نکنید. در حالی که برندهای بزرگ برای بسته‌های حجیم قیمت‌های بسیار بالایی دریافت می‌کنند، ما در حال تغییر این بازار هستیم. ۱۰ ساشه عملکرد روزانه ما را فقط با ۹ درهم دریافت کنید. یعنی ۱۰ روز قدرت خالص و توان حداکثری با کمتر از ۱ درهم برای هر وعده. همین امروز سفارش دهید!",
  },
};

export default function PerformanceSachets() {
  const { language, isRTL } = useLanguage();

  const content = CONTENT[language];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden bg-[#502300] text-white min-h-[700px] max-[374px]:min-h-0 max-[374px]:pb-8 min-[375px]:min-h-0 min-[375px]:pb-9 min-[480px]:min-h-0 min-[480px]:pb-10 sm:min-h-[520px] sm:aspect-[16/10] sm:pb-0 md:min-h-[520px] md:aspect-[16/9] lg:min-h-[600px] xl:min-h-[680px] min-[1440px]:min-h-[760px] min-[1920px]:min-h-[900px] min-[1920px]:max-h-[1080px]"
    >
      <div className="relative h-[380px] w-full max-[374px]:h-[330px] min-[375px]:h-[370px] min-[480px]:h-[430px] sm:absolute sm:inset-0 sm:h-full">
        <Image
          src="/images/home-3.png"
          alt="Daily performance sachets"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/[0.05]" />
      </div>

      <div className="relative z-10 w-full px-[6%] pb-8 max-[374px]:px-[6%] max-[374px]:pb-7 min-[375px]:px-[7%] min-[375px]:pb-8 min-[480px]:px-[8%] min-[480px]:pb-10 sm:absolute sm:inset-x-0 sm:top-1/2 sm:-translate-y-1/2 sm:px-[6%] sm:pb-0 md:px-[6%] lg:px-[7%] xl:px-[7%] min-[1440px]:px-[7%] min-[1920px]:px-[8%]"
      >
        <div className="w-full sm:ml-auto sm:w-[46%] md:w-[46%] lg:w-[43%] lg:max-w-[700px] xl:max-w-[760px] min-[1440px]:max-w-[850px] min-[1920px]:w-[42%] min-[1920px]:max-w-[1000px]">
          <h2
            className={`${anton.className} m-0 uppercase leading-[0.83] tracking-[-0.02em] text-[clamp(2.8rem,12vw,4rem)] max-[374px]:text-[clamp(2.6rem,12vw,3.8rem)] 
            min-[375px]:text-[clamp(3rem,12vw,4.4rem)] min-[480px]:text-[clamp(3.2rem,10vw,4.8rem)] 
            sm:text-[clamp(2.8rem,6vw,4.2rem)] md:text-[clamp(3rem,5.5vw,4.8rem)] lg:text-[clamp(3.5rem,5vw,5rem)] xl:text-[clamp(4rem,5vw,5.8rem)] 
            min-[1440px]:text-[clamp(5rem,5vw,6rem)] min-[1920px]:text-[6.5rem] ${language !== "en" ? "pb-2" : "pb-0"}`}
          >
            {content.title}
          </h2>

          <div className="mt-1 inline-block max-w-full rotate-[-1.5deg] bg-[#a87847] px-2 py-1 max-[374px]:mt-1 max-[374px]:px-2 max-[374px]:py-1 min-[375px]:px-2.5 min-[375px]:py-1 min-[480px]:px-3 min-[480px]:py-1.5 sm:px-4 sm:py-2 md:py-2.5 min-[1440px]:px-4 min-[1440px]:py-2.5 min-[1920px]:px-5 min-[1920px]:py-3">
            <span
              className={`${anton.className} block whitespace-nowrap uppercase leading-[0.82] text-[clamp(1.3rem,6vw,2.7rem)] max-[374px]:text-[clamp(1.2rem,6vw,2.4rem)] min-[375px]:text-[clamp(1.4rem,6vw,3.2rem)] min-[480px]:text-[clamp(1.8rem,6vw,3.8rem)] sm:text-[clamp(2rem,4.8vw,3.6rem)] md:text-[clamp(2.2rem,4.5vw,3.8rem)] lg:text-[clamp(2.8rem,4vw,4rem)] xl:text-[clamp(3rem,4vw,4.6rem)] min-[1440px]:text-[clamp(3.5rem,4vw,4.8rem)] min-[1920px]:text-[5rem]`}
            >
              {content.highlight}
            </span>
          </div>

          <p
            className={`${mono.className} m-0 mt-3 w-full break-words text-[13px] leading-[1.45] max-[374px]:mt-2.5 max-[374px]:text-[12px] max-[374px]:leading-[1.4] min-[375px]:mt-3 min-[375px]:text-[13px] min-[480px]:mt-4 min-[480px]:text-sm sm:mt-2.5 sm:text-[15px] sm:leading-[1.4] md:text-base lg:text-[17px] xl:text-lg min-[1440px]:text-[19px] min-[1920px]:mt-6 min-[1920px]:text-[22px] min-[1920px]:leading-[1.5]`}
          >
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}