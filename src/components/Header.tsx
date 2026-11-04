import { useEffect, useState } from 'react';
import { Menu, Phone, Target, X } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { trackEvent } from '@/lib/tracking';

const NAV_LINKS = [
  { label: 'الخدمات', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'النتائج', href: '#results' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-10 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-[#030712]/90 py-3 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-[0_0_24px_-6px_rgba(45,212,191,0.8)]">
            <Target className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">
            Elite Ads <span className="neon-text">Pro</span>
          </span>
        </a>

        <nav aria-label="القائمة الرئيسية" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PHONE_TEL_HREF}
            onClick={() => trackEvent('phone_call_click', { location: 'header' })}
            className="btn-ghost !px-4 !py-2.5 text-sm"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span dir="ltr">{PHONE_DISPLAY}</span>
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'header' })}
            className="btn-neon !px-4 !py-2.5 text-sm"
          >
            واتساب
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#030712]/95 px-5 pb-6 pt-4 md:hidden">
          <nav aria-label="القائمة المحمولة" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-200 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid gap-3">
            <a
              href={PHONE_TEL_HREF}
              onClick={() => trackEvent('phone_call_click', { location: 'mobile_menu' })}
              className="btn-ghost"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'mobile_menu' })}
              className="btn-neon"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
