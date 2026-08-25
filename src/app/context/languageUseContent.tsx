"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "ar";

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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ar") {
      setLanguage(saved);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language, isLoaded]);

  const value: LanguageContextValue = {
    language,
    setLanguage,
    toggleLanguage: () =>
      setLanguage((prev) => (prev === "en" ? "ar" : "en")),
    isRTL: language === "ar",
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}