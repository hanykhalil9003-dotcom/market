import { BarChart3, Crosshair, Gauge, Megaphone, ShoppingBag, Wallet } from 'lucide-react';

const SERVICES = [
  {
    icon: Megaphone,
    title: 'إدارة حملات جوجل الإعلانية',
    description: 'إنشاء وإدارة حملات البحث بكلمات مفتاحية ذات نية شرائية عالية تصل إلى العملاء الجاهزين للشراء.',
  },
  {
    icon: Gauge,
    title: 'تحسين نقاط جودة الإعلانات',
    description: 'تحسين نصوص الإعلانات وصفحات الهبوط وتوافقها مع البحث، لخفض تكلفة النقرة ورفع ترتيب الظهور.',
  },
  {
    icon: Crosshair,
    title: 'استهداف دقيق للجمهور',
    description: 'تحديد الموقع والفئة العمرية والاهتمامات وقوائم الجمهور المشابه، لتصل إلى من يهمك فعلاً.',
  },
  {
    icon: ShoppingBag,
    title: 'حملات التسوق والأداء الذكي',
    description: 'عرض منتجاتك أمام المتسوقين المستعدين للشراء عبر حملات التسوق وPerformance Max الذكية.',
  },
  {
    icon: Wallet,
    title: 'تحسين الميزانية والمزايدات',
    description: 'توجيه الإنفاق نحو الكلمات الأعلى ربحاً وإيقاف الهدر، مع استراتيجيات مزايدة مدعومة بالبيانات.',
  },
  {
    icon: BarChart3,
    title: 'تتبع التحويلات وتحليل ROI',
    description: 'إعداد التتبع الدقيق للمبيعات والطلبات والمكالمات، وقياس عائد الاستثمار لكل حملة بوضوح.',
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">خدماتنا</p>
          <h2 id="services-title" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            خدمات إعلانات جوجل المتكاملة لزيادة المبيعات
          </h2>
          <p className="mt-5 text-lg leading-[1.5] text-slate-400">
            من تحسين تسويق PPC إلى تحليل العائد، نغطي كل مرحلة في رحلة إعلانك لتحقيق أعلى قيمة لكل ريال تنفقه.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <article className="glass-card group h-full p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.5)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 text-cyan-200 ring-1 ring-white/10">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-[1.5] text-slate-400">{description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
