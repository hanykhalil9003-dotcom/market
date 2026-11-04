import { MessageCircle, Phone, MapPin } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import { PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_HREF } from '@/lib/contact';
import { trackEvent } from '@/lib/tracking';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">ابدأ اليوم</p>
          <h2 id="contact-title" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            اطلب استشارة لحسابك الإعلاني وتعرّف على فرص التوفير
          </h2>
          <p className="mt-5 leading-[1.5] text-slate-400">
            أخبرنا بأهدافك وميزانيتك الحالية، وسيتواصل معك أحد خبرائنا لمراجعة الحملات وتقديم خطة واضحة تركز على
            العائد.
          </p>

          <div className="mt-10 grid gap-4">
            <a
              href={PHONE_TEL_HREF}
              onClick={() => trackEvent('phone_call_click', { location: 'contact_section' })}
              className="glass-card flex items-center gap-4 p-5 transition hover:border-cyan-300/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-slate-400">اتصل بنا مباشرة</span>
                <span dir="ltr" className="block text-lg font-extrabold text-white">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'contact_section' })}
              className="glass-card flex items-center gap-4 p-5 transition hover:border-emerald-300/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-slate-400">تواصل فوري عبر واتساب</span>
                <span className="block text-lg font-extrabold text-white">ابدأ المحادثة الآن</span>
              </span>
            </a>

            <div className="flex items-start gap-3 px-2 pt-2 text-sm text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              <span>استشارات عن بُعد لأصحاب الأعمال والمتاجر الإلكترونية.</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 sm:p-10 lg:col-span-7">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
