import { ArrowRight } from 'lucide-react';
import { courses } from '@/lib/courses';
import type { Page } from '@/lib/nav';

type CoursesPageProps = {
  onNavigate: (page: Page) => void;
};

export default function CoursesPage({ onNavigate }: CoursesPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Courses Catalog</h1>
      <p className="mt-2 text-slate-600">
        Explore our professional technical training programs and schedule.
      </p>

      {/* Schedule table */}
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">DV Academy Training Schedule 2026</caption>
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Course</th>
              <th scope="col" className="px-4 py-3 font-semibold">Level</th>
              <th scope="col" className="px-4 py-3 font-semibold">Start Date</th>
              <th scope="col" className="px-4 py-3 font-semibold">Duration</th>
              <th scope="col" className="px-4 py-3 font-semibold">Seats</th>
              <th scope="col" className="px-4 py-3 font-semibold">Fee</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {courses.map((c) => (
              <tr key={c.slug} className="hover:bg-slate-50 transition">
                <td className="px-4 py-3">
                  <button
                    onClick={() =>
                      onNavigate(
                        c.slug === 'html-basics' ? 'html-basics' : 'courses'
                      )
                    }
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    {c.title}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      c.level === 'Beginner'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    {c.level}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600">{c.startDate}</td>
                <td className="px-4 py-3 text-slate-600">{c.duration}</td>
                <td className="px-4 py-3 text-slate-600">{c.seats}</td>
                <td className="px-4 py-3 font-medium text-slate-900">
                  ${c.fee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Course cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <article
            key={c.slug}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  c.level === 'Beginner'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-amber-50 text-amber-700'
                }`}
              >
                {c.level}
              </span>
              <span className="text-lg font-bold text-slate-900">
                ${c.fee}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {c.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              {c.description}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
              <li>Starts: {c.startDate}</li>
              <li>Duration: {c.duration}</li>
              <li>Seats: {c.seats}</li>
            </ul>
            <button
              onClick={() =>
                onNavigate(
                  c.slug === 'html-basics' ? 'html-basics' : 'register'
                )
              }
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              {c.slug === 'html-basics' ? 'View details' : 'Register'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
