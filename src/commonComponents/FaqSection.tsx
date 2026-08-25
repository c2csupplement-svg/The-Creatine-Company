"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { anton, mono } from "./fonts";
import { useLanguage} from "@/app/context/languageUseContent";

const FAQS = [
  {
    q: "If raw creatine is cheap, why do tubs cost  Dhs. 69/?",
    a: "The raw creatine monohydrate in a standard 5g serving costs roughly  Dhs. 0.19. It is a cheap, abundant ingredient. The traditional tub model feels expensive because you are forced to buy 90 days of it up front. We tore the unit down to a single day. You pay  Dhs. 1 for one sachet, not  Dhs. 150 for a plastic jar. You buy exactly what you need.",
  },
  {
    q: "How can a  Dhs. 1 creatine be safe and original?",
    a: "Cheap-per-ticket is not the same as cheap-quality. The rest of your  Dhs. 1 goes to taurine, high-barrier foil, filling, delivery, GST, a modest margin, and rigorous NABL batch-testing. We publish this entire cost breakdown on our site. Furthermore, you don't have to take our word for it. Every sachet features a QR code on the front. Scan it to read the permanent PDF certificate of analysis (COA) from an NABL-accredited laboratory for that exact batch. Decide with evidence, not the price tag.",
  },
  {
    q: "Why single-serve sachets instead of a tub?",
    a: "Because tubs fail in Arabic humidity. The moment you open a jar in the monsoon, moisture gets in. The powder cakes, degrades into creatinine, and the scoop inevitably goes missing by week two. We sealed 5g of 100% micronised creatine (200 mesh) into high-barrier foil. It stays dry. It is perfectly pre-measured. No clumped powder, no spoon-hunting, and no guesswork.",
  },
  {
    q: "When should I take it, and do I need to load?",
    a: "Take it whenever you will remember it, every single day. Creatine works by keeping your intramuscular stores topped up over time, so daily consistency matters far more than timing. A loading phase (20g a day for a week) fills your stores faster, but it is completely optional. Taking one 5g sachet a day will fully saturate your muscles in roughly 28 days.",
  },
  {
    q: "I am vegetarian. Does that change how it works for me?",
    a: "Yes. Dietary creatine comes almost entirely from meat and fish. Controlled muscle-biopsy trials show vegetarians start with significantly lower resting muscle creatine stores (117 vs 130 mmol/kg). Because you have more room to fill, vegetarians often show a stronger response to daily supplementation. Our sachets are 100% vegetarian.",
  },
  {
    q: "Does creatine cause hair loss or kidney damage?",
    a: "The International Society of Sports Nutrition (ISSN) concludes creatine monohydrate is safe and well-tolerated in healthy people. In healthy individuals, it does not harm kidney function. The hair loss myth traces to a single 2009 study measuring DHT that has never been replicated; a 2021 meta-analysis and a 2025 RCT measuring hair follicles directly found no link.",
  },
];

const arFAQS = [
  {
    q: "إذا كان الكرياتين الخام رخيصًا، فلماذا تبلغ تكلفة العبوات 69 درهمًا؟",
    a: "تبلغ تكلفة الكرياتين مونوهيدرات الخام في الحصة القياسية البالغة 5 غرامات حوالي 0.19 درهم فقط. فهو مكوّن رخيص ومتوافر بكثرة. يبدو نموذج العبوة التقليدي مكلفًا لأنك تُجبر على شراء كمية تكفي لـ90 يومًا مقدمًا. لقد قمنا بتقسيم المنتج إلى جرعة يومية واحدة. تدفع 1 درهم مقابل ظرف واحد، وليس 150 درهمًا مقابل عبوة بلاستيكية. أنت تشتري بالضبط الكمية التي تحتاجها."
  },
  {
    q: "كيف يمكن أن يكون الكرياتين بسعر 1 درهم آمنًا وأصليًا؟",
    a: "السعر المنخفض لا يعني جودة منخفضة. يذهب باقي مبلغ الدرهم الواحد إلى التورين، ورق الألمنيوم عالي الحاجز، والتعبئة، والتوصيل، وضريبة GST، وهامش ربح معتدل، بالإضافة إلى اختبارات الدُفعات الصارمة في مختبرات معتمدة من NABL. ننشر تفاصيل التكلفة بالكامل على موقعنا. والأهم من ذلك، لست مضطرًا إلى الاكتفاء بكلامنا. يحتوي كل ظرف على رمز QR في الواجهة الأمامية. امسحه لقراءة شهادة التحليل (COA) بصيغة PDF من مختبر معتمد من NABL للدُفعة نفسها. اتخذ قرارك بناءً على الأدلة، وليس على السعر."
  },
  {
    q: "لماذا الأظرف الفردية بدلًا من العبوة الكبيرة؟",
    a: "لأن العبوات الكبيرة لا تتحمل الرطوبة في المنطقة العربية. بمجرد فتح العبوة في موسم الرطوبة، تتسلل الرطوبة إلى الداخل. يبدأ المسحوق بالتكتل وقد يتحلل إلى كرياتينين، وغالبًا ما تختفي الملعقة بعد الأسبوع الثاني. قمنا بإغلاق 5 غرامات من الكرياتين الميكروني بنسبة 100% (200 ميش) داخل رقائق عالية الحاجز. يبقى المنتج جافًا، ومقاسًا مسبقًا بدقة. لا مسحوق متكتل، ولا بحث عن الملعقة، ولا تخمين للجرعة."
  },
  {
    q: "متى يجب أن أتناوله؟ وهل أحتاج إلى مرحلة تحميل؟",
    a: "تناوله في الوقت الذي يسهل عليك تذكره، كل يوم دون انقطاع. يعمل الكرياتين من خلال الحفاظ على مخزون الكرياتين داخل العضلات ممتلئًا مع مرور الوقت، لذلك فإن الانتظام اليومي أهم بكثير من توقيت تناوله. مرحلة التحميل (20 غرامًا يوميًا لمدة أسبوع) تملأ مخزون العضلات بشكل أسرع، لكنها اختيارية تمامًا. تناول ظرف واحد بجرعة 5 غرامات يوميًا سيؤدي إلى تشبع عضلاتك بالكامل خلال حوالي 28 يومًا."
  },
  {
    q: "أنا نباتي. هل يؤثر ذلك على طريقة عمل الكرياتين بالنسبة لي؟",
    a: "نعم. يأتي الكرياتين الغذائي تقريبًا بشكل كامل من اللحوم والأسماك. وتُظهر الدراسات الخاضعة للرقابة باستخدام خزعات العضلات أن النباتيين يبدأون بمخزون أقل بشكل ملحوظ من الكرياتين في العضلات أثناء الراحة (117 مقابل 130 مليمول/كغ). وبما أن لديهم مساحة أكبر لزيادة المخزون، فإن النباتيين غالبًا ما يظهرون استجابة أقوى للمكملات اليومية. أظرفنا نباتية 100%."
  },
  {
    q: "هل يسبب الكرياتين تساقط الشعر أو تلف الكلى؟",
    a: "تخلص الجمعية الدولية للتغذية الرياضية (ISSN) إلى أن الكرياتين مونوهيدرات آمن وجيد التحمل لدى الأشخاص الأصحاء. ولا يسبب ضررًا لوظائف الكلى لدى الأشخاص الأصحاء. أما أسطورة تساقط الشعر فتعود إلى دراسة واحدة أُجريت عام 2009 وقاست مستوى هرمون DHT، ولم يتم تكرار نتائجها. كما وجدت مراجعة تحليلية شاملة نُشرت عام 2021 ودراسة عشوائية محكمة (RCT) عام 2025، قامت بقياس بصيلات الشعر بشكل مباشر، عدم وجود علاقة بين الكرياتين وتساقط الشعر."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const {language} = useLanguage();

  return (
    <section
    dir={language === "ar"?"rtl" : "ltr"}
      className="
        relative
        w-full
        bg-[#fdf1da]
        px-6
        pb-20
        pt-[70px]
        text-[#3a2416]

        sm:px-10
      "
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="max-w-[940px]">
          <h2
            className={`
              ${anton.className}
              m-0
              text-5xl
              leading-none
              text-[#502300]

              sm:text-[3.75rem]

              md:text-[4.375rem]
            `}
          >
            {language !== "ar"?"FREQUENTLT":"غالبًا"}
          </h2>

          <div
            className="
              -mt-2
              inline-block
              bg-[#a87847]
              px-6
              py-1
              rotate-[2.27deg]

              sm:px-8
            "
          >
            <h2
              className={`
                ${anton.className}
                m-0
                text-5xl
                leading-none
                text-white

                sm:text-[3.75rem]

                md:text-[4.375rem]
              `}
            >
              {language !== "ar"?"ASKED QUESTIONS":"الأسئلة الشائعة"}
            </h2>
          </div>
        </div>

        <div
          className="
            mt-10
            flex
            w-full
            flex-col
            gap-4
          "
        >
          {language !== "ar"?(FAQS.map((item, i) => {
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
                    cursor-pointer
                    items-center
                    justify-between
                    rounded-md
                    border-0
                    px-5
                    py-5
                    text-left
                    text-lg
                    font-medium
                    text-white
                    transition-colors
                    duration-300

                    sm:text-2xl

                    ${isOpen
                      ? "bg-[#5c3a22]"
                      : "bg-[#82572b]"
                    }
                  `}
                >
                  <span className="pr-4">
                    {item.q.toUpperCase()}
                  </span>

                  <span
                    className="
                      ml-4
                      flex
                      h-14
                      w-14
                      flex-none
                      items-center
                      justify-center
                      rounded
                      border-2
                      border-white
                    "
                  >
                    {isOpen ? (
                      <X className="h-6 w-6 sm:h-7 sm:w-7" />
                    ) : (
                      <Plus className="h-6 w-6 sm:h-7 sm:w-7" />
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
                      className={`
                        ${mono.className}
                        px-5
                        py-4
                        text-sm
                        leading-[1.625]
                        text-[#3a2416]

                        sm:text-base
                      `}
                    >
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })):
          (arFAQS.map((item, i) => {
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
                    cursor-pointer
                    items-center
                    justify-between
                    rounded-md
                    border-0
                    px-5
                    py-5
                    text-left
                    text-lg
                    font-medium
                    text-white
                    transition-colors
                    duration-300

                    sm:text-2xl

                    ${isOpen
                      ? "bg-[#5c3a22]"
                      : "bg-[#82572b]"
                    }
                  `}
                >
                  <span className="pr-4">
                    {item.q.toUpperCase()}
                  </span>

                  <span
                    className="
                      ml-4
                      flex
                      h-14
                      w-14
                      flex-none
                      items-center
                      justify-center
                      rounded
                      border-2
                      border-white
                    "
                  >
                    {isOpen ? (
                      <X className="h-6 w-6 sm:h-7 sm:w-7" />
                    ) : (
                      <Plus className="h-6 w-6 sm:h-7 sm:w-7" />
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
                      className={`
                        ${mono.className}
                        px-5
                        py-4
                        text-sm
                        leading-[1.625]
                        text-[#3a2416]

                        sm:text-base
                      `}
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