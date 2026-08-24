import Image from "next/image";
import { anton, mono } from "../fonts";

export default function TakeCreatineAnywhere() {
  return (
    <section className="w-full bg-[#843b02] text-white">
      <div
        className="
          grid
          min-h-0
          grid-cols-1

          md:min-h-[700px]
          md:grid-cols-2

          min-[1440px]:min-h-[760px]
        "
      >
        <div
          className="
            relative
            h-[380px]
            min-h-[380px]
            w-full
            overflow-hidden

            min-[481px]:h-[420px]
            min-[481px]:min-h-[420px]

            md:h-[700px]
            md:min-h-[700px]

            min-[1440px]:h-[760px]
            min-[1440px]:min-h-[760px]
          "
        >
          <Image
            src="/images/hero-4.png"
            alt="Creatine sachet in pocket"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>

        <div
          className="
            flex
            items-center
            px-5
            py-10

            min-[481px]:px-6
            min-[481px]:py-12

            sm:px-10
            sm:py-12

            md:px-[7%]
            md:py-12

            lg:px-[8%]

            min-[1440px]:px-[8%]
          "
        >
          <div className="w-full max-w-[760px]">
            <h2
              className={`
                ${anton.className}
                m-0
                text-[clamp(2rem,10vw,3rem)]
                uppercase
                leading-[0.85]

                min-[481px]:text-[clamp(2.2rem,8vw,3.5rem)]

                sm:text-[clamp(2.4rem,6vw,4.5rem)]

                md:text-[clamp(2.2rem,3.7vw,5.2rem)]
              `}
            >
              Take Your Daily Creatine
            </h2>

            <div
              className="
                mt-2
                inline-block
                max-w-full
                bg-[#a87847]
                px-3
                py-2
                rotate-[-1.4deg]

                sm:px-5
                sm:py-2.5
              "
            >
              <span
                className={`
                  ${anton.className}
                  block
                  break-words
                  text-[clamp(2rem,10vw,3rem)]
                  uppercase
                  leading-[0.82]

                  min-[481px]:text-[clamp(2.2rem,8vw,3.5rem)]

                  sm:text-[clamp(2.4rem,6vw,4.5rem)]

                  md:text-[clamp(2.2rem,3.7vw,5.1rem)]
                `}
              >
                Anywhere. Anytime.
              </span>
            </div>

            <p
              className={`
                ${mono.className}
                m-0
                mt-6
                max-w-[720px]
                text-[14px]
                leading-[1.5]

                min-[481px]:text-[15px]

                sm:text-base

                md:text-[16px]

                lg:text-sm
              `}
            >
              A SINGLE  Dhs. 1/- sachet fits in a wallet, a gym bag, or a
              laptop sleeve. Tear, pour into 200-500ml of water, stir, done. No
              plastic tub dominating the kitchen counter. No spoon hunting. No
              half-scoop guesswork. Your daily 5g goes where you go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}