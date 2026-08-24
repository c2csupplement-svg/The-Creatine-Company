import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#2a1608] px-4 pt-24 pb-6 sm:px-8 sm:pt-28 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
      <Image
        src="/images/contact-hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />

      <header className="absolute left-4 top-4 z-20 flex items-center gap-2 sm:left-6 sm:top-6 md:left-8 md:top-7 lg:left-10 lg:top-8">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/real-logo.png"
            alt="The Creatine Company"
            width={145}
            height={115}
            priority
            className="h-auto w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36"
          />
        </Link>

        <NavigationMenu backgroundImage="/images/hero-bg.jpg" />
      </header>

      <div className="relative z-10 mx-auto w-full max-w-[1800px]">
        <div className="mt-8 grid grid-cols-1 items-center gap-8 sm:mt-10 sm:gap-10 md:mt-12 md:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20">
          <ContactIntro />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}