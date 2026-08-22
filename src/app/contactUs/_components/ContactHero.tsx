import Image from 'next/image';
import NavigationMenu from '@/commonComponents/NavigationMenu';
import ContactIntro from './ContactIntro';
import ContactForm from './ContactForm';
import './ContactHero.css';

export default function ContactHero() {
  return (
    <section className="contact-hero-section">
      <Image
        src="/images/contact-hero-bg.png"
        alt=""
        fill
        priority
        className="contact-hero-background"
      />

      <div className="contact-hero-overlay" />

      <div className="contact-hero-content">
        <NavigationMenu
          backgroundImage="/images/contact-hero-bg.png"
        />

        <div className="contact-hero-grid">
          <ContactIntro />
          <ContactForm />
        </div>

        <div className="contact-hero-spacer" />
      </div>
    </section>
  );
}