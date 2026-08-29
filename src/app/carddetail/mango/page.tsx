"use client";

import { FaBan, FaCanadianMapleLeaf, FaFlask, FaChevronDown, FaStar } from "react-icons/fa";
import Footer from "@/commonComponents/Footer";
import Navbar from "@/commonComponents/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/context/languageUseContent";
import { motion, useAnimation } from "framer-motion";

const ratings = [
  { stars: 5, count: 42, percentage: 88 },
  { stars: 4, count: 32, percentage: 67 },
  { stars: 3, count: 17, percentage: 35 },
  { stars: 2, count: 4, percentage: 8 },
  { stars: 1, count: 2, percentage: 4 },
];

const products = [
  {
    id: 1,
    link: "/carddetail/strawberry",
    image: "/images/image 405.jpg",
    title: "strawberry",
  },
  {
    id: 2,
    link: "/carddetail/blueberry",
    image: "/images/blue.png",
    title: "blueberry",
  },
  {
    id: 3,
    link: "/carddetail/strawberry",
    image: "/images/image 405.jpg",
    title: "strawberry",
  },
  {
    id: 4,
    link: "/carddetail/mango",
    image: "/images/image 404.jpg",
    title: "mango",
  },
];

type Review = {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  arText: string;
  faText: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "RAHUL S.",
    date: "12-07-26",
    rating: 5,
    text: "Being a college student, spending ₹1,500 upfront on a big tub was always a stretch. Getting quality creatine for just ₹1 a day has made a huge difference for my budget. It feels just as good as the expensive imported brands.",
    arText:
      "بصفتي طالبًا جامعيًا، كان دفع 1500 روبية مقدمًا مقابل عبوة كبيرة أمرًا صعبًا دائمًا. الحصول على كرياتين عالي الجودة مقابل روبية واحدة فقط يوميًا أحدث فرقًا كبيرًا في ميزانيتي. أشعر أنه بجودة العلامات التجارية المستوردة باهظة الثمن نفسها.",
    faText:
      "به عنوان یک دانشجو، پرداخت ۱۵۰۰ روپیه برای یک بسته بزرگ همیشه برای بودجه‌ام سخت بود. دریافت کراتین باکیفیت فقط با روزی ۱ روپیه تفاوت بزرگی در هزینه‌هایم ایجاد کرده است. کیفیت آن به اندازه برندهای وارداتی گران‌قیمت خوب است.",
  },
  {
    id: 2,
    name: "KABIR M.",
    date: "05-08-26",
    rating: 3,
    text: "Honestly, I thought ₹1 creatine had to be too good to be true. I scanned the QR code, checked the NABL lab report for my batch, and decided to give it a try. It mixes really well, and my lifts have been improving. For the price, it is seriously impressive.",
    arText:
      "بصراحة، اعتقدت أن الكرياتين بسعر روبية واحدة لا يمكن أن يكون حقيقيًا. قمت بمسح رمز QR، وراجعت تقرير مختبر NABL الخاص بالدفعة التي حصلت عليها، وقررت تجربته. يمتزج بشكل جيد جدًا، وقد بدأت ألاحظ تحسنًا في أوزاني أثناء التمرين. بالنسبة لهذا السعر، فهو مذهل حقًا.",
    faText:
      "راستش فکر می‌کردم کراتین با قیمت ۱ روپیه نمی‌تواند آن‌قدر خوب باشد. کد QR را اسکن کردم، گزارش آزمایشگاه NABL مربوط به محصول خودم را بررسی کردم و تصمیم گرفتم آن را امتحان کنم. به‌خوبی حل می‌شود و رکوردهای تمرینی‌ام هم در حال بهتر شدن هستند. با توجه به قیمت، واقعاً فوق‌العاده است.",
  },
  {
    id: 3,
    name: "ANJALI D.",
    date: "28-07-26",
    rating: 4,
    text: "Every monsoon, my old creatine tub would absorb moisture and turn into a hard block. These foil sachets have been a lifesaver. The powder stays completely dry, and I no longer have to dig around for a scoop.",
    arText:
      "في كل موسم أمطار، كانت عبوة الكرياتين القديمة تمتص الرطوبة وتتحول إلى كتلة صلبة. هذه الأكياس المصنوعة من رقائق الألومنيوم كانت حلًا رائعًا بالنسبة لي. يبقى المسحوق جافًا تمامًا، ولم أعد بحاجة إلى البحث عن الملعقة.",
    faText:
      "هر فصل باران، قوطی قدیمی کراتینم رطوبت جذب می‌کرد و به یک توده سفت تبدیل می‌شد. این ساشه‌های فویلی واقعاً نجات‌بخش بوده‌اند. پودر کاملاً خشک می‌ماند و دیگر لازم نیست دنبال پیمانه بگردم.",
  },
  {
    id: 4,
    name: "ROHIT K.",
    date: "02-08-26",
    rating: 5,
    text: "The mixability is honestly amazing. Cheap creatine usually leaves that gritty stuff at the bottom of the shaker, but this dissolves really quickly. I just tear open a sachet, mix it into my morning drink, and I am good to go.",
    arText:
      "قابلية الذوبان مذهلة بصراحة. عادةً ما يترك الكرياتين الرخيص رواسب خشنة في قاع الخلاط، لكن هذا المنتج يذوب بسرعة كبيرة. كل ما أفعله هو فتح الكيس وخلطه مع مشروبي الصباحي، وأكون جاهزًا للانطلاق.",
    faText:
      "قابلیت حل شدن آن واقعاً عالی است. کراتین‌های ارزان معمولاً ذراتی در کف شیکر باقی می‌گذارند، اما این محصول خیلی سریع حل می‌شود. فقط ساشه را باز می‌کنم، آن را با نوشیدنی صبحگاهی‌ام مخلوط می‌کنم و آماده‌ام.",
  },
  {
    id: 5,
    name: "VIKRAM T.",
    date: "14-06-26",
    rating: 4.5,
    text: "I travel a lot for work, and carrying loose powder in my luggage was always inconvenient. Now I just keep a few sachets in my laptop bag. Opening a fresh sachet at the hotel gym is simple and hassle-free.",
    arText:
      "أسافر كثيرًا بسبب العمل، وكان حمل المسحوق السائب في أمتعتي أمرًا غير مريح دائمًا. الآن أحتفظ ببضعة أكياس في حقيبة الكمبيوتر المحمول. فتح كيس جديد في صالة الفندق الرياضية أمر بسيط وسهل للغاية.",
    faText:
      "به خاطر کار زیاد سفر می‌کنم و حمل پودر در چمدان همیشه دردسرساز بود. حالا چند ساشه را در کیف لپ‌تاپم نگه می‌دارم. باز کردن یک ساشه تازه در باشگاه هتل بسیار ساده و بدون دردسر است.",
  },
];

