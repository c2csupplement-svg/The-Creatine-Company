import { anton, mono } from "../fonts";

const BENEFITS = [
  {
    title: "PRE-MEASURED DOSE",
    body: "Get the right amount, every time.",
  },
  {
    title: "NO SCOOP.\nNO MESS.\nNO GUESSWORK.",
    body: "",
  },
  {
    title: "TAKE IT ANYWHERE",
    body: "Gym. Office. Travel. Just grab & go.",
  },
  {
    title: "SIMPLE. PROVEN. EFFECTIVE",
    body: "",
  },
];

const AUDIENCE = [
  "Athletes",
  "Active People",
  "Fitness Enthusiasts",
  "Ready When You Are",
  "Tear. Mix. Train",
];

export default function WhySingleServe() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#fdf1da]
        px-5
        py-12

        sm:px-10
        sm:py-16

        md:py-20
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div
          className="
            grid
            gap-8

            md:grid-cols-[0.85fr_1.15fr]
            md:items-end
          "
        >
          <div className="w-full">
            <span
              className={`
                ${anton.className}
                block
                text-[clamp(2.2rem,4vw,4.8rem)]
                uppercase
                leading-[0.85]
              `}
            >
              Why
            </span>

            <span
              className={`
                ${anton.className}
                mt-1
                inline-block
                max-w-full
                bg-[#a87847]
                px-3
                py-1
                text-[clamp(2.2rem,4vw,4.8rem)]
                uppercase
                leading-[0.85]
                text-white
                rotate-[-2deg]

                sm:px-5
                sm:py-2
              `}
            >
              Single Serve
            </span>

            <h2
              className={`
                ${anton.className}
                m-0
                mt-1
                text-[clamp(2.2rem,4vw,4.8rem)]
                uppercase
                leading-[0.85]
              `}
            >
              Creatine?
            </h2>
          </div>

          <div className="w-full">
            <h3
              className={`
                ${anton.className}
                m-0
                text-[clamp(2rem,3.6vw,4.2rem)]
                uppercase
                leading-[0.85]
              `}
            >
              Creatine That Fits Our Lifestyle
            </h3>

            <p
              className={`
                ${mono.className}
                m-0
                mt-5
                max-w-[48rem]
                text-[9px]
                leading-[1.55]

                sm:text-xs
              `}
            >
              Creatine is a naturally occurring compound that helps your body
              produce energy during high-intensity activity. You don&apos;t
              have to be a bodybuilder to use creatine. It can be a part of an
              active lifestyle for:
            </p>
          </div>
        </div>

        <div
          className="
            mt-10
            grid
            gap-4

            md:grid-cols-2

            lg:grid-cols-4
          "
        >
          {BENEFITS.map((item) => (
            <article
              key={item.title}
              className="
                border
                border-[#a87847]
                bg-[rgb(189_150_110_/_30%)]
                p-5

                sm:p-6
              "
            >
              <h4
                className={`
                  ${anton.className}
                  m-0
                  whitespace-pre-line
                  text-2xl
                  uppercase
                  leading-[0.9]

                  sm:text-[1.875rem]
                `}
              >
                {item.title}
              </h4>

              {item.body && (
                <p
                  className={`
                    ${mono.className}
                    m-0
                    mt-5
                    text-[9px]
                    leading-[1.5]

                    sm:text-xs
                  `}
                >
                  {item.body}
                </p>
              )}
            </article>
          ))}
        </div>

        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-2
          "
        >
          {AUDIENCE.map((item) => (
            <span
              key={item}
              className={`
                ${anton.className}
                inline-block
                bg-[#502300]
                px-3
                py-2
                text-sm
                uppercase
                text-white

                sm:text-base
              `}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}