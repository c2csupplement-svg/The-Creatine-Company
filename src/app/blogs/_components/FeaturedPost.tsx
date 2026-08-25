import Image from "next/image";
import { anton } from "@/commonComponents/fonts";
import { useLanguage } from "@/app/context/languageUseContent";

export default function FeaturedPost() {

  const {language} = useLanguage();

  return (
    <section
    dir={language === "ar"?"rtl" : "ltr"}
    className="w-full overflow-hidden box-border px-4 pb-12 sm:px-5 sm:pb-14 md:px-7 md:pb-16 lg:px-8 lg:pb-16 xl:px-10 2xl:px-20 2xl:pb-24">
      <div
        className="
          mx-auto grid w-full max-w-[1440px]
          grid-cols-1 items-center gap-7
          sm:gap-8
          md:grid-cols-2 md:gap-6
          lg:gap-8
          xl:gap-10
          2xl:max-w-[1440px] 2xl:gap-16
        "
      >
        {/* Image */}
        <div
          className="
            relative aspect-[4/3] w-full overflow-hidden rounded-2xl
            sm:rounded-2xl
            md:rounded-[1.25rem]
            lg:rounded-[1.35rem]
            2xl:rounded-3xl
          "
        >
          <Image
            src="/images/man-bottle.png"
            alt="Man training with a shaker bottle"
            fill
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1023px) 50vw,
              50vw
            "
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="min-w-0">
          <h2
            className={`
              ${anton.className}
              m-0
              max-w-full
              text-[#82572b]
              uppercase
              leading-[0.9]
              tracking-[clamp(0.5px,0.12vw,1.8px)]
              text-[clamp(3rem,14vw,4rem)]
              
              sm:text-[4rem]
              
              md:text-[3.8rem]
              
              lg:text-[4.6rem]
              
              xl:text-[5.5rem]
              
              2xl:text-[8rem]
            `}
          >
            {language !== "ar"?"POWER YOUR TRAINING, BUILD":"عَزِّز تَمرينك، ابنِ"}
            <br />
            {language !== "ar"?"YOUR STRENGTH":"قوتك"}
          </h2>

          <p
            className="
              mt-3.5 mb-0 w-full max-w-full
              text-[0.85rem]
              leading-[1.5]
              text-[#502300]/90

              sm:mt-4
              sm:max-w-full
              sm:text-[0.9rem]

              md:max-w-[22rem]
              md:text-[0.85rem]

              lg:max-w-[25rem]
              lg:text-[0.9rem]

              xl:max-w-[27rem]
              xl:text-[0.95rem]

              2xl:max-w-[32rem]
              2xl:text-base
            "
          >
            {language !== "ar"
            ?<span>Creatine is one of the most researched and effective supplements
            for improving strength, power, and high-intensity training
            performance. By supporting your muscles&apos; ability to produce
            quick energy, creatine can help you train harder, recover better,
            and make consistent progress over time.</span>
            :<span>الكرياتين هو واحد من المكملات الغذائية الأكثر دراسة وفعالية لتحسين القوة والطاقة وأداء التدريبات عالية الشدة. من خلال دعم قدرة عضلاتك على إنتاج الطاقة بسرعة، يمكن للكرياتين أن يساعدك على التدريب بشكل أقوى، والتعافي بشكل أفضل، وإحراز تقدم مستمر مع مرور الوقت.</span>}
          </p>

          <button
            type="button"
            className={`
              ${anton.className}
              mt-5
              inline-flex
              items-center
              gap-3
              rounded-md
              border-0
              bg-[#a87847]
              px-5 py-2.5
              text-[0.8rem]
              leading-tight
              tracking-[0.025em]
              text-white
              transition-opacity
              duration-150
              hover:opacity-90
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#502300]
              focus-visible:ring-offset-2

              sm:mt-5
              sm:px-5 sm:py-3

              md:mt-4
              md:px-5 md:py-2.5

              lg:px-5.5

              xl:px-6

              2xl:mt-6
              2xl:px-6
              2xl:py-3
              2xl:text-sm
            `}
          >
            {language !== "ar"?"READ MORE":"اقرأ المزيد"}
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}