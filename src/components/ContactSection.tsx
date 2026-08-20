import { AnimatePresence, motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { sendContactEmail } from '../lib/sendEmail';
import { supabase } from '../lib/supabase';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setSubmitError(null);

    const form = e.currentTarget;
    const f = new FormData(form);
    const name = String(f.get('name') || '');
    const email = String(f.get('email') || '');
    const subject = String(f.get('subject') || '');
    const message = String(f.get('message') || '');

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name,
        email,
        contact_number: 'Not provided',
        message: `Subject: ${subject}\n\n${message}`,
      });

      if (error) throw error;

      await sendContactEmail({ name, email, subject, message });

      setSent(true);
      form.reset();

      setTimeout(() => {
        setSent(false);
      }, 3500);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact-heading">
        <p className="eyebrow">05 / Get in touch</p>
        <h2>
          Have a smart
          <br />
          <em>problem?</em>
        </h2>
        <p>Tell us where you’re heading. We’ll help find the clearest way forward.</p>
        <div className="contact-links">
          <a href="https://wa.me/923116234603" target="_blank" rel="noreferrer">
            <FaWhatsapp />
            <span>
              <b>WhatsApp</b>
              <em>+92 311 6234603</em>
            </span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anasakram0644@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail />
            <span>
              <b>Gmail</b>
              <em>anasakram0644@gmail.com</em>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/anas-akram-butt/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            <span>
              <b>LinkedIn</b>
              <em>Connect with me</em>
            </span>
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <input name="name" required placeholder="Your name" />
        <input name="email" type="email" required placeholder="Your email" />
        <input name="subject" required placeholder="Subject" />
        <textarea name="message" required placeholder="Your message..." rows={5} />

        {submitError && (
          <div
            style={{
              color: '#ef4444',
              fontSize: '0.875rem',
              marginTop: '0.25rem',
            }}
          >
            {submitError}
          </div>
        )}

        <button className="button primary" type="submit" disabled={submitting || sent}>
          <AnimatePresence mode="wait">
            {submitting ? (
              <motion.span
                key="submitting"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Sending...
              </motion.span>
            ) : sent ? (
              <motion.span
                key="sent"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Check size={18} />
                Message received
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Send your message
                <Send size={16} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </form>
    </section>
  );
}
