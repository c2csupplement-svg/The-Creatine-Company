"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { anton } from "@/commonComponents/fonts";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import "./HeroSection.css";

const HERO_SLIDES = [
  {
    kind: "title",
    text: "ABOUT THE CREATINE COMPANY",
  },
  {
    kind: "body",
    text: "At The Creatine Company, we believe that great performance starts with the right foundation. Our mission is to make premium-quality creatine simple, accessible, and convenient for everyone—from first-time gym-goers to professional athletes.",
  },
  {
    kind: "body",
    text: "We focus on clean, science-backed formulations with no unnecessary fillers, delivering effective daily nutrition that supports strength, power, recovery, and long-term performance. Every product is designed to fit seamlessly into your lifestyle, whether you're at the gym, at work, or on the move.",
  },
];

function HeroSlides({ index }: { index: number }) {
  return (
    <div className="hero-slides">
      {HERO_SLIDES.map((slide, i) => {
        const position =
          i < index
            ? "hero-slide-up"
            : i === index
              ? "hero-slide-active"
              : "hero-slide-down";

        return (
          <div key={slide.text} className={`hero-slide ${position}`}>
            {slide.kind === "title" ? (
              <h1 className="hero-title">
                {slide.text === 'ABOUT THE CREATINE COMPANY' ? (
                  <>
                  ABOUT THE CREATINE 
                    <br />
                    COMPANY
                  </>
                ) : (
                  slide.text
                )}
              </h1>
            ) : (
              <p
                className="hero-description"
                style={{
                  fontFamily: `'Tungsten', ${anton.style.fontFamily}, sans-serif`,
                  fontWeight: 400,
                  fontSize: "clamp(0.85rem, 1.7vw, 1.35rem)",
                  lineHeight: 1.5,
                  maxWidth: "46rem",
                }}
              >
                {slide.text}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);

useEffect(() => {
  const timer1 = setTimeout(() => {
    setIndex(1);
  }, 2000);

  const timer2 = setTimeout(() => {
    setIndex(2);
  }, 4000);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}, []);

  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: "Victory Striker Sans Demo";
          src: url("/fonts/victory-striker-sans-demo.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Tungsten";
          src: url("/fonts/tungsten-semibold.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-sticky">
          <Image
            src="/images/hero-bg.jpg"
            alt="Athlete holding a Creatine + Taurine sachet outdoors"
            fill
            priority
            className="hero-background"
          />

          <div className="hero-gradient" />

          <div className="hero-logo">
            <Image
              src="/images/real-logo.png"
              alt="Blog Graphic"
              width={125}
              height={99}
            />

            <NavigationMenu backgroundImage="/images/hero-bg.jpg" />
          </div>

          <div className="hero-content">
            <HeroSlides index={index} />
          </div>
        </div>
      </section>
    </>
  );
}
