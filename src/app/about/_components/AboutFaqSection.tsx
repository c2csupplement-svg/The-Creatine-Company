'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { anton } from "@/commonComponents/fonts"
import "@/app/about/_components/AboutFaqSection.css"

const FAQS = [
  {
    q: 'Will creatine make me look soft, puffy, or bloated?',
    a: 'No. This is a fundamental misunderstanding of how hydration works. Creatine pulls water into your muscle cells (intracellular hydration), not under your skin (extracellular water). This cellular hydration actually makes your muscles look fuller, harder, and more dense. If the scale goes up a kilo in the first two weeks, it is just water hydrating your muscle tissue, not fat. It means the product is doing exactly what it is supposed to do.',
  },

  {
    q: 'Why does my old creatine sink to the bottom and taste like sand?',
    a: 'Because standard creatine is poorly milled. Legacy brands often use a cheap 80-mesh powder that refuses to dissolve in cold water, leaving a gritty residue at the bottom of your shaker. We use ultra-fine, 200-mesh micronized creatine. It has significantly more surface area, meaning it dissolves instantly, leaves zero chalky residue, and goes down completely unnoticed in water, juice, or your pre-workout.',
  },

  {
    q: 'Can I mix this sachet directly with coffee or my pre-workout?',
    a: 'Yes. Our sachets contain 100% pure, unflavored monohydrate with zero artificial sweeteners or dyes. You can tear it open and drop it directly into your morning coffee, whey protein, or a high-stimulant pre-workout without altering the taste. While early 1990s myths suggested caffeine cancels out creatine, modern sports science confirms they are perfectly fine to stack, provided you drink adequate water throughout the day.',
  },

  {
    q: 'I only lift 4 days a week. Do I skip the sachet on rest days?',
    a: 'Never skip a day. Creatine is not a stimulant; you do not take it for an immediate energy spike. It operates strictly on a saturation principle. Your goal is to keep your muscle cells 100% full of creatine at all times to aid in recovery and ATP regeneration. If you skip your rest days, your saturation levels drop, and you lose the benefit. Tear open a sachet every single day, whether you are deadlifting heavy or sitting on the couch.',
  },

  {
    q: 'How is a ₹99 box disrupting legacy brands that have been around for a decade?',
    a: 'Legacy brands rely on "sunk cost" psychology. They force you to spend ₹500 to ₹900 on a massive tub so you feel financially obligated to stay loyal to them for three months. We flipped the model. We stripped out the expensive plastic jars, the lost scoops, and the massive distributor markups. By moving to daily, climate-proof sachets, we made elite-grade, NABL-tested creatine accessible to anyone on a weekly budget. We are not just selling a supplement; we are fixing a broken, overpriced distribution model.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="about-faq-section">
      <div className="about-faq-container">

        <div className="about-faq-heading-wrapper">
          <h2 className={`${anton.className} about-faq-heading`}>
            FREQUENTLT
          </h2>

          <div className="about-faq-heading-highlight">
            <h2 className={`${anton.className} about-faq-heading-highlight-text`}>
              ASKED QUESTIONS
            </h2>
          </div>
        </div>

        <div className="about-faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div className="about-faq-item" key={item.q}>

                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`${anton.className} about-faq-question ${
                    isOpen
                      ? 'about-faq-question-open'
                      : 'about-faq-question-closed'
                  }`}
                >
                  <span>{item.q.toUpperCase()}</span>

                  <span className="about-faq-icon">
                    {isOpen ? (
                      <X className="about-faq-icon-svg" />
                    ) : (
                      <Plus className="about-faq-icon-svg" />
                    )}
                  </span>
                </button>

                <div
                  className={`about-faq-answer-wrapper ${
                    isOpen
                      ? 'about-faq-answer-open'
                      : 'about-faq-answer-closed'
                  }`}
                >
                  <div className="about-faq-answer-inner">
                    <div className="about-faq-answer-text">
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