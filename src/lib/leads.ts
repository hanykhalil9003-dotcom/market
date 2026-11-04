import { supabase } from '@/lib/supabase';

export interface LeadInput {
  name: string;
  phone: string;
  company: string;
  monthlyBudget: string;
  message: string;
  source: string;
}

export type LeadErrors = Partial<Record<'name' | 'phone', string>>;

const PHONE_PATTERN = /^\+?[0-9\s-]{6,20}$/;

export function validateLead(input: LeadInput): LeadErrors {
  const errors: LeadErrors = {};
  const name = input.name.trim();
  const phone = input.phone.trim();

  if (name.length < 2 || name.length > 120) {
    errors.name = 'يرجى إدخال الاسم الكامل (حرفان على الأقل).';
  }
  if (!PHONE_PATTERN.test(phone)) {
    errors.phone = 'يرجى إدخال رقم هاتف صحيح مع رمز الدولة.';
  }
  return errors;
}

export async function submitLead(input: LeadInput): Promise<void> {
  if (!supabase) {
    throw new Error('Database connection is not configured');
  }

  const { error } = await supabase.from('leads').insert({
    name: input.name.trim(),
    phone: input.phone.trim(),
    company: input.company.trim() || null,
    monthly_budget: input.monthlyBudget || null,
    message: input.message.trim() || null,
    source: input.source,
  });

  if (error) {
    throw new Error(error.message);
  }
}