const arabicReviews: Record<number, string> = {
  1: "كطالب جامعي، كان دفع مبلغ كبير مقدمًا مقابل علبة كرياتين أمرًا صعبًا على ميزانيتي. الحصول على كرياتين بجودة ممتازة بسعر مناسب يوميًا أحدث فرقًا كبيرًا بالنسبة لي. وبصراحة، أشعر أنه ينافس العلامات المستوردة الأغلى بكثير.",
  2: "بصراحة، كنت أعتقد أن الكرياتين بهذا السعر قد لا يكون موثوقًا. لكنني مسحت رمز QR واطلعت على تقرير المختبر المعتمد الخاص بالدفعة، وقررت تجربته. يذوب بشكل ممتاز، ولاحظت تحسنًا في أوزاني أثناء التمرين. بالنسبة للسعر، التجربة ممتازة.",
  3: "خلال موسم الأمطار، كان الكرياتين القديم يمتص الرطوبة ويتحول إلى كتلة صلبة. هذه الأكياس المغلقة أصبحت الحل المثالي بالنسبة لي. المسحوق يبقى جافًا تمامًا، ولم أعد أبحث عن الملعقة داخل العلبة.",
  4: "سهولة الذوبان رائعة فعلًا. عادةً ما تترك أنواع الكرياتين الرخيصة بقايا في قاع الشيكَر، لكن هذا النوع يذوب بسرعة كبيرة. أفتح الكيس، أخلطه مع مشروبي الصباحي، وانتهى الأمر.",
  5: "أسافر كثيرًا بسبب العمل، وكان حمل مسحوق الكرياتين في الأمتعة أمرًا غير مريح. الآن أضع عدة أكياس في حقيبة اللابتوب، وأفتح كيسًا جديدًا في النادي بسهولة ودون أي عناء.",
};

const farsiReviews: Record<number, string> = {
  1: "به عنوان یک دانشجو، پرداخت مبلغ زیادی برای خرید یک بسته بزرگ کراتین همیشه برای بودجه من سخت بود. دریافت کراتین باکیفیت با هزینه‌ای مناسب در هر روز تفاوت بزرگی برای من ایجاد کرده است. کیفیت آن نیز واقعاً با برندهای وارداتی گران‌تر قابل مقایسه است.",
  2: "صادقانه فکر می‌کردم کراتین با این قیمت نمی‌تواند قابل اعتماد باشد. اما کد QR را اسکن کردم، گزارش آزمایشگاهی مربوط به محصول را بررسی کردم و تصمیم گرفتم آن را امتحان کنم. به‌خوبی حل می‌شود و پیشرفت خوبی در تمریناتم داشته‌ام. با توجه به قیمت، واقعاً عالی است.",
  3: "هر سال در فصل باران، کراتین قبلی من رطوبت جذب می‌کرد و به یک توده سفت تبدیل می‌شد. این ساشه‌های فویلی واقعاً نجات‌دهنده بودند. پودر کاملاً خشک می‌ماند و دیگر نیازی نیست دنبال پیمانه بگردم.",
  4: "حل شدن این کراتین واقعاً عالی است. کراتین‌های ارزان معمولاً ته شیکر رسوب باقی می‌گذارند، اما این محصول خیلی سریع حل می‌شود. فقط ساشه را باز می‌کنم، آن را با نوشیدنی صبحگاهی‌ام مخلوط می‌کنم و آماده‌ام.",
  5: "به دلیل کار زیاد سفر می‌کنم و حمل پودر کراتین در چمدان همیشه دردسر داشت. حالا چند ساشه را داخل کیف لپ‌تاپم می‌گذارم و در باشگاه هتل به‌راحتی یک ساشه تازه استفاده می‌کنم.",
};

