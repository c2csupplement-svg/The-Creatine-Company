import { anton, mono } from "@/commonComponents/fonts";

export default function ContactIntro() {
  return (
    <div className="w-full max-w-xl text-white md:ml-5 lg:ml-10 xl:ml-16 2xl:ml-24">
      <h1
        className={`${anton.className} m-0 text-[clamp(2.5rem,8vw,6rem)] font-normal uppercase leading-[0.9] tracking-[0.025em]`}
      >
        GET IN
        <br />
        TOUCH
      </h1>

      <p
        className={`${mono.className} mt-6 max-w-md text-[clamp(0.8rem,1.2vw,1.2rem)] font-semibold italic leading-[1.5] text-white`}
      >
        We love to hear from you. Reach out with comments, questions and
        feedback. Our lovely team will reply as quickly as we can.
      </p>

      <p
        className={`${mono.className} mt-4 max-w-md text-[clamp(0.8rem,1.1vw,1.1rem)] font-semibold italic leading-[1.5] text-white`}
      >
        Feel free to shoot us an email care{" "}
        <span className="font-bold break-all">
          @thecreatine.co
        </span>
      </p>
    </div>
  );
}