import { anton } from "./fonts";

const MARQUEE_ITEMS = new Array(10).fill("THECREATINECO");

export default function Marquee() {
  return (
    <div
      className="
        overflow-hidden
        bg-[#fdf1da]
        py-20
      "
    >
      <div
        className="
          flex
          w-max
          animate-[marquee_30s_linear_infinite]
          motion-reduce:animate-none
        "
      >
        {[0, 1].map((dupe) => (
          <div
            key={dupe}
            className="flex shrink-0"
          >
            {MARQUEE_ITEMS.map((label, i) => (
              <span
                key={`${dupe}-${i}`}
                className={`
                  ${anton.className}
                  mx-4
                  text-4xl
                  leading-none
                  tracking-[0.025em]

                  sm:text-[3.75rem]

                  ${
                    i % 2 === 0
                      ? "text-[rgba(70,35,0,0.15)]"
                      : "text-[#a87847]"
                  }
                `}
              >
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}