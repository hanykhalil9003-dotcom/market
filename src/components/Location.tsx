import { MapPin, Phone } from 'lucide-react';
import { OFFICE_ADDRESS, PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/contact';
import { trackEvent } from '@/lib/tracking';

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`;
const MAP_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;

export default function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">موقعنا</p>
          <h2 id="location-title" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            زرنا أو تواصل معنا من أي مكان
          </h2>
        </div>

        <div className="glass-card grid gap-0 overflow-hidden lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-8 p-8 sm:p-10 lg:col-span-4">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">عنوان المكتب</h3>
              <p className="mt-3 leading-[1.5] text-slate-400">{OFFICE_ADDRESS}</p>
            </div>

            <div className="grid gap-3">
              <a
                href={PHONE_TEL_HREF}
                onClick={() => trackEvent('phone_call_click', { location: 'map_section' })}
                className="btn-neon"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={MAP_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                فتح في خرائط جوجل
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] border-t border-white/10 lg:col-span-8 lg:border-r lg:border-t-0">
            <iframe
              title="خريطة موقع Elite Ads Pro"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 opacity-90 grayscale invert-[0.92] hue-rotate-180 contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
