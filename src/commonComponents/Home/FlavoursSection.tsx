"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { anton } from "../fonts";
import "./FlavoursSection.css";
import Link from "next/link";

type Flavour = {
  title: string;
  image: string;
  link: string;
};

const FLAVOURS: Flavour[] = [
  {
    title: "Blueberry",
    link: "/carddetail/blueberry",
    image: "/images/30-freaking-flavours/blue.jpg",
  },
  {
    title: "Mango",
    link: "/carddetail/mango",
    image: "/images/image 404.jpg",
  },
  {
    title: "Strawberry",
    link: "/carddetail/strawberry",
    image: "/images/image 405.jpg",
  },
  {
    title: "green-apple",
    link: "/carddetail/green-apple",
    image: "/images/image 403.jpg",
  },
];

export default function FlavoursSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const slide = slider.querySelector(".flavour-slide") as HTMLElement | null;

    if (!slide) return;

    const slideWidth = slide.offsetWidth + 20;

    if (direction === "right") {
      slider.scrollBy({
        left: slideWidth,
        behavior: "smooth",
      });

      setCurrentIndex((prev) => Math.min(prev + 1, FLAVOURS.length - 1));
    } else {
      slider.scrollBy({
        left: -slideWidth,
        behavior: "smooth",
      });

      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section className="flavours-section">
      <div className="flavours-container">
        {/* LEFT — HEADING */}

        <div className="flavours-heading">
          <h2
            className={`flavours-main-title flavours-hover-text ${anton.className}`}
          >
            We Have 30
          </h2>

          <div className="flavours-highlight">
            <span
              className={`flavours-highlight-text flavours-hover-highlight ${anton.className}`}
            >
              Freaking
            </span>
          </div>

          <h2
            className={`flavours-main-title flavours-hover-text ${anton.className}`}
          >
            Delicious Flavours
          </h2>
        </div>

        {/* RIGHT — SLIDER */}

        <div className="flavours-slider">
          <div className="flavours-scroll" ref={sliderRef}>
            {FLAVOURS.map((flavour) => {
              const isStrawberry = flavour.title === "Strawberry";

              return (
                <div
                  className={`flavour-slide ${
                    isStrawberry ? "strawberry-slide" : ""
                  }`}
                  key={flavour.title}
                >
                  <Link
                    href={flavour.link}
                    className={`flavour-image-wrapper ${
                      isStrawberry ? "strawberry-wrapper" : ""
                    }`}
                  >
                    <Image
                      src={flavour.image}
                      alt={`${flavour.title} creatine`}
                      fill
                      sizes="(max-width: 768px) 100vw, 65vw"
                      className={`flavour-image ${
                        isStrawberry ? "strawberry-image" : ""
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* SLIDER ARROWS */}

          <div className="flavour-slider-arrows">
            <button
              type="button"
              className="flavour-arrow"
              onClick={() => scrollSlider("left")}
              disabled={currentIndex === 0}
            >
              ←
            </button>

            <button
              type="button"
              className="flavour-arrow"
              onClick={() => scrollSlider("right")}
              disabled={currentIndex === FLAVOURS.length - 1}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
