import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { ThemeProvider, useTheme } from '../lib/ThemeContext'; // Adjust path as needed

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_number: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          contact_number: formData.contact_number,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', contact_number: '', message: '' });
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
     <ThemeProvider>
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${theme === 'white' ? 'bg-white/80' : 'bg-black/80'} backdrop-blur-sm`}>
      <div className={`relative w-full max-w-md theme-bg-secondary border theme-border rounded-2xl shadow-[0_0_15px_var(--shadow-color)] p-8`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 ${theme === 'white' ? 'text-theme-text-tertiary' : 'text-gray-400'} hover:text-theme-accent-primary transition-colors`}
        >
          <X size={24} />
        </button>

        <h2 className={`text-3xl font-bold theme-accent-primary mb-6`}>
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium ${theme === 'white' ? 'theme-text-primary' : 'text-gray-300'} mb-1`}>
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-2 ${theme === 'white' ? 'bg-gray-100' : 'bg-black/50'} border theme-border rounded-lg ${theme === 'white' ? 'text-theme-text-primary' : 'text-white'} focus:outline-none focus:border-theme-accent-primary focus:ring-1 focus:ring-theme-accent-primary transition-all`}
            />
          </div>

          <div>
            <label htmlFor="email" className={`block text-sm font-medium ${theme === 'white' ? 'theme-text-primary' : 'text-gray-300'} mb-1`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-2 ${theme === 'white' ? 'bg-gray-100' : 'bg-black/50'} border theme-border rounded-lg ${theme === 'white' ? 'text-theme-text-primary' : 'text-white'} focus:outline-none focus:border-theme-accent-primary focus:ring-1 focus:ring-theme-accent-primary transition-all`}
            />
          </div>

          <div>
            <label htmlFor="contact" className={`block text-sm font-medium ${theme === 'white' ? 'theme-text-primary' : 'text-gray-300'} mb-1`}>
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              required
              value={formData.contact_number}
              onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })}
              className={`w-full px-4 py-2 ${theme === 'white' ? 'bg-gray-100' : 'bg-black/50'} border theme-border rounded-lg ${theme === 'white' ? 'text-theme-text-primary' : 'text-white'} focus:outline-none focus:border-theme-accent-primary focus:ring-1 focus:ring-theme-accent-primary transition-all`}
            />
          </div>

          <div>
            <label htmlFor="message" className={`block text-sm font-medium ${theme === 'white' ? 'theme-text-primary' : 'text-gray-300'} mb-1`}>
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-4 py-2 ${theme === 'white' ? 'bg-gray-100' : 'bg-black/50'} border theme-border rounded-lg ${theme === 'white' ? 'text-theme-text-primary' : 'text-white'} focus:outline-none focus:border-theme-accent-primary focus:ring-1 focus:ring-theme-accent-primary transition-all resize-none`}
            />
          </div>

          {submitStatus === 'success' && (
            <div className={`text-theme-accent-primary text-sm text-center`}>
              Message sent successfully!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-500 text-sm text-center">
              Failed to send message. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-theme-accent-primary text-theme-text-primary font-semibold rounded-lg hover:bg-theme-accent-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
     </ThemeProvider>
  );
}

