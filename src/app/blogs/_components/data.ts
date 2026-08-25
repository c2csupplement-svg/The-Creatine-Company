export const CATEGORIES = [
  "ALL",
  "CREATINE BASICS",
  "MUSCLE & STRENGTH",
  "CREATINE SCIENCE",
  "USAGE & NUTRITION",
] as const;

export const AR_CATEGORIES = [
  "الكل",
  "أساسيات الكرياتين",
  "العضلات والقوة",
  "علم الكرياتين",
  "الاستخدام والتغذية",
] as const;

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  content: string;
};

export const POSTS: BlogPost[] = [
  {
    slug: "build-strength-power-every-rep-1",
    category: "MUSCLE & STRENGTH",
    title: "BUILD STRENGTH. POWER EVERY REP.",
    description:
      "Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals.",
    image: "/images/woman.png",
    content: `
Creatine is one of the most researched supplements for supporting strength and high-intensity training.

By supporting your muscles' ability to produce energy during demanding exercise, creatine can help you perform repeated efforts and maintain training quality.

Consistency is key. Taking creatine regularly helps maintain your muscle creatine stores over time.

Whether your goal is strength, muscle growth, or better training performance, creatine can become a simple part of your daily routine.
`,
  },

  {
    slug: "build-strength-power-every-rep-2",
    category: "MUSCLE & STRENGTH",
    title: "BUILD STRENGTH. POWER EVERY REP.",
    description:
      "Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals.",
    image: "/images/woman.png",
    content: `
Strength training is built around consistency and progressive improvement.

Creatine can support short-duration, high-intensity exercise by helping your muscles replenish ATP, the energy source used during demanding efforts.

Combined with structured training, adequate nutrition, and recovery, creatine can be a useful part of a performance-focused lifestyle.
`,
  },

  {
    slug: "build-strength-power-every-rep-3",
    category: "MUSCLE & STRENGTH",
    title: "BUILD STRENGTH. POWER EVERY REP.",
    description:
      "Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals.",
    image: "/images/woman.png",
    content: `
Training performance is influenced by many factors, including nutrition, recovery, sleep, and consistency.

Creatine is useful because it fits easily into a daily routine. There is no need to complicate supplementation.

A consistent approach can help you focus on what matters most: training well and recovering properly.
`,
  },

  {
    slug: "build-strength-power-every-rep-4",
    category: "MUSCLE & STRENGTH",
    title: "BUILD STRENGTH. POWER EVERY REP.",
    description:
      "Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals.",
    image: "/images/woman.png",
    content: `
Creatine supplementation works over time rather than acting like an immediate stimulant.

Regular daily intake helps maintain creatine availability in your muscles, making consistency more important than taking it at a specific time of day.
`,
  },

  {
    slug: "build-strength-power-every-rep-5",
    category: "MUSCLE & STRENGTH",
    title: "BUILD STRENGTH. POWER EVERY REP.",
    description:
      "Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals.",
    image: "/images/woman.png",
    content: `
For people focused on strength and muscle development, training quality matters.

Creatine can complement a well-designed resistance-training program by supporting repeated high-intensity efforts.

Keep your approach simple: train consistently, eat appropriately, recover well, and take your creatine regularly.
`,
  },

  {
    slug: "build-strength-power-every-rep-6",
    category: "MUSCLE & STRENGTH",
    title: "BUILD STRENGTH. POWER EVERY REP.",
    description:
      "Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals.",
    image: "/images/woman.png",
    content: `
Building strength takes time.

Creatine is not a replacement for training or nutrition. Instead, it can be used alongside a consistent fitness routine to support high-intensity exercise performance.

The goal is simple: make your daily routine easier to follow and keep working toward your training goals.
`,
  },
];

