import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-emerald-50/60 p-6 text-emerald-900 shadow-inner">
        <p className="text-sm uppercase tracking-wider text-emerald-700">Thank you</p>
        <p className="mt-1 text-lg font-semibold">You're on the list for fresh harvest updates!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-emerald-200/60 bg-white p-4 shadow-sm sm:flex sm:items-center sm:gap-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <Mail className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-emerald-900">Join our Field Notes</p>
          <p className="text-xs text-emerald-700/80">Seasonal recipes, market days, and farm events.</p>
        </div>
      </div>
      <div className="mt-3 grid w-full gap-2 sm:mt-0 sm:grid-cols-[1fr_auto]">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-11 w-full rounded-lg border border-emerald-200 bg-white px-3 text-sm text-emerald-900 placeholder-emerald-700/50 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
        />
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:translate-y-[1px]"
        >
          Subscribe
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
