"use client";

import {
  FaBan,
  FaCanadianMapleLeaf,
  FaFlask,
  FaChevronDown,
  FaStar,
} from "react-icons/fa";
import Footer from "@/commonComponents/Footer";
import Navbar from "@/commonComponents/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "@/app/styles/greenapple.css";
import { useLanguage } from "@/app/context/languageUseContent";

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
    link: "/carddetail/green-apple",
    image: "/images/image 403.jpg",
    title: "green-apple",
  },
  {
    id: 2,
    link: "/carddetail/strawberry",
    image: "/images/image 405.jpg",
    title: "strawberry",
  },
  {
    id: 3,
    link: "/carddetail/blueberry",
    image: "/images/blue.png",
    title: "blueberry",
  },
  {
    id: 4,
    link: "/carddetail/green-apple",
    image: "/images/image 403.jpg",
    title: "green-apple",
  },
  {
    id: 5,
    link: "/carddetail/strawberry",
    image: "/images/image 405.jpg",
    title: "strawberry",
  },
  {
    id: 6,
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

  const isArabic = language === "ar";
  const isFarsi = language === "fa";
  const isRTL = isArabic || isFarsi;

  const [sortBy, setSortBy] = useState("most-recent");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestVisible, setSuggestVisible] = useState(false);
  const [greenCurrentIndex, setGreenCurrentIndex] = useState(0);

  const suggestRef = useRef<HTMLElement>(null);
  const greenSliderRef = useRef<HTMLDivElement>(null);

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
    const slider = greenSliderRef.current;

    if (!slider) return;

    const handleScroll = () => {
      const slides = Array.from(
        slider.querySelectorAll<HTMLElement>(".green-slide")
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

  const scrollGreenSlider = (
    direction: "left" | "right"
  ) => {
    const slider = greenSliderRef.current;

    if (!slider) return;

    const slides = Array.from(
      slider.querySelectorAll<HTMLElement>(".green-slide")
    );

    if (!slides.length) return;

    const nextIndex =
      direction === "right"
        ? Math.min(
            greenCurrentIndex + 1,
            slides.length - 1
          )
        : Math.max(greenCurrentIndex - 1, 0);

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
      className={isRTL ? "rtl" : "ltr"}
    >
      <div className="greenapple-page">
        <div
          className="greenapple-bg"
          dir="ltr"
          aria-hidden="true"
        >
          <Image
            src="/images/image 403.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="background-image"
          />
        </div>

        <Navbar />

        <section className="product-hero">
          <div className="flavour-title">
            <h1>
              {isArabic ? (
                <>
                  فراولة
                  <br />
                  كريتيف
                </>
              ) : isFarsi ? (
                <>
                  توت‌فرنگی
                  <br />
                  کراتین
                </>
              ) : (
                <>
                  GREEN APPLE
                  <br />
                  CREATINE
                </>
              )}
            </h1>
          </div>

          <div className="product-description">
            <p>
              {isArabic
                ? "استمتع بطعم الفراولة المنعش في كل حصة. تركيبة لذيذة وسهلة الشرب مصممة لدعم القوة والأداء والطاقة والتعافي مع كل تمرين."
                : isFarsi
                  ? "از طعم تازه و شیرین توت‌فرنگی در هر وعده لذت ببرید. فرمولی خوش‌طعم و آسان برای نوشیدن که برای پشتیبانی از قدرت، عملکرد، انرژی و ریکاوری شما طراحی شده است."
                  : "Experience the refreshing burst of Green Apple in every serving. A smooth and delicious formula designed to support your strength, performance, energy and recovery with every workout."}
            </p>
          </div>

          <div className="creatine-features">
            <div className="creatine-feature-card">
              <strong>
                {isArabic ? "٢٥٠" : isFarsi ? "۲۵۰" : "250"}
              </strong>

              <span>
                {isArabic
                  ? "ملغ"
                  : isFarsi
                    ? "میلی‌گرم"
                    : "MG"}
              </span>
            </div>

            <div className="creatine-feature-card">
              <strong>
                {isArabic ? "٥ غ" : isFarsi ? "۵ گرم" : "5G"}
              </strong>

              <span>
                {isArabic
                  ? "كرياتين"
                  : isFarsi
                    ? "کراتین"
                    : "CREATINE"}
              </span>
            </div>

            <div className="creatine-feature-card">
              <strong>
                {isArabic ? "صفر" : isFarsi ? "صفر" : "ZERO"}
              </strong>

              <span>
                {isArabic
                  ? "سكر"
                  : isFarsi
                    ? "شکر"
                    : "SUGAR"}
              </span>
            </div>

            <div className="creatine-feature-card">
              <strong>
                {isArabic
                  ? "مختبر"
                  : isFarsi
                    ? "آزمایشگاه"
                    : "LAB"}
              </strong>

              <span>
                {isArabic
                  ? "مُختبَر"
                  : isFarsi
                    ? "آزمایش‌شده"
                    : "TESTED"}
              </span>
            </div>

            <div className="creatine-feature-card">
              <strong>
                {isArabic ? "١٠٠٪" : isFarsi ? "۱۰۰٪" : "100%"}
              </strong>

              <span>
                {isArabic
                  ? "نقي"
                  : isFarsi
                    ? "خالص"
                    : "PURE"}
              </span>
            </div>
          </div>
        </section>
      </div>

      <section className="nutrition-section">
        <div className="nutrition-wrapper">
          <div className="nutrition-left">
            <div className="nutrition-heading">
              <h2>
                {isArabic
                  ? "التغذية"
                  : isFarsi
                    ? "تغذیه"
                    : "NUTRITION &"}

                <span>
                  {isArabic
                    ? "والمكونات"
                    : isFarsi
                      ? "و مواد تشکیل‌دهنده"
                      : "INGREDIENTS"}
                </span>
              </h2>
            </div>

            <div className="nutrition-description">
              <p>
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

            <div className="nutrition-features">
              <div className="nutrition-feature">
                <FaBan />

                <h3>
                  {isArabic
                    ? "بدون سكر"
                    : isFarsi
                      ? "بدون شکر"
                      : "NO SUGAR"}
                </h3>
              </div>

              <div className="nutrition-feature">
                <FaCanadianMapleLeaf />

                <h3>
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
                      BANNED
                      <br />
                      SUBSTANCE FREE
                    </>
                  )}
                </h3>
              </div>

              <div className="nutrition-feature">
                <FaFlask />

                <h3>
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
            className="nutrition-table"
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
                className={`nutrition-row ${
                  index === 0
                    ? "nutrition-top-row"
                    : ""
                }`}
              >
                <span
                  dir={isRTL ? "rtl" : "ltr"}
                  className="text-right"
                >
                  {label}
                </span>

                <strong
                  dir={isRTL ? "rtl" : "ltr"}
                  className="text-left"
                >
                  {value}
                </strong>
              </div>
            ))}
          </div>

          <div className="nutrition-product">
            <Image
              src="/images/tt.png"
              alt={
                isArabic
                  ? "كرياتين الفراولة"
                  : isFarsi
                    ? "کراتین توت‌فرنگی"
                    : "Green Apple Creatine"
              }
              width={200}
              height={550}
              className="nutrition-pack"
            />
          </div>
        </div>
      </section>

      <section className="level-up">
        <div
          className="level-image"
          dir="ltr"
        >
          <Image
            src="/images/Rectangle.png"
            alt="Creatine"
            fill
            priority
            className="level-background"
          />
        </div>

        <div className="level-marquee">
          <div className="level-marquee-track">
            <h1>
              {isArabic ? (
                <>
                  ارتقِ بمستواك مع{" "}
                  <span>الكرياتين</span>
                </>
              ) : isFarsi ? (
                <>
                  سطح خود را با{" "}
                  <span>کراتین</span> ارتقا دهید
                </>
              ) : (
                <>
                  LEVEL UP WITH{" "}
                  <span>CREATINE</span>
                </>
              )}
            </h1>

            <h1 aria-hidden="true">
              {isArabic ? (
                <>
                  ارتقِ بمستواك مع{" "}
                  <span>الكرياتين</span>
                </>
              ) : isFarsi ? (
                <>
                  سطح خود را با{" "}
                  <span>کراتین</span> ارتقا دهید
                </>
              ) : (
                <>
                  LEVEL UP WITH{" "}
                  <span>CREATINE</span>
                </>
              )}
            </h1>
          </div>
        </div>
      </section>

      <section
        ref={suggestRef}
        className={`suggest-page ${
          suggestVisible
            ? "suggest-visible"
            : ""
        }`}
      >
        <div className="suggest-h2">
          <h2>
            {isArabic
              ? "طريقة"
              : isFarsi
                ? "روش"
                : "HOW TO"}

            <span className="suggest-box">
              {isArabic
                ? "الاستخدام المقترحة"
                : isFarsi
                  ? "مصرف پیشنهادی"
                  : "SUGGESTED USE"}
            </span>
          </h2>

          <p>
            {isArabic
              ? "ادعم قوتك، وساعد جسمك على التعافي، وامنح كل تمرين دفعة إضافية مع كرياتين مونوهيدرات المدروس علميًا."
              : isFarsi
                ? "با کراتین مونوهیدرات که از نظر علمی مورد مطالعه قرار گرفته است، قدرت خود را افزایش دهید، سریع‌تر ریکاوری کنید و به هر تمرین انرژی بیشتری بدهید."
                : "Build more strength, recover faster, and power every workout with scientifically researched Creatine Monohydrate."}
          </p>
        </div>

        <div className="suggest-image">
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
            className="suggest-img"
          />

          <div className="suggest-steps">
            <div className="suggest-step suggest-step-1">
              <p>
                {isArabic
                  ? "اخلط حصة واحدة مع 250–300 مل من الماء البارد أو مشروبك المفضل."
                  : isFarsi
                    ? "یک وعده را با ۲۵۰ تا ۳۰۰ میلی‌لیتر آب سرد یا نوشیدنی مورد علاقه خود مخلوط کنید."
                    : "MIX 1 SERVING WITH 250–300 ML OF COLD WATER OR YOUR FAVORITE BEVERAGE."}
              </p>
            </div>

            <div className="suggest-step suggest-step-2">
              <p>
                {isArabic
                  ? "رُجّ أو حرّك جيدًا حتى يذوب المسحوق بالكامل."
                  : isFarsi
                    ? "خوب تکان دهید یا هم بزنید تا پودر کاملاً حل شود."
                    : "SHAKE OR STIR WELL UNTIL THE POWDER IS COMPLETELY DISSOLVED."}
              </p>
            </div>

            <div className="suggest-step suggest-step-3">
              <p>
                {isArabic
                  ? "تناوله يوميًا واحرص على شرب كمية كافية من الماء طوال اليوم أثناء استخدام الكرياتين."
                  : isFarsi
                    ? "هر روز مصرف کنید و هنگام استفاده از کراتین، در طول روز آب کافی بنوشید."
                    : "DRINK DAILY AND STAY WELL HYDRATED BY CONSUMING PLENTY OF WATER THROUGHOUT THE DAY WHILE USING CREATINE."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="greenapple-product">
        <div className="greenapple-product-h2">
          <h2>
            {isArabic
              ? "قد يعجبك"
              : isFarsi
                ? "شاید این را"
                : "YOU MAY"}

            <span className="like-span">
              {isArabic
                ? "أيضًا"
                : isFarsi
                  ? "هم دوست داشته باشید"
                  : "ALSO LIKE"}
            </span>
          </h2>
        </div>

        <div className="green-right">
          <div
            ref={greenSliderRef}
            className="green-apple-scroll"
          >
            {products.map((item) => (
              <div
                className="green-slide"
                key={item.id}
              >
                <Link
                  href={item.link}
                  className="green-card-link"
                >
                  <div className="green-card">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 500px"
                      className="green-card-image"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="green-slider-arrows">
            <button
              type="button"
              className="green-slider-arrow"
              onClick={() =>
                scrollGreenSlider("left")
              }
              disabled={greenCurrentIndex === 0}
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
              className="green-slider-arrow"
              onClick={() =>
                scrollGreenSlider("right")
              }
              disabled={
                greenCurrentIndex ===
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

      <section className="order-rating-section">
        <div className="order-rating-container">
          <div className="rating-left">
            <h2 className="rating-title">
              {isArabic
                ? "تقييم الطلب"
                : isFarsi
                  ? "امتیاز سفارش"
                  : "ORDER RATING"}
            </h2>

            <div className="rating-score">
              <span className="score">
                4.4
              </span>

              <FaStar className="score-star" />
            </div>

            <p className="rating-info">
              {isArabic
                ? "بناءً على 98 تقييمًا"
                : isFarsi
                  ? "بر اساس ۹۸ امتیاز"
                  : "BASED ON 98 RATINGS"}
            </p>

            <p className="rating-date">
              {isArabic
                ? "التقييمات منذ 13 مارس 2026"
                : isFarsi
                  ? "امتیازدهی از ۱۳ مارس ۲۰۲۶"
                  : "RATING SINCE MAR. 13 2026"}
            </p>

            <p className="review-product">
              {isArabic
                ? "قيّم المنتج"
                : isFarsi
                  ? "محصول را امتیاز دهید"
                  : "REVIEW THE PRODUCT"}
            </p>

            <div className="review-stars">
              {[1, 2, 3, 4, 5].map(
                (star) => (
                  <FaStar key={star} />
                )
              )}
            </div>

            <h3 className="add-review-title">
              {isArabic
                ? "أضف تقييمك"
                : isFarsi
                  ? "امتیاز خود را اضافه کنید"
                  : "ADD YOUR REVIEW"}
            </h3>

            <p className="review-note">
              {isArabic
                ? "لن يتم نشر بريدك الإلكتروني. الحقول المطلوبة مميزة بعلامة *"
                : isFarsi
                  ? "آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی با علامت * مشخص شده‌اند."
                  : "YOUR EMAIL ADDRESS WILL NOT BE PUBLISHED. REQUIRED FIELDS ARE MARKED *"}
            </p>
          </div>

          <div className="rating-right">
            {ratings.map((rating) => (
              <div
                className="rating-row"
                key={rating.stars}
              >
                <span className="rating-label">
                  {rating.stars}{" "}
                  {isArabic
                    ? "نجوم"
                    : isFarsi
                      ? "ستاره"
                      : "STARS"}
                </span>

                <div className="rating-bar">
                  <div
                    className="rating-fill"
                    style={{
                      width: `${rating.percentage}%`,
                    }}
                  />
                </div>

                <span className="rating-count">
                  {rating.count}
                </span>
              </div>
            ))}
          </div>

          <div className="review-form">
            <textarea
              className="review-input"
              placeholder={
                isArabic
                  ? "اكتب تقييمك..."
                  : isFarsi
                    ? "نظر خود را بنویسید..."
                    : "WRITE YOUR REVIEW..."
              }
            />

            <div className="review-upload">
              <span className="upload-icon">
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
      </section>

      <section className="reviews-section">
        <div className="reviews-info-bar">
          <span>
            {isArabic
              ? "إذا كنت ترغب في كتابة تقييم، اضغط على الصورة أدناه لتسجيل الدخول"
              : isFarsi
                ? "اگر می‌خواهید نظر خود را بنویسید، برای ورود روی تصویر زیر کلیک کنید"
                : "IF YOU WOULD LIKE TO WRITE, CLICK PHOTO BELOW TO SIGN IN"}
          </span>
        </div>

        <div className="reviews-submit-wrapper">
          <button className="reviews-submit">
            {isArabic
              ? "إرسال"
              : isFarsi
                ? "ارسال"
                : "SUBMIT"}
          </button>
        </div>

        <div className="reviews-header">
          <p className="reviews-count">
            {isArabic
              ? "1-10 من أصل 98 تقييمًا"
              : isFarsi
                ? "۱-۱۰ از ۹۸ نظر"
                : "1-10 OF 98 REVIEWS"}
          </p>

          <div className="sort-wrapper">
            <button
              type="button"
              className={`sort-button ${
                isOpen ? "active" : ""
              }`}
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
                className={`sort-arrow ${
                  isOpen
                    ? "arrow-up"
                    : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="sort-menu">
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
          </div>
        </div>

        <div className="reviews-list">
          {sortedReviews.map(
            (review) => (
              <article
                className="single-review"
                key={review.id}
                dir={
                  isRTL
                    ? "rtl"
                    : "ltr"
                }
              >
                <div className="review-details">
                  <h3 className="review-name">
                    {review.name}
                  </h3>

                  <p className="review-date">
                    {review.date}
                  </p>

                  <div className="review-rating">
                    {[
                      1,
                      2,
                      3,
                      4,
                      5,
                    ].map(
                      (star) => (
                        <FaStar
                          key={
                            star
                          }
                          className={
                            star <=
                            review.rating
                              ? "star-filled"
                              : "star-empty"
                          }
                        />
                      )
                    )}
                  </div>

                  <p className="review-text">
                    "{getReviewText(
                      review
                    )}"
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}