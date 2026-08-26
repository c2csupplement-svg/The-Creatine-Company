"use client";

import { useEffect, useMemo, useState } from "react";
import Footer from "@/commonComponents/Footer";
import Marquee from "@/commonComponents/Marquee";
import HeroSection from "./_components/HeroSection";
import CategoryFilters from "./_components/CategoryFilters";
import SearchBar from "./_components/SearchBar";
import FeaturedPost from "./_components/FeaturedPost";
import BlogGrid from "./_components/BlogGrid";
import {
  CATEGORIES,
  AR_CATEGORIES,
  FA_CATEGORIES,
  POSTS,
  AR_POSTS,
  FA_POSTS,
} from "./_components/data";
import { useLanguage } from "../context/languageUseContent";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const { language, isRTL } = useLanguage();

  const isArabic = language === "ar";
  const isFarsi = language === "fa";

  const blogData = useMemo(() => {
    if (isArabic) return AR_POSTS;
    if (isFarsi) return FA_POSTS;
    return POSTS;
  }, [language, isArabic, isFarsi]);

  const categories = useMemo(() => {
    if (isArabic) return AR_CATEGORIES;
    if (isFarsi) return FA_CATEGORIES;
    return CATEGORIES;
  }, [language, isArabic, isFarsi]);

  useEffect(() => {
    setActiveCategory(categories[0] ?? "ALL");
  }, [categories]);

  const filteredPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return blogData.filter((post) => {
      const matchesCategory =
        activeCategory === categories[0] ||
        post.category === activeCategory;

      if (!normalizedSearch) {
        return matchesCategory;
      }

      const matchesSearch =
        post.title.toLowerCase().includes(normalizedSearch) ||
        post.description.toLowerCase().includes(normalizedSearch) ||
        post.content.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [blogData, activeCategory, categories, search]);

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-[#FDF1DA]"
    >
      <HeroSection />

      <section className="px-6 py-10 sm:px-10 sm:py-14">
        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelect={handleCategorySelect}
        />

        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </section>

      <FeaturedPost />

      <BlogGrid posts={filteredPosts} />

      <Marquee />

      <Footer />
    </main>
  );
}