export const CATEGORIES = [
  "ALL",
  "CREATINE BASICS",
  "MUSCLE & STRENGTH",
  "CREATINE SCIENCE",
  "USAGE & NUTRITION",
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

export const MARQUEE_ITEMS = new Array(10).fill("THECREATINECO");