import { Phone, MapPin, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-emerald-900 text-emerald-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>Farm stand: Sat–Sun 9–2</span>
          </div>
          <div className="hidden items-center gap-1 sm:flex">
            <MapPin className="h-3.5 w-3.5" />
            <span>123 Country Lane, Oak Valley</span>
          </div>
        </div>
        <a href="tel:+1234567890" className="inline-flex items-center gap-1 font-medium">
          <Phone className="h-3.5 w-3.5" />
          <span>+1 (234) 567-890</span>
        </a>
      </div>
    </div>
  );
}
