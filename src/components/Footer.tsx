import { Target } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { trackEvent } from '@/lib/tracking';

const FOOTER_LINKS = [
  { label: 'الخدمات', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'النتائج', href: '#results' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950">
              <Target className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-extrabold text-white">
              Elite Ads <span className="neon-text">Pro</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs leading-[1.5] text-slate-400">
            Digital Marketing و Google Ads. نحول ميزانية الإعلانات إلى نمو حقيقي للمبيعات.
          </p>
        </div>

        <nav aria-label="روابط التذييل">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">الروابط</h2>
          <ul className="mt-5 grid gap-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate-400 transition hover:text-cyan-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-300">تواصل معنا</h2>
          <ul className="mt-5 grid gap-3 text-slate-400">
            <li>
              <a
                href={PHONE_TEL_HREF}
                onClick={() => trackEvent('phone_call_click', { location: 'footer' })}
                className="inline-flex items-center gap-2 transition hover:text-cyan-300"
              >
                <span className="text-slate-500">الهاتف:</span>
                <span dir="ltr" className="font-bold text-white">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
                className="inline-flex items-center gap-2 transition hover:text-emerald-300"
              >
                <span className="text-slate-500">واتساب:</span>
                <span dir="ltr" className="font-bold text-white">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>جميع الحقوق محفوظة لدى Elite Ads Pro {new Date().getFullYear()}</p>
        <p>إعلانات جوجل الاحترافية | تحسين PPC | عائد استثمار مرتفع</p>
      </div>
    </footer>
  );
}
