import { Mail, Phone, MapPin } from 'lucide-react';
import { ThemeProvider, useTheme } from '../lib/ThemeContext'; // Adjust path as needed

export default function Footer() {
  const { theme } = useTheme();

  return (
     <ThemeProvider>
    <footer className={`theme-bg-primary border-t theme-border py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={`text-theme-accent-primary text-xl font-bold mb-4`}>
              SYNITIX
            </h3>
            <p className={`text-gray-400 text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>
              Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
            </p>
          </div>

          <div>
            <h4 className={`text-theme-accent-secondary font-semibold mb-4`}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className={`text-gray-400 hover:text-theme-accent-primary transition-colors text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className={`text-gray-400 hover:text-theme-accent-primary transition-colors text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>
                  About
                </a>
              </li>
              <li>
                <a href="/services" className={`text-gray-400 hover:text-theme-accent-primary transition-colors text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className={`text-gray-400 hover:text-theme-accent-primary transition-colors text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`text-theme-accent-secondary font-semibold mb-4`}>Contact Info</h4>
            <ul className="space-y-2">
              <li className={`flex items-center space-x-2 text-gray-400 text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>
                <Mail size={16} className="text-theme-accent-primary" />
                <span>info@synitix.com</span>
              </li>
              <li className={`flex items-center space-x-2 text-gray-400 text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>
                <Phone size={16} className="text-theme-accent-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className={`flex items-center space-x-2 text-gray-400 text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>
                <MapPin size={16} className="text-theme-accent-primary" />
                <span>123 Tech Street, Digital City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t theme-border">
          <p className={`text-center text-gray-400 text-sm ${theme === 'white' ? 'theme-text-tertiary' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Synitix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </ThemeProvider>
  );
}

