import { MessageCircle, X, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { ThemeProvider, useTheme } from '../lib/ThemeContext'; // Adjust path as needed

export default function Chatbot() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    { text: 'Hello! How can I help you today? Please describe your urgent query.', sender: 'bot' },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isSubmitting) return;

    const userMessage = message.trim();
    setMessages((prev) => [...prev, { text: userMessage, sender: 'user' }]);
    setMessage('');
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('chat_messages').insert([
        {
          message: userMessage,
          type: 'urgent_query',
        },
      ]);

      if (error) throw error;

      setMessages((prev) => [
        ...prev,
        {
          text: 'Thank you for your message! Our team will review your urgent query and get back to you as soon as possible.',
          sender: 'bot',
        },
      ]);
    } catch (error) {
      console.error('Error submitting message:', error);
      setMessages((prev) => [
        ...prev,
        {
          text: 'Sorry, there was an error sending your message. Please try again or use the Contact Us form.',
          sender: 'bot',
        },
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
     <ThemeProvider>
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-theme-accent-primary text-theme-text-primary rounded-full hover:bg-theme-accent-secondary transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] theme-bg-secondary border theme-border rounded-2xl shadow-[0_0_15px_var(--shadow-color)] flex flex-col`}>
          <div className="bg-theme-accent-primary text-theme-text-primary px-6 py-4 rounded-t-2xl">
            <h3 className="font-bold text-lg">Synitrix Support</h3>
            <p className="text-xs opacity-80">We're here to help</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-theme-accent-primary text-theme-text-primary'
                      : `${theme === 'white' ? 'bg-theme-bg-tertiary' : 'bg-gray-800'} border theme-border text-${theme === 'white' ? 'theme-text-primary' : 'text-gray-200'}`
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t theme-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your urgent query..."
                className={`flex-1 px-4 py-2 ${theme === 'white' ? 'bg-theme-bg-tertiary' : 'bg-black/50'} border theme-border rounded-lg ${theme === 'white' ? 'text-theme-text-primary' : 'text-white'} text-sm focus:outline-none focus:border-theme-accent-primary focus:ring-1 focus:ring-theme-accent-primary transition-all`}
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting || !message.trim()}
                className="p-2 bg-theme-accent-primary text-theme-text-primary rounded-lg hover:bg-theme-accent-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
       
      )}
    </>
     </ThemeProvider>
  );
}

