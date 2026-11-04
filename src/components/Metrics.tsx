import { Clock, Eye, LineChart, ShieldCheck } from 'lucide-react';

const METRICS = [
  { icon: Clock, value: '48 ساعة', label: 'لبدء أول تحليل لحسابك الإعلاني' },
  { icon: Eye, value: '100%', label: 'شفافية كاملة على الميزانية والنتائج' },
  { icon: LineChart, value: 'أسبوعياً', label: 'مراجعة وتحسين مستمر للحملات' },
  { icon: ShieldCheck, value: 'ROI', label: 'القياس الأساسي لكل قرار إنفاق' },
];

const PROCESS_STEPS = [
  { step: '01', title: 'تدقيق الحساب', description: 'نحلل حملاتك الحالية ونكشف مواطن الهدر وفرص خفض التكلفة.' },
  { step: '02', title: 'بناء الاستراتيجية', description: 'نحدد الكلمات والجمهور والرسائل الإعلانية الأعلى تحويلاً.' },
  { step: '03', title: 'الإطلاق والقياس', description: 'نطلق الحملات ونفعّل التتبع الدقيق للمبيعات والمكالمات.' },
  { step: '04', title: 'التحسين والتوسع', description: 'نرفع الميزانية تدريجياً نحو الحملات الرابحة فقط.' },
];

export default function Metrics() {
  return (
    <section id="results" aria-labelledby="results-title" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card relative overflow-hidden p-8 sm:p-12 lg:p-16">
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">النتائج والمنهجية</p>
              <h2 id="results-title" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                قياس دقيق يقود كل ريال نحو عائد أعلى
              </h2>
              <p className="mt-5 leading-[1.5] text-slate-400">
                لا نعد بأرقام عامة. كل حملة نديرها مبنية على بيانات واضحة، وكل قرار يُقاس بعائد الاستثمار
                الفعلي ومعدل التحويل، وتصلك تقارير مفهومة في كل أسبوع.
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-4">
                {METRICS.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                    <dt className="mt-3 text-sm text-slate-400">{label}</dt>
                    <dd className="mt-1 text-2xl font-extrabold text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ol className="relative space-y-8 border-r border-white/10 pr-8">
              {PROCESS_STEPS.map(({ step, title, description }) => (
                <li key={step} className="relative">
                  <span className="absolute -right-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-[10px] font-extrabold text-slate-950 shadow-[0_0_16px_-2px_rgba(52,211,153,0.8)]">
                    {step}
                  </span>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 leading-[1.5] text-slate-400">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
