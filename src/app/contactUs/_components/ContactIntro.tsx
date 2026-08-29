"use client";

import { anton, mono } from "@/commonComponents/fonts";
import { useLanguage } from "@/app/context/languageUseContent";

const CONTENT = {
  en: {
    titleOne: "GET IN",
    titleTwo: "TOUCH",
    description:
      "We love to hear from you. Reach out with comments, questions and feedback. Our lovely team will reply as quickly as we can.",
    emailText: "Feel free to shoot us an email care",
  },

  ar: {
    titleOne: "تواصل",
    titleTwo: "معنا",
    description:
      "نحن نحب سماع أخباركم. تواصلوا معنا بالتعليقات والأسئلة والملاحظات. فريقنا الرائع سيرد بأسرع ما يمكن.",
    emailText: "لا تتردد في إرسال بريد إلكتروني إلينا",
  },

  fa: {
    titleOne: "با ما",
    titleTwo: "در تماس باشید",
    description:
      "ما خوشحال می‌شویم از شما بشنویم. نظرات، سؤالات و بازخوردهای خود را با ما در میان بگذارید. تیم ما در سریع‌ترین زمان ممکن به شما پاسخ خواهد داد.",
    emailText: "برای ارسال ایمیل به ما راحت باشید",
  },
};

export default function ContactIntro() {
  const { language, isRTL } = useLanguage();

  const content = CONTENT[language];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`w-full max-w-xl text-white md:ml-5 lg:ml-10 xl:ml-16 2xl:ml-24 ${
        isRTL ? "text-right" : "text-left"
      } ${language !== "en"?"sm:pr-15":"mr-0"}`}
    >
      <h1
        className={`${anton.className} m-0 text-[clamp(2.5rem,8vw,6rem)] font-normal leading-[0.9] tracking-[0.025em] ${
          language === "en" ? "uppercase" : ""
        }`}
      >
        {content.titleOne}
        <br />
        {content.titleTwo}
      </h1>

      <p
        className={`font-sf  mt-6 max-w-md text-[clamp(0.8rem,1.2vw,1.2rem)] leading-[1.5] text-white`}
      >
        {content.description}
      </p>

      <p
        className={`font-sf mt-4 max-w-md text-[clamp(0.8rem,1.1vw,1.1rem)] leading-[1.5] text-white`}
      >
        {content.emailText}{" "}
        <br />
        <span
          dir="ltr"
          className="break-all font-bold"
        >
          @thecreatine.co
        </span>
      </p>
    </div>
  );
}