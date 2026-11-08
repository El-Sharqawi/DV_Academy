import { CheckCircle2, ArrowLeft, Calendar, Clock, Users, DollarSign } from 'lucide-react';
import { getCourse } from '@/lib/courses';
import type { Page } from '@/lib/nav';

type CourseDetailPageProps = {
  onNavigate: (page: Page) => void;
};

export default function HtmlBasicsPage({ onNavigate }: CourseDetailPageProps) {
  const course = getCourse('html-basics');

  if (!course) return null;

  const meta = [
    { icon: Calendar, label: 'Start Date', value: course.startDate },
    { icon: Clock, label: 'Duration', value: course.duration },
    { icon: Users, label: 'Seats', value: String(course.seats) },
    { icon: DollarSign, label: 'Fee', value: `$${course.fee}` },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
          <button
            onClick={() => onNavigate('courses')}
            className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </button>
          <span className="mt-6 inline-block rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300">
            {course.level}
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            {course.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-300">
            {course.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900">
              What you'll learn
            </h2>
            <ul className="mt-4 space-y-3">
              {course.topics.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-bold text-slate-900">
              Course overview
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              HTML Basics is a beginner-friendly course that takes you from zero
              to building your first structured, accessible web page. You'll
              learn how to use semantic tags correctly, create forms with the
              right input types, organize content with tables and lists, and
              embed multimedia. By the end, you'll have a solid foundation to
              move on to CSS and JavaScript.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Course Details
              </h3>
              <dl className="mt-4 space-y-4">
                {meta.map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <m.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <dt className="text-xs text-slate-500">{m.label}</dt>
                      <dd className="text-sm font-medium text-slate-900">
                        {m.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
              <button
                onClick={() => onNavigate('register')}
                className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Enroll Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
