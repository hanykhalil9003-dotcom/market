import { MapPin } from 'lucide-react';
import { KUWAIT_GOVERNORATES } from '@/lib/keywords';

export default function KuwaitAreas() {
  return (
    <section id="kuwait-areas" aria-labelledby="areas-title" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">تغطية شاملة في الكويت</p>
          <h2 id="areas-title" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            إعلانات جوجل في كل محافظات الكويت ومناطقها
          </h2>
          <p className="mt-5 text-lg leading-[1.5] text-slate-400">
            ندير حملات إعلانات جوجل الاحترافية لأصحاب الأعمال في جميع المحافظات، ونستهدف العملاء في مدينتك
            بدقة لتقليل تكلفة النقرة وزيادة الطلبات المحلية.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {KUWAIT_GOVERNORATES.map((governorate) => (
            <li key={governorate.name}>
              <article className="glass-card group h-full p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-white">إعلانات جوجل في {governorate.name}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {governorate.areas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300"
                    >
                      إعلانات جوجل {area}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
