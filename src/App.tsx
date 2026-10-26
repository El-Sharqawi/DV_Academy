import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CoursesPage from '@/pages/CoursesPage';
import HtmlBasicsPage from '@/pages/HtmlBasicsPage';
import RegisterPage from '@/pages/RegisterPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import type { Page } from '@/lib/nav';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={setPage} />;
      case 'courses':
        return <CoursesPage onNavigate={setPage} />;
      case 'html-basics':
        return <HtmlBasicsPage onNavigate={setPage} />;
      case 'register':
        return <RegisterPage onNavigate={setPage} />;
      case 'about':
        return <AboutPage onNavigate={setPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Header current={page} onNavigate={setPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}
