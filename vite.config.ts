import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function escapeHtml(str: string): string {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // This runs only on the development server. Keep the provider key in the
  // ignored .env file under RESEND_API_KEY; never hardcode or prefix it with VITE_.
  const apiKey = env.RESEND_API_KEY;

  return {
    plugins: [
      react(),
      {
        name: 'resend-email-api-server',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end('Method Not Allowed');
              return;
            }

            if (!apiKey) {
              res.statusCode = 503;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Email service is not configured.' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const payload = JSON.parse(body);
                const { name, email, contact_number, subject, message } = payload;
                const emailSubject = subject ? `[Synitrix Lead] ${subject}` : `New Inquiry from ${name}`;

                const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(emailSubject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f4; font-family: Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #172018; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f6f4; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color: #ffffff; border: 1px solid #e0e6e2; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 28px 32px; border-bottom: 1px solid #edf2ee; background-color: #ffffff;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: #172018;">synitrix</span>
                  </td>
                  <td align="right">
                    <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #647067; background-color: #eef2ef; padding: 5px 12px; border-radius: 20px;">
                      New Contact Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Area -->
          <tr>
            <td style="padding: 32px;">
              
              <!-- Sender Info Block -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #647067; margin-bottom: 4px;">Name</div>
                    <div style="font-size: 15px; font-weight: 600; color: #172018;">${escapeHtml(name)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #647067; margin-bottom: 4px;">Email</div>
                    <div style="font-size: 15px; font-weight: 600; color: #277ca2;">
                      <a href="mailto:${escapeHtml(email)}" style="color: #277ca2; text-decoration: none;">${escapeHtml(email)}</a>
                    </div>
                  </td>
                </tr>
                ${
                  contact_number && contact_number !== 'Not provided'
                    ? `
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #647067; margin-bottom: 4px;">Contact Number</div>
                    <div style="font-size: 15px; font-weight: 600; color: #172018;">${escapeHtml(contact_number)}</div>
                  </td>
                </tr>`
                    : ''
                }
                ${
                  subject
                    ? `
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #647067; margin-bottom: 4px;">Subject</div>
                    <div style="font-size: 15px; font-weight: 600; color: #172018;">${escapeHtml(subject)}</div>
                  </td>
                </tr>`
                    : ''
                }
              </table>

              <!-- Divider -->
              <hr style="border: 0; border-top: 1px solid #edf2ee; margin: 0 0 24px 0;" />

              <!-- Message Box -->
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #647067; margin-bottom: 8px;">Message</div>
              <div style="font-size: 14px; line-height: 1.6; color: #2c382e; background-color: #f8faf8; padding: 18px; border-radius: 8px; border: 1px solid #e5ebe6; white-space: pre-wrap;">${escapeHtml(message)}</div>

              <!-- Reply Action Button -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 28px;">
                <tr>
                  <td>
                    <a href="mailto:${escapeHtml(email)}?subject=Re:%20${encodeURIComponent(subject || 'Your inquiry to Synitrix')}" style="display: inline-block; background-color: #172018; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 11px 22px; border-radius: 6px;">
                      Reply to ${escapeHtml(name)}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 18px 32px; background-color: #f8faf8; border-top: 1px solid #edf2ee; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #88948b;">
                Synitrix Contact System &bull; ${new Date().toLocaleString()}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

                const resendRes = await fetch('https://api.resend.com/emails', {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    from: 'Synitrix Web Form <onboarding@resend.dev>',
                    to: ['anasakram0644@gmail.com'],
                    subject: emailSubject,
                    html: htmlContent,
                  }),
                });

                const data = await resendRes.json();
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = resendRes.status;
                res.end(JSON.stringify(data));
              } catch (err: any) {
                console.error('Vite send-email error:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        },
      },
    ],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
