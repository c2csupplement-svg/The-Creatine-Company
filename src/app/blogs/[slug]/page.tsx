"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { anton, mono } from "@/commonComponents/fonts";
import { useLanguage } from "@/app/context/languageUseContent";
import { getBlogBySlug } from "@/apiservice/blogApi";

import {
  POSTS,
  AR_POSTS,
  FA_POSTS,
} from "../_components/data";

type Language = "en" | "ar" | "fa";

type LocalizedItem = {
  english: string;
  arabic: string;
  farsi: string;
  _id?: string;
};

type ApiBlog = {
  _id: string;
  slug: string;
  category: string;
  image: string;
  status: boolean;
  title: LocalizedItem[];
  description: LocalizedItem[];
  content: LocalizedItem[];
  createdAt: string;
  updatedAt: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonicalUrl?: string;
    ogTitle?: string;
    [key: string]: unknown;
  };
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: ApiBlog;
};

function getLanguageText(
  item: LocalizedItem | undefined,
  language: Language,
): string {
  if (!item) return "";

  if (language === "en") {
    return item.english || "";
  }

  if (language === "ar") {
    return item.arabic || "";
  }

  if (language === "fa") {
    return item.farsi || "";
  }

  return item.english || "";
}

export default function BlogDetailPage() {
  const { language, isRTL } = useLanguage();

  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const [blogDetail, setBlogDetail] =
    useState<ApiBlog | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  const posts =
    language === "ar"
      ? AR_POSTS
      : language === "fa"
        ? FA_POSTS
        : POSTS;

  const staticPost = posts.find(
    (item) => item.slug === slug,
  );

  const backText =
    language === "ar"
      ? "العودة إلى المدونة"
      : language === "fa"
        ? "بازگشت به وبلاگ"
        : "BACK TO BLOGS";

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(false);

        const response =
          (await getBlogBySlug(
            slug,
          )) as ApiResponse;

        if (cancelled) return;

        if (
          response?.success &&
          response?.data
        ) {
          setBlogDetail(response.data);
        } else {
          setBlogDetail(null);
          setError(true);
        }
      } catch (err) {
        console.error(
          "BLOG FETCH ERROR:",
          err,
        );

        if (!cancelled) {
          setBlogDetail(null);
          setError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchBlog();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <main
        dir={isRTL ? "rtl" : "ltr"}
        className="flex min-h-screen items-center justify-center bg-[#fdf1da] text-[#502300]"
      >
        <p
          className={`${mono.className} text-sm`}
        >
          Loading...
        </p>
      </main>
    );
  }

  if (error || !blogDetail) {
    return (
      <main
        dir={isRTL ? "rtl" : "ltr"}
        className="flex min-h-screen items-center justify-center bg-[#fdf1da] text-[#502300]"
      >
        <div className="text-center">
          <h1
            className={`${anton.className} text-4xl`}
          >
            Blog not found
          </h1>

          <Link
            href="/blogs"
            className={`${mono.className} mt-4 inline-block underline`}
          >
            {backText}
          </Link>
        </div>
      </main>
    );
  }

  const title = getLanguageText(
    blogDetail.title?.[0],
    language,
  );

  const description =
    getLanguageText(
      blogDetail.description?.[0],
      language,
    );

  const content = getLanguageText(
    blogDetail.content?.[0],
    language,
  );

  const categoryName =
    staticPost?.categoryName ||
    blogDetail.category;

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fdf1da] text-[#502300]"
    >
      <section className="px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8 md:px-10 md:pb-20 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/blogs"
            className={`${anton.className} inline-flex items-center gap-2 text-xs uppercase tracking-wide text-[#502300] transition-opacity hover:opacity-60 sm:text-sm`}
          >
            <span
              aria-hidden
              className={
                isRTL
                  ? "rotate-180"
                  : ""
              }
            >
              ←
            </span>

            {backText}
          </Link>

          <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 md:mt-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12 lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl">
              {blogDetail.image && (
                <Image
                  src={blogDetail.image}
                  alt={
                    title ||
                    blogDetail.slug
                  }
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                  className="object-cover"
                />
              )}
            </div>

            <div
              className={
                isRTL
                  ? "text-right"
                  : "text-left"
              }
            >
              {categoryName && (
                <span
                  className={`${anton.className} inline-flex items-center gap-2 rounded-full bg-[#82572b] px-3 py-1.5 text-[11px] uppercase tracking-wide text-white sm:text-xs`}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  {categoryName}
                </span>
              )}

              <h1
                className={`${anton.className} mt-4 break-words text-[clamp(2.25rem,9vw,6.5rem)] leading-[0.9] text-[#502300] sm:mt-5 sm:leading-[0.88]`}
              >
                {title}
              </h1>

              <p
                className={`${mono.className} mt-4 max-w-xl text-sm leading-6 text-[#502300]/80 sm:mt-6 sm:text-base sm:leading-7`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="px-4 pb-14 sm:px-6 sm:pb-20 md:px-10 lg:px-16 xl:px-20">
        <div
          className={`${mono.className} mx-auto max-w-3xl whitespace-pre-line break-words text-[13px] leading-6 text-[#3a2416] sm:text-sm sm:leading-7 md:text-base md:leading-8 ${
            isRTL
              ? "text-right"
              : "text-left"
          }`}
        >
          {content}
        </div>
      </article>
    </main>
  );
}