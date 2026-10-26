import { ArrowRight, Code2, Layout, Zap, Quote } from 'lucide-react';
import { courses } from '@/lib/courses';
import type { Page } from '@/lib/nav';

type HomePageProps = {
  onNavigate: (page: Page) => void;
};

const heroImg =
  'https://images.pexels.com/photos/5530437/pexels-photo-5530437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const features = [
  {
    icon: Code2,
    title: 'Project-Based Learning',
    text: 'Build real web pages from day one — no filler, just practical skills.',
  },
  {
    icon: Layout,
    title: 'Structured Curriculum',
    text: 'Go from semantic HTML to production-ready front-end applications.',
  },
  {
    icon: Zap,
    title: 'Expert Mentorship',
    text: 'Instructors and technical mentors guide you through every step.',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <img
          src={heroImg}
          alt="Students learning in a classroom"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-blue-300">
              Learn today, build your future
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Become a front-end developer through practical, project-based
              training.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              DV Academy helps learners build practical front-end development
              skills through structured, hands-on courses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('register')}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Register Now
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate('courses')}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Featured Courses
            </h2>
            <button
              onClick={() => onNavigate('courses')}
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all
            </button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {courses.map((c) => (
              <article
                key={c.slug}
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    c.level === 'Beginner'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {c.level}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{c.description}</p>
                <button
                  onClick={() =>
                    onNavigate(
                      c.slug === 'html-basics' ? 'html-basics' : 'courses'
                    )
                  }
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View course
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <Quote className="h-10 w-10 text-blue-200" />
          <blockquote className="mt-4 text-xl font-medium text-slate-800">
            "DV Academy provided me with a strong HTML foundation and the
            confidence to build real projects."
          </blockquote>
          <p className="mt-4 text-sm font-medium text-slate-500">
            — Ahmed Mohamed
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <div className="rounded-2xl bg-blue-600 px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to Start?</h2>
          <p className="mt-2 text-blue-100">
            Register today and take your first step into front-end development.
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Register Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
