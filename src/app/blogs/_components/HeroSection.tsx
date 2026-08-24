"use client";

import Image from "next/image";
import Link from "next/link";
import { anton } from "@/commonComponents/fonts";
import NavigationMenu from "@/commonComponents/NavigationMenu";

function HeroCopy() {
  return (
    <>
      <h1
        className={`${anton.className} m-0 text-[3.75rem] leading-[0.9] tracking-wide sm:text-[4.5rem] lg:text-[6rem]`}
      >
        BLOGS
      </h1>

      <div className="mt-3 inline-block rotate-[-2deg] bg-[#a87847] px-4 py-1 sm:px-6 sm:py-2">
        <span
          className={`${anton.className} block text-[2.25rem] leading-none text-[#fdf1da] sm:text-[3rem] lg:text-[3.75rem]`}
        >
          AND ARTICLES
        </span>
      </div>

      <p className="mt-6 max-w-[28rem] text-sm leading-relaxed text-white/85 lg:text-base">
        Explore practical guides, science-based articles, dosage tips, common
        myths, and the latest research to help you understand creatine and make
        smarter choices for your fitness journey.
      </p>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pt-6 text-white sm:px-10 sm:pt-8">
      <div className="absolute left-4 top-4 z-50 sm:left-6 sm:top-6 lg:left-10 lg:top-8">
        <Link href="/" aria-label="The Creatine Company home">
          <Image
            src="/images/real-logo.png"
            alt="The Creatine Company"
            width={125}
            height={99}
            priority
            className="h-auto w-[75px] sm:w-[100px] md:w-[110px] lg:w-[125px]"
          />
        </Link>
      </div>

      <NavigationMenu backgroundImage="/images/hero-bg-blogs.png" />

      <div className="relative z-10 block pb-14 pt-8 sm:hidden">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[20rem]">
          <Image
            src="/images/hero-bg-blogs.png"
            alt="The Creatine Company — Creatine + Taurine tube"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <div className="mt-8">
          <HeroCopy />
        </div>
      </div>

      <div className="relative hidden sm:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[58%]">
          <Image
            src="/images/hero-bg-blogs.png"
            alt="The Creatine Company — Creatine + Taurine tube"
            fill
            priority
            sizes="58vw"
            className="object-contain object-left"
          />
        </div>

        <div className="relative z-10 flex min-h-[620px] items-center justify-end py-16 lg:min-h-[760px]">
          <div className="mr-[5%] w-1/2 max-w-[36rem]">
            <HeroCopy />
          </div>
        </div>
      </div>
    </section>
  );
}