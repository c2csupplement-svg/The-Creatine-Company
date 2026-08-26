"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "ar" | "fa";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "site-language";

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (
      saved === "en" ||
      saved === "ar" ||
      saved === "fa"
    ) {
      setLanguage(saved);
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    window.localStorage.setItem(STORAGE_KEY, language);

    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "ar" || language === "fa"
        ? "rtl"
        : "ltr";
  }, [language, isLoaded]);

  const value: LanguageContextValue = {
    language,

    setLanguage,

    toggleLanguage: () =>
      setLanguage((prev) => {
        if (prev === "en") return "ar";
        if (prev === "ar") return "fa";
        return "en";
      }),

    isRTL: language === "ar" || language === "fa",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider"
    );
  }

  return context;
}