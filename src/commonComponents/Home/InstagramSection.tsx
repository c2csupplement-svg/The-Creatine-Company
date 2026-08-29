"use client";

import Image from "next/image";
import { anton } from "../fonts";
import { useLanguage } from "@/app/context/languageUseContent";

const INSTAGRAM_POSTS = ["1.png", "2.png", "3.png", "4.png"];

const INSTAGRAM_URL =
  "https://www.instagram.com/the.creatine.company/";

const CONTENT = {
  en: {
    follow: "Follow",
    company: "The Creatine Company",
    profile: "View Profile",
    instagram: "Explore Our Instagram",
  },
  ar: {
    follow: "تابع",
    company: "شركة الكرياتين",
    profile: "عرض الملف الشخصي",
    instagram: "اكتشف حسابنا على إنستغرام",
  },
  fa: {
    follow: "دنبال کنید",
    company: "شرکت کراتین",
    profile: "مشاهده پروفایل",
    instagram: "اینستاگرام ما را ببینید",
  },
};

export default function InstagramSection() {
  const { language, isRTL } = useLanguage();

  const content = CONTENT[language];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="overflow-hidden bg-[#fdf1da] px-4 pb-16 pt-6 min-[481px]:px-5 sm:px-10 sm:pb-20 sm:pt-8"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="mb-7">
          <span
            className={`${anton.className} block text-[clamp(2rem,3.5vw,4rem)] uppercase leading-none text-[#502300] ${language !== "en"?"pb-2":"pb-0"}`}
          >
            {content.follow}
          </span>

          <span
            className={`${anton.className} mt-[-4px] inline-block bg-[#a87847] px-3 py-1 text-[clamp(2rem,3.5vw,4rem)] uppercase leading-none text-white rotate-[1deg] sm:px-5 sm:py-2`}
          >
            {content.company}
          </span>
        </div>

        <div className="grid w-full grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-5">
          {INSTAGRAM_POSTS.map((file) => (
            <a
              key={file}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full min-w-0 overflow-hidden bg-white no-underline"
            >
              <div className="relative aspect-[908/1578] w-full overflow-hidden">
                <Image
                  src={`/images/instagram/${file}`}
                  alt="The Creatine Company Instagram post"
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 639px) 50vw, (max-width: 767px) 25vw, 260px"
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-[1.03]"
                />
              </div>

              <div
                className={`${anton.className} flex items-center justify-between gap-2 px-2 py-2 text-[8px] uppercase text-[#502300] sm:px-3 sm:py-2 sm:text-xs`}
              >
                <span>thecreatine.co</span>
                <span>{content.profile}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${anton.className} inline-flex items-center gap-3 bg-[#a87847] px-5 py-3 text-sm uppercase text-white no-underline transition-transform duration-300 hover:scale-105 sm:text-base`}
          >
            <span>{content.instagram}</span>

            <span>{isRTL ? "←" : "→"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}


// export default function InstagramSection() {
//   const { language, isRTL } = useLanguage();

//   const content = CONTENT[language];

//   const posts = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

//   return (
//     <section
//       dir={isRTL ? "rtl" : "ltr"}
//       className="overflow-hidden bg-[#fdf1da] px-4 pb-16 pt-6 min-[481px]:px-5 sm:px-10 sm:pb-20 sm:pt-8"
//     >
//       <div className="mx-auto w-full max-w-[1500px]">
//         <div className="mb-7">
//           <span
//             className={`${anton.className} block text-[clamp(2rem,3.5vw,4rem)] uppercase leading-none text-[#502300] ${
//               language !== "en" ? "pb-2" : "pb-0"
//             }`}
//           >
//             {content.follow}
//           </span>

//           <span
//             className={`${anton.className} mt-[-4px] inline-block rotate-[1deg] bg-[#a87847] px-3 py-1 text-[clamp(2rem,3.5vw,4rem)] uppercase leading-none text-white sm:px-5 sm:py-2`}
//           >
//             {content.company}
//           </span>
//         </div>

//         <div className="relative w-full overflow-hidden">
//           <motion.div
//             className="flex w-max gap-2.5 sm:gap-5"
//             animate={{
//               x: isRTL ? ["-50%", "0%"] : ["0%", "-50%"],
//             }}
//             transition={{
//               x: {
//                 duration: 25,
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 ease: "linear",
//               },
//             }}
//           >
//             {posts.map((file, index) => (
//               <a
//                 key={`${file}-${index}`}
//                 href={INSTAGRAM_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block w-[calc(50vw-0.9375rem)] min-w-[calc(50vw-0.9375rem)] overflow-hidden bg-white no-underline sm:w-[calc(25vw-3.75rem)] sm:min-w-[calc(25vw-3.75rem)] lg:w-[260px] lg:min-w-[260px]"
//               >
//                 <div className="relative aspect-[908/1578] w-full overflow-hidden">
//                   <Image
//                     src={`/images/instagram/${file}`}
//                     alt="The Creatine Company Instagram post"
//                     fill
//                     sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
//                     className="object-cover transition-transform duration-500 ease-in-out hover:scale-[1.03]"
//                   />
//                 </div>

//                 <div
//                   className={`${anton.className} flex items-center justify-between gap-2 px-2 py-2 text-[8px] uppercase text-[#502300] sm:px-3 sm:py-2 sm:text-xs`}
//                 >
//                   <span>thecreatine.co</span>
//                   <span>{content.profile}</span>
//                 </div>
//               </a>
//             ))}
//           </motion.div>
//         </div>

//         <div className="mt-8 text-center">
//           <a
//             href={INSTAGRAM_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`${anton.className} inline-flex items-center gap-3 bg-[#a87847] px-5 py-3 text-sm uppercase text-white no-underline transition-transform duration-300 hover:scale-105 sm:text-base`}
//           >
//             <span>{content.instagram}</span>
//             <span>{isRTL ? "←" : "→"}</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }