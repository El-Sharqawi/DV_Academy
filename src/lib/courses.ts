export type Course = {
  slug: string;
  title: string;
  level: 'Beginner' | 'Intermediate';
  startDate: string;
  duration: string;
  seats: number;
  fee: number;
  description: string;
  topics: string[];
};

export const courses: Course[] = [
  {
    slug: 'html-basics',
    title: 'HTML Basics',
    level: 'Beginner',
    startDate: '2026-11-01',
    duration: '2 Weeks',
    seats: 15,
    fee: 150,
    description:
      'Learn semantic HTML and build your first accessible web page from scratch.',
    topics: [
      'Document structure & elements',
      'Semantic tags (header, nav, main, article)',
      'Forms & input types',
      'Accessibility basics',
      'Tables & multimedia',
    ],
  },
  {
    slug: 'css-essentials',
    title: 'CSS Essentials',
    level: 'Intermediate',
    startDate: '2026-11-15',
    duration: '3 Weeks',
    seats: 12,
    fee: 200,
    description:
      'Discover how CSS styles and layouts work, from selectors to flexbox and grid.',
    topics: [
      'Selectors & the cascade',
      'Box model & spacing',
      'Flexbox layouts',
      'CSS Grid',
      'Responsive design',
    ],
  },
  {
    slug: 'javascript-essentials',
    title: 'JavaScript Essentials',
    level: 'Beginner',
    startDate: '2026-12-01',
    duration: '4 Weeks',
    seats: 10,
    fee: 250,
    description:
      'Explore the basics of programming for the web with JavaScript.',
    topics: [
      'Variables & data types',
      'Functions & scope',
      'DOM manipulation',
      'Events & interactivity',
      'Async with fetch',
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
