"use client"

import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "@/commonComponents/NavigationMenu";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";
import {mono} from "@/commonComponents/fonts"
import { useLanguage } from "@/app/context/languageUseContent";

export default function ContactHero() {

  const {language, setLanguage} = useLanguage();

  return (
    <section 
    className="relative min-h-screen overflow-hidden bg-[#2a1608] px-4 pt-24 pb-6 sm:px-8 sm:pt-28 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
      <Image
        src="/images/contact-hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />

      <header className="w-full absolute left-4 top-4 z-20 flex items-center gap-2 sm:left-6 sm:top-6 md:left-8 md:top-7 lg:left-10 lg:top-8">
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

        <fieldset
                  className={`
                            ${mono.className}
                            absolute
                            top-0
                            right-10
                            lg:right-15
                            flex
                            items-center
                            gap-1
                            rounded-full
                            border
                            border-white/30
                            bg-black/20
                            px-1.5
                            py-1
                            text-[0.65rem]
                            backdrop-blur-sm
                
                            min-[480px]:gap-1.5
                            min-[480px]:px-2
                            min-[480px]:text-[0.7rem]
                
                            sm:text-xs
                            lg:text-sm
                          `}
                >
                  <legend className="sr-only">Choose language</legend>
        
                  <label
                    className={`
                              flex
                              cursor-pointer
                              items-center
                              gap-1
                              rounded-full
                              px-2
                              py-0.5
                              transition-colors
                              duration-150
                              ${language === "en" ? "bg-[#fdf1da] text-[#502300]" : "text-white/80"}
                            `}
                  >
                    <input
                      type="radio"
                      name="language"
                      value="en"
                      checked={language === "en"}
                      onChange={() => setLanguage("en")}
                      className="sr-only"
                    />
                    EN
                  </label>
        
                  <label
                    className={`
                              flex
                              cursor-pointer
                              items-center
                              gap-1
                              rounded-full
                              px-2
                              py-0.5
                              transition-colors
                              duration-150
                              ${language === "ar" ? "bg-[#fdf1da] text-[#502300]" : "text-white/80"}
                            `}
                  >
                    <input
                      type="radio"
                      name="language"
                      value="ar"
                      checked={language === "ar"}
                      onChange={() => setLanguage("ar")}
                      className="sr-only"
                    />
                    AR
                  </label>
                </fieldset>
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