"use client";

import { anton } from "./fonts";
import {
  IconPinterest,
  IconInstagram,
  IconX,
  IconYoutube,
} from "../app/about/_components/icons";
import { useLanguage } from "@/app/context/languageUseContent";
import { useState } from "react";
import { welcomeEmail } from "@/apiservice/contactApi";
import {toast} from "sonner"

const CONTENT = {
  en: {
    flavour: "CREATINE FLAVOUR",
    about: "ABOUT",
    contact: "CONTACT",
    blogs: "BLOGS",
    newsletter:
      "Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!",
    email: "ENTER YOUR EMAIL",
    subscribe: "Subscribe",
    copyright: "All Rights Reserved",
    privacy: "Privacy Policy",
  },

  ar: {
    flavour: "نكهة الكرياتين",
    about: "من نحن",
    contact: "اتصل بنا",
    blogs: "المدونة",
    newsletter:
      "احصل على وصول مبكر حصري وابقَ على اطلاع حول تحديثات المنتجات والفعاليات والمزيد!",
    email: "أدخل بريدك الإلكتروني",
    subscribe: "اشتراك",
    copyright: "جميع الحقوق محفوظة",
    privacy: "سياسة الخصوصية",
  },

  fa: {
    flavour: "طعم کراتین",
    about: "درباره ما",
    contact: "تماس با ما",
    blogs: "وبلاگ",
    newsletter:
      "دسترسی زودهنگام اختصاصی داشته باشید و از آخرین به‌روزرسانی محصولات، رویدادها و موارد دیگر باخبر بمانید!",
    email: "ایمیل خود را وارد کنید",
    subscribe: "عضویت",
    copyright: "تمامی حقوق محفوظ است",
    privacy: "حریم خصوصی",
  },
};

