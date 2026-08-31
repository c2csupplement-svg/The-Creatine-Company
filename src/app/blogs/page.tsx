"use client";

import { useEffect, useMemo, useState } from "react";
import Footer from "@/commonComponents/Footer";
import Marquee from "@/commonComponents/Marquee";
import HeroSection from "./_components/HeroSection";
import CategoryFilters from "./_components/CategoryFilters";
import SearchBar from "./_components/SearchBar";
import FeaturedPost from "./_components/FeaturedPost";
import BlogGrid from "./_components/BlogGrid";
import { getBlog, getBlogCategory } from "@/apiservice/blogApi";
import { useLanguage } from "../context/languageUseContent";

type LanguageText = {
  english: string;
  arabic: string;
  farsi: string;
};

type BlogApiData = {
  _id: string;
  slug: string;
  category: string;
  title: LanguageText[];
  description: LanguageText[];
  image: string;
  content: LanguageText[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonicalUrl?: string | null;
    ogTitle?: string | null;
    ogDescription?: string | null;
    ogImage?: string | null;
    twitterTitle?: string | null;
    twitterDescription?: string | null;
    twitterImage?: string | null;
  };
  status: boolean;
  createdAt: string;
  updatedAt: string;
};

type CategoryItem = {
  _id: string;
  english: string;
  arabic: string;
  farsi: string;
};

type CategoryApiData = {
  _id: string;
  category: CategoryItem[];
};

type PaginationData = {
  currentPage: number;
  totalPages: number;
  totalBlogs: number;
  limit: number;
  hasNextPage: boolean;
};

type BlogResponse = {
  success: boolean;
  message: string;
  data: BlogApiData[];
  pagination?: PaginationData;
};

type BlogPost = {
  _id: string;
  slug: string;
  category: string;
  categoryName: string;
  title: string;
  description: string;
  image: string;
  content: string;
};

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const [blogs, setBlogs] = useState<BlogApiData[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryApiData[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [pagination, setPagination] = useState<PaginationData>({
    currentPage: 1,
    totalPages: 1,
    totalBlogs: 0,
    limit: 10,
    hasNextPage: false,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { language, isRTL } = useLanguage();

  const isArabic = language === "ar";
  const isFarsi = language === "fa";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const blogResponse: BlogResponse = await getBlog(currentPage);

        setBlogs(blogResponse?.data ?? []);

        setPagination(
          blogResponse?.pagination ?? {
            currentPage: 1,
            totalPages: 1,
            totalBlogs: 0,
            limit: 10,
            hasNextPage: false,
          }
        );
      } catch (err: unknown) {
        console.error(err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryResponse = await getBlogCategory();

        setCategoryData(categoryResponse?.data ?? []);
      } catch (err: unknown) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  const categories = useMemo(() => {
    const categoryNames = categoryData.flatMap((item) =>
      item.category.map((category) => {
        if (isArabic) {
          return category.arabic;
        }

        if (isFarsi) {
          return category.farsi;
        }

        return category.english;
      })
    );

    return ["ALL", ...categoryNames];
  }, [categoryData, isArabic, isFarsi]);


  useEffect(() => {
    setActiveCategory("ALL");
  }, [language]);


  const blogData = useMemo<BlogPost[]>(() => {
    return blogs.map((blog) => {
      const title = blog.title?.[0];
      const description = blog.description?.[0];
      const content = blog.content?.[0];

      const categoryDocument = categoryData.find(
        (item) => item._id === blog.category
      );

      const category = categoryDocument?.category?.[0];

      const categoryName = isArabic
        ? category?.arabic ?? ""
        : isFarsi
          ? category?.farsi ?? ""
          : category?.english ?? "";

      return {
        _id: blog._id,
        slug: blog.slug,
        category: blog.category,
        categoryName,

        title: isArabic
          ? title?.arabic ?? ""
          : isFarsi
            ? title?.farsi ?? ""
            : title?.english ?? "",

        description: isArabic
          ? description?.arabic ?? ""
          : isFarsi
            ? description?.farsi ?? ""
            : description?.english ?? "",

        image: blog.image,

        content: isArabic
          ? content?.arabic ?? ""
          : isFarsi
            ? content?.farsi ?? ""
            : content?.english ?? "",
      };
    });
  }, [blogs, categoryData, isArabic, isFarsi]);


  const filteredPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return blogData.filter((post) => {
      const matchesCategory =
        activeCategory === "ALL" ||
        post.categoryName === activeCategory;

      if (!normalizedSearch) {
        return matchesCategory;
      }

      const matchesSearch =
        post.title.toLowerCase().includes(normalizedSearch) ||
        post.description.toLowerCase().includes(normalizedSearch) ||
        post.content.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [blogData, activeCategory, search]);

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };


  const handlePageChange = (page: number) => {
    if (page < 1 || page > pagination.totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  if (loading) {
    return (
      <main
        dir={isRTL ? "rtl" : "ltr"}
        className="min-h-screen bg-[#FDF1DA]"
      >
        <HeroSection />

        <section className="flex min-h-[400px] items-center justify-center">
          <p className="text-lg">Loading blogs...</p>
        </section>

        <Footer />
      </main>
    );
  }


  if (error) {
    return (
      <main
        dir={isRTL ? "rtl" : "ltr"}
        className="min-h-screen bg-[#FDF1DA]"
      >
        <HeroSection />

        <section className="flex min-h-[400px] items-center justify-center">
          <p className="text-lg">{error}</p>
        </section>

        <Footer />
      </main>
    );
  }

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

      {filteredPosts.length > 0 && <FeaturedPost />}

      <BlogGrid
        posts={filteredPosts}
        pagination={pagination}
        onPageChange={handlePageChange}
      />

      <Marquee />

      <Footer />
    </main>
  );
}