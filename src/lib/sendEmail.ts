export interface ContactSubmissionPayload {
  name: string;
  email: string;
  contact_number?: string;
  subject?: string;
  message: string;
}

/** Sends through a server-side endpoint only; provider keys must not reach the browser. */
export async function sendContactEmail(payload: ContactSubmissionPayload): Promise<{ success: boolean; error?: string }> {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null);
    return { success: false, error: result?.error || 'Email service is not configured yet.' };
  }

  return { success: true };
}
