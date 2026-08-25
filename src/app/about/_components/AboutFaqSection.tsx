"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { anton } from "@/commonComponents/fonts";
import { useLanguage } from "@/app/context/languageUseContent";

const FAQS = [
  {
    q: "Will creatine make me look soft, puffy, or bloated?",
    a: "No. This is a fundamental misunderstanding of how hydration works. Creatine pulls water into your muscle cells (intracellular hydration), not under your skin (extracellular water). This cellular hydration actually makes your muscles look fuller, harder, and more dense. If the scale goes up a kilo in the first two weeks, it is just water hydrating your muscle tissue, not fat. It means the product is doing exactly what it is supposed to do.",
  },
  {
    q: "Why does my old creatine sink to the bottom and taste like sand?",
    a: "Because standard creatine is poorly milled. Legacy brands often use a cheap 80-mesh powder that refuses to dissolve in cold water, leaving a gritty residue at the bottom of your shaker. We use ultra-fine, 200-mesh micronized creatine. It has significantly more surface area, meaning it dissolves instantly, leaves zero chalky residue, and goes down completely unnoticed in water, juice, or your pre-workout.",
  },
  {
    q: "Can I mix this sachet directly with coffee or my pre-workout?",
    a: "Yes. Our sachets contain 100% pure, unflavored monohydrate with zero artificial sweeteners or dyes. You can tear it open and drop it directly into your morning coffee, whey protein, or a high-stimulant pre-workout without altering the taste. While early 1990s myths suggested caffeine cancels out creatine, modern sports science confirms they are perfectly fine to stack, provided you drink adequate water throughout the day.",
  },
  {
    q: "I only lift 4 days a week. Do I skip the sachet on rest days?",
    a: "Never skip a day. Creatine is not a stimulant; you do not take it for an immediate energy spike. It operates strictly on a saturation principle. Your goal is to keep your muscle cells 100% full of creatine at all times to aid in recovery and ATP regeneration. If you skip your rest days, your saturation levels drop, and you lose the benefit. Tear open a sachet every single day, whether you are deadlifting heavy or sitting on the couch.",
  },
  {
    q: "How is a Dhs. 9 box disrupting legacy brands that have been around for a decade?",
    a: 'Legacy brands rely on "sunk cost" psychology. They force you to spend Dhs. 5 to Dhs. 9 on a massive tub so you feel financially obligated to stay loyal to them for three months. We flipped the model. We stripped out the expensive plastic jars, the lost scoops, and the massive distributor markups. By moving to daily, climate-proof sachets, we made elite-grade, NABL-tested creatine accessible to anyone on a weekly budget. We are not just selling a supplement; we are fixing a broken, overpriced distribution model.',
  },
];

