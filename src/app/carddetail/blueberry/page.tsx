"use client";

import { FaStar, FaChevronDown } from "react-icons/fa";
import { FaBan, FaCanadianMapleLeaf, FaFlask } from "react-icons/fa";
import Footer from "@/commonComponents/Footer";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "@/app/styles/blueberry.css";
import Link from "next/link";
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
    link: "/carddetail/mango",
    image: "/images/image 404.jpg",
    title: "mango",
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
};

const reviews: Review[] = [
  {
    id: 1,
    name: "RAHUL S.",
    date: "12-07-26",
    rating: 5,
    text: "Being a college student, spending ₹1,500 upfront on a big tub was always a stretch. Getting quality creatine for just ₹1 a day has made a huge difference for my budget. It feels just as good as the expensive imported brands.",
  },
  {
    id: 2,
    name: "KABIR M.",
    date: "05-08-26",
    rating: 3,
    text: "Honestly, I thought ₹1 creatine had to be too good to be true. I scanned the QR code, checked the NABL lab report for my batch, and decided to give it a try. It mixes really well, and my lifts have been improving. For the price, it is seriously impressive.",
  },
  {
    id: 3,
    name: "ANJALI D.",
    date: "28-07-26",
    rating: 4,
    text: "Every monsoon, my old creatine tub would absorb moisture and turn into a hard block. These foil sachets have been a lifesaver. The powder stays completely dry, and I no longer have to dig around for a scoop.",
  },
  {
    id: 4,
    name: "ROHIT K.",
    date: "02-08-26",
    rating: 5,
    text: "The mixability is honestly amazing. Cheap creatine usually leaves that gritty stuff at the bottom of the shaker, but this dissolves really quickly. I just tear open a sachet, mix it into my morning drink, and I am good to go.",
  },
  {
    id: 5,
    name: "VIKRAM T.",
    date: "14-06-26",
    rating: 4.5,
    text: "I travel a lot for work, and carrying loose powder in my luggage was always inconvenient. Now I just keep a few sachets in my laptop bag. Opening a fresh sachet at the hotel gym is simple and hassle-free.",
  },
];

