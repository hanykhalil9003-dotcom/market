import { ArrowLeft } from 'lucide-react';
import { TRADES } from '@/lib/keywords';

export default function Trades() {
  return (
    <section id="trades" aria-labelledby="trades-title" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">لأصحاب المهن الحرفية</p>
          <h2 id="trades-title" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            إعلانات جوجل تجلب لك العملاء الذين يبحثون عن خدمتك الآن
          </h2>
          <p className="mt-5 text-lg leading-[1.5] text-slate-400">
            نصل إلى الأشخاص الذين يبحثون في جوجل عن خدمات الحرفيين في الكويت، ونحوّل بحثهم إلى مكالمات وطلبات
            مؤكدة.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {TRADES.map(({ name, icon: Icon }) => (
            <li key={name}>
              <a
                href="#contact"
                className="glass-card group flex h-full flex-col gap-5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_36px_-14px_rgba(34,211,238,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 text-cyan-200 ring-1 ring-white/10 transition group-hover:scale-105">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="mt-auto">
                  <span className="block text-base font-bold text-white">{name}</span>
                  <span className="mt-2 flex items-center gap-1 text-sm text-slate-400 transition group-hover:text-cyan-300">
                    إعلانات جوجل لـ{name}
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
