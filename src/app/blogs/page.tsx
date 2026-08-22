'use client';

import { useMemo, useState } from 'react';
import Footer from '@/commonComponents/Footer';
import Marquee from '@/commonComponents/Marquee';
import HeroSection from './_components/HeroSection';
import CategoryFilters from './_components/CategoryFilters';
import SearchBar from './_components/SearchBar';
import FeaturedPost from './_components/FeaturedPost';
import BlogGrid from './_components/BlogGrid';
import { CATEGORIES, POSTS } from './_components/data';

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesCategory = activeCategory === 'ALL' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="bg-[#FDF1DA]">
      <HeroSection />

      <section className="px-6 py-10 sm:px-10 sm:py-14">
        <CategoryFilters categories={CATEGORIES} activeCategory={activeCategory} onSelect={setActiveCategory} />
        <SearchBar value={search} onChange={setSearch} />
      </section>

      <FeaturedPost />
      <BlogGrid posts={filteredPosts} />
      <Marquee />

      <Footer />
    </main>
  );
}