import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#39ff14]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#39ff14] drop-shadow-[0_0_10px_#39ff14]">
              SYNITRIX
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-[#39ff14] drop-shadow-[0_0_8px_#39ff14]'
                    : 'text-gray-300 hover:text-[#ffff00] hover:drop-shadow-[0_0_8px_#ffff00]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}
              className="px-6 py-2 bg-[#39ff14] text-black font-semibold rounded-lg hover:bg-[#ffff00] transition-all duration-300 shadow-[0_0_20px_#39ff14] hover:shadow-[0_0_25px_#ffff00]"
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#39ff14]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-[#39ff14]/30">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-[#39ff14] bg-[#39ff14]/10'
                    : 'text-gray-300 hover:text-[#ffff00] hover:bg-[#ffff00]/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}
              className="w-full px-3 py-2 bg-[#39ff14] text-black font-semibold rounded-lg hover:bg-[#ffff00] transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
