const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

type ContactPayload = { name?: string; email?: string; subject?: string; message?: string };

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character] || character));
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return Response.json({ success: false, error: 'Method not allowed.' }, { status: 405, headers: corsHeaders });

  const resendKey = Deno.env.get('RESEND_API_KEY');
  const sender = Deno.env.get('CONTACT_FROM_EMAIL');
  const recipient = Deno.env.get('CONTACT_RECIPIENT_EMAIL');
  if (!resendKey || !sender || !recipient) return Response.json({ success: false, error: 'Email delivery is not configured.' }, { status: 503, headers: corsHeaders });

  try {
    const { name, email, subject, message } = await request.json() as ContactPayload;
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) return Response.json({ success: false, error: 'All form fields are required.' }, { status: 400, headers: corsHeaders });
    if (!/^\S+@\S+\.\S+$/.test(email)) return Response.json({ success: false, error: 'Please provide a valid email address.' }, { status: 400, headers: corsHeaders });

    const safeName = escapeHtml(name.trim()); const safeEmail = escapeHtml(email.trim()); const safeSubject = escapeHtml(subject.trim()); const safeMessage = escapeHtml(message.trim());
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email.trim(),
        subject: `[Synitix lead] ${subject.trim()}`,
        html: `<main style="max-width:620px;margin:auto;padding:32px;font-family:Arial,sans-serif;color:#172018"><p style="color:#277ca2;font-size:12px;letter-spacing:.08em;text-transform:uppercase">New Synitix contact lead</p><h1 style="font-size:28px">${safeSubject}</h1><p><strong>From:</strong> ${safeName}<br><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p><hr style="border:0;border-top:1px solid #dfe7e1;margin:24px 0"><p style="white-space:pre-wrap;line-height:1.65">${safeMessage}</p></main>`,
      }),
    });
    if (!response.ok) { const error = await response.json().catch(() => null); console.error('Resend error', error); return Response.json({ success: false, error: 'Email provider rejected the request.' }, { status: 502, headers: corsHeaders }); }
    return Response.json({ success: true }, { headers: corsHeaders });
  } catch (error) {
    console.error('send-email error', error);
    return Response.json({ success: false, error: 'Unable to process the message.' }, { status: 500, headers: corsHeaders });
  }
});
