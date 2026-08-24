"use client";

import type { ChangeEvent } from "react";
import { anton } from "@/commonComponents/fonts";
import { SearchIcon } from "./icons";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div
      className="
        mt-4
        flex
        w-full
        items-center
        gap-2
        rounded-md
        bg-[#a87847]
        px-3.5
        py-3

        sm:mt-[0.85rem]
        sm:gap-2.5
        sm:px-4
        sm:py-3.5

        md:gap-2.5
        md:px-4
        md:py-3.5

        lg:px-4
        lg:py-3.5

        xl:px-[1.1rem]
        xl:py-[0.9rem]

        2xl:px-[1.4rem]
        2xl:py-[1.05rem]
      "
    >
      <SearchIcon
        className="
          h-[1.1rem]
          w-[1.1rem]
          shrink-0
          text-[#fdf1da]

          sm:h-[1.1rem]
          sm:w-[1.1rem]

          md:h-5
          md:w-5

          2xl:h-5
          2xl:w-5
        "
      />

      <input
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder="SEARCH..."
        aria-label="Search articles"
        className={`
          ${anton.className}

          min-w-0
          w-full
          border-0
          bg-transparent
          p-0
          text-[#fdf1da]
          outline-none
          placeholder:text-[#fdf1da]/80

          text-[15px]
          leading-[1.3]
          tracking-[0.025em]

          sm:text-[15px]

          md:text-base

          lg:text-[17px]

          xl:text-[18px]

          2xl:text-[20px]
        `}
      />
    </div>
  );
}