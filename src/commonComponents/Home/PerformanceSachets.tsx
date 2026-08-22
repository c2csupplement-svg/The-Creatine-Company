import Image from 'next/image';
import { anton, mono } from '../fonts';
import './PerformanceSachets.css';

export default function PerformanceSachets() {
  return (
    <section className="performance-sachets">
      
      <Image
        src="/images/home-3.png"
        alt="Daily performance sachets"
        fill
        sizes="100vw"
        className="performance-sachets-image"
      />

      <div className="performance-sachets-overlay" />

      <div className="performance-sachets-content">
        <h2 className={`${anton.className} performance-sachets-title`}>
          10 Daily
        </h2>

        <div className="performance-sachets-label">
          <span className={`${anton.className}`}>
            Performance Sachets
          </span>
        </div>

        <p className={`${mono.className} performance-sachets-description`}>
          Stop overpaying for basic creatine. While big brands charge massive markups on bulky tubs, we’re disrupting the entire market. Get our 10 Daily Performance Sachets for just Rs.99/- That’s 10 days of pure strength and peak power for under Rs.10/- a serving. Claim yours today!
        </p>
      </div>

    </section>
  );
}