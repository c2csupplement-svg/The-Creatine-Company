import { mono } from "@/commonComponents/fonts";
import HeroSection from './_components/HeroSection';
import WhyChooseUs from './_components/WhyChooseUs';
import AboutFaqSection from '@/app/about/_components/AboutFaqSection';
import Footer from "@/commonComponents/Footer";

export default function AboutPage() {
  return (
    <main className={mono.className}>
      <HeroSection />
      <WhyChooseUs />
      <AboutFaqSection/>
      {/* <FaqSection /> */}

      <Footer />
    </main>
  );
}