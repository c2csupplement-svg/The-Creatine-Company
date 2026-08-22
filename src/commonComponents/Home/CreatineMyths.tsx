"use client";

import { useState } from "react";
import { anton, mono } from "../fonts";
import "./CreatineMyths.css";

const MYTHS = [
  {
    title: "CREATINE BEYOND THE GYM.",
    body: "The ISSN notes that a daily 3g dose across the lifespan may support general health and fitness, not just elite athletic performance. Dietary creatine comes almost entirely from meat and fish.",
  },
  {
    title: "Creatine causes hair loss.",
    body: "The data says no. This fear traces back to a single 2009 study of 16 rugby players that measured a hormone (DHT), not actual hair loss. It has never been replicated.",
  },
  {
    title: "Creatine damages your kidneys.",
    body: "In healthy individuals, it does not. Creatine can slightly raise your blood levels. This is a harmless by-product of storing more creatine in your muscles, not a sign of kidney damage.",
  },
  {
    title: "Creatine makes you fat and puffy.",
    body: "Our sachet has 12 kcal and zero added sugar. It cannot add fat. Any initial weight change on the scale is intracellular water—water drawn directly inside your muscle cells to support high-intensity performance.",
  },
];

export default function CreatineMyths() {
  const mythLoop = [...MYTHS, ...MYTHS];
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleReadMore = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="creatine-myths-section">
      <div className="creatine-myths-container">
        {/* Left heading */}
        <div className="creatine-myths-heading">
          <span className={`${anton.className} myths-common`}>
            MYTHS
          </span>

          <span className={`${anton.className} myths-title`}>
            CREATINE IS ONLY FOR BODYBUILDERS.
          </span>
        </div>

        {/* Carousel */}
        <div className="myths-carousel">
          <div className="myths-fade myths-fade-left" />
          <div className="myths-fade myths-fade-right" />

          <div className="myth-marquee">
            {mythLoop.map((myth, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <article
                  key={`${myth.title}-${index}`}
                  className={`myth-card ${
                    isExpanded ? "myth-card-expanded" : ""
                  }`}
                >
                  <div className="myth-quote">“</div>

                  <h3 className={`${anton.className} myth-card-title`}>
                    {myth.title}
                  </h3>

                  <p
                    className={`${mono.className} myth-card-body ${
                      isExpanded ? "expanded" : ""
                    }`}
                  >
                    {myth.body}
                  </p>

                  <button
                    type="button"
                    className={`${anton.className} myth-read-more`}
                    onClick={() => toggleReadMore(index)}
                  >
                    {isExpanded ? "READ LESS" : "READ MORE"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}