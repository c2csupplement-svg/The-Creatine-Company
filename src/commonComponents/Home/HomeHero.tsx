import Image from 'next/image';
import { anton, mono } from '../fonts';
import NavigationMenu from '../NavigationMenu';
import './HomeHero.css';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="home-hero">
      {/* Background */}
      <Image
        src="/images/hero-home.png"
        alt="Creatine Monohydrate"
        fill
        priority
        sizes="100vw"
        className="home-hero-background"
      />

      <div className="home-hero-overlay" />

      {/* Global Navigation */}
      <NavigationMenu backgroundImage="/images/hero-home.png" />

      {/* Logo */}
      <header className="home-hero-header">
        <Image
          src="/images/real-logo.png"
          alt="The Creatine Company"
          width={125}
          height={99}
          className="home-hero-logo"
        />
      </header>

      {/* Hero Copy */}
      <div className="home-hero-copy hero-copy-animation">
        <h1 className={`${anton.className} home-hero-title`}>
          CREATINE, ONE DAY A TIME.
        </h1>

        <div className="home-hero-highlight">
          <span className={`${anton.className} home-hero-highlight-text`}>
            3G CREATINE. 250MG TAURINE
          </span>
        </div>

        <p className={`${mono.className} home-hero-description`}>
  One pre-measured sachet. Rs.10/- No 90-day tubs. No lost scoops. Supports
  high-intensity capacity and lean mass.
  <br />
  Scan the QR on the pack to read the NABL-accredited lab report for your
  exact batch before you mix it.
</p>

        <Link
  href="/about"
  className={`${anton.className} home-hero-button`}
>
  KNOW MORE <span>→</span>
</Link>
      </div>
    </section>
  );
}