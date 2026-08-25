"use client";

import Image from "next/image";
import { anton } from "../fonts";
import { useLanguage } from "@/app/context/languageUseContent"; 

const INSTAGRAM_POSTS = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
];

const INSTAGRAM_URL =
  "https://www.instagram.com/the.creatine.company/";

export default function InstagramSection() {

  const {language} = useLanguage();

  return (
    <section
    dir={language === "ar"?"rtl" : "ltr"}
      className="
        overflow-hidden
        bg-[#fdf1da]
        px-4
        pb-16
        pt-6

        min-[481px]:px-5

        sm:px-10
        sm:pb-20
        sm:pt-8
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="mb-7">
          <span
            className={`
              ${anton.className}
              block
              text-[clamp(2rem,3.5vw,4rem)]
              uppercase
              leading-none
              text-[#502300]
            `}
          >
            {language !== "ar"?"Follow":"تابع"}
          </span>

          <span
            className={`
              ${anton.className}
              mt-[-4px]
              inline-block
              bg-[#a87847]
              px-3
              py-1
              text-[clamp(2rem,3.5vw,4rem)]
              uppercase
              leading-none
              text-white
              rotate-[1deg]

              sm:px-5
              sm:py-2
            `}
          >
            {language !== "ar"?"The Creatine Company":"شركة الكرياتين"}
          </span>
        </div>

        <div
          className="
            grid
            w-full
            grid-cols-2
            gap-2.5

            sm:grid-cols-4
            sm:gap-5
          "
        >
          {INSTAGRAM_POSTS.map((file) => (
            <a
              key={file}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                w-full
                min-w-0
                overflow-hidden
                bg-white
                no-underline
              "
            >
              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  aspect-[908/1578]
                "
              >
                <Image
                  src={`/images/instagram/${file}`}
                  alt="The Creatine Company Instagram post"
                  fill
                  sizes="
                    (max-width: 480px) 50vw,
                    (max-width: 639px) 50vw,
                    (max-width: 767px) 25vw,
                    260px
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    ease-in-out
                    hover:scale-[1.03]
                  "
                />
              </div>

              <div
                className={`
                  ${anton.className}
                  flex
                  items-center
                  justify-between
                  gap-2
                  px-2
                  py-2
                  text-[8px]
                  uppercase
                  text-[#502300]

                  sm:px-3
                  sm:py-2
                  sm:text-xs
                `}
              >
                <span>thecreatine.co</span>

                <span>View Profile</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${anton.className}
              inline-flex
              items-center
              gap-3
              bg-[#a87847]
              px-5
              py-3
              text-sm
              uppercase
              text-white
              no-underline
              transition-transform
              duration-300
              hover:scale-105

              sm:text-base
            `}
          >
            {language !== "ar"?"Explore Our Instagram":"اكتشف حسابنا على إنستغرام"}

            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}