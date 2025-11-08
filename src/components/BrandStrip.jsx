import { Leaf } from 'lucide-react';

export default function BrandStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex items-center justify-between gap-4 py-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <Leaf className="h-5 w-5" />
          </span>
          <div>
            <p className="text-lg font-bold text-emerald-900">GreenVale Farm</p>
            <p className="text-xs text-emerald-900/70">Rooted in good soil</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-emerald-900/80 sm:flex">
          <a href="#" className="hover:text-emerald-900">Home</a>
          <a href="#" className="hover:text-emerald-900">Shop</a>
          <a href="#" className="hover:text-emerald-900">CSA</a>
          <a href="#" className="hover:text-emerald-900">Visit</a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700">Order Now</a>
        </div>
      </div>
    </div>
  );
}
