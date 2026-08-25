import type { BlogPost } from "./data";
import Image from "next/image";
import Link from "next/link";
import { anton, mono } from "@/commonComponents/fonts";
import { useLanguage } from "@/app/context/languageUseContent";

export default function BlogCard({ post }: { post: BlogPost }) {

  const {language} = useLanguage();

  return (
    <article dir={language === "ar"?"rtl" : "ltr"}>
      <Link
        href={`/blogs/${post.slug}`}
        className="group block"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <span
          className={`${anton.className} mt-4 inline-flex items-center gap-2 rounded-full bg-[#82572b] px-3 py-1.5 text-xs leading-tight tracking-wide text-white`}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
          {post.category}
        </span>

        <h3
          className={`${anton.className} mt-3 text-[clamp(1.1rem,1.45vw,1.4rem)] leading-[1.25] text-[#502300] transition-opacity duration-200 group-hover:opacity-70`}
        >
          {post.title}
        </h3>

        <p
          className={`${mono.className} mt-2 text-[clamp(0.72rem,0.85vw,0.85rem)] leading-[1.625] text-[#502300]/80`}
        >
          {post.description}
        </p>
      </Link>
    </article>
  );
}