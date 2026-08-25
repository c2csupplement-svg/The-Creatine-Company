import { anton, mono } from "@/commonComponents/fonts";
import { useLanguage } from "@/app/context/languageUseContent";

export default function ContactIntro() {

  const { language } = useLanguage();

  return (
    <div
    dir={language === "ar"?"rtl" : "ltr"} 
    className="w-full max-w-xl text-white md:ml-5 lg:ml-10 xl:ml-16 2xl:ml-24">
      <h1
        className={`${anton.className} m-0 text-[clamp(2.5rem,8vw,6rem)] font-normal uppercase leading-[0.9] tracking-[0.025em]`}
      >
        {language !== "ar" ? "GET IN" : "ادخل"}
        <br />
        {language !== "ar" ? "TOUCH" : "لمس"}
      </h1>

      <p
        className={`${mono.className} mt-6 max-w-md text-[clamp(0.8rem,1.2vw,1.2rem)] font-semibold italic leading-[1.5] text-white`}
      >
        {language !== "ar" ? <span>
          We love to hear from you. Reach out with comments, questions and
          feedback. Our lovely team will reply as quickly as we can.
        </span>
          : <span>نحن نحب سماع أخباركم. تواصلوا معنا بالتعليقات والأسئلة والملاحظات. فريقنا الرائع سيرد بأسرع ما يمكن.</span>}
      </p>

      <p
        className={`${mono.className} mt-4 max-w-md text-[clamp(0.8rem,1.1vw,1.1rem)] font-semibold italic leading-[1.5] text-white`}
      >
        {language !== "ar"?<span>Feel free to shoot us an email care</span>:<span>لا تتردد في إرسال بريد إلكتروني إلينا للاهتمام</span>}{" "}
        <br/>
        <span className="font-bold break-all">
          @thecreatine.co
        </span>
      </p>
    </div>
  );
}