"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { anton, mono } from "./fonts";

const FAQS = [
  {
    q: "If raw creatine is cheap, why do tubs cost  Dhs. 69/?",
    a: "The raw creatine monohydrate in a standard 5g serving costs roughly  Dhs. 0.19. It is a cheap, abundant ingredient. The traditional tub model feels expensive because you are forced to buy 90 days of it up front. We tore the unit down to a single day. You pay  Dhs. 1 for one sachet, not  Dhs. 150 for a plastic jar. You buy exactly what you need.",
  },
  {
    q: "How can a  Dhs. 1 creatine be safe and original?",
    a: "Cheap-per-ticket is not the same as cheap-quality. The rest of your  Dhs. 1 goes to taurine, high-barrier foil, filling, delivery, GST, a modest margin, and rigorous NABL batch-testing. We publish this entire cost breakdown on our site. Furthermore, you don't have to take our word for it. Every sachet features a QR code on the front. Scan it to read the permanent PDF certificate of analysis (COA) from an NABL-accredited laboratory for that exact batch. Decide with evidence, not the price tag.",
  },
  {
    q: "Why single-serve sachets instead of a tub?",
    a: "Because tubs fail in Indian humidity. The moment you open a jar in the monsoon, moisture gets in. The powder cakes, degrades into creatinine, and the scoop inevitably goes missing by week two. We sealed 5g of 100% micronised creatine (200 mesh) into high-barrier foil. It stays dry. It is perfectly pre-measured. No clumped powder, no spoon-hunting, and no guesswork.",
  },
  {
    q: "When should I take it, and do I need to load?",
    a: "Take it whenever you will remember it, every single day. Creatine works by keeping your intramuscular stores topped up over time, so daily consistency matters far more than timing. A loading phase (20g a day for a week) fills your stores faster, but it is completely optional. Taking one 5g sachet a day will fully saturate your muscles in roughly 28 days.",
  },
  {
    q: "I am vegetarian. Does that change how it works for me?",
    a: "Yes. Dietary creatine comes almost entirely from meat and fish. Controlled muscle-biopsy trials show vegetarians start with significantly lower resting muscle creatine stores (117 vs 130 mmol/kg). Because you have more room to fill, vegetarians often show a stronger response to daily supplementation. Our sachets are 100% vegetarian.",
  },
  {
    q: "Does creatine cause hair loss or kidney damage?",
    a: "The International Society of Sports Nutrition (ISSN) concludes creatine monohydrate is safe and well-tolerated in healthy people. In healthy individuals, it does not harm kidney function. The hair loss myth traces to a single 2009 study measuring DHT that has never been replicated; a 2021 meta-analysis and a 2025 RCT measuring hair follicles directly found no link.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="
        relative
        w-full
        bg-[#fdf1da]
        px-6
        pb-20
        pt-[70px]
        text-[#3a2416]

        sm:px-10
      "
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="max-w-[940px]">
          <h2
            className={`
              ${anton.className}
              m-0
              text-5xl
              leading-none
              text-[#502300]

              sm:text-[3.75rem]

              md:text-[4.375rem]
            `}
          >
            FREQUENTLT
          </h2>

          <div
            className="
              -mt-2
              inline-block
              bg-[#a87847]
              px-6
              py-1
              rotate-[2.27deg]

              sm:px-8
            "
          >
            <h2
              className={`
                ${anton.className}
                m-0
                text-5xl
                leading-none
                text-white

                sm:text-[3.75rem]

                md:text-[4.375rem]
              `}
            >
              ASKED QUESTIONS
            </h2>
          </div>
        </div>

        <div
          className="
            mt-10
            flex
            w-full
            flex-col
            gap-4
          "
        >
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={item.q} className="w-full">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`
                    ${anton.className}
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    rounded-md
                    border-0
                    px-5
                    py-5
                    text-left
                    text-lg
                    font-medium
                    text-white
                    transition-colors
                    duration-300

                    sm:text-2xl

                    ${
                      isOpen
                        ? "bg-[#5c3a22]"
                        : "bg-[#82572b]"
                    }
                  `}
                >
                  <span className="pr-4">
                    {item.q.toUpperCase()}
                  </span>

                  <span
                    className="
                      ml-4
                      flex
                      h-14
                      w-14
                      flex-none
                      items-center
                      justify-center
                      rounded
                      border-2
                      border-white
                    "
                  >
                    {isOpen ? (
                      <X className="h-6 w-6 sm:h-7 sm:w-7" />
                    ) : (
                      <Plus className="h-6 w-6 sm:h-7 sm:w-7" />
                    )}
                  </span>
                </button>

                <div
                  className={`
                    grid
                    overflow-hidden
                    rounded-b-md
                    bg-[#bd966e]
                    transition-[grid-template-rows,opacity]
                    duration-[900ms]
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className={`
                        ${mono.className}
                        px-5
                        py-4
                        text-sm
                        leading-[1.625]
                        text-[#3a2416]

                        sm:text-base
                      `}
                    >
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}