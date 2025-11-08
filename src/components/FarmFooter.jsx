import { Leaf, Tractor, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

const LinkItem = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-emerald-900/80 hover:text-emerald-900 transition"
  >
    {children}
  </a>
);

export default function FarmFooter() {
  return (
    <footer className="relative mt-16 bg-gradient-to-b from-emerald-50 to-emerald-100 text-emerald-900">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mx-auto h-full max-w-6xl">
          <div className="h-40 rounded-b-[3rem] bg-gradient-to-r from-emerald-200/40 via-emerald-100 to-emerald-200/40 blur-2xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                <Leaf className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xl font-bold tracking-tight">GreenVale Farm</p>
                <p className="text-sm text-emerald-900/70">Regenerative • Seasonal • Local</p>
              </div>
            </div>
            <p className="max-w-prose text-emerald-900/80">
              We grow nutrient-dense produce using regenerative practices that restore soil health and biodiversity. Taste the difference of food grown with care.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 rounded-lg bg-white p-2 shadow-sm">
                  <Tractor className="h-5 w-5 text-emerald-700" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Farm Stand Hours</p>
                  <p className="text-sm text-emerald-900/70">Sat–Sun: 9am – 2pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 rounded-lg bg-white p-2 shadow-sm">
                  <MapPin className="h-5 w-5 text-emerald-700" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Visit Us</p>
                  <p className="text-sm text-emerald-900/70">123 Country Lane, Oak Valley</p>
                </div>
              </div>
            </div>
            <NewsletterSignup />
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-900/80">Shop</p>
              <div className="grid gap-2">
                <LinkItem href="#">Veggie Boxes</LinkItem>
                <LinkItem href="#">CSA Membership</LinkItem>
                <LinkItem href="#">Farm Stand</LinkItem>
                <LinkItem href="#">Gift Cards</LinkItem>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-900/80">Learn</p>
              <div className="grid gap-2">
                <LinkItem href="#">About Our Soil</LinkItem>
                <LinkItem href="#">Seasonal Recipes</LinkItem>
                <LinkItem href="#">Workshops</LinkItem>
                <LinkItem href="#">Volunteer</LinkItem>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-900/80">Contact</p>
              <div className="grid gap-2">
                <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-sm text-emerald-900/80 hover:text-emerald-900 transition">
                  <Phone className="h-4 w-4" />
                  +1 (234) 567-890
                </a>
                <LinkItem href="mailto:hello@greenvale.farm">hello@greenvale.farm</LinkItem>
                <div className="flex gap-3 pt-1">
                  <a href="#" aria-label="Instagram" className="rounded-full bg-white p-2 text-emerald-700 shadow-sm transition hover:scale-105">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Facebook" className="rounded-full bg-white p-2 text-emerald-700 shadow-sm transition hover:scale-105">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Twitter" className="rounded-full bg-white p-2 text-emerald-700 shadow-sm transition hover:scale-105">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-emerald-900/70 sm:flex-row">
            <p>© {new Date().getFullYear()} GreenVale Farm. Grown with care in Oak Valley.</p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <p className="font-medium">Proudly pesticide-free</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
