import { Target, Users, MapPin, BookOpen } from 'lucide-react';
import type { Page } from '@/lib/nav';

type AboutPageProps = {
  onNavigate: (page: Page) => void;
};

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">About DV Academy</h1>
      <p className="mt-3 text-lg text-slate-600">
        We are a leading technical training center dedicated to turning learners
        into professional front-end developers.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Users className="h-5 w-5" />
          </span>
          <h2 className="mt-4 text-lg font-semibold text-slate-900">
            Our Team
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Our team brings together instructors and technical mentors who guide
            learners through practical projects.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Target className="h-5 w-5" />
          </span>
          <h2 className="mt-4 text-lg font-semibold text-slate-900">
            Our Mission
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            To provide project-driven, practical paths from semantic HTML to
            production-ready applications.
          </p>
        </div>
      </div>

      {/* HTML Concepts */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <BookOpen className="h-5 w-5" />
        </span>
        <h2 className="mt-4 text-lg font-semibold text-slate-900">
          HTML Concepts
        </h2>
        <dl className="mt-4 divide-y divide-slate-100">
          <div className="py-3">
            <dt className="font-medium text-slate-900">HTML</dt>
            <dd className="text-sm text-slate-600">
              The standard markup language for documents designed to be
              displayed in a web browser.
            </dd>
          </div>
          <div className="py-3">
            <dt className="font-medium text-slate-900">Semantics</dt>
            <dd className="text-sm text-slate-600">
              Giving meaning to the web structure using correct HTML elements.
            </dd>
          </div>
        </dl>
      </div>

      {/* Location */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-slate-900">
            Our Location
          </h2>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg">
          <iframe
            title="Data Value Solutions Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.948156680106!2d31.333468000000003!3d30.067020499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4baa0cbe10b07fbb%3A0x50deb6a58c2dbe97!2sData%20Value%20Solutions!5e0!3m2!1sen!2sus!4v1792558323163!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-64 w-full border-0"
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => onNavigate('register')}
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
