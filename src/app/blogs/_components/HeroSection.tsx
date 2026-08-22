import Image from 'next/image';
import { anton, mono } from '@/commonComponents/fonts';
import NavigationMenu from '@/commonComponents/NavigationMenu';
import './HeroSection.css';

function HeroCopy() {
  return (
    <>
      <h1 className={`${anton.className} blog-hero-title`}>
        BLOGS
      </h1>

      <div className="blog-hero-highlight">
        <span className={`${anton.className} blog-hero-highlight-text`}>
          AND ARTICLES
        </span>
      </div>

      <p className="blog-hero-description">
        Explore practical guides, science-based articles, dosage tips, common
        myths, and the latest research to help you understand creatine and make
        smarter choices for your fitness journey.
      </p>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="blog-hero-section">

      <div className="blog-hero-logo">
        <Image
          src="/images/real-logo.png"
          alt="The Creatine Company"
          width={125}
          height={99}
          priority
          className="blog-hero-logo-image"
        />
      </div>

      <NavigationMenu
        backgroundImage="/images/hero-bg-blogs.png"
      />

      {/* =========================================
          MOBILE
      ========================================= */}

      <div className="blog-hero-mobile">

        <div className="blog-hero-mobile-image">
          <Image
            src="/images/hero-bg-blogs.png"
            alt="The Creatine Company — Creatine + Taurine tube"
            fill
            priority
            className="blog-hero-mobile-image-content"
          />
        </div>

        <div className="blog-hero-mobile-copy">
          <HeroCopy />
        </div>

      </div>

      {/* =========================================
          DESKTOP
      ========================================= */}

      <div className="blog-hero-desktop">

        <div className="blog-hero-desktop-image">
          <Image
            src="/images/hero-bg-blogs.png"
            alt="The Creatine Company — Creatine + Taurine tube"
            fill
            priority
            className="blog-hero-desktop-image-content"
          />
        </div>

        <div className="blog-hero-desktop-content">

          <div className="blog-hero-copy">
            <HeroCopy />
          </div>

        </div>

      </div>

    </section>
  );
}