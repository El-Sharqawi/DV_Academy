import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'billing', label: 'Billing & Fees' },
];

const hours = [
  { day: 'Sunday - Thursday', time: '9:00 AM - 6:00 PM' },
  { day: 'Friday - Saturday', time: 'Closed' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('contact_messages').insert({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('success');
      setForm({ name: '', email: '', subject: 'general', message: '' });
    }
  };

  const inputClass =
    'mt-1.5 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500';
  const labelClass = 'block text-sm font-medium text-slate-700';

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-2 text-slate-600">
        Get in touch with our team for any inquiries or support.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          {status === 'success' ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
              <h2 className="mt-4 text-xl font-bold text-slate-900">
                Message Sent!
              </h2>
              <p className="mt-2 text-slate-600">
                We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-slate-200 bg-white p-6 space-y-4"
            >
              {status === 'error' && (
                <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="text-sm font-medium text-red-800">
                      Could not send message
                    </p>
                    <p className="text-sm text-red-700">{errorMsg}</p>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="c-name" className={labelClass}>
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="c-email" className={labelClass}>
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="c-subject" className={labelClass}>
                  Subject
                </label>
                <select
                  id="c-subject"
                  value={form.subject}
                  onChange={(e) => update('subject', e.target.value)}
                  className={inputClass}
                >
                  {subjectOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="c-message" className={labelClass}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="c-message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
              >
                {status === 'submitting' && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Hours */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-slate-900">
                Opening Hours
              </h2>
            </div>
            <table className="mt-4 w-full text-sm">
              <caption className="sr-only">Weekly Office Hours</caption>
              <tbody className="divide-y divide-slate-100">
                {hours.map((h) => (
                  <tr key={h.day}>
                    <td className="py-3 font-medium text-slate-900">
                      {h.day}
                    </td>
                    <td className="py-3 text-right text-slate-600">
                      {h.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