const arFAQS = [
  {
    q: "هل سيجعلني الكرياتين أبدو ممتلئًا أو منتفخًا أو ذا مظهر لين؟",
    a: "لا. هذا سوء فهم أساسي لكيفية عمل الترطيب. يسحب الكرياتين الماء إلى داخل خلايا العضلات (الترطيب داخل الخلايا)، وليس تحت الجلد (الماء خارج الخلايا). هذا الترطيب الخلوي يجعل عضلاتك تبدو أكثر امتلاءً وصلابة وكثافة. إذا ارتفع وزنك كيلوغرامًا خلال أول أسبوعين، فهذا مجرد ماء يعمل على ترطيب أنسجة عضلاتك، وليس دهونًا. وهذا يعني أن المنتج يقوم تمامًا بما صُمم للقيام به.",
  },
  {
    q: "لماذا يترسب الكرياتين القديم في قاع الكوب ويصبح مذاقه مثل الرمل؟",
    a: "لأن الكرياتين التقليدي غالبًا ما يكون مطحونًا بشكل غير جيد. تستخدم العلامات التجارية التقليدية مسحوقًا رخيصًا بحجم 80 ميش، والذي يصعب ذوبانه في الماء البارد، مما يترك بقايا خشنة في قاع زجاجة الخلط. نحن نستخدم كرياتين ميكروني فائق النعومة بحجم 200 ميش. يمتلك مساحة سطح أكبر بكثير، مما يعني أنه يذوب بسرعة، ولا يترك أي بقايا طباشيرية، ويمكن تناوله بسهولة في الماء أو العصير أو مشروب ما قبل التمرين دون أن تلاحظ وجوده.",
  },
  {
    q: "هل يمكنني خلط هذا الظرف مباشرة مع القهوة أو مشروب ما قبل التمرين؟",
    a: "نعم. تحتوي أظرفنا على كرياتين مونوهيدرات نقي 100% بدون نكهة، وخالٍ تمامًا من المحليات الصناعية أو الأصباغ. يمكنك فتح الظرف وإضافته مباشرة إلى قهوتك الصباحية أو بروتين مصل اللبن أو مشروب ما قبل التمرين عالي المنبهات دون تغيير الطعم. وعلى الرغم من أن بعض الخرافات في أوائل التسعينيات كانت تشير إلى أن الكافيين يلغي تأثير الكرياتين، تؤكد علوم الرياضة الحديثة أنه يمكن تناولهما معًا بأمان، مع الحرص على شرب كمية كافية من الماء طوال اليوم.",
  },
  {
    q: "أنا أتمرن بالأوزان 4 أيام فقط في الأسبوع. هل أتوقف عن تناول الظرف في أيام الراحة؟",
    a: "لا تتوقف عن تناوله. الكرياتين ليس منبهًا؛ فأنت لا تتناوله للحصول على دفعة فورية من الطاقة. يعمل الكرياتين وفق مبدأ التشبع. هدفك هو الحفاظ على خلايا عضلاتك مشبعة بالكرياتين بنسبة 100% باستمرار للمساعدة في التعافي وتجديد ATP. إذا توقفت عن تناوله في أيام الراحة، تنخفض مستويات التشبع لديك وقد تفقد بعض فوائده. افتح ظرفًا واحدًا كل يوم، سواء كنت ترفع أوزانًا ثقيلة أو تستريح على الأريكة.",
  },
  {
    q: "كيف يمكن لعلبة بسعر 9 دراهم أن تنافس العلامات التجارية التقليدية الموجودة منذ عقد من الزمن؟",
    a: 'تعتمد العلامات التجارية التقليدية على ما يُعرف بـ"تأثير التكلفة الغارقة". فهي تجبرك على إنفاق 5 إلى 9 دراهم على عبوة كبيرة، مما يجعلك تشعر بأنك ملتزم ماليًا بالاستمرار معها لمدة ثلاثة أشهر. لقد غيّرنا هذا النموذج. تخلصنا من العبوات البلاستيكية باهظة التكلفة، والملاعق التي تضيع، وهوامش الربح الكبيرة للموزعين. ومن خلال التحول إلى أظرف يومية مقاومة للرطوبة والحرارة، جعلنا الكرياتين عالي الجودة والمختبر من قِبل NABL متاحًا لأي شخص بميزانية أسبوعية. نحن لا نبيع مجرد مكمل غذائي؛ بل نعمل على إصلاح نموذج توزيع مكلف ومبالغ في سعره.',
  },
]

