import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_TEL_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { trackEvent } from '@/lib/tracking';

const actionBase =
  'group flex items-center gap-3 rounded-full border border-white/10 bg-[#0b0f19]/90 py-2 pe-2 ps-4 text-sm font-bold text-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]';

const iconBase =
  'flex h-11 w-11 items-center justify-center rounded-full text-slate-950 transition duration-300 group-hover:scale-110';

export default function FloatingContactActions() {
  return (
    <div className="fixed bottom-5 left-4 z-50 flex flex-col items-start gap-3 sm:bottom-8 sm:left-8">
      <a
        href={PHONE_TEL_HREF}
        aria-label="اتصل بنا الآن"
        onClick={() => trackEvent('phone_call_click', { location: 'floating_button' })}
        className={`${actionBase} hover:border-cyan-300/50`}
      >
        <span className="hidden sm:inline">اتصل بنا</span>
        <span className={`${iconBase} bg-gradient-to-br from-cyan-300 to-sky-400`}>
          <Phone className="h-5 w-5" aria-hidden="true" />
        </span>
      </a>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
        className={`${actionBase} hover:border-emerald-300/50`}
      >
        <span className="hidden sm:inline">واتساب</span>
        <span className={`${iconBase} animate-pulse-ring bg-gradient-to-br from-emerald-400 to-teal-300`}>
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}