export const AR_POSTS: BlogPost[] = [
  {
    slug: "build-strength-power-every-rep-1",
    category: "العضلات والقوة",
    title: "ابنِ قوتك. أطلق العنان لقوة كل تكرار.",
    description:
      "اكتشف معلومات ذكية ومفيدة عن اللياقة البدنية، والكرياتين، والقوة، والأداء، والتعافي، ونمو العضلات. تعرّف على كيفية دعم الكرياتين لأهدافك التدريبية.",
    image: "/images/woman.png",
    content: `
الكرياتين هو أحد أكثر المكملات الغذائية التي خضعت للدراسة، ويُستخدم لدعم القوة والتدريبات عالية الشدة.

من خلال دعم قدرة عضلاتك على إنتاج الطاقة أثناء التمارين المجهدة، يمكن للكرياتين أن يساعدك على أداء الجهود المتكررة والحفاظ على جودة التدريب.

الاستمرارية هي المفتاح. يساعد تناول الكرياتين بانتظام على الحفاظ على مخزون الكرياتين في عضلاتك مع مرور الوقت.

سواء كان هدفك زيادة القوة، أو بناء العضلات، أو تحسين أداء التمرين، يمكن أن يصبح الكرياتين جزءًا بسيطًا من روتينك اليومي.

`,
  },

  {
    slug: "build-strength-power-every-rep-2",
    category: "العضلات والقوة",
    title: "ابنِ قوتك. أطلق العنان لقوة كل تكرار.",
    description:
      "اكتشف معلومات ذكية ومفيدة عن اللياقة البدنية، والكرياتين، والقوة، والأداء، والتعافي، ونمو العضلات. تعرّف على كيفية دعم الكرياتين لأهدافك التدريبية.",
    image: "/images/woman.png",
    content: `
يعتمد تدريب القوة على الاستمرارية والتحسن التدريجي.

يمكن للكرياتين دعم التمارين القصيرة وعالية الشدة من خلال مساعدة عضلاتك على إعادة تكوين ATP، وهو مصدر الطاقة الذي تستخدمه العضلات أثناء الجهود المكثفة.

وعند دمجه مع تدريب منظم، وتغذية مناسبة، وتعافٍ جيد، يمكن أن يكون الكرياتين جزءًا مفيدًا من نمط حياة يركز على تحسين الأداء.

`,
  },

  {
    slug: "build-strength-power-every-rep-3",
    category: "العضلات والقوة",
    title: "ابنِ قوتك. أطلق العنان لقوة كل تكرار.",
    description:
      "اكتشف معلومات ذكية ومفيدة عن اللياقة البدنية، والكرياتين، والقوة، والأداء، والتعافي، ونمو العضلات. تعرّف على كيفية دعم الكرياتين لأهدافك التدريبية.",
    image: "/images/woman.png",
    content: `
يتأثر أداء التدريب بالعديد من العوامل، بما في ذلك التغذية، والتعافي، والنوم، والاستمرارية.

يتميز الكرياتين بسهولة دمجه في روتينك اليومي، ولا حاجة إلى تعقيد نظام المكملات الغذائية الخاص بك.

يمكن للنهج المنتظم أن يساعدك على التركيز على ما يهم حقًا: التدريب بشكل جيد والتعافي بالشكل الصحيح.

`,
  },

  {
    slug: "build-strength-power-every-rep-4",
    category: "العضلات والقوة",
    title: "ابنِ قوتك. أطلق العنان لقوة كل تكرار.",
    description:
      "اكتشف معلومات ذكية ومفيدة عن اللياقة البدنية، والكرياتين، والقوة، والأداء، والتعافي، ونمو العضلات. تعرّف على كيفية دعم الكرياتين لأهدافك التدريبية.",
    image: "/images/woman.png",
    content: `
يعمل تناول الكرياتين مع مرور الوقت، وليس كمحفز فوري.

يساعد تناوله يوميًا بانتظام على الحفاظ على توفر الكرياتين في عضلاتك، مما يجعل الاستمرارية أهم من تناوله في وقت محدد من اليوم.

`,
  },

  {
    slug: "build-strength-power-every-rep-5",
    category: "العضلات والقوة",
    title: "ابنِ قوتك. أطلق العنان لقوة كل تكرار.",
    description:
      "اكتشف معلومات ذكية ومفيدة عن اللياقة البدنية، والكرياتين، والقوة، والأداء، والتعافي، ونمو العضلات. تعرّف على كيفية دعم الكرياتين لأهدافك التدريبية.",
    image: "/images/woman.png",
    content: `
بالنسبة للأشخاص الذين يركزون على القوة وتطوير العضلات، فإن جودة التدريب أمر مهم.

يمكن للكرياتين أن يكمل برنامجًا جيد التصميم لتدريبات المقاومة من خلال دعم الجهود المتكررة عالية الشدة.

حافظ على بساطة نهجك: تدرب بانتظام، وتناول الغذاء المناسب، واحصل على قسط كافٍ من التعافي، وتناول الكرياتين بانتظام.

`,
  },

  {
    slug: "build-strength-power-every-rep-6",
    category: "العضلات والقوة",
    title: "ابنِ قوتك. أطلق العنان لقوة كل تكرار.",
    description:
      "اكتشف معلومات ذكية ومفيدة عن اللياقة البدنية، والكرياتين، والقوة، والأداء، والتعافي، ونمو العضلات. تعرّف على كيفية دعم الكرياتين لأهدافك التدريبية.",
    image: "/images/woman.png",
    content: `
بناء القوة يحتاج إلى وقت.

الكرياتين ليس بديلًا عن التدريب أو التغذية، بل يمكن استخدامه إلى جانب روتين لياقة بدنية منتظم لدعم أداء التمارين عالية الشدة.

الهدف بسيط: اجعل روتينك اليومي سهل الالتزام به، واستمر في العمل نحو تحقيق أهدافك التدريبية.

`,
  },
];

export const MARQUEE_ITEMS = new Array(10).fill("THECREATINECO");