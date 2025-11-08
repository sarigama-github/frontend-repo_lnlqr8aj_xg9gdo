import { Sprout, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 to-emerald-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.2),transparent_35%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-emerald-700 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-medium">Fresh from the field</span>
        </div>
        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
          Nourishing the land. Feeding our community.
        </h1>
        <p className="max-w-2xl text-pretty text-emerald-800/80">
          Seasonal vegetables, herbs, and flowers grown with regenerative methods for flavor you can feel.
        </p>
        <div className="mt-2 flex gap-3">
          <a className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">Shop produce</a>
          <a className="rounded-lg border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:border-emerald-400">Visit the farm</a>
        </div>
        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Acres Restored', value: '24' },
            { label: 'Happy CSA Members', value: '180+' },
            { label: 'Heritage Varieties', value: '65' },
            { label: 'Years Growing', value: '12' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white/70 p-4 text-left shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50">
              <p className="text-2xl font-bold text-emerald-900">{stat.value}</p>
              <p className="text-xs uppercase tracking-wider text-emerald-800/70">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-emerald-700 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <Sprout className="h-4 w-4" />
          <span className="text-xs">Soil-first growing practices</span>
        </div>
      </div>
    </section>
  );
}
