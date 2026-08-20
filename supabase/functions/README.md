# Contact email deployment

The `send-email` Edge Function sends form submissions through Resend. Configure these as Supabase secrets; do not add them to `.env`, client code, or Git:

```text
RESEND_API_KEY=<rotated Resend API key>
CONTACT_FROM_EMAIL=Synitix <hello@your-verified-domain.com>
CONTACT_RECIPIENT_EMAIL=anasakram0644@gmail.com
```

Deploy after logging into the Supabase CLI and linking this project:

```bash
supabase secrets set RESEND_API_KEY=... CONTACT_FROM_EMAIL="Synitix <hello@your-verified-domain.com>" CONTACT_RECIPIENT_EMAIL=anasakram0644@gmail.com
supabase functions deploy send-email
```

Resend requires the sender domain to be verified before it can send from your own `hello@...` address.

`supabase/config.toml` deliberately deploys this form endpoint with JWT verification disabled, so anonymous website visitors can submit it. Do not add any provider API key to the browser.
