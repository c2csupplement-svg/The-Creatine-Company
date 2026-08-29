"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { anton, mono } from "../fonts";
import NavigationMenu from "../NavigationMenu";
import { useLanguage } from "../../app/context/languageUseContent";
import Navbar from "../Navbar";

export default function HomeHero() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: "CREATINE, ONE DAY A TIME.",
      subtitle: "5G CREATINE. 250MG TAURINE",
      description:
        "One pre-measured sachet. Dhs. 1/- No 90-day tubs. No lost scoops. Supports high-intensity capacity and lean mass.",
      button: "KNOW MORE",
      name: "English",
    },
    ar: {
      title: "الكرياتين: يوماً بيوم.",
      subtitle: "5 غرام كرياتين. 250 ملغ تورين.",
      description:
        "كيس واحد بمقدار مُحدَّد مسبقاً. لا حاجة لعبوات ضخمة تكفي لـ 90 يوماً، ولا قلق من ضياع مكيال القياس. يدعم القدرة على أداء التمارين عالية الكثافة ويعزز الكتلة العضلية الصافية.",
      button: "اكتشف أكثر",
      name: "العربية",
    },
    fa: {
      title: "کراتین، روز به روز.",
      subtitle: "۵ گرم کراتین. ۲۵۰ میلی‌گرم تورین",
      description:
       "یک ساشه از پیش اندازه‌گیری‌شده. ۱ درهم. قوطی‌های ۹۰ روزه نداریم. قاشق‌ها گم نمی‌شوند. از ظرفیت تمرین با شدت بالا و توده‌ی عضلانی بدون چربی پشتیبانی می‌کند.",
      button: "بیشتر بدانید",
      name: "فارسی",
    },
  };

  const currentContent = content[language];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="
        relative
        w-full
        min-h-[250px]
        overflow-hidden
        bg-[#0b1a2b]
        text-white
        aspect-[16/9]

        max-[374px]:h-[100svh]
        max-[374px]:min-h-[500px]
        max-[374px]:max-h-[700px]
        max-[374px]:aspect-auto

        min-[375px]:h-[100svh]
        min-[375px]:min-h-[560px]
        min-[375px]:max-h-[750px]
        min-[375px]:aspect-auto

        min-[480px]:min-h-[600px]
        min-[480px]:max-h-[800px]
        min-[480px]:aspect-[4/5]

        sm:min-h-[500px]
        sm:aspect-[16/10]

        md:min-h-[520px]
        md:aspect-[16/9]

        lg:min-h-[580px]

        xl:min-h-[650px]

        min-[1440px]:min-h-[750px]

        min-[1920px]:min-h-[900px]
        min-[1920px]:max-h-[1080px]
      "
    >
      <Image
        src="/images/hero-home.png"
        alt="Creatine Monohydrate"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/10" />

      <NavigationMenu backgroundImage="/images/hero-home.png" />

      <Navbar />

      <motion.div
        initial={{ opacity: 0, x: 220, scale: 0.75 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "right center" }}
        className="
          absolute
          z-[2]
          min-w-0
          overflow-hidden

          left-[5%]
          right-[5%]
          top-[52%]
          w-[90%]

          min-[375px]:left-[6%]
          min-[375px]:right-[6%]
          min-[375px]:top-[54%]
          min-[375px]:w-[88%]

          min-[480px]:left-[8%]
          min-[480px]:right-[8%]
          min-[480px]:top-[55%]
          min-[480px]:w-[84%]

          sm:left-[42%]
          sm:right-[6%]
          sm:top-[20%]
          sm:w-[52%]

          md:left-[42%]
          md:right-[7%]
          md:top-[20%]
          md:w-[51%]

          lg:left-[42%]
          lg:right-[8%]
          lg:top-[22%]
          lg:w-1/2
          lg:max-w-[700px]

          xl:max-w-[760px]

          min-[1440px]:max-w-[850px]

          min-[1920px]:left-[42%]
          min-[1920px]:right-[8%]
          min-[1920px]:top-[22%]
          min-[1920px]:w-[48%]
          min-[1920px]:max-w-[1000px]
        "
      >
        <motion.h1
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "right center" }}
          className={`
            ${anton.className}
            m-0
            overflow-wrap-anywhere
            text-[clamp(2rem,11vw,3rem)]
            uppercase
            leading-[0.92]
            tracking-[-0.025em]

            min-[375px]:text-[clamp(2.3rem,11vw,3.6rem)]

            min-[480px]:text-[clamp(3rem,10vw,4.5rem)]

            sm:text-[clamp(2.5rem,6vw,4.5rem)]

            md:text-[clamp(3.5rem,6vw,5rem)]

            lg:text-[clamp(4rem,5vw,5.8rem)]

            xl:text-[clamp(5rem,5.5vw,6.5rem)]

            min-[1440px]:text-[clamp(5.5rem,5vw,6.8rem)]

            min-[1920px]:text-[6.8rem]
          `}
        >
          {currentContent.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "right center" }}
          className="
            relative
            mt-2
            inline-block
            max-w-full
            box-border
            overflow-hidden
            rotate-[-1.4deg]

            px-2
            py-1.5

            min-[375px]:mt-2.5
            min-[375px]:px-3
            min-[375px]:py-2

            min-[480px]:mt-3
            min-[480px]:px-4
            min-[480px]:py-2

            sm:mt-3
            sm:px-4
            sm:py-2.5

            md:mt-3
            md:px-[18px]
            md:py-2.5

            lg:mt-3.5
            lg:px-5
            lg:py-3

            xl:mt-4
            xl:px-[22px]
            xl:py-3.5

            min-[1440px]:mt-4
            min-[1440px]:px-6
            min-[1440px]:py-4

            min-[1920px]:mt-5
            min-[1920px]:px-7
            min-[1920px]:py-[18px]
          "
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "right center" }}
            className="absolute inset-0 bg-[#fdf1da]"
          />

          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`
              ${anton.className}
              relative
              z-10
              block
              overflow-wrap-anywhere
              text-[#502300]
              text-[clamp(0.85rem,5vw,1.2rem)]
              leading-none

              min-[375px]:text-[clamp(1rem,5.5vw,1.5rem)]

              min-[480px]:text-[clamp(1.2rem,5vw,1.8rem)]

              sm:text-[clamp(1.2rem,3vw,2rem)]

              md:text-[clamp(1.5rem,3vw,2.4rem)]

              lg:text-[clamp(1.8rem,2.7vw,2.8rem)]

              xl:text-[clamp(2rem,2.5vw,3rem)]

              min-[1440px]:text-[clamp(2.2rem,2.4vw,3.1rem)]

              min-[1920px]:text-[3.1rem]
            `}
          >
            {currentContent.subtitle}
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "right center" }}
          className={`
            ${mono.className}
            mb-0
            mt-3
            w-full
            max-w-full
            whitespace-normal
            overflow-wrap-anywhere
            text-[0.75rem]
            leading-[1.45]

            min-[375px]:mt-3
            min-[375px]:text-[0.8rem]

            min-[480px]:mt-4
            min-[480px]:text-[0.9rem]

            sm:mt-4
            sm:text-[0.85rem]

            md:mt-4
            md:max-w-[620px]
            md:text-[0.875rem]

            lg:mt-4
            lg:w-[90%]
            lg:text-base

            xl:mt-4
            xl:text-[1.1rem]

            min-[1440px]:mt-5
            min-[1440px]:w-[85%]
            min-[1440px]:text-[1.2rem]

            min-[1920px]:mt-6
            min-[1920px]:w-4/5
            min-[1920px]:text-[1.35rem]
            min-[1920px]:leading-[1.5]

            max-[639px]:max-[600px]:mt-2
          `}
        >
          {currentContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "right center" }}
        >
          <Link
            href="/about"
            className={`
              ${anton.className}
              mt-3
              inline-flex
              items-center
              justify-center
              gap-2
              whitespace-nowrap
              rounded-[6px]
              bg-[#fdf1da]
              px-3.5
              py-2
              text-[0.8rem]
              font-medium
              text-[#502300]
              no-underline
              transition-transform
              duration-150
              hover:scale-105

              min-[375px]:mt-3
              min-[375px]:px-4
              min-[375px]:py-2.5
              min-[375px]:text-[0.85rem]

              min-[480px]:mt-4
              min-[480px]:px-[18px]
              min-[480px]:py-2.5
              min-[480px]:text-[0.9rem]

              sm:mt-4
              sm:px-4
              sm:py-2.5
              sm:text-[0.9rem]

              md:mt-4
              md:px-5
              md:py-3
              md:text-[0.95rem]

              lg:mt-4
              lg:px-5
              lg:py-3
              lg:text-base

              xl:mt-5
              xl:px-6
              xl:py-3
              xl:text-[1.1rem]

              min-[1440px]:mt-5
              min-[1440px]:px-6
              min-[1440px]:py-3
              min-[1440px]:text-[1.15rem]

              min-[1920px]:mt-6
              min-[1920px]:px-7
              min-[1920px]:py-3.5
              min-[1920px]:text-[1.25rem]

              max-[639px]:max-[600px]:mt-2
              max-[639px]:max-[600px]:px-3
              max-[639px]:max-[600px]:py-2
              max-[639px]:max-[600px]:text-[0.75rem]
            `}
          >
            {currentContent.button}

            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              {isRTL ? "←" : "→"}
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}