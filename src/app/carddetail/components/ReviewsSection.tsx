"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { FaStar } from "react-icons/fa";
import { useLanguage } from "@/app/context/languageUseContent";

export type Review = {
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
      "صادقانه فکر می‌کردم کراتین با این قیمت نمی‌تواند قابل اعتماد باشد. اما کد QR را اسکن کردم، گزارش آزمایشگاهی مربوط به محصول را بررسی کردم و تصمیم گرفتم آن را امتحان کنم. به‌خوبی حل می‌شود و پیشرفت خوبی در تمریناتم داشته‌ام. با توجه به قیمت، واقعاً عالی است.",
  },
  {
    id: 3,
    name: "PRIYA K.",
    date: "22-07-26",
    rating: 5,
    text: "During monsoon, my old creatine used to absorb moisture and become a hard lump. These sealed sachets have been a lifesaver. The powder stays completely dry, and I don't have to worry about finding a scoop anymore.",
    arText:
      "خلال موسم الأمطار، كان الكرياتين القديم يمتص الرطوبة ويتحول إلى كتلة صلبة. هذه الأكياس المغلقة أصبحت الحل المثالي بالنسبة لي. المسحوق يبقى جافًا تمامًا، ولم أعد أبحث عن الملعقة داخل العلبة.",
    faText:
      "هر سال در فصل باران، کراتین قبلی من رطوبت جذب می‌کرد و به یک توده سفت تبدیل می‌شد. این ساشه‌های فویلی واقعاً نجات‌دهنده بودند. پودر کاملاً خشک می‌ماند و دیگر نیازی نیست دنبال پیمانه بگردم.",
  },
  {
    id: 4,
    name: "ARJUN P.",
    date: "18-07-26",
    rating: 4,
    text: "The mixability is honestly great. Most cheap creatine leaves residue at the bottom of the shaker, but this one dissolves really fast. I just open the sachet, mix it with my morning drink, and I'm good to go.",
    arText:
      "سهولة الذوبان رائعة فعلًا. عادةً ما تترك أنواع الكرياتين الرخيصة بقايا في قاع الشيكَر، لكن هذا النوع يذوب بسرعة كبيرة. أفتح الكيس، أخلطه مع مشروبي الصباحي، وانتهى الأمر.",
    faText:
      "حل شدن این کراتین واقعاً عالی است. کراتین‌های ارزان معمولاً ته شیکر رسوب باقی می‌گذارند، اما این محصول خیلی سریع حل می‌شود. فقط ساشه را باز می‌کنم، آن را با نوشیدنی صبحگاهی‌ام مخلوط می‌کنم و آماده‌ام.",
  },
  {
    id: 5,
    name: "VIKAS R.",
    date: "10-07-26",
    rating: 5,
    text: "I travel a lot for work, and carrying loose powder in my luggage was always inconvenient. Now I just keep a few sachets in my laptop bag. Opening a fresh sachet at the hotel gym is simple and hassle-free.",
    arText:
      "أسافر كثيرًا بسبب العمل، وكان حمل مسحوق الكرياتين في الأمتعة أمرًا غير مريح. الآن أضع عدة أكياس في حقيبة اللابتوب، وأفتح كيسًا جديدًا في النادي بسهولة ودون أي عناء.",
    faText:
      "به دلیل کار زیاد سفر می‌کنم و حمل پودر کراتین در چمدان همیشه دردسر داشت. حالا چند ساشه را داخل کیف لپ‌تاپم می‌گذارم و در باشگاه هتل به‌راحتی یک ساشه تازه استفاده می‌کنم.",
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

export default function ReviewsSection() {
  const { language } = useLanguage();

  const isArabic = language === "ar";
  const isFarsi = language === "fa";
  const isRTL = isArabic || isFarsi;

  const [sortBy, setSortBy] = useState("most-recent");
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewPaused, setIsReviewPaused] = useState(false);
  const [reviewLoopWidth, setReviewLoopWidth] = useState(0);

  const reviewX = useMotionValue(0);
  const reviewTrackRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "highest") {
      return b.rating - a.rating;
    }

    if (sortBy === "lowest") {
      return a.rating - b.rating;
    }

    return b.id - a.id;
  });

  // Measure exactly one copy of the duplicated review track
  useEffect(() => {
    const track = reviewTrackRef.current;

    if (!track) return;

    const updateWidth = () => {
      setReviewLoopWidth(track.scrollWidth / 2);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, [sortedReviews.length]);

  // Automatic infinite sliding
  useEffect(() => {
    if (!reviewLoopWidth) return;

    const speed = 35;

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isReviewPaused && !isDraggingRef.current) {
        let currentX = reviewX.get();

        currentX -= (speed * delta) / 1000;

        if (currentX <= -reviewLoopWidth) {
          currentX += reviewLoopWidth;
        }

        reviewX.set(currentX);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = null;
      lastTimeRef.current = null;
    };
  }, [reviewLoopWidth, isReviewPaused, reviewX]);

  const getReviewText = (review: Review) => {
    if (isArabic) {
      return arabicReviews[review.id] || review.arText;
    }

    if (isFarsi) {
      return farsiReviews[review.id] || review.faText;
    }

    return review.text;
  };

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

  const handleDragStart = () => {
    isDraggingRef.current = true;
    setIsReviewPaused(true);
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
    setIsReviewPaused(false);

    if (!reviewLoopWidth) return;

    let currentX = reviewX.get();

    while (currentX <= -reviewLoopWidth) {
      currentX += reviewLoopWidth;
    }

    while (currentX > 0) {
      currentX -= reviewLoopWidth;
    }

    reviewX.set(currentX);
  };

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-full overflow-visible bg-[#f0f4ff] text-[#172d68]"
    >
      {/* Heading */}
      <div className="px-5 pt-[55px] text-center sm:px-8 sm:pt-[70px]">
        <p className="mb-2 text-[11px] font-semibold tracking-[0.22em] text-[#172d68]/60 sm:text-xs">
          {isArabic
            ? "آراء العملاء"
            : isFarsi
              ? "نظرات مشتریان"
              : "CUSTOMER REVIEWS"}
        </p>

        <h2 className="text-[30px] font-semibold tracking-tight sm:text-[42px]">
          {isArabic
            ? "ماذا يقول عملاؤنا"
            : isFarsi
              ? "مشتریان ما چه می‌گویند"
              : "What Our Customers Say"}
        </h2>
      </div>

      {/* Sort */}
      <div className="mx-auto flex max-w-[1400px] justify-end px-5 pt-6 sm:px-8">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex min-w-[155px] items-center justify-between gap-4 rounded-full border border-[#172d68]/20 bg-white px-4 py-2 text-[10px] font-semibold tracking-[0.08em] shadow-sm transition hover:bg-[#172d68] hover:text-white"
          >
            <span>{getSortLabel()}</span>

            <span
              className={`transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>

          {isOpen && (
            <div className="absolute right-0 top-[calc(100%+6px)] z-30 min-w-[180px] overflow-hidden rounded-xl border border-[#172d68]/10 bg-white shadow-xl">
              {[
                ["most-recent", "MOST RECENT", "الأحدث", "جدیدترین"],
                [
                  "highest",
                  "HIGHEST RATING",
                  "الأعلى تقييمًا",
                  "بالاترین امتیاز",
                ],
                [
                  "lowest",
                  "LOWEST RATING",
                  "الأقل تقييمًا",
                  "کمترین امتیاز",
                ],
              ].map(([value, en, ar, fa]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setSortBy(value);
                    setIsOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-left text-[10px] font-semibold tracking-[0.08em] transition hover:bg-[#f0f4ff]"
                >
                  {isArabic ? ar : isFarsi ? fa : en}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reviews slider */}
      <div
        dir="ltr"
        className="relative w-full overflow-hidden py-[30px] sm:py-10"
        onMouseEnter={() => setIsReviewPaused(true)}
        onMouseLeave={() => {
          if (!isDraggingRef.current) {
            setIsReviewPaused(false);
          }
        }}
      >
        <motion.div
          ref={reviewTrackRef}
          dir="ltr"
          style={{ x: reviewX }}
          drag="x"
          dragConstraints={{
            left: -reviewLoopWidth,
            right: 0,
          }}
          dragElastic={0.08}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="flex w-max cursor-grab select-none flex-row gap-[15px] touch-pan-y active:cursor-grabbing"
        >
          {[...sortedReviews, ...sortedReviews].map((review, index) => (
            <article
              key={`${review.id}-${index}`}
              dir={isRTL ? "rtl" : "ltr"}
              className="flex h-[260px] w-[280px] flex-shrink-0 flex-col justify-between rounded-[24px] bg-white p-5 shadow-[0_10px_35px_rgba(23,45,104,0.08)] sm:h-[280px] sm:w-[330px] sm:p-6"
            >
              <div>
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className={`text-[12px] ${
                        starIndex < review.rating
                          ? "text-[#f6b800]"
                          : "text-[#d8dce7]"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-[13px] leading-[1.7] text-[#172d68]/80 sm:text-[14px]">
                  {getReviewText(review)}
                </p>
              </div>

              <div className="border-t border-[#172d68]/10 pt-4">
                <p className="text-[11px] font-bold tracking-[0.08em]">
                  {review.name}
                </p>

                <p className="mt-1 text-[10px] text-[#172d68]/50">
                  {review.date}
                </p>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Gradient edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[50px] bg-gradient-to-r from-[#f0f4ff] to-transparent sm:w-[100px]" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[50px] bg-gradient-to-l from-[#f0f4ff] to-transparent sm:w-[100px]" />
      </div>
    </section>
  );
}