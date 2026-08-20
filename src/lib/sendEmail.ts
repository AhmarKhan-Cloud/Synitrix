import { supabase } from './supabase';

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/** Invokes the public contact endpoint; no email-provider credential is sent to the browser. */
export async function sendContactEmail(payload: ContactSubmissionPayload): Promise<{ success: boolean; error?: string }> {
  const { data, error } = await supabase.functions.invoke('send-email', { body: payload });
  if (error || !data?.success) return { success: false, error: error?.message || data?.error || 'Email delivery failed.' };
  return { success: true };
}