export default function Page() {
  const { language } = useLanguage();
  const control = useAnimation();

  const isArabic = language === "ar";
  const isFarsi = language === "fa";
  const isRTL = isArabic || isFarsi;

  const [sortBy, setSortBy] = useState("most-recent");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestVisible, setSuggestVisible] = useState(false);
  const [mangoCurrentIndex, setGreenCurrentIndex] = useState(0);

  const suggestRef = useRef<HTMLElement>(null);
  const mangoSliderRef = useRef<HTMLDivElement>(null);

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "highest") {
      return b.rating - a.rating;
    }

    if (sortBy === "lowest") {
      return a.rating - b.rating;
    }

    return b.id - a.id;
  });

  const getSortLabel = () => {
    if (sortBy === "highest") {
      if (isArabic) return "الأعلى تقييمًا";
      if (isFarsi) return "بالاترین امتیاز";
      return "HIGHEST RATING";
    }

    if (sortBy === "lowest") {
      if (isArabic) return "الأقل تقييمًا";
      if (isFarsi) return "کمترین امتیاز";
      return "LOWEST RATING";
    }

    if (isArabic) return "الأحدث";
    if (isFarsi) return "جدیدترین";
    return "MOST RECENT";
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    setIsOpen(false);
  };

  const getReviewText = (review: Review) => {
    if (isArabic) {
      return arabicReviews[review.id] ?? review.arText;
    }

    if (isFarsi) {
      return farsiReviews[review.id] ?? review.faText;
    }

    return review.text;
  };

  // SUGGESTED USE: reveal the instruction animation once the section enters the viewport.
  useEffect(() => {
    const section = suggestRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSuggestVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const slider = mangoSliderRef.current;

    if (!slider) return;

    const handleScroll = () => {
      const slides = Array.from(
        slider.children
      ).filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement
      );

      if (!slides.length) return;

      const scrollPosition = slider.scrollLeft;

      let closestIndex = 0;
      let closestDistance = Infinity;

      slides.forEach((slide, index) => {
        const distance = Math.abs(
          slide.offsetLeft - scrollPosition
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setGreenCurrentIndex(closestIndex);
    };

    slider.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollMangoSlider = (
    direction: "left" | "right"
  ) => {
    const slider = mangoSliderRef.current;

    if (!slider) return;

    const slides = Array.from(
      slider.children
    ).filter(
      (child): child is HTMLElement =>
        child instanceof HTMLElement
    );

    if (!slides.length) return;

    const nextIndex =
      direction === "right"
        ? Math.min(
          mangoCurrentIndex + 1,
          slides.length - 1
        )
        : Math.max(mangoCurrentIndex - 1, 0);

    const targetSlide = slides[nextIndex];

    if (!targetSlide) return;

    slider.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: "smooth",
    });

    setGreenCurrentIndex(nextIndex);
  };

  useEffect(() => {
    control.start({
      x: ["0%", "calc(-50% - 9px)"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity
      }
    });
  }, [control]);

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      lang={isFarsi ? "fa" : isArabic ? "ar" : "en"}

    >
      <div className={"relative h-screen min-h-[700px] w-full overflow-hidden bg-[#ffb703]"}>
        <div
          className={"absolute inset-0 z-0 h-full w-full overflow-hidden"}
          dir="ltr"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 1.28 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src="/images/image 404.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>

        <Navbar />

        <section className="relative z-[5] min-h-[650px] h-screen w-full overflow-hidden md:min-h-[700px]">



          <motion.div
            initial={{ opacity: 0, x: "-150%", y: "-50%" }}
            animate={{
              opacity: [0, 1, 1, 1],
              x: ["-150%", "0%", "0%", "0%"],
            }}
            transition={{
              duration: 2.8,
              delay: 2.55,
              times: [0, 0.55, 0.8, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
    absolute
    left-[4%]
    top-1/2
    z-[12]
    -translate-y-1/2
  "
          >
            <h1
              className="
      hidden
      m-0
      whitespace-nowrap
      font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
      font-normal
      leading-[0.82]
      tracking-[-2px]
      text-white
      sm:block
      text-[clamp(42px,12vw,72px)]
      md:text-[clamp(55px,7vw,95px)]
      lg:text-[clamp(65px,6vw,110px)]
      xl:text-[clamp(75px,5.7vw,120px)]
    "
            >
              {isArabic ? (
                <>
                  مانجو
                  <br />
                  كريتيف
                </>
              ) : isFarsi ? (
                <>
                  انبه
                  <br />
                  کراتین
                </>
              ) : (
                <>
                  MANGO
                  <br />
                  CREATINE
                </>
              )}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: "150%", y: "-50%" }}
            animate={{
              opacity: [0, 1, 1, 1],
              x: ["150%", "0%", "0%", "0%"],
            }}
            transition={{
              duration: 2.5,
              delay: 2.7,
              times: [0, 0.55, 0.8, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
    absolute
    right-[5%]
    top-1/2
    z-[12]
    w-[30%]
    max-w-[430px]
    -translate-y-1/2

    sm:w-[35%]
    md:right-[5%]
    md:w-[34%]

    lg:right-[7%]
    lg:w-[30%]

    xl:right-[8%]
    xl:w-[28%]
  "
          >
            <p
              className="
      hidden
      sm:block
      mt-10
      w-full
      font-sans
      font-normal
      leading-[1.2]
      tracking-[0.1px]
      text-white
      text-[10px]
      sm:text-[12px]
      md:text-[15px]
      lg:text-[20px]
      xl:text-[24px]
    "
            >
              {isArabic
                ? "استمتع بطعم المانجو الاستوائي المنعش في كل حصة. تركيبة لذيذة وسهلة الشرب مصممة لدعم القوة والأداء والطاقة والتعافي مع كل تمرين."
                : isFarsi
                  ? "از طعم تازه و استوایی انبه در هر وعده لذت ببرید. فرمولی خوش‌طعم و آسان برای نوشیدن که برای پشتیبانی از قدرت، عملکرد، انرژی و ریکاوری شما طراحی شده است."
                  : "Experience the refreshing tropical burst of Mango in every serving. A smooth and delicious formula designed to support your strength, performance, energy and recovery with every workout."}
            </p>
          </motion.div>


          <div
            className="
      absolute
      bottom-[12px]
      left-1/2
      z-[15]
      flex
      w-[calc(100%-20px)]
      -translate-x-1/2
      items-stretch
      justify-between
      gap-1

      sm:bottom-[18px]
      sm:w-[calc(100%-28px)]
      sm:gap-1.5

      md:bottom-8
      md:w-[calc(100%-50px)]
      md:gap-2

      lg:bottom-10
      lg:w-[calc(100%-100px)]
      lg:gap-[18px]
    "
          >
            <motion.div
              initial={{ y: "150%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.85,
                delay: 4.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
        min-w-0
        flex-1
        overflow-hidden
        border
        border-white
        bg-white
        text-center
        text-[#ffb703]

        sm:min-h-[90px]
        md:min-h-[110px]
        md:border-2

        lg:min-h-[130px]
        lg:w-[12%]
        lg:flex-none
      "
            >
              <strong
                className="
          flex
          min-h-[42px]
          items-center
          justify-center
          box-border
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          font-light
          leading-[0.9]
          tracking-[0.5px]
          whitespace-nowrap

          text-[clamp(14px,5vw,20px)]
          sm:text-[22px]
          md:min-h-[55px]
          md:text-[28px]
          lg:min-h-[66px]
          lg:px-1.5
          lg:py-2
          lg:text-[clamp(30px,2.1vw,40px)]
          lg:tracking-[2px]
        "
              >
                {isArabic ? "٢٥٠" : isFarsi ? "۲۵۰" : "250 MG"}
              </strong>

              <span
                className="
          flex
          min-h-[38px]
          items-center
          justify-center
          box-border
          bg-[#ffb703]
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          text-[clamp(7px,2.6vw,10px)]
          uppercase
          leading-[0.9]
          text-white

          sm:min-h-[42px]
          md:min-h-[50px]
          md:text-[15px]

          lg:min-h-[82px]
          lg:py-[18px]
          lg:text-[clamp(18px,1.35vw,25px)]
        "
              >
                {isArabic ? "تورين" : isFarsi ? "تائورین" : "TAURINE"}
              </span>
            </motion.div>

            <motion.div
              initial={{ y: "150%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.85,
                delay: 4.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
        min-w-0
        flex-1
        overflow-hidden
        border
        border-white
        bg-white
        text-center
        text-[#ffb703]

        sm:min-h-[90px]
        md:min-h-[110px]
        md:border-2

        lg:min-h-[130px]
        lg:w-[12%]
        lg:flex-none
      "
            >
              <strong
                className="
          flex
          min-h-[42px]
          items-center
          justify-center
          box-border
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          text-[clamp(15px,5vw,22px)]
          font-light
          leading-[0.9]
          tracking-[0.5px]
          whitespace-nowrap

          sm:min-h-[48px]
          sm:text-[24px]

          md:min-h-[66px]
          md:text-[28px]

          lg:text-[clamp(30px,2.1vw,40px)]
          lg:tracking-[2px]
        "
              >
                {isArabic ? "٥ غ" : isFarsi ? "۵ گرم" : "5G"}
              </strong>

              <span
                className="
          flex
          min-h-[38px]
          items-center
          justify-center
          box-border
          bg-[#ffb703]
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          text-[clamp(6px,2.2vw,10px)]
          uppercase
          leading-[0.9]
          text-white

          sm:min-h-[42px]
          md:min-h-[50px]
          md:text-[15px]

          lg:min-h-[82px]
          lg:py-[18px]
          lg:text-[clamp(18px,1.35vw,25px)]
        "
              >
                {isArabic ? "كرياتين" : isFarsi ? "کراتین" : "CREATINE"}
              </span>
            </motion.div>

            {/* Zero Sugar */}
            <motion.div
              initial={{ y: "150%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.85,
                delay: 4.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
        min-w-0
        flex-1
        overflow-hidden
        border
        border-white
        bg-white
        text-center
        text-[#ffb703]

        sm:min-h-[90px]
        md:min-h-[110px]
        md:border-2

        lg:min-h-[130px]
        lg:w-[12%]
        lg:flex-none
      "
            >
              <strong
                className="
          flex
          min-h-[42px]
          items-center
          justify-center
          box-border
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          text-[clamp(13px,4.5vw,21px)]
          font-light
          leading-[0.9]
          tracking-[0.5px]
          whitespace-nowrap

          sm:text-[22px]
          md:min-h-[66px]
          md:text-[28px]

          lg:text-[clamp(30px,2.1vw,40px)]
          lg:tracking-[2px]
        "
              >
                {isArabic ? "صفر" : isFarsi ? "صفر" : "ZERO"}
              </strong>

              <span
                className="
          flex
          min-h-[38px]
          items-center
          justify-center
          box-border
          bg-[#ffb703]
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          text-[clamp(6px,2.3vw,10px)]
          uppercase
          leading-[0.9]
          text-white

          sm:min-h-[42px]
          md:min-h-[50px]
          md:text-[15px]

          lg:min-h-[82px]
          lg:py-[18px]
          lg:text-[clamp(18px,1.35vw,25px)]
        "
              >
                {isArabic ? "سكر" : isFarsi ? "شکر" : "SUGAR"}
              </span>
            </motion.div>


            <motion.div
              initial={{ y: "150%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.85,
                delay: 4.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
        min-w-0
        flex-1
        overflow-hidden
        border
        border-white
        bg-white
        text-center
        text-[#ffb703]

        sm:min-h-[90px]
        md:min-h-[110px]
        md:border-2

        lg:min-h-[130px]
        lg:w-[12%]
        lg:flex-none
      "
            >
              <strong
                className="
          flex
          min-h-[42px]
          items-center
          justify-center
          box-border
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          text-[clamp(11px,3.8vw,19px)]
          font-light
          leading-[0.9]
          tracking-[0.5px]
          whitespace-nowrap

          sm:text-[21px]
          md:min-h-[66px]
          md:text-[28px]

          lg:text-[clamp(30px,2.1vw,40px)]
          lg:tracking-[2px]
        "
              >
                {isArabic
                  ? "مختبر"
                  : isFarsi
                    ? "آزمایشگاه"
                    : "LAB"}
              </strong>

              <span
                className="
          flex
          min-h-[38px]
          items-center
          justify-center
          box-border
          bg-[#ffb703]
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          text-[clamp(6px,2.1vw,10px)]
          uppercase
          leading-[0.9]
          text-white

          sm:min-h-[42px]
          md:min-h-[50px]
          md:text-[15px]

          lg:min-h-[82px]
          lg:py-[18px]
          lg:text-[clamp(18px,1.35vw,25px)]
        "
              >
                {isArabic
                  ? "مُختبَر"
                  : isFarsi
                    ? "آزمایش‌شده"
                    : "TESTED"}
              </span>
            </motion.div>

            <motion.div
              initial={{ y: "150%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.85,
                delay: 4.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
        min-w-0
        flex-1
        overflow-hidden
        border
        border-white
        bg-white
        text-center
        text-[#ffb703]

        sm:min-h-[90px]
        md:min-h-[110px]
        md:border-2

        lg:min-h-[130px]
        lg:w-[12%]
        lg:flex-none
      "
            >
              <strong
                className="
          flex
          min-h-[42px]
          items-center
          justify-center
          box-border
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          text-[clamp(12px,4vw,20px)]
          font-light
          leading-[0.9]
          tracking-[0.5px]
          whitespace-nowrap

          sm:text-[22px]
          md:min-h-[66px]
          md:text-[28px]

          lg:text-[clamp(30px,2.1vw,40px)]
          lg:tracking-[2px]
        "
              >
                {isArabic ? "١٠٠٪" : isFarsi ? "۱۰۰٪" : "100%"}
              </strong>

              <span
                className="
          flex
          min-h-[38px]
          items-center
          justify-center
          box-border
          bg-[#ffb703]
          px-0.5
          py-1
          font-[Victory_Striker_Sans,Impact,sans-serif]
          text-[clamp(6px,2.2vw,10px)]
          uppercase
          leading-[0.9]
          text-white

          sm:min-h-[42px]
          md:min-h-[50px]
          md:text-[15px]

          lg:min-h-[82px]
          lg:py-[18px]
          lg:text-[clamp(18px,1.35vw,25px)]
        "
              >
                {isArabic ? "نقي" : isFarsi ? "خالص" : "PURE"}
              </span>
            </motion.div>

          </div>
        </section>
      </div>

      <section className="box-border min-h-0 w-full overflow-hidden bg-[#ffe8b6] px-4 py-[45px] md:px-[5%] md:py-[60px] lg:min-h-[760px] lg:px-[4%] lg:py-[70px]">
        <div className="mx-auto flex w-full max-w-[1750px] flex-col items-center gap-10 md:grid md:min-h-0 md:grid-cols-2 md:gap-[30px] lg:min-h-[620px] lg:grid-cols-[1.1fr_.62fr_.52fr] lg:gap-0">
          <div className="flex h-auto w-full flex-col items-center justify-center p-0 text-center md:col-span-2 md:items-start md:text-left lg:col-span-1 lg:h-full lg:items-start lg:pr-10 lg:pt-[55px]">
            <div className={"relative"}>
              <h2 className="m-0 flex flex-col items-start font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(52px,5.5vw,105px)] font-normal leading-[0.82] tracking-[2px] text-[#5c2c06] md:text-[clamp(60px,7vw,90px)]">
                {isArabic
                  ? "التغذية"
                  : isFarsi
                    ? "تغذیه"
                    : "NUTRITION &"}

                <span className="ml-0 mt-3 inline-block bg-[#d97706] px-[18px] pb-2 pt-2 font-[Victory_Striker_Sans,Impact,sans-serif] text-white -rotate-2 md:ml-[-10px] md:mt-4 md:px-[22px] md:pt-7">
                  {isArabic
                    ? "والمكونات"
                    : isFarsi
                      ? "و مواد تشکیل‌دهنده"
                      : "INGREDIENTS"}
                </span>
              </h2>
            </div>

            <div className={"mt-[25px]"}>
              <p className="m-0 font-mono text-[clamp(10px,1.2vw,18px)] font-normal leading-[1.55] tracking-[0.2px] text-[#5c2c06] md:text-[15px] lg:text-[18px]">
                {isArabic ? (
                  <>
                    كل حصة مصممة بعناية لتمنحك
                    <br />
                    مكونات عالية الجودة لدعم أدائك.
                  </>
                ) : isFarsi ? (
                  <>
                    هر وعده با دقت فرموله شده تا
                    <br />
                    مواد اولیه باکیفیت برای عملکرد شما فراهم کند.
                  </>
                ) : (
                  <>
                    Every serving is precisely formulated to deliver
                    <br />
                    high-quality performance ingredients.
                  </>
                )}
              </p>
            </div>

            <div className={"mt-[70px] flex items-start"}>
              <div className={"min-w-[100px] pl-5 text-center text-[#d97706] flex flex-col gap-2 justify-center items-center"}>
                <FaBan className="text-5xl" />

                <h3 className="whitespace-nowrap font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(10px,2vw,30px)] font-normal leading-none text-[#5c2c06] md:text-[18px] lg:text-[30px]">
                  {isArabic
                    ? "بدون سكر"
                    : isFarsi
                      ? "بدون شکر"
                      : "NO SUGAR"}
                </h3>
              </div>

              <div className={"min-w-[100px] pl-5 text-center text-[#d97706] flex flex-col gap-2 justify-center items-center"}>
                <FaCanadianMapleLeaf className="text-5xl" />

                <h3 className="m-0 whitespace-nowrap font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(10px,2vw,30px)] font-normal leading-none text-[#5c2c06] md:text-[18px] lg:text-[30px] flex flex-col gap-0">
                  {isArabic ? (
                    <>
                      خالٍ من
                      <br />
                      المواد المحظورة
                    </>
                  ) : isFarsi ? (
                    <>
                      بدون مواد
                      <br />
                      ممنوعه
                    </>
                  ) : (
                    <>
                      <p className="mb-2">BANNED</p>
                      <p>SUBSTANCE FREE</p>
                    </>
                  )}
                </h3>
              </div>

              <div className={"min-w-[100px] pl-5 text-center text-[#d97706] flex flex-col gap-2 justify-center items-center"}>
                <FaFlask className="text-5xl" />

                <h3 className="m-0 whitespace-nowrap font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(10px,2vw,30px)] font-normal leading-none text-[#5c2c06] md:text-[18px] lg:text-[30px]">
                  {isArabic
                    ? "بدون مواد مالئة"
                    : isFarsi
                      ? "بدون پرکننده"
                      : "NO FILLERS"}
                </h3>
              </div>
            </div>
          </div>

          <div
            className="relative z-[5] box-border h-fit w-full max-w-[700px] bg-[#f59e0b] p-1 md:col-span-1 lg:col-span-1 font-victory"
            dir="ltr"
          >
            {[
              [
                isArabic
                  ? "كرياتين مونوهيدرات"
                  : isFarsi
                    ? "کراتین مونوهیدرات"
                    : "CREATINE MONOHYDRATE",
                isArabic
                  ? "5 غ"
                  : isFarsi
                    ? "۵ گرم"
                    : "5G",
              ],
              [
                isArabic
                  ? "تورين"
                  : isFarsi
                    ? "تائورین"
                    : "TAURINE",
                isArabic
                  ? "250 ملغ"
                  : isFarsi
                    ? "۲۵۰ میلی‌گرم"
                    : "250 MG",
              ],
              [
                isArabic
                  ? "الطاقة"
                  : isFarsi
                    ? "انرژی"
                    : "ENERGY",
                isArabic
                  ? "12 سعرة حرارية"
                  : isFarsi
                    ? "۱۲ کیلوکالری"
                    : "12 KCAL",
              ],
              [
                isArabic
                  ? "البروتين"
                  : isFarsi
                    ? "پروتئین"
                    : "PROTEIN",
                isArabic
                  ? "3.0 غ"
                  : isFarsi
                    ? "۳.۰ گرم"
                    : "3.0 G",
              ],
              [
                isArabic
                  ? "الكربوهيدرات"
                  : isFarsi
                    ? "کربوهیدرات"
                    : "CARBOHYDRATE",
                isArabic
                  ? "0 غ"
                  : isFarsi
                    ? "۰ گرم"
                    : "0 G",
              ],
              [
                isArabic
                  ? "إجمالي السكر"
                  : isFarsi
                    ? "قند کل"
                    : "TOTAL SUGAR",
                isArabic
                  ? "0 غ"
                  : isFarsi
                    ? "۰ گرم"
                    : "0 G",
              ],
              [
                isArabic
                  ? "السكر المضاف"
                  : isFarsi
                    ? "شکر افزوده"
                    : "ADDED SUGAR",
                isArabic
                  ? "0 غ"
                  : isFarsi
                    ? "۰ گرم"
                    : "0 G",
              ],
              [
                isArabic
                  ? "إجمالي الدهون"
                  : isFarsi
                    ? "چربی کل"
                    : "TOTAL FAT",
                isArabic
                  ? "0 غ"
                  : isFarsi
                    ? "۰ گرم"
                    : "0 G",
              ],
              [
                isArabic
                  ? "الدهون المشبعة"
                  : isFarsi
                    ? "چربی اشباع"
                    : "SATURATED FAT",
                isArabic
                  ? "0 غ"
                  : isFarsi
                    ? "۰ گرم"
                    : "0 G",
              ],
              [
                isArabic
                  ? "الدهون المتحولة"
                  : isFarsi
                    ? "چربی ترانس"
                    : "TRANS FAT",
                isArabic
                  ? "0 غ"
                  : isFarsi
                    ? "۰ گرم"
                    : "0 G",
              ],
              [
                isArabic
                  ? "الكوليسترول"
                  : isFarsi
                    ? "کلسترول"
                    : "CHOLESTEROL",
                isArabic
                  ? "0 ملغ"
                  : isFarsi
                    ? "۰ میلی‌گرم"
                    : "0 MG",
              ],
              [
                isArabic
                  ? "الصوديوم"
                  : isFarsi
                    ? "سدیم"
                    : "SODIUM",
                isArabic
                  ? "0 ملغ"
                  : isFarsi
                    ? "۰ میلی‌گرم"
                    : "0 MG",
              ],
            ].map(([label, value], index) => (
              <div
                key={`${label}-${index}`}
                className={`${"flex h-[42px] w-full box-border items-center justify-between border-b border-dotted border-white/85 px-2 text-white md:h-[46px] md:px-3 lg:h-[50px]"} ${index === 0 ? "min-h-[52px]" : ""}`}
              >
                <span
                className="text-[25px]"
                  dir={isRTL ? "rtl" : "ltr"}

                >
                  {label}
                </span>

                <strong
                className="text-[25px]"
                  dir={isRTL ? "rtl" : "ltr"}

                >
                  {value}
                </strong>
              </div>
            ))}
          </div>

          <div className="relative z-10 flex h-auto w-full items-center justify-center p-0 md:col-span-1 lg:h-[80%] lg:pl-[86px] lg:col-span-1">
            <Image
              src="/images/tt.png"
              alt={
                isArabic
                  ? "كرياتين المانجو"
                  : isFarsi
                    ? "کراتین انبه"
                    : "Mango Creatine"
              }
              width={200}
              height={550}
              className="block h-auto w-[75%] max-w-[240px] object-contain md:max-w-[280px] lg:w-full lg:max-w-[310px]"
            />
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[220px] w-full items-center overflow-hidden bg-[#F4FBEA]">
        <div
          className="absolute inset-0 z-[1] h-full w-full bg-[#d97706] [clip-path:polygon(0%_0%,50%_8%,100%_0%,100%_100%,0%_100%)]"
          dir="ltr"
        />

        <div className="relative z-[2] w-full overflow-hidden whitespace-nowrap py-[35px]">
          <motion.div
            className="flex w-max shrink-0"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >
            <h1 className="m-0 mt-6 flex shrink-0 items-center whitespace-nowrap pr-[60px] font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(5rem,16vw,16rem)] font-normal leading-[1.09] tracking-[1px] text-white">
              {isArabic ? (
                <>
                  ارتقِ بمستواك مع{" "}
                  <span className="text-[#ffb703]">
                    الكرياتين
                  </span>
                </>
              ) : isFarsi ? (
                <>
                  سطح خود را با{" "}
                  <span className="text-[#ffb703]">
                    کراتین
                  </span>{" "}
                  ارتقا دهید
                </>
              ) : (
                <>
                  LEVEL UP WITH {" "}
                  <p className="text-[#ffb703] ml-5">
                    CREATINE
                  </p>
                </>
              )}
            </h1>

            <h1
              aria-hidden="true"
              className="m-0 mt-6 flex shrink-0 items-center whitespace-nowrap pr-[60px] font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(5rem,16vw,16rem)] font-normal leading-[1.09] tracking-[1px] text-white"
            >
              {isArabic ? (
                <>
                  ارتقِ بمستواك مع{" "}
                  <span className="text-[#ffb703]">
                    الكرياتين
                  </span>
                </>
              ) : isFarsi ? (
                <>
                  سطح خود را با{" "}
                  <span className="text-[#ffb703]">
                    کراتین
                  </span>{" "}
                  ارتقا دهید
                </>
              ) : (
                <>
                  LEVEL UP WITH{" "}
                  <span className="text-[#ffb703] ml-5">
                    CREATINE
                  </span>
                </>
              )}
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        ref={suggestRef}
        className="box-border flex w-full flex-col gap-8 overflow-hidden bg-[#fff3d6] px-4 py-10 md:flex-row md:items-center md:gap-5 md:p-6 lg:gap-0 lg:p-20"
      >
        <div className={"flex w-full min-w-0 box-border flex-col justify-center overflow-visible p-0 md:w-[52%] md:py-[45px] md:pr-[15px] lg:w-1/2 lg:py-[100px] lg:pr-[50px] lg:pl-[60px]"}>
          <h2 className="m-0 w-full font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(2.35rem,13vw,3.2rem)] font-normal uppercase leading-[0.9] tracking-[1px] text-[#3d1c05] md:text-[clamp(2.7rem,6vw,3.8rem)] lg:text-[clamp(3rem,5vw,5rem)]">
            <span className="block">{isArabic ? "طريقة" : isFarsi ? "روش" : "HOW TO"}</span>

            <span className="relative z-[2] block w-fit max-w-[96%] -rotate-3 box-border bg-[#d97706] px-3 py-4 text-[clamp(2.25rem,11vw,3.7rem)] uppercase leading-[0.9] text-white md:px-3.5 md:py-3 md:text-[clamp(2.5rem,5.8vw,3.7rem)] lg:px-[22px] lg:py-5 lg:text-[clamp(3rem,5vw,5rem)]">
              {isArabic
                ? "الاستخدام المقترحة"
                : isFarsi
                  ? "مصرف پیشنهادی"
                  : "SUGGESTED USE"}
            </span>
          </h2>

          <p className="mt-5 max-w-[600px] font-mono text-[11px] leading-[1.55] tracking-[0.2px] text-[#5c2c06] md:text-[13px] lg:mt-[30px] lg:text-[18px] lg:leading-[1.45]">
            {isArabic
              ? "ادعم قوتك، وساعد جسمك على التعافي، وامنح كل تمرين دفعة إضافية مع كرياتين مونوهيدرات المدروس علميًا."
              : isFarsi
                ? "با کراتین مونوهیدرات که از نظر علمی مورد مطالعه قرار گرفته است، قدرت خود را افزایش دهید، سریع‌تر ریکاوری کنید و به هر تمرین انرژی بیشتری بدهید."
                : "Build more strength, recover faster, and power every workout with scientifically researched Creatine Monohydrate."}
          </p>
        </div>

        <div className={"relative h-[430px] w-full min-w-0 overflow-hidden box-border md:h-[450px] md:w-[48%] lg:h-[600px] lg:w-1/2"}>
          <Image
            src="/images/group3.png"
            alt={
              isArabic
                ? "طريقة استخدام الكرياتين"
                : isFarsi
                  ? "روش مصرف کراتین"
                  : "Creatine usage"
            }
            fill
            priority
            className={"h-full w-full object-cover"}
          />

          <div className={"absolute left-0 top-[38%] z-20 flex w-full pointer-events-none flex-col items-center gap-[20px] px-2.5 md:top-[40%] md:gap-[22px] lg:top-[43%] lg:gap-[35px]"}>
            <motion.div animate={{ opacity: suggestVisible ? 1 : 0, y: suggestVisible ? 0 : 25 }} transition={{ duration: 0.7, delay: 0.3 }} className="w-auto max-w-[82%] rounded-lg bg-[#f59e0b] px-3 py-2 font-mono text-[10px] uppercase leading-[1.4] text-white md:w-[72%] md:max-w-[300px] md:text-[10px] lg:w-[65%] lg:max-w-[420px] lg:px-[18px] lg:py-3 lg:text-[13px] ml-0">
              <p className="m-0">
                {isArabic
                  ? "اخلط حصة واحدة مع 250–300 مل من الماء البارد أو مشروبك المفضل."
                  : isFarsi
                    ? "یک وعده را با ۲۵۰ تا ۳۰۰ میلی‌لیتر آب سرد یا نوشیدنی مورد علاقه خود مخلوط کنید."
                    : "MIX 1 SERVING WITH 250–300 ML OF COLD WATER OR YOUR FAVORITE BEVERAGE."}
              </p>
            </motion.div>

            <motion.div animate={{ opacity: suggestVisible ? 1 : 0, y: suggestVisible ? 0 : 25 }} transition={{ duration: 0.7, delay: 1.5 }} className="w-auto max-w-[82%] rounded-lg bg-[#f59e0b] px-3 py-2 font-mono text-[10px] uppercase leading-[1.4] text-white md:w-[72%] md:max-w-[300px] md:text-[10px] lg:w-[65%] lg:max-w-[420px] lg:px-[18px] lg:py-3 lg:text-[13px] ml-3 md:ml-5 lg:ml-[42px]">
              <p className="m-0">
                {isArabic
                  ? "رُجّ أو حرّك جيدًا حتى يذوب المسحوق بالكامل."
                  : isFarsi
                    ? "خوب تکان دهید یا هم بزنید تا پودر کاملاً حل شود."
                    : "SHAKE OR STIR WELL UNTIL THE POWDER IS COMPLETELY DISSOLVED."}
              </p>
            </motion.div>

            <motion.div animate={{ opacity: suggestVisible ? 1 : 0, y: suggestVisible ? 0 : 25 }} transition={{ duration: 0.7, delay: 2.7 }} className="w-auto max-w-[82%] rounded-lg bg-[#f59e0b] px-3 py-2 font-mono text-[10px] uppercase leading-[1.4] text-white md:w-[72%] md:max-w-[300px] md:text-[10px] lg:w-[65%] lg:max-w-[420px] lg:px-[18px] lg:py-3 lg:text-[13px] ml-0">
              <p className="m-0">
                {isArabic
                  ? "تناوله يوميًا واحرص على شرب كمية كافية من الماء طوال اليوم أثناء استخدام الكرياتين."
                  : isFarsi
                    ? "هر روز مصرف کنید و هنگام استفاده از کراتین، در طول روز آب کافی بنوشید."
                    : "DRINK DAILY AND STAY WELL HYDRATED BY CONSUMING PLENTY OF WATER THROUGHOUT THE DAY WHILE USING CREATINE."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="box-border flex w-full flex-col items-center gap-6 overflow-hidden bg-[#fff3d6] px-3 pb-[55px] pt-10 md:grid md:grid-cols-[.8fr_1.2fr] md:gap-[25px] md:px-6 md:pb-[70px] md:pt-[55px] lg:grid-cols-[.8fr_1.2fr] lg:gap-[45px] lg:px-10 lg:pb-[90px] lg:pt-[70px]">
        <div className="relative z-[5] flex w-full items-start justify-start md:justify-start lg:items-center lg:justify-center">
          <h2 className="m-0 font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(40px,5.5vw,90px)] font-normal uppercase leading-[0.82] tracking-[1px] text-[#3d1c05]">
            {isArabic
              ? "قد يعجبك"
              : isFarsi
                ? "شاید این را"
                : "YOU MAY"}

            <span className={"mt-[15px] block w-fit max-w-full box-border bg-[#d97706] px-[clamp(12px,1.4vw,22px)] pb-[clamp(6px,.8vw,12px)] pt-[clamp(8px,1vw,14px)] text-[clamp(40px,5.1vw,82px)] leading-[.85] text-white whitespace-nowrap -rotate-2"}>
              {isArabic
                ? "أيضًا"
                : isFarsi
                  ? "هم دوست داشته باشید"
                  : "ALSO LIKE"}
            </span>
          </h2>
        </div>

        <div className="relative w-full min-w-0 overflow-hidden">
          <div
            ref={mangoSliderRef}
            className="flex w-full box-border snap-x snap-mandatory gap-[18px] overflow-x-auto overflow-y-hidden px-2 pb-5 pt-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x md:gap-[18px] md:px-2.5 md:pb-[25px] md:pt-[15px] lg:gap-[25px] lg:px-[15px] lg:pb-[30px] lg:pt-5"
          >
            {products.map((item) => (
              <div
                className="relative flex min-w-full w-full shrink-0 snap-start snap-always items-center justify-center box-border"
                key={item.id}
              >
                <Link
                  href={item.link}
                  className={"block h-full w-full no-underline"}
                >
                  <div className="relative h-[320px] w-full overflow-hidden rounded-[30px] md:h-[360px] md:w-[90%] lg:h-[420px] lg:w-[70%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 500px"
                      className={"h-full w-full rounded-[30px] object-cover transition-transform duration-300 hover:scale-[1.04]"}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex w-full items-center justify-center gap-2">
            <button
              type="button"
              className={"flex h-[50px] min-h-[50px] w-[50px] min-w-[50px] cursor-pointer items-center justify-center border-0 bg-[#d97706] p-0 text-[28px] leading-none text-[#fff3d6] transition-all duration-200 hover:not-disabled:bg-[#b45309] hover:not-disabled:-translate-y-0.5 active:not-disabled:scale-95 disabled:cursor-not-allowed disabled:bg-[#5c2c06] disabled:opacity-35"}
              onClick={() =>
                scrollMangoSlider("left")
              }
              disabled={mangoCurrentIndex === 0}
              aria-label={
                isArabic
                  ? "المنتج السابق"
                  : isFarsi
                    ? "محصول قبلی"
                    : "Previous product"
              }
            >
              ←
            </button>

            <button
              type="button"
              className={"flex h-[50px] min-h-[50px] w-[50px] min-w-[50px] cursor-pointer items-center justify-center border-0 bg-[#d97706] p-0 text-[28px] leading-none text-[#fff3d6] transition-all duration-200 hover:not-disabled:bg-[#b45309] hover:not-disabled:-translate-y-0.5 active:not-disabled:scale-95 disabled:cursor-not-allowed disabled:bg-[#5c2c06] disabled:opacity-35"}
              onClick={() =>
                scrollMangoSlider("right")
              }
              disabled={
                mangoCurrentIndex ===
                products.length - 1
              }
              aria-label={
                isArabic
                  ? "المنتج التالي"
                  : isFarsi
                    ? "محصول بعدی"
                    : "Next product"
              }
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* <section className={"relative w-full overflow-hidden bg-[#fff3d6] bg-cover bg-center bg-no-repeat px-[7%] py-[65px] text-white"}>
        <div className={"relative mx-auto grid w-full max-w-[1450px] grid-cols-[45%_55%] gap-x-10"}>
          <div className={"flex flex-col items-start"}>
            <h2 className={"mb-[38px] mt-[60px] font-[400] text-[clamp(48px,5vw,82px)] leading-[.9] tracking-[-1px] text-[#fff3d6]"}>
              {isArabic
                ? "تقييم الطلب"
                : isFarsi
                  ? "امتیاز سفارش"
                  : "ORDER RATING"}
            </h2>

            <div className={"mb-2.5 flex items-center gap-[18px]"}>
              <span className={"font-[400] text-[clamp(65px,6vw,100px)] leading-[.9]"}>
                4.4
              </span>

              <FaStar className={"text-[42px] text-[#ffd166]"} />
            </div>

            <p className={"m-0 text-[25px] leading-none text-[#ffe8b6]"}>
              {isArabic
                ? "بناءً على 98 تقييمًا"
                : isFarsi
                  ? "بر اساس ۹۸ امتیاز"
                  : "BASED ON 98 RATINGS"}
            </p>

            <p className={"mb-8 mt-[7px] text-[20px] leading-none text-[#ffe8b6]"}>
              {isArabic
                ? "التقييمات منذ 13 مارس 2026"
                : isFarsi
                  ? "امتیازدهی از ۱۳ مارس ۲۰۲۶"
                  : "RATING SINCE MAR. 13 2026"}
            </p>

            <p className={"mb-3 text-[20px] text-[#ffe8b6]"}>
              {isArabic
                ? "قيّم المنتج"
                : isFarsi
                  ? "محصول را امتیاز دهید"
                  : "REVIEW THE PRODUCT"}
            </p>

            <div className={"mb-[38px] flex gap-2.5"}>
              {[1, 2, 3, 4, 5].map(
                (star) => (
                  <FaStar key={star} />
                )
              )}
            </div>

            <h3 className={"mb-[7px] text-[clamp(40px,4vw,65px)] leading-[.95]"}>
              {isArabic
                ? "أضف تقييمك"
                : isFarsi
                  ? "امتیاز خود را اضافه کنید"
                  : "ADD YOUR REVIEW"}
            </h3>

            <p className={"m-0 max-w-[600px] text-[17px] leading-[1.1] text-[#ffe8b6]"}>
              {isArabic
                ? "لن يتم نشر بريدك الإلكتروني. الحقول المطلوبة مميزة بعلامة *"
                : isFarsi
                  ? "آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی با علامت * مشخص شده‌اند."
                  : "YOUR EMAIL ADDRESS WILL NOT BE PUBLISHED. REQUIRED FIELDS ARE MARKED *"}
            </p>
          </div>

          <div className={"pb-0 pl-0 pr-2.5 pt-[155px]"}>
            {ratings.map((rating) => (
              <div
                className={"mb-[22px] grid w-full grid-cols-[90px_1fr_35px] items-center gap-3.5"}
                key={rating.stars}
              >
                <span className={"text-[19px] leading-none whitespace-nowrap"}>
                  {rating.stars}{" "}
                  {isArabic
                    ? "نجوم"
                    : isFarsi
                      ? "ستاره"
                      : "STARS"}
                </span>

                <div className={"relative h-[18px] w-full overflow-hidden bg-[#ffe8b6]"}>
                  <div
                    className={"h-full bg-[#ffb703]"}
                    style={{
                      width: `${rating.percentage}%`,
                    }}
                  />
                </div>

                <span className={"text-[18px] text-right"}>
                  {rating.count}
                </span>
              </div>
            ))}
          </div>

          <div className={"col-span-full mt-[25px] w-full"}>
            <textarea
              className={"box-border h-[58px] w-full resize-y border-0 bg-[#ffe8b6] px-[22px] py-[18px] text-[17px] text-[#5c2c06] outline-none"}
              placeholder={
                isArabic
                  ? "اكتب تقييمك..."
                  : isFarsi
                    ? "نظر خود را بنویسید..."
                    : "WRITE YOUR REVIEW..."
              }
            />

            <div className={"flex h-[65px] w-20 mt-[30px] flex-col items-center justify-center gap-1 text-[12px] text-[#ffe8b6]"}>
              <span className={"text-[34px] leading-none"}>
                ▧
              </span>

              <span>
                {isArabic
                  ? "إضافة صورة"
                  : isFarsi
                    ? "افزودن تصویر"
                    : "ADD PHOTO"}
              </span>
            </div>
          </div>
        </div>
      </section> */}

      <section className={"relative w-full overflow-visible bg-[#fff3d6] text-[#3d1c05]"}>
        {/* <div className={"ml-[30px] flex h-[55px] w-[calc(100%-60px)] box-border items-center rounded-xl bg-[#d97706] pl-2.5 pt-2.5 text-[20px] tracking-[.3px] text-white translate-y-5"}>
          <span>
            {isArabic
              ? "إذا كنت ترغب في كتابة تقييم، اضغط على الصورة أدناه لتسجيل الدخول"
              : isFarsi
                ? "اگر می‌خواهید نظر خود را بنویسید، برای ورود روی تصویر زیر کلیک کنید"
                : "IF YOU WOULD LIKE TO WRITE, CLICK PHOTO BELOW TO SIGN IN"}
          </span>
        </div>

        <div className={"px-[6%] pb-[65px] pt-[30px]"}>
          <button className={"cursor-pointer rounded-lg border-0 bg-[#5c2c06] px-3.5 py-2.5 text-[20px] tracking-[1px] text-white transition-all duration-200 hover:bg-[#d97706]"}>
            {isArabic
              ? "إرسال"
              : isFarsi
                ? "ارسال"
                : "SUBMIT"}
          </button>
        </div> */}

        <div className={"flex min-h-[115px] w-full box-border items-center justify-between border-b border-[#d6b77a] px-[4%]"}>
          <p className={"m-0 font-[Victory_Striker_Sans,Impact,sans-serif] text-[28px] text-[#d97706]"}>
            {isArabic
              ? "1-10 من أصل 98 تقييمًا"
              : isFarsi
                ? "۱-۱۰ از ۹۸ نظر"
                : "1-10 OF 98 REVIEWS"}
          </p>

          {/* <div className={"relative w-[280px]"}>
            <button
              type="button"
              className={`${"flex min-h-12 w-full box-border cursor-pointer items-center justify-between border border-[#d6b77a] bg-[#fff9ec] px-[15px] text-[20px] text-[#d97706] transition-all duration-200 hover:border-[#d97706]"} ${isOpen ? "border-[#d97706]" : ""}`}
              onClick={() =>
                setIsOpen(
                  (prev: boolean) => !prev
                )
              }
            >
              <span>
                {isArabic
                  ? "ترتيب حسب - "
                  : isFarsi
                    ? "مرتب‌سازی - "
                    : "SORT BY - "}

                {getSortLabel()}
              </span>

              <FaChevronDown
                className={`${"text-[12px] transition-transform duration-300"} ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <div className={"absolute left-0 top-[calc(100%+4px)] z-[50] w-full border border-[#d6b77a] bg-white shadow-[0_5px_15px_rgba(92,44,6,.12)]"}>
                <button
                  type="button"
                  onClick={() =>
                    handleSort(
                      "most-recent"
                    )
                  }
                >
                  {isArabic
                    ? "الأحدث"
                    : isFarsi
                      ? "جدیدترین"
                      : "MOST RECENT"}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleSort(
                      "highest"
                    )
                  }
                >
                  {isArabic
                    ? "الأعلى تقييمًا"
                    : isFarsi
                      ? "بالاترین امتیاز"
                      : "HIGHEST RATING"}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleSort(
                      "lowest"
                    )
                  }
                >
                  {isArabic
                    ? "الأقل تقييمًا"
                    : isFarsi
                      ? "کمترین امتیاز"
                      : "LOWEST RATING"}
                </button>
              </div>
            )}
          </div> */}
        </div>

        <div
          className={"relative w-full overflow-hidden py-10"}
          onMouseEnter={() => control.stop()}
          onMouseLeave={() =>
            control.start({
              x: ["0%", "calc(-50% - 9px)"],
              transition: {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              },
            })
          }
        >
          <motion.div
            animate={control}
            className={"flex w-max flex-row gap-[15px]"}
          >
            {[...sortedReviews, ...sortedReviews].map((review, index) => (
              <article
                key={`${review.id}-${index}`}
                dir={isRTL ? "rtl" : "ltr"}
                className={"box-border w-[380px] shrink-0 rounded-[18px] border border-gray-200 bg-white px-6 py-[22px] shadow-[0_8px_24px_rgba(0,0,0,.08)]"}
              >
                <div className={"w-full"}>
                  <div className={"flex w-full items-start justify-between gap-5"}>
                    <div>
                      <h3 className={"m-0 font-[Victory_Striker_Sans,Impact,sans-serif] text-lg font-bold leading-[1.3] text-[#171717]"}>
                        {review.name}
                      </h3>

                      <p className={"mt-1.5 font-[Victory_Striker_Sans,Impact,sans-serif] text-[13px] leading-[1.4] text-gray-500"}>
                        {review.date}
                      </p>
                    </div>

                    <div className={"flex shrink-0 items-center gap-[3px]"}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={`${"text-[15px]"} ${star <= review.rating ? "text-[#f5b301]" : "text-[#d1d5db]"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className={"mt-[18px] font-sans text-[15px] leading-[1.7] text-gray-600"}>
                    "{getReviewText(review)}"
                  </p>
                </div>
              </article>
            ))}
          </motion.div>

          <div className="absolute bottom-0 top-0 z-10 w-[70px] pointer-events-none left-0 bg-gradient-to-r from-white to-transparent" />

          <div className="absolute bottom-0 top-0 z-10 w-[70px] pointer-events-none right-0 bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
