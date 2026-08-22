import HomeHero from '@/commonComponents/Home/HomeHero';
import StrengthStatement from '@/commonComponents/Home/StrengthStatement';
import FlavoursSection from '@/commonComponents/Home/FlavoursSection';
import PerformanceSachets from '@/commonComponents/Home/PerformanceSachets';
import CreatineMyths from '@/commonComponents/Home/CreatineMyths';
import TakeCreatineAnywhere from '@/commonComponents/Home/TakeCreatineAnywhere';
// import WhySingleServe from '@/commonComponents/Home/WhySingleServe';
import InstagramSection from '@/commonComponents/Home/InstagramSection';

import FaqSection from '@/commonComponents/FaqSection';
import Footer from '@/commonComponents/Footer';

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#FDF1DA] text-[#502300]">
      <HomeHero />

      <StrengthStatement />

      <FlavoursSection />

      <PerformanceSachets />

      <CreatineMyths />

      <TakeCreatineAnywhere />

      {/* <WhySingleServe /> */}

      <FaqSection />

      <InstagramSection />

      <Footer />
    </main>
  );
}