import { useRef, useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { submitLead, validateLead, type LeadErrors, type LeadInput } from '@/lib/leads';
import { trackEvent } from '@/lib/tracking';

const MIN_FILL_MS = 3000;
const BUDGET_OPTIONS = [
  'أقل من 300 د.ك شهرياً',
  'من 300 إلى 1000 د.ك شهرياً',
  'من 1000 إلى 3000 د.ك شهرياً',
  'أكثر من 3000 د.ك شهرياً',
];

const EMPTY_FORM: LeadInput = {
  name: '',
  phone: '',
  company: '',
  monthlyBudget: '',
  message: '',
  source: 'landing_page_form',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-white placeholder:text-slate-500 transition focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-300/30';

export default function LeadForm() {
  const [form, setForm] = useState<LeadInput>(EMPTY_FORM);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const mountedAt = useRef(Date.now());

  const updateField = (field: keyof LeadInput) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    const isBot = honeypot.length > 0 || Date.now() - mountedAt.current < MIN_FILL_MS;
    if (isBot) {
      setStatus('success');
      setForm(EMPTY_FORM);
      return;
    }

    const validation = validateLead(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus('submitting');
    setServerError('');
    try {
      await submitLead(form);
      trackEvent('generate_lead', { source: form.source, budget: form.monthlyBudget || 'not_provided' });
      setStatus('success');
      setForm(EMPTY_FORM);
    } catch {
      setStatus('error');
      setServerError('تعذّر إرسال طلبك الآن. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center justify-center gap-5 py-12 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
          <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
        </span>
        <h3 className="text-2xl font-extrabold text-white">تم استلام طلبك بنجاح</h3>
        <p className="max-w-md leading-[1.5] text-slate-400">
          شكراً لثقتك بنا. سيتواصل معك فريق Elite Ads Pro خلال ساعات العمل لمراجعة حسابك الإعلاني وتقديم الاستشارة.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-2">
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative grid gap-5" aria-label="نموذج طلب الاستشارة">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="mb-2 block text-sm font-semibold text-slate-200">
            الاسم الكامل <span className="text-emerald-300">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => updateField('name')(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'lead-name-error' : undefined}
            className={inputClass}
            placeholder="مثال: أحمد العنزي"
          />
          {errors.name && (
            <p id="lead-name-error" className="mt-2 text-sm text-rose-300">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-phone" className="mb-2 block text-sm font-semibold text-slate-200">
            رقم الهاتف / واتساب <span className="text-emerald-300">*</span>
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            dir="ltr"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField('phone')(e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'lead-phone-error' : undefined}
            className={`${inputClass} text-left`}
            placeholder="+965 5000 0000"
          />
          {errors.phone && (
            <p id="lead-phone-error" className="mt-2 text-sm text-rose-300">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-company" className="mb-2 block text-sm font-semibold text-slate-200">
            اسم النشاط التجاري
          </label>
          <input
            id="lead-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => updateField('company')(e.target.value)}
            className={inputClass}
            placeholder="اسم شركتك أو متجرك"
          />
        </div>

        <div>
          <label htmlFor="lead-budget" className="mb-2 block text-sm font-semibold text-slate-200">
            ميزانية الإعلانات الشهرية
          </label>
          <select
            id="lead-budget"
            name="monthly_budget"
            value={form.monthlyBudget}
            onChange={(e) => updateField('monthlyBudget')(e.target.value)}
            className={inputClass}
          >
            <option value="">اختر الميزانية التقريبية</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option} className="bg-slate-950">
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lead-message" className="mb-2 block text-sm font-semibold text-slate-200">
          ما الذي تريد تحقيقه من الإعلانات؟
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => updateField('message')(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="مثال: زيادة طلبات المتجر الإلكتروني وخفض تكلفة النقرة الحالية"
        />
      </div>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="lead-website">لا تملأ هذا الحقل</label>
        <input
          id="lead-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">بياناتك محمية، ولن نشاركها مع أي طرف ثالث.</p>
        <button type="submit" disabled={status === 'submitting'} className="btn-neon disabled:cursor-not-allowed disabled:opacity-70">
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              جارٍ الإرسال...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden="true" />
              أرسل طلب الاستشارة
            </>
          )}
        </button>
      </div>
    </form>
  );
}
