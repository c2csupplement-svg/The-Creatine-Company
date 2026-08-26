"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { anton, mono } from "@/commonComponents/fonts";
import {
  POSTS,
  AR_POSTS,
  FA_POSTS,
} from "../_components/data";
import { useLanguage } from "@/app/context/languageUseContent";

export default function BlogDetailPage() {
  const { language, isRTL } = useLanguage();
  const params = useParams<{ slug: string }>();

  const posts =
    language === "ar"
      ? AR_POSTS
      : language === "fa"
        ? FA_POSTS
        : POSTS;

  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return null;
  }

  const backText =
    language === "ar"
      ? "العودة إلى المدونة"
      : language === "fa"
        ? "بازگشت به وبلاگ"
        : "Back to blogs";

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
              className={isRTL ? "rotate-180" : ""}
            >
              ←
            </span>

            {backText}
          </Link>

          <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 md:mt-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12 lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className={isRTL ? "text-right" : "text-left"}>
              <span
                className={`${anton.className} inline-flex items-center gap-2 rounded-full bg-[#82572b] px-3 py-1.5 text-[11px] uppercase tracking-wide text-white sm:text-xs`}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                {post.category}
              </span>

              <h1
                className={`${anton.className} mt-4 break-words text-[clamp(2.25rem,9vw,6.5rem)] leading-[0.9] text-[#502300] sm:mt-5 sm:leading-[0.88]`}
              >
                {post.title}
              </h1>

              <p
                className={`${mono.className} mt-4 max-w-xl text-sm leading-6 text-[#502300]/80 sm:mt-6 sm:text-base sm:leading-7`}
              >
                {post.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="px-4 pb-14 sm:px-6 sm:pb-20 md:px-10 lg:px-16 xl:px-20">
        <div
          className={`${mono.className} mx-auto max-w-3xl whitespace-pre-line break-words text-[13px] leading-6 text-[#3a2416] sm:text-sm sm:leading-7 md:text-base md:leading-8 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {post.content}
        </div>
      </article>
    </main>
  );
}