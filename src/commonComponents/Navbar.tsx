"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mono } from "./fonts";
import NavigationMenu from "./NavigationMenu";
import { useLanguage } from "@/app/context/languageUseContent";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const [languageOpen, setLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);

  const isRTL = language === "ar" || language === "fa";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setLanguageOpen(false);
  }, [language]);

  const handleLanguageChange = (lang: "en" | "ar" | "fa") => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className="absolute inset-x-0 top-0 z-[100] px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 lg:px-10 lg:pt-8"
    >
      <div className="relative flex w-full items-start justify-between">
        <Link
          href="/"
          aria-label="The Creatine Company home"
          className="relative z-[10001] block shrink-0"
        >
          <Image
            src="/images/real-logo.png"
            alt="The Creatine Company"
            width={145}
            height={115}
            priority
            className="h-auto w-[75px] sm:w-[95px] md:w-[110px] lg:w-[125px]"
          />
        </Link>

        <NavigationMenu />

        <div
          ref={languageRef}
          className="relative z-[10001]"
        >
          <button
            type="button"
            aria-label="Choose language"
            aria-expanded={languageOpen}
            onClick={() => setLanguageOpen((prev: boolean) => !prev)}
            className={`${mono.className} flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs text-white backdrop-blur-md transition-all duration-200 hover:bg-black/40 sm:px-4 sm:py-2 sm:text-sm`}
          >
            <span>
              {language === "en"
                ? "EN"
                : language === "ar"
                  ? "العربية"
                  : "فارسی"}
            </span>

            <span
              className={`text-[9px] transition-transform duration-200 ${
                languageOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {languageOpen && (
            <div
              className={`absolute top-full mt-2 min-w-[140px] overflow-hidden rounded-xl border border-white/20 bg-[#502300] p-1.5 shadow-xl backdrop-blur-md ${
                isRTL ? "left-0" : "right-0"
              }`}
            >
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/10 ${
                  language === "en"
                    ? "bg-[#fdf1da] !text-[#502300]"
                    : ""
                }`}
              >
                <span>English</span>
                {language === "en" && <span>✓</span>}
              </button>

              <button
                type="button"
                onClick={() => handleLanguageChange("ar")}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/10 ${
                  language === "ar"
                    ? "bg-[#fdf1da] !text-[#502300]"
                    : ""
                }`}
              >
                <span>العربية</span>
                {language === "ar" && <span>✓</span>}
              </button>

              <button
                type="button"
                onClick={() => handleLanguageChange("fa")}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/10 ${
                  language === "fa"
                    ? "bg-[#fdf1da] !text-[#502300]"
                    : ""
                }`}
              >
                <span>فارسی</span>
                {language === "fa" && <span>✓</span>}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}