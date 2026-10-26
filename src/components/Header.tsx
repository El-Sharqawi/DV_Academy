import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks, type Page } from '@/lib/nav';

type HeaderProps = {
  current: Page;
  onNavigate: (page: Page) => void;
};

export default function Header({ current, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const go = (page: Page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => go('home')}
            className="flex items-center gap-2 text-slate-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              DV Academy
            </span>
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => go(link.page)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      current === link.page
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white">
          <ul className="mx-auto max-w-6xl px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <li key={link.page}>
                <button
                  onClick={() => go(link.page)}
                  className={`block w-full rounded-md px-3 py-2 text-left text-sm font-medium ${
                    current === link.page
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
