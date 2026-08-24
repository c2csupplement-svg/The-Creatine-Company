import { anton } from "../../../commonComponents/fonts";
import { IconPurity, IconSachet, IconFlask } from "./icons";

const FEATURES = [
  {
    title: "100% Pure & High-Quality Creatine",
    icon: IconPurity,
  },
  {
    title: "Easy-to-Carry Single-Serve Sachets",
    icon: IconSachet,
  },
  {
    title: "Lab-Tested & Trusted Quality",
    icon: IconFlask,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#fdf1da]
        px-4
        py-14
        text-[#3a2416]

        min-[376px]:px-5
        min-[376px]:py-16

        sm:px-6
        sm:py-18

        md:px-8
        md:py-20

        lg:px-10
        lg:py-24

        xl:px-12
        xl:py-26

        2xl:px-16
        2xl:py-28

        min-[1600px]:px-16
        min-[1600px]:py-28

        min-[1920px]:px-20
        min-[1920px]:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-5xl
          text-center

          min-[1280px]:max-w-[56rem]

          min-[1440px]:max-w-[60rem]

          min-[1600px]:max-w-[64rem]

          min-[1920px]:max-w-6xl
        "
      >
        <h2
          className={`
            ${anton.className}
            m-0
            text-[#502300]
            uppercase
            leading-[0.95]
            tracking-[-0.04em]

            text-[clamp(2.5rem,11vw,3.5rem)]

            min-[376px]:text-[clamp(2.6rem,10vw,3.7rem)]

            sm:text-[3.2rem]

            md:text-[clamp(3rem,7vw,4rem)]

            lg:text-[clamp(3.5rem,5vw,4.5rem)]

            xl:text-[clamp(4rem,5vw,5.5rem)]

            2xl:text-[clamp(5rem,5vw,6.5rem)]

            min-[1600px]:text-[clamp(5.5rem,5vw,7rem)]

            min-[1920px]:text-[7rem]
          `}
        >
          WHY
        </h2>

        <div
          className="
            mx-auto
            -mt-1
            inline-block
            max-w-full
            bg-[#a87847]
            px-4
            py-1
            text-white
            rotate-[-2deg]

            min-[376px]:px-5

            sm:px-7
            sm:py-1.5

            md:px-8

            lg:px-10

            xl:px-12

            2xl:px-14

            min-[1600px]:px-16

            min-[1920px]:px-18
          "
        >
          <h2
            className={`
              ${anton.className}
              m-0
              text-[clamp(2.2rem,9vw,3.5rem)]
              uppercase
              leading-[0.95]
              tracking-[-0.02em]
              text-white

              min-[376px]:text-[clamp(2.3rem,8.5vw,3.7rem)]

              sm:text-[3.2rem]

              md:text-[clamp(3rem,6vw,4rem)]

              lg:text-[clamp(3.5rem,5vw,4.8rem)]

              xl:text-[clamp(4rem,4.5vw,5rem)]

              2xl:text-[5rem]

              min-[1600px]:text-[5.2rem]

              min-[1920px]:text-[5.5rem]
            `}
          >
            CHOOSE US
          </h2>
        </div>

        <div
          className="
            mx-auto
            mt-8
            flex
            w-full
            max-w-3xl
            flex-col
            gap-5
            text-[0.9rem]
            leading-[1.7]

            sm:mt-9
            sm:gap-6
            sm:text-[0.95rem]
            sm:leading-[1.75]

            md:mt-10
            md:max-w-[42rem]
            md:text-[0.95rem]
            md:leading-[1.8]

            lg:max-w-[48rem]
            lg:text-[1rem]
            lg:leading-[1.9]

            xl:max-w-[52rem]
            xl:text-[1.05rem]
            xl:leading-[1.95]

            2xl:max-w-[60rem]
            2xl:text-[1.15rem]
            2xl:leading-[2]
          "
        >
          <p className="m-0">
            At The Creatine Company, we believe creatine should be simple,
            effective, and uncompromising in quality. That&apos;s why we focus
            on delivering premium-grade creatine with exceptional purity,
            rigorous quality testing, and convenient single-serve sachets that
            fit seamlessly into your daily routine.
          </p>

          <p className="m-0">
            Whether you&apos;re training for strength, muscle growth, or
            improved performance, every serving is designed to help you perform
            at your best—without unnecessary fillers or complexity.
          </p>
        </div>
      </div>

      <div
        className="
          mx-auto
          mt-10
          grid
          w-full
          max-w-5xl
          grid-cols-1
          gap-4

          min-[376px]:mt-11

          sm:mt-12
          sm:grid-cols-2
          sm:gap-4

          md:max-w-4xl
          md:grid-cols-3
          md:gap-4

          lg:mt-14
          lg:max-w-5xl
          lg:gap-5

          xl:max-w-[68rem]
          xl:gap-5

          2xl:mt-16
          2xl:max-w-[74rem]
          2xl:gap-6

          min-[1600px]:max-w-[78rem]
          min-[1600px]:gap-6

          min-[1920px]:mt-[4.5rem]
          min-[1920px]:max-w-[82rem]
          min-[1920px]:gap-7
        "
      >
        {FEATURES.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className="
                flex
                min-w-0
                flex-col
                items-start
                rounded-xl
                bg-[#a87847]
                p-6
                text-left
                text-white
                transition-transform
                duration-300
                hover:-translate-y-1

                min-[376px]:p-6

                sm:p-6
                sm:text-[1rem]

                md:p-5
                md:text-[1rem]

                lg:p-6
                lg:text-[1.08rem]

                xl:p-7
                xl:text-[1.18rem]

                2xl:p-9
                2xl:text-[1.28rem]

                min-[1600px]:p-9
                min-[1600px]:text-[1.3rem]

                min-[1920px]:rounded-2xl
                min-[1920px]:p-10
                min-[1920px]:text-[1.35rem]
              "
            >
              <Icon
                className="
                  mb-4
                  h-8
                  w-8
                  shrink-0

                  sm:h-8
                  sm:w-8

                  md:h-8
                  md:w-8

                  lg:h-9
                  lg:w-9

                  xl:h-10
                  xl:w-10

                  2xl:h-11
                  2xl:w-11

                  min-[1920px]:mb-5
                  min-[1920px]:h-11
                  min-[1920px]:w-11
                "
              />

              <span
                className={`
                  ${anton.className}
                  text-[1rem]
                  uppercase
                  leading-[1.2]

                  min-[376px]:text-[1.05rem]

                  sm:text-[1rem]

                  md:text-[1rem]

                  lg:text-[1.08rem]

                  xl:text-[1.18rem]

                  2xl:text-[1.28rem]

                  min-[1600px]:text-[1.3rem]

                  min-[1920px]:text-[1.35rem]
                `}
              >
                {feature.title}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}