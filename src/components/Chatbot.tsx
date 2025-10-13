import { MessageCircle, X, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';

export default function Chatbot() {
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
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#39ff14] text-black rounded-full shadow-[0_0_30px_#39ff14] hover:shadow-[0_0_40px_#39ff14] transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-gradient-to-br from-gray-900 to-black border border-[#39ff14]/30 rounded-2xl shadow-[0_0_50px_rgba(57,255,20,0.3)] flex flex-col">
          <div className="bg-[#39ff14] text-black px-6 py-4 rounded-t-2xl">
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
                      ? 'bg-[#39ff14] text-black'
                      : 'bg-gray-800 text-gray-200 border border-[#39ff14]/20'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-[#39ff14]/30">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your urgent query..."
                className="flex-1 px-4 py-2 bg-black/50 border border-[#39ff14]/30 rounded-lg text-white text-sm focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting || !message.trim()}
                className="p-2 bg-[#39ff14] text-black rounded-lg hover:bg-[#ffff00] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
