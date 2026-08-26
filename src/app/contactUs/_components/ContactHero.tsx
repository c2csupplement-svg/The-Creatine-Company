"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";
import { mono } from "@/commonComponents/fonts";
import { useLanguage } from "@/app/context/languageUseContent";
import Navbar from "@/commonComponents/Navbar";

const LANGUAGE_NAMES = {
  en: "English",
  ar: "العربية",
  fa: "فارسی",
};

export default function ContactHero() {
  const [languageStatus, setLanguageStatus] = useState<boolean>(false);

  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#2a1608] px-4 pb-6 pt-24 sm:px-8 sm:pt-28 md:px-10 lg:px-12 xl:px-16 2xl:px-20"
    >
      <Image
        src="/images/contact-hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />

      <Navbar/>

      <div className="relative z-10 mx-auto w-full max-w-[1800px]"
       dir={isRTL ? "ltr" : "ltr"}>
        <div className={`mt-8 grid grid-cols-1 items-center gap-8 sm:mt-10 sm:gap-10 md:mt-12 md:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20`}>
          <ContactIntro />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}