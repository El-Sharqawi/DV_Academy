export type Page =
  | 'home'
  | 'courses'
  | 'html-basics'
  | 'register'
  | 'about'
  | 'contact';

export const navLinks: { page: Page; label: string }[] = [
  { page: 'home', label: 'Home' },
  { page: 'courses', label: 'Courses' },
  { page: 'html-basics', label: 'HTML Basics' },
  { page: 'register', label: 'Register' },
  { page: 'about', label: 'About Us' },
  { page: 'contact', label: 'Contact Us' },
];
