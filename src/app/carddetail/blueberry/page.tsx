"use client";

import { FaStar, FaChevronDown } from "react-icons/fa";
import { FaBan, FaCanadianMapleLeaf, FaFlask } from "react-icons/fa";
import Footer from "@/commonComponents/Footer";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "@/app/styles/blueberry.css";
import Link from "next/link";

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
    text:"Being a college student, dropping  Dhs. 15 upfront on a big tub was always a stretch. Getting elite quality for just  Dhs. 1 a day is a complete game changer for my budget. Hits exactly the same as the expensive imported brands."

  },
   {
    id: 2,
    name: "KABIR M.",
    date: '05-08-26',
    rating: 3,
    text:"I am not going to lie, I thought  Dhs. 1 creatine was a scam. But I scanned the QR code, checked the NABL lab report for my exact batch, and took a chance. It dissolves perfectly and my lifts have gone up. It puts the  Dhs. 20 tubs to shame."

  },
   {
    id: 3,
    name: "ANJALI D.",
    date: '28-07-26',
    rating: 4,
    text:"Every monsoon, my old creatine tub would absorb moisture and turn into a solid rock. These foil sachets are a lifesaver. The powder stays perfectly dry, and I don't have to dig my fingers in to find a lost scoop anymore."

  },
   {
    id: 4,
    name: "ROHIT K.",
    date: '02-08-26',
    rating: 5,
    text:"The mixability is insane. Usually, cheap creatine leaves that gritty, sandy feeling at the bottom of the shaker. This 200-mesh stuff dissolves instantly. I just rip a sachet, dump it into my morning coffee, and I am sorted for the day."

  },
   {
    id: 5,
    name: "VIKRAM T.",
    date: '14-06-26',
    rating: 4.5,
    text:"I travel constantly for work, and carrying ziplock bags of white powder in my luggage always felt sketchy. Now I just throw 5 sachets in my laptop bag. Tearing open a fresh pack in the hotel gym is just zero hassle."


  },
  
];

