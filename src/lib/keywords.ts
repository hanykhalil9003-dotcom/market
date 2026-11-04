import {
  Construction,
  Droplets,
  Grid3X3,
  Hammer,
  Layers,
  Paintbrush,
  Snowflake,
  Truck,
  Warehouse,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export const TICKER_KEYWORDS = [
  'إعلانات جوجل في الكويت',
  'إدارة حملات جوجل الاحترافية',
  'تقليل تكلفة النقرة',
  'تحسين حملات PPC',
  'وكالة إعلانات جوجل الكويت',
  'تسويق إلكتروني في الكويت',
  'زيادة المبيعات عبر الإنترنت',
  'عائد استثمار مرتفع ROI',
  'استهداف دقيق للعملاء',
  'دورة إعلانات جوجل',
  'Google Ads Kuwait',
  'خبير إعلانات جوجل',
];

export const KUWAIT_GOVERNORATES = [
  {
    name: 'محافظة العاصمة',
    areas: ['مدينة الكويت', 'الشرق', 'القبلة', 'الشامية', 'المرقاب', 'كيفان'],
  },
  {
    name: 'محافظة حولي',
    areas: ['السالمية', 'حولي', 'الجابرية', 'سلوى', 'الشعب', 'بيان'],
  },
  {
    name: 'محافظة الفروانية',
    areas: ['الفروانية', 'الرميثية', 'العارضية', 'الفحيحيل', 'خيطان', 'جليب الشيوخ'],
  },
  {
    name: 'محافظة مبارك الكبير',
    areas: ['مبارك الكبير', 'صباح السالم', 'العدان', 'القرين', 'أبو فطيرة'],
  },
  {
    name: 'محافظة الأحمدي',
    areas: ['الأحمدي', 'الفحاحيل', 'المنقف', 'الرقة', 'الظهر'],
  },
  {
    name: 'محافظة الجهراء',
    areas: ['الجهراء', 'السالمي', 'النعيم', 'الواحة', 'القصر'],
  },
];

export interface Course {
  title: string;
  description: string;
  topics: string[];
}

export const COURSES: Course[] = [
  {
    title: 'أساسيات إعلانات جوجل للمبتدئين',
    description: 'تعلّم بناء حساب إعلاني احترافي من الصفر وإطلاق أول حملة بحث بثقة.',
    topics: ['هيكلة الحساب والحملات', 'اختيار الكلمات المفتاحية', 'كتابة الإعلانات النصية'],
  },
  {
    title: 'احتراف حملات البحث وخفض التكلفة',
    description: 'تقنيات متقدمة لرفع جودة الإعلان وخفض تكلفة النقرة وتحسين ترتيب الظهور.',
    topics: ['تحسين نقاط جودة الإعلان', 'المزايدة الذكية', 'الكلمات السالبة لإيقاف الهدر'],
  },
  {
    title: 'التتبع وقياس العائد ROI',
    description: 'اربط إعلاناتك بالمبيعات والمكالمات والواتساب، وقس العائد من كل ريال تنفقه.',
    topics: ['إعداد التتبع والتحويلات', 'ربط Google Analytics', 'تقارير الأداء الأسبوعية'],
  },
];

export interface Trade {
  name: string;
  icon: LucideIcon;
}

export const TRADES: Trade[] = [
  { name: 'صباغ', icon: Paintbrush },
  { name: 'فني صحي', icon: Droplets },
  { name: 'فني كهربائي', icon: Zap },
  { name: 'جبس بورد', icon: Layers },
  { name: 'سيراميك', icon: Grid3X3 },
  { name: 'مقاولات', icon: Construction },
  { name: 'حداد', icon: Hammer },
  { name: 'تركيب إيكيا', icon: Wrench },
  { name: 'نقل عفش', icon: Truck },
  { name: 'صيانة وتركيب تكييف', icon: Snowflake },
  { name: 'تصليح توانكي', icon: Warehouse },
];
