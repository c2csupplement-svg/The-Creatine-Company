'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { anton } from './fonts';
import './FaqSection.css';

const FAQS = [
  {
    q: 'If raw creatine is cheap, why do tubs cost ₹699/?',
    a: 'The raw creatine monohydrate in a standard 3g serving costs roughly ₹1.60. It is a cheap, abundant ingredient. The traditional tub model feels expensive because you are forced to buy 90 days of it up front. we tore the unit down to a single day. you pay ₹10 for one sachet, not V1,500 for a plastic jar.  You buy exactly what you need it.',
  },
  {
    q: 'How can a ₹10 creatine be safe and original?',
    a: 'Cheap-per-ticket is not the same as cheap-quality. The rest of your ₹10 goes to taurine, high-barrier foil, filling, delivery, GST, a modest margin, and rigorous NABL batch-testing. we publish this entire cost breakdown on oursite. Furthermore, you dont have to take our word for it. Every sachet features a QR code on the front. scan it to read the permanent PDFcetificate of analysis (COA) from an NABL-accredited laboratory for that exact batch. Decide with evidence, not the price tag..',
  },
  {
    q: 'Why signle-serve sachets instead of a tub?',
    a: 'Because tubs fail in Indian humidity. The moment you open a jar in the monsoon, moisture gets in. The powder cakes, degrades into creatinine, and the scoop inevitably goes missing by week two. We sealed 3g of 100% micronised creatine (200 mesh) into high-barrier foil. It stays dry. It is perfectly pre-measured. No clumped powder, no spoon-hunting, and no guesswork.',
  },
  {
    q: 'When should I take it, and do I need to load??',
    a: 'Take it whenever you will remember it, every single day. Creatine works by keeping yourintramuscular stores topped up over time, so daily consistency matters far more than timing. A loading phase (20g a day for a week) fills your stores faster, but it is completely optional.Taking one 3g sachet a day will fully saturate your muscles in roughly 28 days..',
  },
  {
    q: 'I am vegetarian. Does that change how it works for me?',
    a: 'Yes. Dietary creatine comes almost entirely from meat and fish. Controlled muscle-biopsy trials show vegetarians start with significantly lower resting muscle creatine stores (117 vs130 mmol/kg). Because you have more room to fill, vegetarians often show a stronger response to daily supplementation. Our sachets are 100% vegetarian..',
  },
  {
    q: 'Does creatine cause hair loss or kidney damage??',
    a: 'The International Society of Sports Nutrition (ISSN) concludes creatine monohydrate is safeand well-tolerated in healthy people. In healthy individuals, it does not harm kidney function.The hair loss myth traces to a single 2009 study measuring DHT that has never beenreplicated; a 2021 meta-analysis and a 2025 RCT measuring hair follicles directly found nolink.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-heading-wrapper">
          <h2 className={`${anton.className} faq-heading`}>
            FREQUENTLT
          </h2>

          <div className="faq-heading-highlight">
            <h2 className={`${anton.className} faq-heading-highlight-text`}>
              ASKED QUESTIONS
            </h2>
          </div>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div className="faq-item" key={item.q}>

                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`${anton.className} faq-question ${
                    isOpen ? 'faq-question-open' : 'faq-question-closed'
                  }`}
                >
                  <span>{item.q.toUpperCase()}</span>

                  <span className="faq-icon">
                    {isOpen ? (
                      <X className="faq-icon-svg" />
                    ) : (
                      <Plus className="faq-icon-svg" />
                    )}
                  </span>
                </button>

                <div
                  className={`faq-answer-wrapper ${
                    isOpen ? 'faq-answer-open' : 'faq-answer-closed'
                  }`}
                >
                  <div className="faq-answer-inner">
                    <div className="faq-answer-text">
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