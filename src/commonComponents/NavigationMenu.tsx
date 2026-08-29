"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { anton } from "./fonts";
import { useLanguage } from "@/app/context/languageUseContent";

const NAV_ITEMS = {
  en: [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT", href: "/contactUs" },
    { label: "BLOG", href: "/blogs" },
  ],

  ar: [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "اتصل بنا", href: "/contactUs" },
    { label: "المدونة", href: "/blogs" },
  ],

  fa: [
    { label: "خانه", href: "/" },
    { label: "درباره ما", href: "/about" },
    { label: "تماس با ما", href: "/contactUs" },
    { label: "وبلاگ", href: "/blogs" },
  ],
};

const MENU_CONTENT = {
  en: {
    open: "Open menu",
    close: "Close menu",
    closeButton: "CLOSE",
    navigation: "Main navigation",
  },

  ar: {
    open: "فتح القائمة",
    close: "إغلاق القائمة",
    closeButton: "أغلق",
    navigation: "القائمة الرئيسية",
  },

  fa: {
    open: "باز کردن منو",
    close: "بستن منو",
    closeButton: "بستن",
    navigation: "منوی اصلی",
  },
};

type NavigationMenuProps = {
  backgroundImage?: string | null;
};

export default function NavigationMenu({
  backgroundImage = null,
}: NavigationMenuProps) {
  const [open, setOpen] = useState(false);

  const { language, isRTL } = useLanguage();

  const navItems = NAV_ITEMS[language];
  const menuContent = MENU_CONTENT[language];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? menuContent.close : menuContent.open}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="fixed left-1/2 top-2 z-[10000] flex h-8 w-10 -translate-x-1/2 items-center justify-center sm:top-6 sm:h-10 sm:w-12"
      >
        <span className="relative block h-[18px] w-[28px] sm:w-[40px]">
          <span
            className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${
              open ? "top-[8px] rotate-45" : "top-[4px]"
            }`}
          />

          <span
            className={`absolute left-0 top-[8px] h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ease-in-out ${
              open ? "top-[8px] -rotate-45" : "top-[12px]"
            }`}
          />
        </span>
      </button>

      <div
        aria-hidden={!open}
        dir={isRTL ? "rtl" : "ltr"}
        className={`fixed inset-0 z-[9990] overflow-hidden transition-all duration-500 ease-in-out ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}

        <div className="absolute inset-0 bg-[#502300]" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex h-full w-full items-center justify-center px-5">
          <nav
            aria-label={menuContent.navigation}
            className="flex flex-col items-center gap-2 text-center sm:gap-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group relative py-1 text-[#FDF1DA] transition-colors duration-300 hover:text-[#BD966E]"
              >
                <span
                  className={`${anton.className} block text-[clamp(3rem,10vw,8rem)] uppercase leading-[0.82] tracking-tight`}
                >
                  {item.label}
                </span>

                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#FDF1DA] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        <button
          type="button"
          aria-label={menuContent.close}
          onClick={() => setOpen(false)}
          className={`${anton.className} absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-sm uppercase tracking-wide text-[#FDF1DA] transition-opacity duration-300 hover:opacity-60`}
        >
          {menuContent.closeButton}
        </button>
      </div>
    </>
  );
}