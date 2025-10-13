import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#39ff14]/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#39ff14] text-xl font-bold mb-4 drop-shadow-[0_0_10px_#39ff14]">
              SYNITRIX
            </h3>
            <p className="text-gray-400 text-sm">
              Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-[#ffff00] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#39ff14] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#39ff14] transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-[#39ff14] transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-[#39ff14] transition-colors text-sm">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#ffff00] font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={16} className="text-[#39ff14]" />
                <span>info@synitrix.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone size={16} className="text-[#39ff14]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#39ff14]" />
                <span>123 Tech Street, Digital City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#39ff14]/20">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Synitrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
