"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { anton, mono } from "@/commonComponents/fonts";
import { useLanguage } from "@/app/context/languageUseContent";

type ContactFormData = {
  fullName: string;
  email: string;
  subject: string;
  orderNumber: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "sent";

const initialForm: ContactFormData = {
  fullName: "",
  email: "",
  subject: "",
  orderNumber: "",
  message: "",
};

const CONTENT = {
  en: {
    heading: (
      <>
        DON&apos;T BE SHY.
        <br className="sm:hidden" /> HIT US UP AND WE&apos;LL GET BACK TO YOU!
      </>
    ),
    fullName: "Full name",
    email: "Email address",
    subject: "Subject",
    orderNumber: "Order number ( optional )",
    message: "Message",
    sending: "SENDING...",
    sent: "SENT!",
    submit: "SUBMIT",
  },

  ar: {
    heading: (
      <>
        لا تتردد.
        <br />
        تواصل معنا وسنعاود التواصل معك!
      </>
    ),
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    orderNumber: "رقم الطلب (اختياري)",
    message: "الرسالة",
    sending: "جارٍ الإرسال...",
    sent: "تم الإرسال!",
    submit: "إرسال",
  },

  fa: {
    heading: (
      <>
        خجالت نکشید.
        <br />
        با ما تماس بگیرید و ما با شما در ارتباط خواهیم بود!
      </>
    ),
    fullName: "نام کامل",
    email: "آدرس ایمیل",
    subject: "موضوع",
    orderNumber: "شماره سفارش (اختیاری)",
    message: "پیام",
    sending: "در حال ارسال...",
    sent: "ارسال شد!",
    submit: "ارسال",
  },
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  const { language, isRTL } = useLanguage();

  const content = CONTENT[language];

  function handleChange(field: keyof ContactFormData) {
    return (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("submitting");

    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("sent");
    setForm(initialForm);
  }

  const fieldClassName = `
    ${mono.className}
    w-full
    min-w-0
    box-border
    rounded-lg
    border
    border-white/10
    bg-black/30
    px-4
    py-4
    text-sm
    text-white
    outline-none
    transition-colors
    duration-150
    placeholder:text-white/50
    focus:border-white/40
  `;

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`
        w-full
        box-border
        rounded-[1.5rem]
        bg-[#5c3a22]
        p-4
        text-${isRTL ? "right" : "left"}
        backdrop-blur-sm

        min-[375px]:p-5
        min-[480px]:p-6
        sm:p-8
        md:p-9
        lg:p-10

        lg:translate-x-[-30px]
        lg:translate-y-[10px]
        lg:scale-[1.02]

        min-[1200px]:translate-x-[-45px]
        min-[1200px]:translate-y-0
        min-[1200px]:scale-[1.03]

        min-[1440px]:translate-x-[-60px]
        min-[1440px]:translate-y-[-20px]
        min-[1440px]:scale-[1.05]

        min-[1920px]:translate-x-[-70px]
        min-[1920px]:translate-y-[-25px]
        min-[1920px]:scale-[1.06]
      `}
    >
      <h2
        className={`
          ${anton.className}
          m-0
          text-center
          text-white
          tracking-[0.025em]
          leading-[1.2]

          text-[clamp(1.5rem,8vw,2rem)]

          min-[375px]:text-[clamp(1.8rem,8vw,2.4rem)]
          min-[480px]:text-[clamp(2rem,7vw,2.7rem)]
          sm:text-[2.2rem]
          md:text-[2.4rem]
          lg:text-[2.5rem]
          min-[1200px]:text-[2.7rem]
          min-[1440px]:text-[2.9rem]
          min-[1920px]:text-[3.3rem]
        `}
      >
        {content.heading}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="
          mt-5
          flex
          w-full
          flex-col
          gap-3

          min-[375px]:mt-6
          sm:mt-6
          sm:gap-4
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-3

            sm:grid-cols-2
            sm:gap-4
          "
        >
          <input
            type="text"
            required
            placeholder={content.fullName}
            aria-label={content.fullName}
            value={form.fullName}
            onChange={handleChange("fullName")}
            dir={isRTL ? "rtl" : "ltr"}
            className={`
              ${fieldClassName}

              min-[375px]:px-3.5
              min-[375px]:py-3.5
              min-[375px]:text-[0.85rem]

              min-[480px]:px-4
              min-[480px]:py-4
              min-[480px]:text-[0.9rem]

              min-[1920px]:px-[1.15rem]
              min-[1920px]:py-[1.15rem]
              min-[1920px]:text-base
            `}
          />

          <input
            type="email"
            required
            placeholder={content.email}
            aria-label={content.email}
            value={form.email}
            onChange={handleChange("email")}
            dir="ltr"
            className={`
              ${fieldClassName}

              min-[375px]:px-3.5
              min-[375px]:py-3.5
              min-[375px]:text-[0.85rem]

              min-[480px]:px-4
              min-[480px]:py-4
              min-[480px]:text-[0.9rem]

              min-[1920px]:px-[1.15rem]
              min-[1920px]:py-[1.15rem]
              min-[1920px]:text-base
            `}
          />
        </div>

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-3

            sm:grid-cols-2
            sm:gap-4
          "
        >
          <input
            type="text"
            required
            placeholder={content.subject}
            aria-label={content.subject}
            value={form.subject}
            onChange={handleChange("subject")}
            dir={isRTL ? "rtl" : "ltr"}
            className={fieldClassName}
          />

          <input
            type="text"
            placeholder={content.orderNumber}
            aria-label={content.orderNumber}
            value={form.orderNumber}
            onChange={handleChange("orderNumber")}
            dir={isRTL ? "rtl" : "ltr"}
            className={fieldClassName}
          />
        </div>

        <textarea
          required
          rows={5}
          placeholder={content.message}
          aria-label={content.message}
          value={form.message}
          onChange={handleChange("message")}
          dir={isRTL ? "rtl" : "ltr"}
          className={`
            ${fieldClassName}
            resize-none
            min-h-[110px]

            min-[375px]:min-h-[120px]
            min-[480px]:min-h-[130px]
            sm:min-h-[140px]
            md:min-h-[150px]
            lg:min-h-[160px]
            min-[1200px]:min-h-[170px]
            min-[1440px]:min-h-[180px]
            min-[1920px]:min-h-[200px]
          `}
        />

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className={`
              ${anton.className}
              rounded-full
              border-0
              bg-[#bd966e]
              px-5
              py-3
              text-base
              tracking-[0.025em]
              text-[#2a1608]
              whitespace-nowrap
              transition-all
              duration-150

              hover:-translate-y-0.5
              hover:opacity-90

              disabled:cursor-not-allowed
              disabled:opacity-60
              disabled:hover:translate-y-0

              min-[375px]:px-8
              min-[375px]:py-3
              min-[375px]:text-[1.1rem]

              min-[480px]:px-9
              min-[480px]:py-3.5
              min-[480px]:text-[1.15rem]

              md:px-10
              md:text-[1.2rem]

              min-[1920px]:px-12
              min-[1920px]:py-4
              min-[1920px]:text-[1.35rem]
            `}
          >
            {status === "submitting"
              ? content.sending
              : status === "sent"
                ? content.sent
                : content.submit}
          </button>
        </div>
      </form>
    </div>
  );
}