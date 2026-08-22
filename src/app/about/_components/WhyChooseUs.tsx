import { anton } from '../../../commonComponents/fonts';
import { IconPurity, IconSachet, IconFlask } from './icons';
import './WhyChooseUs.css';

const FEATURES = [
  { title: '100% Pure & High-Quality Creatine', icon: IconPurity },
  { title: 'Easy-to-Carry Single-Serve Sachets', icon: IconSachet },
  { title: 'Lab-Tested & Trusted Quality', icon: IconFlask },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-heading">
        <h2 className={`${anton.className} why-title`}>
          WHY
        </h2>

        <div className="choose-title-wrapper">
          <h2 className={`${anton.className} choose-title`}>
            CHOOSE US
          </h2>
        </div>

        <div className="why-description">
          <p>
            At The Creatine Company, we believe creatine should be simple,
            effective, and uncompromising in quality. That&apos;s why we focus
            on delivering premium-grade creatine with exceptional purity,
            rigorous quality testing, and convenient single-serve sachets that
            fit seamlessly into your daily routine.
          </p>

          <p>
            Whether you&apos;re training for strength, muscle growth, or
            improved performance, every serving is designed to help you perform
            at your best—without unnecessary fillers or complexity.
          </p>
        </div>
      </div>

      <div className="features-grid">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="feature-card"
          >
            <f.icon className="feature-icon" />
            {f.title.toUpperCase()}
          </div>
        ))}
      </div>
    </section>
  );
}