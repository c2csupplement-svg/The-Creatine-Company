export const CATEGORIES = [
  'ALL',
  'CREATINE BASICS',
  'MUSCLE & STRENGTH',
  'CREATINE SCIENCE',
  'USAGE & NUTRITION',
];

export type BlogPost = {
  category: string;
  title: string;
  description: string;
  image: string;
};

export const POSTS: BlogPost[] = [
  {
    category: 'MUSCLE & STRENGTH',
    title: 'BUILD STRENGTH. POWER EVERY REP.',
    description:
      'Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals',
    image: '/images/woman.png',
  },
  {
    category: 'MUSCLE & STRENGTH',
    title: 'BUILD STRENGTH. POWER EVERY REP.',
    description:
      'Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals',
    image: '/images/woman.png',
  },
  {
    category: 'MUSCLE & STRENGTH',
    title: 'BUILD STRENGTH. POWER EVERY REP.',
    description:
      'Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals',
    image: '/images/woman.png',
  },
  {
    category: 'MUSCLE & STRENGTH',
    title: 'BUILD STRENGTH. POWER EVERY REP.',
    description:
      'Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals',
    image: '/images/woman.png',
  },
  {
    category: 'MUSCLE & STRENGTH',
    title: 'BUILD STRENGTH. POWER EVERY REP.',
    description:
      'Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals',
    image: '/images/woman.png',
  },
  {
    category: 'MUSCLE & STRENGTH',
    title: 'BUILD STRENGTH. POWER EVERY REP.',
    description:
      'Discover smarter fitness insights on creatine, strength, performance, recovery, and muscle growth. Learn how creatine can support your training goals',
    image: '/images/woman.png',
  },
];

export const MARQUEE_ITEMS = new Array(10).fill('THECREATINECO');