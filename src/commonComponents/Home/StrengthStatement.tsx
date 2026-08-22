"use client";

import { useEffect, useRef, useState } from "react";
import { anton, mono } from "../fonts";
import "./StrengthStatement.css";

export default function StrengthStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const sectionHeight = rect.height;

      // Section ke andar scroll progress
      const startPoint = viewportHeight * 0.80;
const endPoint = viewportHeight * 0.20;

const totalDistance = startPoint - endPoint;

const currentDistance = startPoint - rect.bottom;

let value = currentDistance / totalDistance;

value = Math.max(0, Math.min(1, value));

setProgress(value);

      /*
        IMPORTANT:
        Description ko tab tak hide rakho
        jab tak section properly scroll na ho.
      */

      if (rect.top >= viewportHeight * 0.75) {
        value = 0;
      }

      /*
        Section leave hone ke time
        description fully visible.
      */

      if (rect.bottom <= viewportHeight * 0.15) {
        value = 1;
      }

      setProgress(value);
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why"
      className="strength-statement"
    >
      <h2 className={`${anton.className} strength-statement-title`}>
        <span>DECIDE</span>
        <br />

        <span>WITH EVIDENCE.</span>
        <br />

        <span>READ YOUR</span>
        <br />

        <span>BATCH REPORT TODAY</span>
      </h2>

      <div className="strength-description-wrapper">
        <p
          className={`${mono.className} strength-statement-description`}
          style={{
            transform: `translateY(${100 - progress * 100}%)`,
            opacity: progress,
          }}
        >
           Most brands ask for your trust.We give you the data. Scan the QR code on your ₹10 sachet to open the NABL-accredited certificate of analysis for your exact batch. No marketing hype,just a permanent PDF showing exactly what you are about to drink.
        </p>
      </div>
    </section>
  );
}