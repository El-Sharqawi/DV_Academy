import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { Page } from '@/lib/nav';

type RegisterPageProps = {
  onNavigate: (page: Page) => void;
};

type FormState = {
  fullname: string;
  email: string;
  phone: string;
  dob: string;
  website: string;
  course: string;
  session: string;
  tech: string[];
  exp_years: number;
  skill_level: number;
  city: string;
  start_time: string;
};

const initialForm: FormState = {
  fullname: '',
  email: '',
  phone: '',
  dob: '',
  website: '',
  course: 'html',
  session: 'morning',
  tech: [],
  exp_years: 0,
  skill_level: 5,
  city: '',
  start_time: '',
};

const techOptions = [
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'js', label: 'JavaScript' },
];

const cityOptions = ['Cairo', 'Alexandria', 'Giza', 'Mansoura'];

export default function RegisterPage({ onNavigate }: RegisterPageProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const toggleTech = (value: string) => {
    setForm((f) => ({
      ...f,
      tech: f.tech.includes(value)
        ? f.tech.filter((t) => t !== value)
        : [...f.tech, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('registrations').insert({
      fullname: form.fullname,
      email: form.email,
      phone: form.phone,
      dob: form.dob || null,
      website: form.website || null,
      course: form.course,
      session: form.session,
      tech: form.tech,
      exp_years: form.exp_years,
      skill_level: form.skill_level,
      city: form.city || null,
      start_time: form.start_time || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('success');
      setForm(initialForm);
    }
  };

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16">
        <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Registration Submitted!
          </h2>
          <p className="mt-2 text-slate-600">
            Thank you for registering. Our team will contact you soon with the
            next steps.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setStatus('idle')}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Register another
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputClass =
    'mt-1.5 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500';
  const labelClass = 'block text-sm font-medium text-slate-700';
  const fieldsetClass = 'rounded-xl border border-slate-200 p-5';

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Student Registration
      </h1>
      <p className="mt-2 text-slate-600">
        Fill out the form below to enroll in our technical training programs.
      </p>

      {status === 'error' && (
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="text-sm font-medium text-red-800">
              Could not submit registration
            </p>
            <p className="text-sm text-red-700">{errorMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Personal Info */}
        <fieldset className={fieldsetClass}>
          <legend className="px-2 text-sm font-semibold text-slate-800">
            Personal Information
          </legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="fullname" className={labelClass}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullname"
                type="text"
                required
                value={form.fullname}
                onChange={(e) => update('fullname', e.target.value)}
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="name@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="+201234567890"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="dob" className={labelClass}>
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                value={form.dob}
                onChange={(e) => update('dob', e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="website" className={labelClass}>
                Personal Website / Portfolio
              </label>
              <input
                id="website"
                type="url"
                value={form.website}
                onChange={(e) => update('website', e.target.value)}
                placeholder="https://example.com"
                className={inputClass}
              />
            </div>
          </div>
        </fieldset>

        {/* Course & Session */}
        <fieldset className={fieldsetClass}>
          <legend className="px-2 text-sm font-semibold text-slate-800">
            Course & Session Choice
          </legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="course-select" className={labelClass}>
                Select Course
              </label>
              <select
                id="course-select"
                value={form.course}
                onChange={(e) => update('course', e.target.value)}
                className={inputClass}
              >
                <optgroup label="Beginner Level">
                  <option value="html">HTML Basics</option>
                  <option value="javascript">JavaScript Essentials</option>
                </optgroup>
                <optgroup label="Intermediate Level">
                  <option value="css">CSS Essentials</option>
                </optgroup>
              </select>
            </div>
            <div>
              <span className={labelClass}>Preferred Session</span>
              <div className="mt-1.5 flex flex-wrap gap-4 pt-2">
                {[
                  { value: 'morning', label: 'Morning' },
                  { value: 'evening', label: 'Evening' },
                  { value: 'weekend', label: 'Weekend' },
                ].map((s) => (
                  <label
                    key={s.value}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <input
                      type="radio"
                      name="session"
                      value={s.value}
                      checked={form.session === s.value}
                      onChange={(e) => update('session', e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    {s.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </fieldset>

        {/* Experience & Details */}
        <fieldset className={fieldsetClass}>
          <legend className="px-2 text-sm font-semibold text-slate-800">
            Experience & Details
          </legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <span className={labelClass}>Known Technologies</span>
              <div className="mt-1.5 flex flex-wrap gap-4 pt-2">
                {techOptions.map((t) => (
                  <label
                    key={t.value}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <input
                      type="checkbox"
                      checked={form.tech.includes(t.value)}
                      onChange={() => toggleTech(t.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    {t.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="exp-years" className={labelClass}>
                Years of Experience
              </label>
              <input
                id="exp-years"
                type="number"
                min={0}
                max={10}
                value={form.exp_years}
                onChange={(e) =>
                  update('exp_years', Number(e.target.value))
                }
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="skill-level" className={labelClass}>
                Self-Rated Level: {form.skill_level}/10
              </label>
              <input
                id="skill-level"
                type="range"
                min={1}
                max={10}
                value={form.skill_level}
                onChange={(e) =>
                  update('skill_level', Number(e.target.value))
                }
                className="mt-3 w-full accent-blue-600"
              />
            </div>
            <div>
              <label htmlFor="city" className={labelClass}>
                City
              </label>
              <input
                id="city"
                type="text"
                list="cities"
                value={form.city}
                onChange={(e) => update('city', e.target.value)}
                placeholder="Select or type your city"
                className={inputClass}
              />
              <datalist id="cities">
                {cityOptions.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
            <div>
              <label htmlFor="start-time" className={labelClass}>
                Preferred Start Time
              </label>
              <input
                id="start-time"
                type="time"
                value={form.start_time}
                onChange={(e) => update('start_time', e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </fieldset>

        {/* System fields (read-only info) */}
        <fieldset className={fieldsetClass}>
          <legend className="px-2 text-sm font-semibold text-slate-800">
            System Details
          </legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fee" className={labelClass}>
                Course Fee ($)
              </label>
              <input
                id="fee"
                type="text"
                value="150$"
                readOnly
                className={`${inputClass} bg-slate-50 text-slate-500`}
              />
            </div>
            <div>
              <label htmlFor="promo" className={labelClass}>
                Promo Code (coming soon)
              </label>
              <input
                id="promo"
                type="text"
                disabled
                placeholder="Not available"
                className={`${inputClass} bg-slate-50 text-slate-400`}
              />
            </div>
          </div>
        </fieldset>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
          >
            {status === 'submitting' && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
            Submit Registration
          </button>
          <button
            type="reset"
            onClick={() => setForm(initialForm)}
            className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}