export default function Page() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [sortBy, setSortBy] = useState("most-recent");
  const [isOpen, setIsOpen] = useState(false);

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
      return isArabic ? "الأعلى تقييمًا" : "HIGHEST RATING";
    }

    if (sortBy === "lowest") {
      return isArabic ? "الأقل تقييمًا" : "LOWEST RATING";
    }

    return isArabic ? "الأحدث" : "MOST RECENT";
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    setIsOpen(false);
  };

  const suggestRef = useRef<HTMLElement>(null);
  const [suggestVisible, setSuggestVisible] = useState(false);

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
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const greenSliderRef = useRef<HTMLDivElement>(null);
  const [greenCurrentIndex, setGreenCurrentIndex] = useState(0);

  const scrollGreenSlider = (direction: "left" | "right") => {
    const slider = greenSliderRef.current;

    if (!slider) return;

    const slide = slider.querySelector(
      ".green-slide"
    ) as HTMLElement | null;

    if (!slide) return;

    const gap = 20;
    const slideWidth = slide.offsetWidth + gap;

    if (direction === "right") {
      slider.scrollBy({
        left: slideWidth,
        behavior: "smooth",
      });

      setGreenCurrentIndex((prev) =>
        Math.min(prev + 1, products.length - 1)
      );
    } else {
      slider.scrollBy({
        left: -slideWidth,
        behavior: "smooth",
      });

      setGreenCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <main dir={isArabic ? "rtl" : "ltr"}>
      <div className="blueberry-page">
        <div className="blueberry-bg">
          <Image
            src="/images/blue.png"
            alt={isArabic ? "التوت الأزرق" : "Blue Raspberry"}
            fill
            priority
            className="background-image"
          />
        </div>

        <header className="top-navigation">
          <Link href={"/"}>
          <div className="top-logo">
            <Image
              src="/images/logo.png"
              alt="Creatine Company"
              width={75}
              height={75}
              priority
            />
          </div>
          </Link>

          <NavigationMenu backgroundImage="/images/blue.png" />
        </header>

        <section className="product-hero">
          <div className="flavour-title">
            <h1>
              {isArabic ? (
                <>
                  التوت
                  <br />
                  الأزرق
                </>
              ) : (
                <>
                  BLUE
                  <br />
                  RASPBERRY
                </>
              )}
            </h1>
          </div>

          <div className="product-description">
            <p>
              {isArabic
                ? "استمتع بطعم التوت الأزرق المنعش والجريء في كل حصة. تركيبة لذيذة وسهلة الشرب، صُممت لتدعم أداءك وقوتك وتركيزك وطاقتك وتعافيك مع كل تمرين."
                : "Experience the bold burst of juicy Blue Raspberry in every refreshing scoop. Crafted to deliver a smooth, delicious taste while supporting your performance, strength, focus, energy and recovery."}
            </p>
          </div>

          <div className="creatine-features">
            <div className="creatine-feature-card">
              <strong>250</strong>
              <span>{isArabic ? "ملغ" : "MG"}</span>
            </div>

            <div className="creatine-feature-card">
              <strong>5G</strong>
              <span>{isArabic ? "كرياتين" : "CREATINE"}</span>
            </div>

            <div className="creatine-feature-card">
              <strong>ZERO</strong>
              <span>{isArabic ? "سكر" : "SUGAR"}</span>
            </div>

            <div className="creatine-feature-card">
              <strong>LAB</strong>
              <span>{isArabic ? "مختبر" : "TESTED"}</span>
            </div>

            <div className="creatine-feature-card">
              <strong>100%</strong>
              <span>{isArabic ? "نقي" : "PURE"}</span>
            </div>
          </div>
        </section>
      </div>

      <section className="nutrition-section">
        <div className="nutrition-wrapper">
          <div className="nutrition-left">
            <div className="nutrition-heading">
              <h2>
                {isArabic ? "التغذية" : "NUTRITION &"}
                <span>{isArabic ? "والمكونات" : "INGREDIENTS"}</span>
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
                <h3>{isArabic ? "بدون سكر" : "NO SUGAR"}</h3>
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
                <h3>{isArabic ? "بدون مواد مالئة" : "NO FILLERS"}</h3>
              </div>
            </div>
          </div>

          <div className="nutrition-table">
            {[
              [isArabic ? "كرياتين مونوهيدرات" : "CREATINE MONOHYDRATE", "5G"],
              [isArabic ? "تورين" : "TAURINE", "250 MG"],
              [isArabic ? "الطاقة" : "ENERGY", "12 KCAL"],
              [isArabic ? "البروتين" : "PROTEIN", "3.0 G"],
              [isArabic ? "الكربوهيدرات" : "CARBOHYDRATE", "0 G"],
              [isArabic ? "إجمالي السكر" : "TOTAL SUGAR", "0 G"],
              [isArabic ? "السكر المضاف" : "ADDED SUGAR", "0 G"],
              [isArabic ? "إجمالي الدهون" : "TOTAL FAT", "0 G"],
              [isArabic ? "الدهون المشبعة" : "SATURATED FAT", "0 G"],
              [isArabic ? "الدهون المتحولة" : "TRANS FAT", "0 G"],
              [isArabic ? "الكوليسترول" : "CHOLESTEROL", "0 MG"],
              [isArabic ? "الصوديوم" : "SODIUM", "0 MG"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`nutrition-row ${
                  index === 0 ? "nutrition-top-row" : ""
                }`}
              >
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="nutrition-product">
            <Image
              src="/images/tt.png"
              alt={isArabic ? "كرياتين مونوهيدرات" : "Creatine Monohydrate"}
              width={200}
              height={550}
              className="nutrition-pack"
            />
          </div>
        </div>
      </section>

      <section className="level-up">
        <div className="level-image">
          <Image
            src="/images/Rectangle.png"
            alt="Creatine Company"
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
                  ارتقِ بمستواك مع <span>الكرياتين</span>
                </>
              ) : (
                <>
                  LEVEL UP WITH <span>CREATINE</span>
                </>
              )}
            </h1>

            <h1 aria-hidden="true">
              {isArabic ? (
                <>
                  ارتقِ بمستواك مع <span>الكرياتين</span>
                </>
              ) : (
                <>
                  LEVEL UP WITH <span>CREATINE</span>
                </>
              )}
            </h1>
          </div>
        </div>
      </section>

      <section
        ref={suggestRef}
        className={`suggest-page ${
          suggestVisible ? "suggest-visible" : ""
        }`}
      >
        <div className="suggest-h2">
          <h2>
            {isArabic ? "طريقة" : "HOW TO"}
            <span className="suggest-box">
              {isArabic ? "الاستخدام المقترحة" : "SUGGESTED USE"}
            </span>
          </h2>

          <p>
            {isArabic
              ? "ادعم قوتك، وساعد جسمك على التعافي، وامنح كل تمرين دفعة إضافية مع كرياتين مونوهيدرات المدروس علميًا."
              : "Build more strength, recover faster, and power every workout with scientifically researched Creatine Monohydrate."}
          </p>
        </div>

        <div className="suggest-image">
          <Image
            src="/images/group3.png"
            alt={isArabic ? "طريقة استخدام الكرياتين" : "Creatine"}
            fill
            className="suggest-img"
            priority
          />

          <div className="suggest-steps">
            <div className="suggest-step suggest-step-1">
              <p>
                {isArabic
                  ? "اخلط حصة واحدة مع 250–300 مل من الماء البارد أو مشروبك المفضل."
                  : "MIX 1 SERVING WITH 250–300 ML OF COLD WATER OR YOUR FAVORITE BEVERAGE."}
              </p>
            </div>

            <div className="suggest-step suggest-step-2">
              <p>
                {isArabic
                  ? "رُجّ أو حرّك جيدًا حتى يذوب المسحوق بالكامل."
                  : "SHAKE OR STIR WELL UNTIL THE POWDER IS COMPLETELY DISSOLVED."}
              </p>
            </div>

            <div className="suggest-step suggest-step-3">
              <p>
                {isArabic
                  ? "تناوله يوميًا واحرص على شرب كمية كافية من الماء طوال اليوم أثناء استخدام الكرياتين."
                  : "DRINK DAILY AND STAY WELL HYDRATED BY CONSUMING PLENTY OF WATER THROUGHOUT THE DAY WHILE USING CREATINE."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="green-apple">
        <div className="green-apple-h2">
          <h2>
            {isArabic ? "قد يعجبك" : "YOU MAY"}
            <span className="like-span">
              {isArabic ? "أيضًا" : "ALSO LIKE"}
            </span>
          </h2>
        </div>

        <div className="green-right">
          <div className="green-apple-scroll" ref={greenSliderRef}>
            {products.map((item) => (
              <div className="green-slide" key={item.id}>
                <Link href={item.link} className="green-card-link">
                  <div className="green-card">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 65vw"
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
              onClick={() => scrollGreenSlider("left")}
              disabled={greenCurrentIndex === 0}
              aria-label={isArabic ? "المنتج السابق" : "Previous product"}
            >
              ←
            </button>

            <button
              type="button"
              className="green-slider-arrow"
              onClick={() => scrollGreenSlider("right")}
              disabled={greenCurrentIndex === products.length - 1}
              aria-label={isArabic ? "المنتج التالي" : "Next product"}
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
              {isArabic ? "تقييم الطلب" : "ORDER RATING"}
            </h2>

            <div className="rating-score">
              <span className="score">4.4</span>
              <FaStar className="score-star" />
            </div>

            <p className="rating-info">
              {isArabic ? "بناءً على 98 تقييمًا" : "BASED ON 98 RATINGS"}
            </p>

            <p className="rating-date">
              {isArabic
                ? "التقييمات منذ 13 مارس 2026"
                : "RATING SINCE MAR. 13 2026"}
            </p>

            <p className="review-product">
              {isArabic ? "قيّم المنتج" : "REVIEW THE PRODUCT"}
            </p>

            <div className="review-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}
            </div>

            <h3 className="add-review-title">
              {isArabic ? "أضف تقييمك" : "ADD YOUR REVIEW"}
            </h3>

            <p className="review-note">
              {isArabic
                ? "لن يتم نشر بريدك الإلكتروني. الحقول المطلوبة مميزة بعلامة *"
                : "YOUR EMAIL ADDRESS WILL NOT BE PUBLISHED. REQUIRED FIELDS ARE MARKED *"}
            </p>
          </div>

          <div className="rating-right">
            {ratings.map((rating) => (
              <div className="rating-row" key={rating.stars}>
                <span className="rating-label">
                  {rating.stars} {isArabic ? "نجوم" : "STARS"}
                </span>

                <div className="rating-bar">
                  <div
                    className="rating-fill"
                    style={{
                      width: `${rating.percentage}%`,
                    }}
                  />
                </div>

                <span className="rating-count">{rating.count}</span>
              </div>
            ))}
          </div>

          <div className="review-form">
            <textarea
              className="review-input"
              placeholder={
                isArabic ? "اكتب تقييمك..." : "WRITE YOUR REVIEW..."
              }
            />

            <div className="review-upload">
              <span className="upload-icon">▧</span>
              <span>{isArabic ? "إضافة صورة" : "ADD PHOTO"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-info-bar">
          <span>
            {isArabic
              ? "إذا كنت ترغب في كتابة تقييم، اضغط على الصورة أدناه لتسجيل الدخول"
              : "IF YOU WOULD LIKE TO WRITE, CLICK PHOTO BELOW TO SIGN IN"}
          </span>
        </div>

        <div className="reviews-submit-wrapper">
          <button className="reviews-submit">
            {isArabic ? "إرسال" : "SUBMIT"}
          </button>
        </div>

        <div className="reviews-header">
          <p className="reviews-count">
            {isArabic ? "1-10 من أصل 98 تقييمًا" : "1-10 OF 98 REVIEWS"}
          </p>

          <div className="sort-wrapper">
            <button
              type="button"
              className={`sort-button ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>
                {isArabic ? "ترتيب حسب - " : "SORT BY - "}
                {getSortLabel()}
              </span>

              <FaChevronDown
                className={`sort-arrow ${isOpen ? "arrow-up" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="sort-menu">
                <button
                  type="button"
                  onClick={() => handleSort("most-recent")}
                >
                  {isArabic ? "الأحدث" : "MOST RECENT"}
                </button>

                <button
                  type="button"
                  onClick={() => handleSort("highest")}
                >
                  {isArabic ? "الأعلى تقييمًا" : "HIGHEST RATING"}
                </button>

                <button
                  type="button"
                  onClick={() => handleSort("lowest")}
                >
                  {isArabic ? "الأقل تقييمًا" : "LOWEST RATING"}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="reviews-list">
          {sortedReviews.map((review) => (
            <article className="single-review" key={review.id}>
              <div className="review-details">
                <h3 className="review-name">{review.name}</h3>

                <p className="review-date">{review.date}</p>

                <div className="review-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={
                        star <= review.rating
                          ? "star-filled"
                          : "star-empty"
                      }
                    />
                  ))}
                </div>

                <p className="review-text">
                  "
                  {isArabic
                    ? review.id === 1
                      ? "كطالب جامعي، كان دفع مبلغ كبير مقدمًا مقابل علبة كرياتين أمرًا صعبًا على ميزانيتي. الحصول على كرياتين بجودة ممتازة بسعر مناسب يوميًا أحدث فرقًا كبيرًا بالنسبة لي. وبصراحة، أشعر أنه ينافس العلامات المستوردة الأغلى بكثير."
                      : review.id === 2
                        ? "بصراحة، كنت أعتقد أن الكرياتين بهذا السعر قد لا يكون موثوقًا. لكنني مسحت رمز QR واطلعت على تقرير المختبر المعتمد الخاص بالدفعة، وقررت تجربته. يذوب بشكل ممتاز، ولاحظت تحسنًا في أوزاني أثناء التمرين. بالنسبة للسعر، التجربة ممتازة."
                        : review.id === 3
                          ? "خلال موسم الأمطار، كان الكرياتين القديم يمتص الرطوبة ويتحول إلى كتلة صلبة. هذه الأكياس المغلقة أصبحت الحل المثالي بالنسبة لي. المسحوق يبقى جافًا تمامًا، ولم أعد أبحث عن الملعقة داخل العلبة."
                          : review.id === 4
                            ? "سهولة الذوبان رائعة فعلًا. عادةً ما تترك أنواع الكرياتين الرخيصة بقايا في قاع الشيكَر، لكن هذا النوع يذوب بسرعة كبيرة. أفتح الكيس، أخلطه مع مشروبي الصباحي، وانتهى الأمر."
                            : "أسافر كثيرًا بسبب العمل، وكان حمل مسحوق الكرياتين في الأمتعة أمرًا غير مريح. الآن أضع عدة أكياس في حقيبة اللابتوب، وأفتح كيسًا جديدًا في النادي بسهولة ودون أي عناء."
                    : review.text}
                  "
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}