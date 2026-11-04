import { ArrowLeft, MessageCircle, Phone, ShieldCheck, TrendingUp } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { trackEvent } from '@/lib/tracking';

const HERO_IMAGE_URL =
  'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const TRUST_POINTS = ['استهداف دقيق لنية الشراء', 'تقارير شفافة أسبوعياً', 'إدارة بعقلية الربحية'];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[480px] w-[480px] rounded-full bg-emerald-400/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#030712)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
            إعلانات جوجل الاحترافية لنمو المبيعات
          </p>

          <h1
            id="hero-title"
            className="animate-fade-up-delay mt-6 text-4xl font-extrabold leading-[1.2] text-white sm:text-5xl lg:text-6xl"
          >
            توقف عن هدر ميزانية الإعلانات.
            <span className="neon-text mt-2 block">حوّل كل نقرة إلى عميل جاهز للشراء</span>
          </h1>

          <p className="animate-fade-up-delay mt-6 max-w-2xl text-lg leading-[1.5] text-slate-300 sm:text-xl">
            نُدير حملات PPC على جوجل بخبرة احترافية: نخفض تكلفة النقرة، ونرفع جودة إعلاناتك، ونوجّه
            ميزانيتك نحو الاستهداف الدقيق لتحصل على تحويلات أكثر وعائد استثمار (ROI) أعلى.
          </p>

          <div className="animate-fade-up-delay mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-neon">
              احصل على استشارة مجانية
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'hero' })}
              className="btn-ghost"
            >
              <MessageCircle className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              راسلنا على واتساب
            </a>
          </div>

          <a
            href={PHONE_TEL_HREF}
            onClick={() => trackEvent('phone_call_click', { location: 'hero' })}
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-slate-200 transition hover:text-cyan-300"
          >
            <Phone className="h-5 w-5 text-cyan-300" aria-hidden="true" />
            <span>أو اتصل بنا مباشرة:</span>
            <span dir="ltr" className="font-extrabold text-white">
              {PHONE_DISPLAY}
            </span>
          </a>

          <ul className="animate-fade-up-delay mt-10 grid gap-3 sm:grid-cols-3">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          <div className="glass-card animate-float overflow-hidden p-3 shadow-[0_0_80px_-20px_rgba(34,211,238,0.45)]">
            <img
              src={HERO_IMAGE_URL}
              alt="لوحة تحليلات أداء حملات إعلانات جوجل على شاشة حاسوب"
              width={940}
              height={650}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
          <div className="glass-card absolute -bottom-6 -right-4 hidden items-center gap-4 p-5 sm:flex">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
              <TrendingUp className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-slate-400">هدفنا في كل حملة</p>
              <p className="text-lg font-extrabold text-white">تكلفة أقل ... وعائد أعلى</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