export default function FaqSection() {

  const { language } = useLanguage();

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
    dir={language === "ar"?"rtl" : "ltr"}
      className="
        relative
        w-full
        bg-[#fdf1da]
        px-3
        pb-14
        pt-[50px]
        text-[#3a2416]

        min-[401px]:px-4

        sm:px-10
        sm:pb-20
        sm:pt-[70px]
      "
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="w-full max-w-[940px]">
          <h2
            className={`
              ${anton.className}
              m-0
              text-[clamp(2.2rem,11vw,3rem)]
              leading-[0.95]
              text-[#502300]

              min-[401px]:text-[clamp(2.5rem,11vw,3.75rem)]

              sm:text-[3.75rem]

              md:text-[4.375rem]
            `}
          >
            {language !== "ar" ? "FREQUENTLT" : "غالبًا"}
          </h2>

          <div
            className="
              -mt-1
              inline-block
              max-w-full
              bg-[#a87847]
              px-[0.65rem]
              py-1
              rotate-[2.27deg]

              min-[401px]:px-[0.9rem]

              sm:px-8
            "
          >
            <h2
              className={`
                ${anton.className}
                m-0
                text-[clamp(2rem,10vw,2.7rem)]
                leading-[0.95]
                text-white

                min-[401px]:text-[clamp(2.25rem,10vw,3.5rem)]

                sm:text-[3.75rem]

                md:text-[4.375rem]
              `}
            >
              {language !== "ar" ? "ASKED QUESTIONS" : "الأسئلة الشائعة"}
            </h2>
          </div>
        </div>

        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            gap-3

            sm:mt-10
            sm:gap-4
          "
        >
          {language !== "ar" ? (FAQS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={item.q} className="w-full">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`
                    ${anton.className}
                    flex
                    w-full
                    min-w-0
                    cursor-pointer
                    items-center
                    justify-between
                    gap-3
                    rounded-md
                    border-0
                    px-[0.7rem]
                    py-[0.85rem]
                    text-left
                    text-[0.85rem]
                    leading-[1.2]
                    text-white
                    transition-colors
                    duration-300

                    min-[401px]:px-3
                    min-[401px]:text-[0.9rem]

                    sm:px-5
                    sm:py-5
                    sm:text-2xl
                  `}
                  style={{
                    backgroundColor: isOpen
                      ? "#5c3a22"
                      : "#82572b",
                  }}
                >
                  <span
                    className="
                      min-w-0
                      overflow-wrap-anywhere
                      break-words
                    "
                  >
                    {item.q.toUpperCase()}
                  </span>

                  <span
                    className="
                      ml-2
                      flex
                      h-10
                      w-10
                      flex-none
                      items-center
                      justify-center
                      rounded
                      border-2
                      border-white

                      min-[401px]:h-11
                      min-[401px]:w-11

                      sm:ml-4
                      sm:h-14
                      sm:w-14
                    "
                  >
                    {isOpen ? (
                      <X
                        className="
                          h-4
                          w-4

                          min-[401px]:h-[1.1rem]
                          min-[401px]:w-[1.1rem]

                          sm:h-7
                          sm:w-7
                        "
                      />
                    ) : (
                      <Plus
                        className="
                          h-4
                          w-4

                          min-[401px]:h-[1.1rem]
                          min-[401px]:w-[1.1rem]

                          sm:h-7
                          sm:w-7
                        "
                      />
                    )}
                  </span>
                </button>

                <div
                  className={`
                    grid
                    overflow-hidden
                    rounded-b-md
                    bg-[#bd966e]
                    transition-[grid-template-rows,opacity]
                    duration-[900ms]
                    ease-in-out

                    ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        px-[0.85rem]
                        py-3
                        text-[0.8rem]
                        leading-[1.5]
                        text-[#3a2416]

                        min-[401px]:px-4
                        min-[401px]:py-3.5
                        min-[401px]:text-[0.85rem]

                        sm:px-5
                        sm:py-4
                        sm:text-base
                        sm:leading-[1.625]
                      "
                    >
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })) : (arFAQS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={item.q} className="w-full">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`
                    ${anton.className}
                    flex
                    w-full
                    min-w-0
                    cursor-pointer
                    items-center
                    justify-between
                    gap-3
                    rounded-md
                    border-0
                    px-[0.7rem]
                    py-[0.85rem]
                    text-left
                    text-[0.85rem]
                    leading-[1.2]
                    text-white
                    transition-colors
                    duration-300

                    min-[401px]:px-3
                    min-[401px]:text-[0.9rem]

                    sm:px-5
                    sm:py-5
                    sm:text-2xl
                  `}
                  style={{
                    backgroundColor: isOpen
                      ? "#5c3a22"
                      : "#82572b",
                  }}
                >
                  <span
                    className="
                      min-w-0
                      overflow-wrap-anywhere
                      break-words
                    "
                  >
                    {item.q.toUpperCase()}
                  </span>

                  <span
                    className="
                      ml-2
                      flex
                      h-10
                      w-10
                      flex-none
                      items-center
                      justify-center
                      rounded
                      border-2
                      border-white

                      min-[401px]:h-11
                      min-[401px]:w-11

                      sm:ml-4
                      sm:h-14
                      sm:w-14
                    "
                  >
                    {isOpen ? (
                      <X
                        className="
                          h-4
                          w-4

                          min-[401px]:h-[1.1rem]
                          min-[401px]:w-[1.1rem]

                          sm:h-7
                          sm:w-7
                        "
                      />
                    ) : (
                      <Plus
                        className="
                          h-4
                          w-4

                          min-[401px]:h-[1.1rem]
                          min-[401px]:w-[1.1rem]

                          sm:h-7
                          sm:w-7
                        "
                      />
                    )}
                  </span>
                </button>

                <div
                  className={`
                    grid
                    overflow-hidden
                    rounded-b-md
                    bg-[#bd966e]
                    transition-[grid-template-rows,opacity]
                    duration-[900ms]
                    ease-in-out

                    ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        px-[0.85rem]
                        py-3
                        text-[0.8rem]
                        leading-[1.5]
                        text-[#3a2416]

                        min-[401px]:px-4
                        min-[401px]:py-3.5
                        min-[401px]:text-[0.85rem]

                        sm:px-5
                        sm:py-4
                        sm:text-base
                        sm:leading-[1.625]
                      "
                    >
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          }))}
        </div>
      </div>
    </section>
  );
}