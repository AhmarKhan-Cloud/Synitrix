import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';
import { useState } from 'react';
import { ThemeProvider, useTheme } from '../lib/ThemeContext'; // Adjust path as needed

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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
  <ThemeProvider>
  <nav className={`fixed top-0 left-0 right-0 z-50 theme-bg-primary backdrop-blur-sm border theme-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className={`text-2xl font-bold theme-accent-primary`}>
              SYNITIX
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'theme-accent-primary'
                    : `${theme === 'white' ? 'theme-text-primary' : 'text-gray-300'} hover:text-theme-accent-secondary`
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-theme-bg-secondary transition-colors duration-300"
              title={`Current theme: ${theme}`}
            >
              <Palette size={20} className="theme-accent-primary" />
            </button>
            <button
              onClick={() => {
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}
              className="px-6 py-2 bg-theme-accent-primary text-theme-text-primary font-semibold rounded-lg hover:bg-theme-accent-secondary transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden theme-accent-primary`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden theme-bg-primary border-t theme-border`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'theme-accent-primary bg-[rgba(57,255,20,0.1)]'
                    : `${theme === 'white' ? 'theme-text-primary' : 'text-gray-300'} hover:text-theme-accent-secondary hover:bg-theme-bg-secondary`
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                toggleTheme();
              }}
              className="w-full px-3 py-2 bg-theme-bg-secondary text-theme-accent-primary font-semibold rounded-lg hover:bg-theme-bg-tertiary transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Palette size={16} />
              <span>Theme: {theme}</span>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}
              className="w-full px-3 py-2 bg-theme-accent-primary text-theme-text-primary font-semibold rounded-lg hover:bg-theme-accent-secondary transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
    </ThemeProvider>
  );
}

