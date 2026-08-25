import type { BlogPost } from "./data";
import { mono } from "@/commonComponents/fonts";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import { useLanguage } from "@/app/context/languageUseContent";

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {

  const { language } = useLanguage();

  return (
    <section
    dir={language === "ar"?"rtl" : "ltr"}
      className="
        w-full
        overflow-hidden
        box-border
        px-4
        pb-12

        min-[376px]:px-5
        min-[376px]:pb-10

        sm:px-5
        sm:pb-14

        md:px-7
        md:pb-16

        lg:px-8
        lg:pb-16

        xl:px-10
        xl:pb-20

        2xl:px-16
        2xl:pb-24

        min-[1440px]:px-12

        min-[1600px]:px-16
        min-[1600px]:pb-[5.5rem]

        min-[1920px]:px-20
        min-[1920px]:pb-24
      "
    >

<div className="flex flex-col items-center justify-center gap-3 py-16 px-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#502300]/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#502300]/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>

          <p
            className={`
      ${mono.className}
      m-0
      text-[0.85rem]
      leading-[1.5]
      font-medium
      text-[#502300]

      min-[376px]:text-[0.9rem]

      sm:text-[0.95rem]

      md:text-[1rem]
    `}
          >
            No articles match your search
          </p>

          <p
            className={`
      ${mono.className}
      m-0
      max-w-[280px]
      text-[0.72rem]
      leading-[1.5]
      text-[#502300]/60

      sm:text-[0.78rem]
    `}
          >
            Try different keywords or check your spelling
          </p>
        </div>

      {/* {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-16 px-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#502300]/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#502300]/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>

          <p
            className={`
      ${mono.className}
      m-0
      text-[0.85rem]
      leading-[1.5]
      font-medium
      text-[#502300]

      min-[376px]:text-[0.9rem]

      sm:text-[0.95rem]

      md:text-[1rem]
    `}
          >
            No articles match your search
          </p>

          <p
            className={`
      ${mono.className}
      m-0
      max-w-[280px]
      text-[0.72rem]
      leading-[1.5]
      text-[#502300]/60

      sm:text-[0.78rem]
    `}
          >
            Try different keywords or check your spelling
          </p>
        </div>
      ) : (
        <div
          className="
            mx-auto
            grid
            w-full
            grid-cols-1
            gap-y-8

            sm:grid-cols-2
            sm:gap-x-4
            sm:gap-y-9

            md:gap-x-5
            md:gap-y-11

            lg:grid-cols-3
            lg:max-w-[68rem]
            lg:gap-x-5
            lg:gap-y-11

            xl:max-w-[72rem]
            xl:gap-x-6
            xl:gap-y-12

            2xl:max-w-[90rem]
            2xl:gap-x-8
            2xl:gap-y-16

            min-[1440px]:max-w-[76rem]
            min-[1440px]:gap-x-6
            min-[1440px]:gap-y-[3.25rem]

            min-[1600px]:max-w-[82rem]
            min-[1600px]:gap-x-7
            min-[1600px]:gap-y-14

            min-[1920px]:max-w-[90rem]
            min-[1920px]:gap-x-8
            min-[1920px]:gap-y-16
          "
        >
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              post={post}
            />
          ))}
        </div>
      )} */}

      {/* <Pagination /> */}
    </section>
  );
}