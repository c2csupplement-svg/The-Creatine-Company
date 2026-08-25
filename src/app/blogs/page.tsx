'use client';

import { useMemo, useState } from 'react';
import Footer from '@/commonComponents/Footer';
import Marquee from '@/commonComponents/Marquee';
import HeroSection from './_components/HeroSection';
import CategoryFilters from './_components/CategoryFilters';
import SearchBar from './_components/SearchBar';
import FeaturedPost from './_components/FeaturedPost';
import BlogGrid from './_components/BlogGrid';
import {
  CATEGORIES,
  AR_CATEGORIES,
  POSTS,
  AR_POSTS,
} from './_components/data';
import { useLanguage } from '../context/languageUseContent';

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [search, setSearch] = useState('');

  const { language } = useLanguage();

  const isArabic = language === 'ar';

  const blogData = isArabic ? AR_POSTS : POSTS;

  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchesCategory =
        activeCategory === 'ALL' || post.category === activeCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [blogData, activeCategory, search]);

  const handleCategorySelect = (category: string) => {
    const categoryIndex = isArabic
      ? AR_CATEGORIES.indexOf(
          category as (typeof AR_CATEGORIES)[number]
        )
      : CATEGORIES.indexOf(
          category as (typeof CATEGORIES)[number]
        );

    if (categoryIndex !== -1) {
      setActiveCategory(
        isArabic
          ? AR_POSTS[0]?.category || 'ALL'
          : CATEGORIES[categoryIndex]
      );
    }
  };

  const displayedActiveCategory = isArabic
    ? activeCategory === 'ALL'
      ? 'الكل'
      : AR_CATEGORIES[
          CATEGORIES.indexOf(
            activeCategory as (typeof CATEGORIES)[number]
          )
        ]
    : activeCategory;

  return (
    <main className="bg-[#FDF1DA]">
      <HeroSection />

      <section className="px-6 py-10 sm:px-10 sm:py-14">
        <CategoryFilters
          categories={isArabic ? AR_CATEGORIES : CATEGORIES}
          activeCategory={displayedActiveCategory}
          onSelect={handleCategorySelect}
        />

        <SearchBar value={search} onChange={setSearch} />
      </section>

      <FeaturedPost />
      <BlogGrid posts={filteredPosts} />
      <Marquee />

      <Footer />
    </main>
  );
}