export default function Footer() {
  const { language, isRTL } = useLanguage();
  const [email, setEmail] = useState("");


  const handleWelcomeApi = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await welcomeEmail({ email });

      toast.success(response.message)
      setEmail("");
    }
    catch (err: unknown) {
      toast.error("Failed to send request")
      console.error(err)
    }
  }

  const content = CONTENT[language];

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="
        relative
        box-border
        w-full
        overflow-hidden
        bg-[#462300]
        px-4
        py-6
        text-white

        min-[375px]:px-5
        min-[375px]:py-7

        sm:px-6
        sm:py-8

        md:px-10
        md:py-12

        lg:px-12
        lg:py-14

        xl:px-16
        xl:py-16

        min-[1440px]:px-20
        min-[1440px]:py-[4.5rem]

        min-[1920px]:px-24
        min-[1920px]:py-20
      "
    >
      <svg
        viewBox="0 0 1920 263"
        preserveAspectRatio="none"
        className="
          pointer-events-none
          absolute
          left-0
          top-[-1px]
          h-12
          w-full

          max-[374px]:h-12
          min-[375px]:h-14
          min-[480px]:h-16
          sm:h-20
          md:h-24
          lg:h-24
          xl:h-[6.5rem]
          min-[1440px]:h-28
          min-[1920px]:h-32
        "
        aria-hidden="true"
      >
        <path
          d="M221.5 192.499C127.9 215.699 34.8333 161.166 0 130.999V0H1919C1922.17 83.3333 1927.6 248 1920 226C1912.4 204 1840.5 180 1800 195.5C1761 206 1721.5 252.3 1685.5 261.5C1640.5 273 1574.5 156.499 1526.5 216.999C1488.1 265.399 1434.83 249.166 1413 234.999C1411.17 230.333 1406.3 215.099 1401.5 191.499C1396.7 167.899 1350 153.333 1327.5 148.5C1323.5 147 1331.1 142.399 1293.5 91.9993C1255.9 41.5992 1222 58 1201.5 77.4993C1176.5 113 1158.6 197.399 1123 216.999C1087.4 236.599 989.167 195.166 944.5 171.999C877.5 173 823 206 814 202.999C771.167 179.333 671.1 144.1 613.5 192.499C555.9 240.899 513.5 226.999 499.5 214C482.5 202 464.5 157.5 402.5 163.5C325 171 344 110 337.5 63.9997C332.3 27.1997 293.667 36.9997 275 46.4997C268.2 126.9 261 177.5 221.5 192.499Z"
          fill="#FDF1DA"
        />
      </svg>

      <div
        className="
          relative
          mx-auto
          box-border
          w-full
          max-w-[1600px]
          pt-10

          max-[374px]:pt-10
          min-[375px]:pt-12
          min-[480px]:pt-14
          sm:pt-16
          md:pt-20
          lg:pt-20
          xl:pt-[5.5rem]
          min-[1440px]:pt-24

          min-[1920px]:max-w-[1800px]
          min-[1920px]:pt-28
        "
      >
        <h2
          className={`
            ${anton.className}
            m-0
            text-center
            text-[clamp(1.5rem,8vw,2rem)]
            leading-none
            tracking-[0.025em]

            min-[375px]:text-[clamp(1.8rem,8vw,2.5rem)]
            min-[480px]:text-[clamp(2.25rem,7vw,3rem)]
            sm:text-[clamp(2.75rem,6vw,3.5rem)]
            md:text-[clamp(3rem,6vw,4rem)]
            lg:text-[4rem]
            xl:text-[4.5rem]
            min-[1440px]:text-[5rem]
            min-[1920px]:text-[6rem]
          `}
        >
          #TheCreatineCompany
        </h2>

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-7

            min-[375px]:mt-6
            min-[375px]:gap-9
            min-[480px]:gap-12
            sm:gap-14
            md:gap-16
            xl:gap-16
            min-[1440px]:gap-[4.5rem]
            min-[1920px]:mt-8
            min-[1920px]:gap-20
          "
        >
          <a
            href="https://www.pinterest.com/thecreatinecompany/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70"
          >
            <IconPinterest
              className="
                block
                h-6
                w-6

                min-[375px]:h-7
                min-[375px]:w-7
                sm:h-8
                sm:w-8
                min-[1440px]:h-9
                min-[1440px]:w-9
                min-[1920px]:h-10
                min-[1920px]:w-10
              "
            />
          </a>

          <a
            href="https://www.instagram.com/the.creatine.company/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70"
          >
            <IconInstagram
              className="
                block
                h-6
                w-6

                min-[375px]:h-7
                min-[375px]:w-7
                sm:h-8
                sm:w-8
                min-[1440px]:h-9
                min-[1440px]:w-9
                min-[1920px]:h-10
                min-[1920px]:w-10
              "
            />
          </a>

          <a
            href="https://x.com/CreatineCompany"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70"
          >
            <IconX
              className="
                block
                h-6
                w-6

                min-[375px]:h-7
                min-[375px]:w-7
                sm:h-8
                sm:w-8
                min-[1440px]:h-9
                min-[1440px]:w-9
                min-[1920px]:h-10
                min-[1920px]:w-10
              "
            />
          </a>

          <a
            href="https://www.youtube.com/@TheCreatineCompany"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70"
          >
            <IconYoutube
              className="
                block
                h-11
                w-11

                min-[375px]:h-13
                min-[375px]:w-13
                sm:h-[3.75rem]
                sm:w-[3.75rem]
                min-[1440px]:h-16
                min-[1440px]:w-16
                min-[1920px]:h-[4.5rem]
                min-[1920px]:w-[4.5rem]
              "
            />
          </a>
        </div>

        <div
          className="
            mx-auto
            mt-10
            grid
            w-full
            max-w-4xl
            grid-cols-1
            gap-7

            min-[375px]:mt-12
            min-[375px]:gap-8
            min-[480px]:mt-14
            sm:mt-14
            sm:gap-9

            md:mt-16
            md:grid-cols-3
            md:gap-6

            lg:max-w-[900px]
            lg:gap-10

            xl:mt-[5.5rem]
            xl:max-w-[1100px]

            min-[1440px]:max-w-[1300px]
            min-[1440px]:gap-16

            min-[1920px]:mt-20
            min-[1920px]:max-w-[1600px]
            min-[1920px]:gap-20
          "
        >
          <div
            className={`
              ${anton.className}
              text-[0.95rem]
              [overflow-wrap:anywhere]

              min-[375px]:text-base
              min-[480px]:text-[1.05rem]
              min-[640px]:text-lg
              min-[1440px]:text-xl
              min-[1920px]:text-[1.4rem]
            `}
          >
            <a
              href="#"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              {content.flavour}
            </a>
          </div>

          <nav
            className={`
              ${anton.className}
              flex
              flex-col
              gap-1
              text-[0.95rem]

              min-[375px]:text-base
              min-[480px]:text-[1.05rem]
              min-[640px]:text-lg
              min-[1440px]:text-xl
              min-[1920px]:text-[1.4rem]
            `}
          >
            <a
              href="/about"
              className="transition-opacity hover:opacity-70"
            >
              {content.about}
            </a>

            <a
              href="/contactUs"
              className="transition-opacity hover:opacity-70"
            >
              {content.contact}
            </a>

            <a
              href="/blogs"
              className="transition-opacity hover:opacity-70"
            >
              {content.blogs}
            </a>
          </nav>

          <div className="w-full min-w-0">
            <p
              className="
                m-0
                text-[0.7rem]
                leading-[1.625]
                text-white/80

                sm:text-xs
                min-[1440px]:text-[0.85rem]
                min-[1920px]:text-base
              "
            >
              {content.newsletter}
            </p>

            <form
              onSubmit={handleWelcomeApi}
              className="
                mt-4
                flex
                w-full
                items-end
                gap-3
                border-b
                border-white/60
                pb-2
              "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={content.email}
                dir="ltr"
                aria-label={content.email}
                className={`
                  ${anton.className}
                  min-w-0
                  w-full
                  border-0
                  bg-transparent
                  text-sm
                  tracking-[0.025em]
                  text-white
                  outline-none
                  placeholder:text-white/70

                  min-[1920px]:text-base
                `}
              />

              <button
                type="submit"
                aria-label={content.subscribe}
                className="
                  flex-none
                  border-0
                  bg-transparent
                  p-0
                  text-base
                  text-white
                  transition-opacity
                  duration-200
                  hover:opacity-70
                  min-[1920px]:text-xl
                "
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div
          className="
            mx-auto
            mt-8
            flex
            w-full
            max-w-4xl
            flex-col-reverse
            items-center
            gap-3
            border-t
            border-white/10
            pt-5
            text-[0.68rem]
            text-white/70

            min-[375px]:mt-8
            sm:text-xs

            md:flex-row
            md:justify-between
            md:items-center

            lg:max-w-[900px]
            xl:max-w-[1100px]

            min-[1440px]:max-w-[1300px]
            min-[1440px]:text-[0.85rem]

            min-[1920px]:mt-14
            min-[1920px]:max-w-[1600px]
            min-[1920px]:text-[0.95rem]
          "
        >
          <p
            className="
              m-0
              text-center
              [overflow-wrap:anywhere]

              md:text-left
            "
          >
            Copyright © {new Date().getFullYear()} The Creatine Company -{" "}
            {content.copyright}
          </p>

          <a
            href="/privacy-policy"
            className="text-center transition-opacity duration-200 hover:opacity-70"
          >
            {content.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}