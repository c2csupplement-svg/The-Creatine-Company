"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mono } from "./fonts";
import NavigationMenu from "./NavigationMenu";
import { useLanguage } from "@/app/context/languageUseContent";

type Country = "IN" | "UAE";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  // Language dropdown
  const [languageOpen, setLanguageOpen] = useState(false);

  // Country dropdown
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState<Country>("UAE");
  const languageRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  const isRTL = language === "ar" || language === "fa";

  // -----------------------------------------
  // Close dropdowns when clicking outside
  // -----------------------------------------
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        languageRef.current &&
        !languageRef.current.contains(target)
      ) {
        setLanguageOpen(false);
      }

      if (
        countryRef.current &&
        !countryRef.current.contains(target)
      ) {
        setCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // -----------------------------------------
  // Close language dropdown when language changes
  // -----------------------------------------
  useEffect(() => {
    setLanguageOpen(false);
  }, [language]);

  // -----------------------------------------
  // Language
  // -----------------------------------------
  const handleLanguageChange = (lang: "en" | "ar" | "fa") => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  // -----------------------------------------
  // Country
  // -----------------------------------------
    const handleCountryChange = (selectedCountry: Country) => {
      setCountry(selectedCountry);
      setCountryOpen(false);

      if (selectedCountry === "IN") {
        window.location.href = "https://thecreatinecompany.co.in";
        return;
      }

      if (selectedCountry === "UAE") {
        window.location.href = "https://thecreatinecompany.ae";
      }
    };

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className="absolute inset-x-0 top-0 z-[100] px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 lg:px-10 lg:pt-8"
    >
      <div className="relative flex w-full items-start justify-between">

        {/* =========================================
            LOGO
        ========================================= */}
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

        {/* =========================================
            MENU
        ========================================= */}
        <NavigationMenu />

        {/* =========================================
            RIGHT SIDE DROPDOWNS
        ========================================= */}
        <div className="relative z-[10001] flex items-start gap-2 sm:gap-3">

          {/* =========================================
              COUNTRY DROPDOWN
          ========================================= */}
          <div
            ref={countryRef}
            className="relative"
          >
            <button
              type="button"
              aria-label="Choose country"
              aria-expanded={countryOpen}
              onClick={() => {
                setCountryOpen((prev) => !prev);
                setLanguageOpen(false);
              }}
              className={`${mono.className} flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs text-white backdrop-blur-md transition-all duration-200 hover:bg-black/40 sm:px-4 sm:py-2 sm:text-sm`}
            >
              <span>{country}</span>

              <span
                className={`text-[9px] transition-transform duration-200 ${
                  countryOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {countryOpen && (
              <div
                className="absolute right-0 top-full mt-2 min-w-[140px] overflow-hidden rounded-xl border border-white/20 bg-[#502300] p-1.5 shadow-xl backdrop-blur-md"
              >
              {/* INDIA */}
              <button
                type="button"
                onClick={() => handleCountryChange("IN")}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/10 ${
                  country === "IN"
                    ? "bg-[#fdf1da] !text-[#502300]"
                    : ""
                }`}
              >
                <span>INDIA</span>
                {country === "IN" && <span>✓</span>}
              </button>

              {/* UAE */}
              <button
                type="button"
                onClick={() => handleCountryChange("UAE")}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/10 ${
                  country === "UAE"
                    ? "bg-[#fdf1da] !text-[#502300]"
                    : ""
                }`}
              >
                <span>UAE</span>
                {country === "UAE" && <span>✓</span>}
              </button>
              </div>
            )}
          </div>

          {/* =========================================
              LANGUAGE DROPDOWN
          ========================================= */}
          <div
            ref={languageRef}
            className="relative"
          >
            <button
              type="button"
              aria-label="Choose language"
              aria-expanded={languageOpen}
              onClick={() => {
                setLanguageOpen((prev) => !prev);
                setCountryOpen(false);
              }}
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
                {/* ENGLISH */}
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

                {/* ARABIC */}
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

                {/* FARSI */}
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
      </div>
    </header>
  );
}