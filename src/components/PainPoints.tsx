import { Clock, Target, Wallet } from 'lucide-react';

const PAIN_POINTS = [
  {
    icon: Wallet,
    title: 'ميزانية تُصرف بلا عائد واضح',
    description:
      'نقرات كثيرة من أشخاص لا ينوون الشراء، وكلمات مفتاحية تستنزف الميزانية دون أن تنتج طلبات.',
  },
  {
    icon: Target,
    title: 'تكلفة نقرة ترتفع كل شهر',
    description:
      'انخفاض جودة الإعلانات وصفحات الهبوط غير المتوافقة مع نية البحث يرفعان سعر النقرة الواحدة باستمرار.',
  },
  {
    icon: Clock,
    title: 'غياب القياس الدقيق للتحويلات',
    description:
      'لا تعرف أي حملة تحقق المبيعات الفعلية، فتتخذ قرارات الإنفاق بالتخمين بدلاً من الأرقام.',
  },
];

export default function PainPoints() {
  return (
    <section id="why-us" aria-labelledby="pain-title" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">لماذا تحتاج إلى إدارة احترافية؟</p>
          <h2 id="pain-title" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            الإعلانات غير المُدارة بشكل صحيح تُهدر أموالك كل يوم
          </h2>
          <p className="mt-5 text-lg leading-[1.5] text-slate-400">
            تكلفة النقرة المرتفعة، وضعف جودة الإعلانات، وغياب القياس الدقيق، ثلاث مشكلات تجعل إعلانات جوجل
            عبئاً بدلاً من أن تكون مصدراً للمبيعات. نعالجها من جذورها.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glass-card group p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300/20">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-[1.5] text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
