"use client";

import {
  FaStar,
} from "react-icons/fa";
import Footer from "@/commonComponents/Footer";
import Navbar from "@/commonComponents/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/context/languageUseContent";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { Ban, Leaf, FlaskConical } from "lucide-react";
import ReviewsSection from "@/app/carddetail/components/ReviewsSection";
const products = [
  {
    id: 1,
    link: "/carddetail/strawberry",
    image: "/images/image 405.jpg",
    title: "strawberry",
  },
  {
    id: 2,
    link: "/carddetail/green-apple",
    image: "/images/image 403.jpg",
    title: "greenapple",
  },
  {
    id: 3,
    link: "/carddetail/mango",
    image: "/images/image 404.jpg",
    title: "mango",
  },
  {
    id: 4,
    link: "/carddetail/strawberry",
    image: "/images/image 405.jpg",
    title: "strawberry",
  },
];


export default function Page() {
  const { language } = useLanguage();


  const isArabic = language === "ar";
  const isFarsi = language === "fa";
  const isRTL = isArabic || isFarsi;

  const [sortBy, setSortBy] = useState("most-recent");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestVisible, setSuggestVisible] = useState(false);
  const [mangoCurrentIndex, setGreenCurrentIndex] = useState(0);

  const suggestRef = useRef<HTMLElement>(null);
  const mangoSliderRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);



  const sortOptions = [
    {
      value: "most-recent",
      label: isArabic ? "الأحدث" : isFarsi ? "جدیدترین" : "MOST RECENT",
    },
    {
      value: "highest",
      label: isArabic
        ? "الأعلى تقييمًا"
        : isFarsi
          ? "بالاترین امتیاز"
          : "HIGHEST RATING",
    },
    {
      value: "lowest",
      label: isArabic
        ? "الأقل تقييمًا"
        : isFarsi
          ? "کمترین امتیاز"
          : "LOWEST RATING",
    },
  ];


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
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortRef.current &&
        !sortRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const slider = mangoSliderRef.current;

    if (!slider) return;

    const handleScroll = () => {
      const slides = Array.from(slider.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement
      );

      if (!slides.length) return;

      const scrollPosition = slider.scrollLeft;

      let closestIndex = 0;
      let closestDistance = Infinity;

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - scrollPosition);

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

  const scrollMangoSlider = (direction: "left" | "right") => {
    const slider = mangoSliderRef.current;

    if (!slider) return;

    const slides = Array.from(slider.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement
    );

    if (!slides.length) return;

    const nextIndex =
      direction === "right"
        ? Math.min(mangoCurrentIndex + 1, slides.length - 1)
        : Math.max(mangoCurrentIndex - 1, 0);

    const targetSlide = slides[nextIndex];

    if (!targetSlide) return;

    slider.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: "smooth",
    });

    setGreenCurrentIndex(nextIndex);
  };





  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      lang={isFarsi ? "fa" : isArabic ? "ar" : "en"}
    >
      <div className="relative h-screen min-h-[650px] w-full overflow-hidden bg-[#3155d9] sm:min-h-[700px]">
        <div
          className="absolute inset-0 z-0 h-full w-full overflow-hidden"
          dir="ltr"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 1.28 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src="/images/blue.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>

        <Navbar />

        <section className="relative z-[5] h-screen min-h-[650px] w-full overflow-hidden md:min-h-[700px]">
          <motion.div
            initial={{
              opacity: 0,
              x: "-150%",
              y: "-50%",
            }}
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
            className="absolute left-[4%] top-1/2 z-[12] -translate-y-1/2"
          >
            <h1 className="m-0 hidden whitespace-nowrap font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] font-normal leading-[0.82] tracking-[-2px] text-white sm:block text-[clamp(42px,12vw,72px)] md:text-[clamp(55px,7vw,95px)] lg:text-[clamp(65px,6vw,110px)] xl:text-[clamp(75px,5.7vw,120px)]">
              {isArabic ? (
                <>
                  توت أزرق
                  <br />
                  كريتيف
                </>
              ) : isFarsi ? (
                <>
                  بلوبری
                  <br />
                  کراتین
                </>
              ) : (
                <>
                  BLUEBERRY
                  <br />
                  CREATINE
                </>
              )}
            </h1>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: "150%",
              y: "-50%",
            }}
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
            className="absolute right-[5%] top-1/2 z-[12] hidden w-[30%] max-w-[430px] -translate-y-1/2 sm:block md:right-[5%] md:w-[34%] lg:right-[7%] lg:w-[30%] xl:right-[8%] xl:w-[28%]"
          >
            <p className="mt-10 w-full font-sans text-[10px] font-normal leading-[1.2] tracking-[0.1px] text-white sm:text-[12px] md:text-[15px] lg:text-[20px] xl:text-[24px]">
              {isArabic
                ? "استمتع بالطعم الغني والمنعش للتوت الأزرق في كل حصة. تركيبة لذيذة وسهلة الشرب مصممة لدعم القوة والأداء والطاقة والتعافي مع كل تمرين."
                : isFarsi
                  ? "از طعم غنی و تازه بلوبری در هر وعده لذت ببرید. فرمولی خوش‌طعم و آسان برای نوشیدن که برای پشتیبانی از قدرت، عملکرد، انرژی و ریکاوری شما طراحی شده است."
                  : "Experience the rich and refreshing burst of Blueberry in every serving. A smooth and delicious formula designed to support your strength, performance, energy and recovery with every workout."}
            </p>
          </motion.div>

          <div className="absolute bottom-[12px] left-1/2 z-[15] flex w-[calc(100%-20px)] -translate-x-1/2 items-stretch justify-between gap-1 sm:bottom-[18px] sm:w-[calc(100%-28px)] sm:gap-1.5 md:bottom-8 md:w-[calc(100%-50px)] md:gap-2 lg:bottom-10 lg:w-[calc(100%-100px)] lg:gap-[18px]">
            {[
              {
                value: isArabic ? "٢٥٠" : isFarsi ? "۲۵۰" : "250 MG",
                label: isArabic ? "ملغ" : isFarsi ? "میلی‌گرم" : "TAURINE",
              },
              {
                value: isArabic ? "٥ غ" : isFarsi ? "۵ گرم" : "5G",
                label: isArabic ? "كرياتين" : isFarsi ? "کراتین" : "CREATINE",
              },
              {
                value: isArabic ? "صفر" : isFarsi ? "صفر" : "ZERO",
                label: isArabic ? "سكر" : isFarsi ? "شکر" : "SUGAR",
              },
              {
                value: isArabic ? "مختبر" : isFarsi ? "آزمایشگاه" : "LAB",
                label: isArabic ? "مُختبَر" : isFarsi ? "آزمایش‌شده" : "TESTED",
              },
              {
                value: isArabic ? "١٠٠٪" : isFarsi ? "۱۰۰٪" : "100%",
                label: isArabic ? "نقي" : isFarsi ? "خالص" : "PURE",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ y: "150%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 4.1 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-w-0 flex-1 overflow-hidden border border-white bg-white text-center text-[#3155d9] sm:min-h-[90px] md:min-h-[110px] md:border-2 lg:min-h-[130px] lg:w-[12%] lg:flex-none"
              >
                <strong className="box-border flex min-h-[42px] items-center justify-center whitespace-nowrap px-0.5 py-1 font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(14px,5vw,20px)] font-light leading-[0.9] tracking-[0.5px] sm:text-[22px] md:min-h-[55px] md:text-[28px] lg:min-h-[66px] lg:px-1.5 lg:py-2 lg:text-[clamp(30px,2.1vw,40px)] lg:tracking-[2px]">
                  {item.value}
                </strong>

                <span className="box-border flex min-h-[38px] items-center justify-center bg-[#3155d9] px-0.5 py-1 font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(7px,2.6vw,10px)] uppercase leading-[0.9] text-white sm:min-h-[42px] md:min-h-[50px] md:text-[15px] lg:min-h-[82px] lg:py-[18px] lg:text-[clamp(18px,1.35vw,25px)]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <section className="box-border min-h-0 w-full overflow-hidden bg-[#f7ecd7] px-4 py-[45px] sm:px-5 sm:py-[50px] md:px-[5%] md:py-[60px] lg:min-h-[760px] lg:px-[4%] lg:py-[70px]">
        <div className="mx-auto flex w-full max-w-[1750px] flex-col items-center gap-10 sm:gap-12 md:grid md:grid-cols-2 md:gap-[30px] lg:min-h-[620px] lg:grid-cols-[1.1fr_.62fr_.52fr] lg:gap-0">

          <div
            className={`flex h-auto w-full min-w-0 flex-col items-center justify-center p-0 text-center md:col-span-2 lg:col-span-1 lg:h-full lg:pt-[55px] ${isRTL
                ? "md:items-end md:text-right lg:items-end lg:pl-10"
                : "md:items-start md:text-left lg:items-start lg:pr-10"
              }`}
          >
            <div className="relative w-full">
              <h2 className="m-0 flex flex-col items-center font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(48px,13vw,72px)] font-normal leading-[0.82] tracking-[1px] text-[#3d2413] sm:text-[clamp(52px,10vw,82px)] md:items-start md:text-[clamp(60px,7vw,90px)] lg:text-[clamp(52px,5.5vw,105px)] lg:tracking-[2px]">
                {isArabic
                  ? "التغذية"
                  : isFarsi
                    ? "تغذیه"
                    : "NUTRITION &"}

                <span className="ml-0 mt-3 inline-block bg-[#2448c8] px-[14px] pb-2 pt-2 font-[Victory_Striker_Sans,Impact,sans-serif] text-[0.82em] text-white -rotate-2 sm:px-[18px] md:ml-[-10px] md:mt-4 md:px-[22px] md:pt-7">
                  {isArabic
                    ? "والمكونات"
                    : isFarsi
                      ? "و مواد تشکیل‌دهنده"
                      : "INGREDIENTS"}
                </span>
              </h2>
            </div>

            <div className="mt-6 w-full sm:mt-7 md:mt-[25px]">
              <p className="m-0 font-mono text-[clamp(10px,2.8vw,14px)] font-normal leading-[1.55] tracking-[0.2px] text-[#3d2413]/80 sm:text-[clamp(11px,2vw,15px)] md:text-[15px] lg:text-[18px]">
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
                    <br className="hidden sm:block" />
                    high-quality performance ingredients.
                  </>
                )}
              </p>
            </div>

            <div className="mt-10 flex w-full items-start justify-center gap-2 sm:mt-12 sm:gap-4 md:mt-[70px] md:justify-start lg:gap-3">
              <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 text-center text-[#3d2413] sm:min-w-[110px] sm:px-2 md:min-w-[100px] md:pl-5">
                <Ban
                  strokeWidth={1.5}
                  className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12"
                />
                <h3 className="m-0 mt-2 whitespace-normal font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(9px,2.5vw,14px)] font-normal leading-[0.95] sm:text-[16px] md:text-[18px] lg:text-[26px]">
                  {isArabic ? "بدون سكر" : isFarsi ? "بدون شکر" : "NO SUGAR"}
                </h3>
              </div>

              <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 text-center text-[#3d2413] sm:min-w-[110px] sm:px-2 md:min-w-[100px] md:pl-5">
                <Leaf
                  strokeWidth={1.5}
                  className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12"
                />
                <h3 className="m-0 mt-2 whitespace-normal font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(9px,2.2vw,14px)] font-normal leading-[0.95] sm:text-[15px] md:text-[18px] lg:text-[26px]">
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

              <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 text-center text-[#3d2413] sm:min-w-[110px] sm:px-2 md:min-w-[100px] md:pl-5">
                <FlaskConical
                  strokeWidth={1.5}
                  className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12"
                />
                <h3 className="m-0 mt-2 whitespace-normal font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(9px,2.5vw,14px)] font-normal leading-[0.95] sm:text-[16px] md:text-[18px] lg:text-[26px]">
                  {isArabic
                    ? "بدون مواد مالئة"
                    : isFarsi
                      ? "بدون پرکننده"
                      : "NO FILLERS"}
                </h3>
              </div>
            </div>
          </div>

          <div className="relative flex h-auto w-full min-w-0 flex-col md:col-span-1 lg:col-span-1 lg:h-full">
            <div
              className="flex w-full max-w-[700px] flex-col gap-4 font-victory"
              dir="ltr"
            >
              <div className="box-border w-full bg-[#4a7cc9] p-1">
                {[
                  [
                    isArabic
                      ? "كرياتين مونوهيدرات"
                      : isFarsi
                        ? "کراتین مونوهیدرات"
                        : "CREATINE MONOHYDRATE",
                    isArabic ? "5 غ" : isFarsi ? "۵ گرم" : "5G",
                  ],
                  [
                    isArabic ? "تورين" : isFarsi ? "تائورین" : "TAURINE",
                    isArabic ? "250 ملغ" : isFarsi ? "۲۵۰ میلی‌گرم" : "250 MG",
                  ],
                ].map(([label, value], index) => (
                  <div
                    key={`top-${index}`}
                    className="box-border flex h-[46px] w-full items-center justify-between border-b border-dotted border-white/85 px-2 text-white last:border-b-0 sm:h-[50px] sm:px-2.5 md:h-[54px] md:px-3"
                  >
                    <span
                      className="min-w-0 truncate text-[25px]"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      {label}
                    </span>

                    <strong
                      className="ml-2 shrink-0 text-[25px]"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      {value}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="box-border w-full bg-[#4a7cc9] p-1">
                {[
                  [
                    isArabic ? "الطاقة" : isFarsi ? "انرژی" : "ENERGY",
                    isArabic ? "12 سعرة حرارية" : isFarsi ? "۱۲ کیلوکالری" : "12 KCAL",
                  ],
                  [
                    isArabic ? "البروتين" : isFarsi ? "پروتئین" : "PROTEIN",
                    isArabic ? "3.0 غ" : isFarsi ? "۳.۰ گرم" : "3.0 G",
                  ],
                  [
                    isArabic ? "الكربوهيدرات" : isFarsi ? "کربوهیدرات" : "CARBOHYDRATE",
                    isArabic ? "0 غ" : isFarsi ? "۰ گرم" : "0 G",
                  ],
                  [
                    isArabic ? "إجمالي السكر" : isFarsi ? "قند کل" : "TOTAL SUGAR",
                    isArabic ? "0 غ" : isFarsi ? "۰ گرم" : "0 G",
                  ],
                  [
                    isArabic ? "السكر المضاف" : isFarsi ? "شکر افزوده" : "ADDED SUGAR",
                    isArabic ? "0 غ" : isFarsi ? "۰ گرم" : "0 G",
                  ],
                  [
                    isArabic ? "إجمالي الدهون" : isFarsi ? "چربی کل" : "TOTAL FAT",
                    isArabic ? "0 غ" : isFarsi ? "۰ گرم" : "0 G",
                  ],
                  [
                    isArabic ? "الدهون المشبعة" : isFarsi ? "چربی اشباع" : "SATURATED FAT",
                    isArabic ? "0 غ" : isFarsi ? "۰ گرم" : "0 G",
                  ],
                  [
                    isArabic ? "الدهون المتحولة" : isFarsi ? "چربی ترانس" : "TRANS FAT",
                    isArabic ? "0 غ" : isFarsi ? "۰ گرم" : "0 G",
                  ],
                  [
                    isArabic ? "الكوليسترول" : isFarsi ? "کلسترول" : "CHOLESTEROL",
                    isArabic ? "0 ملغ" : isFarsi ? "۰ میلی‌گرم" : "0 MG",
                  ],
                  [
                    isArabic ? "الصوديوم" : isFarsi ? "سدیم" : "SODIUM",
                    isArabic ? "0 ملغ" : isFarsi ? "۰ میلی‌گرم" : "0 MG",
                  ],
                ].map(([label, value], index) => (
                  <div
                    key={`bottom-${index}`}
                    className="box-border flex h-[38px] w-full items-center justify-between border-b border-dotted border-white/85 px-2 text-white last:border-b-0 sm:h-[42px] sm:px-2.5 md:h-[46px] md:px-3"
                  >
                    <span
                      className="min-w-0 truncate text-[25px]"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      {label}
                    </span>

                    <strong
                      className="ml-2 shrink-0 text-[25px]"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      {value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative mt-6 flex w-full items-center justify-center md:absolute md:top-1/2 md:mt-0 md:w-[220px] md:-translate-y-1/2 md:translate-x-0 lg:w-[260px] ${isRTL
                  ? "md:right-[92%] md:justify-end lg:right-[90%]"
                  : "md:left-[92%] md:justify-start lg:left-[90%]"
                }`}
            >
              <Image
                src="/images/tt.png"
                alt="Creatine Sachet"
                width={260}
                height={620}
                className="h-auto w-[45%] max-w-[210px] object-contain sm:w-[38%] sm:max-w-[250px] md:w-full md:max-w-[220px] lg:max-w-[260px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex w-full items-center overflow-hidden bg-[#F4FBEA] py-8 md:py-12 lg:py-16">
        <div
          className="absolute inset-0 z-[1] h-full w-full bg-[#2448c8] [clip-path:polygon(0%_0%,50%_8%,100%_0%,100%_100%,0%_100%)]"
          dir="ltr"
        />

        <div
          className="relative z-[2] w-full overflow-hidden whitespace-nowrap py-[35px]"
          dir="ltr"
        >
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
            <h1
              dir={isRTL ? "rtl" : "ltr"}
              className="m-0 flex shrink-0 items-center whitespace-nowrap pr-[clamp(60px,8vw,160px)] font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(5rem,16vw,16rem)] font-normal leading-[1] tracking-[1px] text-white"
            >
              {isArabic ? (
                <>
                  ارتقِ بمستواك مع{" "}
                  <span className="text-[#aebfff]">الكرياتين</span>
                </>
              ) : isFarsi ? (
                <>
                  سطح خود را با <span className="text-[#aebfff]">کراتین</span> ارتقا
                  دهید
                </>
              ) : (
                <>
                  LEVEL UP WITH <span className="ml-5 text-[#aebfff]">CREATINE</span>
                </>
              )}
            </h1>

            <h1
              aria-hidden="true"
              dir={isRTL ? "rtl" : "ltr"}
              className="m-0 flex shrink-0 items-center whitespace-nowrap pr-[clamp(60px,8vw,160px)] font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(5rem,16vw,16rem)] font-normal leading-[1] tracking-[1px] text-white"
            >
              {isArabic ? (
                <>
                  ارتقِ بمستواك مع{" "}
                  <span className="text-[#aebfff]">الكرياتين</span>
                </>
              ) : isFarsi ? (
                <>
                  سطح خود را با <span className="text-[#aebfff]">کراتین</span> ارتقا
                  دهید
                </>
              ) : (
                <>
                  LEVEL UP WITH <span className="ml-5 text-[#aebfff]">CREATINE</span>
                </>
              )}
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        ref={suggestRef}
        className="box-border flex w-full flex-col gap-8 overflow-hidden bg-[#f0f4ff] px-4 py-10 md:flex-row md:items-center md:gap-5 md:p-6 lg:gap-0 lg:p-20"
      >
        <div className="box-border flex w-full min-w-0 flex-col justify-center overflow-visible p-0 max-[400px]:px-0 md:w-[52%] md:py-[45px] md:pr-[15px] lg:w-1/2 lg:py-[100px] lg:pr-[50px] lg:pl-[60px]">
          <h2 className="m-0 w-full font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(2.35rem,13vw,3.2rem)] font-normal uppercase leading-[0.9] tracking-[1px] text-[#172d68] md:text-[clamp(2.7rem,6vw,3.8rem)] lg:text-[clamp(3rem,5vw,5rem)]">
            <span className="block">
              {isArabic ? "طريقة" : isFarsi ? "روش" : "HOW TO"}
            </span>

            <span className="relative z-[2] block w-fit max-w-[96%] -rotate-3 box-border bg-[#2448c8] px-3 py-4 text-[clamp(2.25rem,11vw,3.7rem)] uppercase leading-[0.9] text-white md:px-3.5 md:py-3 md:text-[clamp(2.5rem,5.8vw,3.7rem)] lg:px-[22px] lg:py-5 lg:text-[clamp(3rem,5vw,5rem)]">
              {isArabic
                ? "الاستخدام المقترحة"
                : isFarsi
                  ? "مصرف پیشنهادی"
                  : "SUGGESTED USE"}
            </span>
          </h2>

          <p className="mt-5 max-w-[600px] font-mono text-[11px] leading-[1.55] tracking-[0.2px] text-[#172d68] md:text-[13px] lg:mt-[30px] lg:text-[18px] lg:leading-[1.45]">
            {isArabic
              ? "ادعم قوتك، وساعد جسمك على التعافي، وامنح كل تمرين دفعة إضافية مع كرياتين مونوهيدرات المدروس علميًا."
              : isFarsi
                ? "با کراتین مونوهیدرات که از نظر علمی مورد مطالعه قرار گرفته است، قدرت خود را افزایش دهید، سریع‌تر ریکاوری کنید و به هر تمرین انرژی بیشتری بدهید."
                : "Build more strength, recover faster, and power every workout with scientifically researched Creatine Monohydrate."}
          </p>
        </div>

        <div className="relative h-[380px] w-full min-w-0 overflow-hidden box-border max-[400px]:h-[380px] md:h-[450px] md:w-[48%] lg:h-[600px] lg:w-1/2">
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
            className="h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute left-0 top-[38%] z-20 flex w-full flex-col items-center gap-[20px] px-2.5 md:top-[40%] md:gap-[22px] lg:top-[43%] lg:gap-[35px]">
            {[
              isArabic
                ? "اخلط حصة واحدة مع 250–300 مل من الماء البارد أو مشروبك المفضل."
                : isFarsi
                  ? "یک وعده را با ۲۵۰ تا ۳۰۰ میلی‌لیتر آب سرد یا نوشیدنی مورد علاقه خود مخلوط کنید."
                  : "MIX 1 SERVING WITH 250–300 ML OF COLD WATER OR YOUR FAVORITE BEVERAGE.",
              isArabic
                ? "رُجّ أو حرّك جيدًا حتى يذوب المسحوق بالكامل."
                : isFarsi
                  ? "خوب تکان دهید یا هم بزنید تا پودر کاملاً حل شود."
                  : "SHAKE OR STIR WELL UNTIL THE POWDER IS COMPLETELY DISSOLVED.",
              isArabic
                ? "تناوله يوميًا واحرص على شرب كمية كافية من الماء طوال اليوم أثناء استخدام الكرياتين."
                : isFarsi
                  ? "هر روز مصرف کنید و هنگام استفاده از کراتین، در طول روز آب کافی بنوشید."
                  : "DRINK DAILY AND STAY WELL HYDRATED BY CONSUMING PLENTY OF WATER THROUGHOUT THE DAY WHILE USING CREATINE.",
            ].map((text, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: suggestVisible ? 1 : 0,
                  y: suggestVisible ? 0 : 25,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + index * 1.2,
                }}
                className={`w-auto max-w-[82%] rounded-lg bg-[#3f63d9] px-3 py-2 font-mono text-[10px] uppercase leading-[1.4] text-white md:w-[72%] md:max-w-[300px] md:text-[10px] lg:w-[65%] lg:max-w-[420px] lg:px-[18px] lg:py-3 lg:text-[13px] ${index === 1
                    ? "ml-3 md:ml-5 lg:ml-[42px]"
                    : "ml-0"
                  }`}
              >
                <p className="m-0">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="box-border flex w-full flex-col items-center gap-6 overflow-hidden bg-[#f0f4ff] px-3 pb-[55px] pt-10 md:grid md:grid-cols-[.8fr_1.2fr] md:gap-[25px] md:px-6 md:pb-[70px] md:pt-[55px] lg:grid-cols-[.8fr_1.2fr] lg:gap-[45px] lg:px-10 lg:pb-[90px] lg:pt-[70px]">
        <div className="relative z-[5] flex w-full items-start justify-start md:justify-start lg:items-center lg:justify-center">
          <h2 className="m-0 font-[Victory_Striker_Sans,Impact,sans-serif] text-[clamp(40px,5.5vw,90px)] font-normal uppercase leading-[0.82] tracking-[1px] text-[#172d68]">
            {isArabic
              ? "قد يعجبك"
              : isFarsi
                ? "شاید این را"
                : "YOU MAY"}

            <span className="mt-[15px] block w-fit max-w-full box-border bg-[#2448c8] px-[clamp(12px,1.4vw,22px)] pb-[clamp(6px,.8vw,12px)] pt-[clamp(8px,1vw,14px)] text-[clamp(40px,5.1vw,82px)] leading-[.85] text-white whitespace-nowrap -rotate-2">
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
            className="flex w-full box-border snap-x snap-mandatory gap-[15px] overflow-x-auto overflow-y-hidden px-2 pb-5 pt-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x md:gap-[18px] md:px-2.5 md:pb-[25px] md:pt-[15px] lg:gap-[25px] lg:px-[15px] lg:pb-[30px] lg:pt-5"
          >
            {products.map((item) => (
              <div
                className="relative flex min-w-full w-full shrink-0 snap-start snap-always items-center justify-center box-border"
                key={item.id}
              >
                <Link
                  href={item.link}
                  className="block h-full w-full no-underline"
                >
                  <div className="relative h-[320px] w-full overflow-hidden rounded-[30px] md:h-[360px] md:w-[90%] lg:h-[420px] lg:w-[70%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 500px"
                      className="h-full w-full rounded-[30px] object-cover transition-transform duration-300 hover:scale-[1.04]"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex w-full items-center justify-center gap-2">
            <button
              type="button"
              className="flex h-[50px] min-h-[50px] w-[50px] min-w-[50px] cursor-pointer items-center justify-center border-0 bg-[#2448c8] p-0 text-[28px] leading-none text-[#f0f4ff] transition-all duration-200 hover:not-disabled:bg-[#172d68] hover:not-disabled:-translate-y-0.5 active:not-disabled:scale-95 disabled:cursor-not-allowed disabled:bg-[#172d68] disabled:opacity-35"
              onClick={() => scrollMangoSlider("left")}
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
              className="flex h-[50px] min-h-[50px] w-[50px] min-w-[50px] cursor-pointer items-center justify-center border-0 bg-[#2448c8] p-0 text-[28px] leading-none text-[#f0f4ff] transition-all duration-200 hover:not-disabled:bg-[#172d68] hover:not-disabled:-translate-y-0.5 active:not-disabled:scale-95 disabled:cursor-not-allowed disabled:bg-[#172d68] disabled:opacity-35"
              onClick={() => scrollMangoSlider("right")}
              disabled={mangoCurrentIndex === products.length - 1}
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

            <ReviewsSection/>

      <Footer />
    </main>
  );
}