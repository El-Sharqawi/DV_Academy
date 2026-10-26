import { GraduationCap, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <GraduationCap className="h-4 w-4" />
            </span>
            <span className="font-semibold">DV Academy</span>
          </div>
          <p className="text-sm text-slate-500">
            &copy; 2026 DV Academy. All rights reserved.
          </p>
          <a
            href="mailto:info@dvacademy.com"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700"
          >
            <Mail className="h-4 w-4" />
            info@dvacademy.com
          </a>
        </div>
      </div>
    </footer>
  );
}
