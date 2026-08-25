"use client";

type CategoryFiltersProps = {
  categories: readonly string[];
  activeCategory: string;
  onSelect: (category: string) => void;
};
import { useLanguage } from "@/app/context/languageUseContent";

const buttonBase =
  "box-border inline-flex min-h-10 items-center justify-center rounded-md border px-3.5 py-2 text-center font-['Tungsten'] text-sm font-semibold leading-tight tracking-[0.025em] whitespace-nowrap cursor-pointer transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#502300] focus-visible:ring-offset-2 sm:min-h-11 sm:px-4 sm:py-2.5 sm:text-[15px] md:px-5 md:text-base lg:px-6 lg:py-3 lg:text-lg xl:px-7 xl:text-[19px] 2xl:px-[30px] 2xl:py-[15px] 2xl:text-[21px]";

export default function CategoryFilters({
  categories,
  activeCategory,
  onSelect,
}: CategoryFiltersProps) {

  const {language} = useLanguage();

  return (
    <div
    dir={language === "ar"?"rtl" : "ltr"}
      className="flex w-full flex-wrap items-center gap-2 sm:gap-2.5 lg:gap-3 2xl:gap-4"
      role="group"
      aria-label="Blog categories"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            aria-pressed={isActive}
            className={`${buttonBase} ${
              isActive
                ? "border-[#502300] bg-[#502300] text-white"
                : "border-[#502300]/25 bg-transparent text-[#502300] hover:border-[#502300] hover:bg-[#502300]/5"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}