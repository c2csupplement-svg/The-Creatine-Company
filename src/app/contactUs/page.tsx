import Footer from '@/commonComponents/Footer';
import Marquee from '@/commonComponents/Marquee';
import ContactHero from './_components/ContactHero';

export default function ContactPage() {
  return (
    <main className="bg-[#FDF1DA]">
      <ContactHero />
      <Marquee />
      <Footer />
    </main>
  );
}