export default function Page() {
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
    if (sortBy === "highest") return "HIGHEST RATING";
    if (sortBy === "lowest") return "LOWEST RATING";
    return "MOST RECENT";
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    setIsOpen(false);
  };

  // ================= SUGGESTED USE =================

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
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // ================= GREEN APPLE SLIDER =================

  const greenSliderRef = useRef<HTMLDivElement>(null);
  const [greenCurrentIndex, setGreenCurrentIndex] = useState(0);

  const scrollGreenSlider = (direction: "left" | "right") => {
    const slider = greenSliderRef.current;

    if (!slider) return;

    const slide = slider.querySelector(
      ".green-slide",
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
        Math.min(prev + 1, products.length - 1),
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
    <main>

      {/* =====================================================
          BLUEBERRY HERO
      ===================================================== */}

      <div className="blueberry-page">

        {/* BACKGROUND */}
        <div className="blueberry-bg">
          <Image
            src="/images/blue.png"
            alt="Blue Raspberry"
            fill
            priority
            className="background-image"
          />
        </div>

        {/* =================================================
            NAVBAR
            SAME NavigationMenu AS BLOG HERO
        ================================================= */}

        <header className="top-navigation">

          {/* LOGO */}
          <div className="top-logo">
            <Image
              src="/images/logo.png"
              alt="Creatine Company"
              width={75}
              height={75}
              priority
            />
          </div>

          {/* SAME NAVIGATION MENU */}
          <NavigationMenu
            backgroundImage="/images/blue.png"
          />

        </header>

        {/* =================================================
            MAIN PRODUCT HERO
        ================================================= */}

        <section className="product-hero">

          {/* LEFT TITLE */}

          <div className="flavour-title">
            <h1>
              BLUE
              <br />
              RUSSBERRY
            </h1>
          </div>

          {/* RIGHT DESCRIPTION */}

          <div className="product-description">
            <p>
              Experience the bold burst of juicy Blue Raspberry in every
              refreshing scoop. Crafted to deliver a smooth, delicious taste
              while supporting your performance, strength, focus, energy and
              recovery.
            </p>
          </div>

          {/* FEATURES */}

          <div className="creatine-features">

            <div className="creatine-feature-card">
              <strong>250</strong>
              <span>MG</span>
            </div>

            <div className="creatine-feature-card">
              <strong>5G</strong>
              <span>CREATINE</span>
            </div>

            <div className="creatine-feature-card">
              <strong>ZERO</strong>
              <span>SUGAR</span>
            </div>

            <div className="creatine-feature-card">
              <strong>LAB</strong>
              <span>TESTED</span>
            </div>

            <div className="creatine-feature-card">
              <strong>100%</strong>
              <span>PURE</span>
            </div>

          </div>

        </section>
      </div>

      {/* =====================================================
          NUTRITION
      ===================================================== */}

      <section className="nutrition-section">

        <div className="nutrition-wrapper">

          <div className="nutrition-left">

            <div className="nutrition-heading">
              <h2>
                NUTRITION &
                <span>INGREDIENTS</span>
              </h2>
            </div>

            <div className="nutrition-description">
              <p>
                Every serving is precisely formulated to deliver
                <br />
                high-quality performance ingredients.
              </p>
            </div>

            <div className="nutrition-features">

              <div className="nutrition-feature">
                <FaBan />
                <h3>NO SUGAR</h3>
              </div>

              <div className="nutrition-feature">
                <FaCanadianMapleLeaf />
                <h3>
                  BANNED
                  <br />
                  SUBSTANCE FREE
                </h3>
              </div>

              <div className="nutrition-feature">
                <FaFlask />
                <h3>NO FILLERS</h3>
              </div>

            </div>
          </div>

          <div className="nutrition-table">

            <div className="nutrition-row nutrition-top-row">
              <span>CREATINE MONOHYDRATE</span>
              <strong>5G</strong>
            </div>

            <div className="nutrition-row">
              <span>TAURINE</span>
              <strong>250 MG</strong>
            </div>

            <div className="nutrition-row">
              <span>ENERGY</span>
              <strong>12 KCAL</strong>
            </div>

            <div className="nutrition-row">
              <span>PROTEIN</span>
              <strong>3.0 G</strong>
            </div>

            <div className="nutrition-row">
              <span>CARBOHYDRATE</span>
              <strong>0 G</strong>
            </div>

            <div className="nutrition-row">
              <span>TOTAL SUGAR</span>
              <strong>0 G</strong>
            </div>

            <div className="nutrition-row">
              <span>ADDED SUGAR</span>
              <strong>0 G</strong>
            </div>

            <div className="nutrition-row">
              <span>TOTAL FAT</span>
              <strong>0 G</strong>
            </div>

            <div className="nutrition-row">
              <span>SATURATED FAT</span>
              <strong>0 G</strong>
            </div>

            <div className="nutrition-row">
              <span>TRANS FAT</span>
              <strong>0 G</strong>
            </div>

            <div className="nutrition-row">
              <span>CHOLESTEROL</span>
              <strong>0 MG</strong>
            </div>

            <div className="nutrition-row">
              <span>SODIUM</span>
              <strong>0 MG</strong>
            </div>

          </div>

          <div className="nutrition-product">
            <Image
              src="/images/tt.png"
              alt="Creatine Monohydrate"
              width={200}
              height={550}
              className="nutrition-pack"
            />
          </div>

        </div>
      </section>

      {/* =====================================================
          LEVEL UP
      ===================================================== */}

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
              LEVEL UP WITH <span>CREATINE</span>
            </h1>

            <h1 aria-hidden="true">
              LEVEL UP WITH <span>CREATINE</span>
            </h1>

          </div>

        </div>
      </section>

      {/* =====================================================
          SUGGESTED USE
      ===================================================== */}

      <section
        ref={suggestRef}
        className={`suggest-page ${
          suggestVisible ? "suggest-visible" : ""
        }`}
      >

        <div className="suggest-h2">

          <h2>
            HOW TO
            <span className="suggest-box">
              SUGGESTED USE
            </span>
          </h2>

          <p>
            Build more strength, recover faster, and power every workout with
            scientifically researched Creatine Monohydrate.
          </p>

        </div>

        <div className="suggest-image">

          <Image
            src="/images/group3.png"
            alt="Creatine"
            fill
            className="suggest-img"
            priority
          />

          <div className="suggest-steps">

            <div className="suggest-step suggest-step-1">
              <p>
                MIX 1 SERVING WITH 250–300 ML OF COLD WATER OR YOUR FAVORITE
                BEVERAGE.
              </p>
            </div>

            <div className="suggest-step suggest-step-2">
              <p>
                SHAKE OR STIR WELL UNTIL THE POWDER IS COMPLETELY DISSOLVED.
              </p>
            </div>

            <div className="suggest-step suggest-step-3">
              <p>
                DRINK DAILY AND STAY WELL HYDRATED BY CONSUMING PLENTY OF WATER
                THROUGHOUT THE DAY WHILE USING CREATINE.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          YOU MAY ALSO LIKE
      ===================================================== */}

      <section className="green-apple">

        <div className="green-apple-h2">

          <h2>
            YOU MAY
            <span className="like-span">
              ALSO LIKE
            </span>
          </h2>

        </div>

        <div className="green-right">

          <div
            className="green-apple-scroll"
            ref={greenSliderRef}
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
                      sizes="(max-width: 768px) 100vw, 65vw"
                      className="green-card-image"
                    />

                  </div>

                </Link>

              </div>

            ))}

          </div>

          {/* ARROWS */}

          <div className="green-slider-arrows">

            <button
              type="button"
              className="green-slider-arrow"
              onClick={() =>
                scrollGreenSlider("left")
              }
              disabled={greenCurrentIndex === 0}
              aria-label="Previous product"
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
              aria-label="Next product"
            >
              →
            </button>

          </div>

        </div>
      </section>

      {/* =====================================================
          ORDER RATING
      ===================================================== */}

      <section className="order-rating-section">

        <div className="order-rating-container">

          <div className="rating-left">

            <h2 className="rating-title">
              ORDER RATING
            </h2>

            <div className="rating-score">

              <span className="score">
                4.4
              </span>

              <FaStar className="score-star" />

            </div>

            <p className="rating-info">
              BASED ON 98 RATINGS
            </p>

            <p className="rating-date">
              RATING SINCE MAR. 13 2026
            </p>

            <p className="review-product">
              REVIEW THE PRODUCT
            </p>

            <div className="review-stars">

              {[1, 2, 3, 4, 5].map(
                (star) => (
                  <FaStar key={star} />
                ),
              )}

            </div>

            <h3 className="add-review-title">
              ADD YOUR REVIEWS
            </h3>

            <p className="review-note">
              YOUR EMAIL ADDRESS WILL NOT BE PUBLISHED. REQUIRED FIELDS ARE
              MARKED *
            </p>

          </div>

          <div className="rating-right">

            {ratings.map((rating) => (

              <div
                className="rating-row"
                key={rating.stars}
              >

                <span className="rating-label">
                  {rating.stars} STARS
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
              placeholder="WRITE YOUR REVIEW..."
            />

            <div className="review-upload">

              <span className="upload-icon">
                ▧
              </span>

              <span>
                ADD PHOTO
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          REVIEWS
      ===================================================== */}

      <section className="reviews-section">

        <div className="reviews-info-bar">
          <span>
            IF YOU WOULD LIKE TO WRITE, CLICK PHOTO BELOW TO SIGN IN
          </span>
        </div>

        <div className="reviews-submit-wrapper">

          <button className="reviews-submit">
            SUBMIT
          </button>

        </div>

        <div className="reviews-header">

          <p className="reviews-count">
            1-10 OF 98 REVIEWS
          </p>

          <div className="sort-wrapper">

            <button
              type="button"
              className={`sort-button ${
                isOpen ? "active" : ""
              }`}
              onClick={() =>
                setIsOpen(!isOpen)
              }
            >

              <span>
                SORT BY - {getSortLabel()}
              </span>

              <FaChevronDown
                className={`sort-arrow ${
                  isOpen ? "arrow-up" : ""
                }`}
              />

            </button>

            {isOpen && (

              <div className="sort-menu">

                <button
                  type="button"
                  onClick={() =>
                    handleSort("most-recent")
                  }
                >
                  MOST RECENT
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleSort("highest")
                  }
                >
                  HIGHEST RATING
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleSort("lowest")
                  }
                >
                  LOWEST RATING
                </button>

              </div>

            )}

          </div>
        </div>

        <div className="reviews-list">

          {sortedReviews.map((review) => (

            <article
              className="single-review"
              key={review.id}
            >

              <div className="review-details">

                <h3 className="review-name">
                  {review.name}
                </h3>

                <p className="review-date">
                  {review.date}
                </p>

                <div className="review-rating">

                  {[1, 2, 3, 4, 5].map(
                    (star) => (

                      <FaStar
                        key={star}
                        className={
                          star <= review.rating
                            ? "star-filled"
                            : "star-empty"
                        }
                      />

                    ),
                  )}

                </div>

                <p className="review-text">
                  "{review.text}"
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