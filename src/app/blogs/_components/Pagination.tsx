"use client";

import { anton } from "@/commonComponents/fonts";

export default function Pagination() {
  return (
    <div
      className={`
        ${anton.className}
        mt-9
        flex
        w-full
        items-center
        justify-center
        gap-1.5
        text-[0.8rem]

        sm:mt-11
        sm:gap-2
        sm:text-sm

        lg:mt-12

        2xl:mt-14
        2xl:gap-3
      `}
      aria-label="Pagination"
    >
      {[1, 2, 3].map((page) => {
        const isActive = page === 1;

        return (
          <button
            key={page}
            type="button"
            aria-current={isActive ? "page" : undefined}
            className={`
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-md
              border-0
              transition-all
              duration-150
              cursor-pointer
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#502300]
              focus-visible:ring-offset-2
              
              sm:h-[2.15rem]
              sm:w-[2.15rem]

              2xl:h-[2.35rem]
              2xl:w-[2.35rem]

              ${
                isActive
                  ? "bg-[#502300] text-white"
                  : "bg-transparent text-[#502300] hover:bg-[#502300]/10"
              }
            `}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        aria-label="Next page"
        className="
          flex
          h-8
          shrink-0
          items-center
          justify-center
          border-0
          bg-transparent
          px-1
          text-[#502300]
          transition-opacity
          duration-150
          cursor-pointer
          hover:opacity-70
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#502300]
          focus-visible:ring-offset-2

          sm:h-[2.15rem]
          sm:px-1.5

          2xl:h-[2.35rem]
        "
      >
        »
      </button>
    </div>
  );
}