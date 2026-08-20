import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import Brand from './Brand';

interface HeaderProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  go: (id: string) => void;
}

export default function Header({ theme, setTheme, menuOpen, setMenuOpen, go }: HeaderProps) {
  return (
    <>
      <header className="site-header">
        <Brand />
        <nav>
          <button onClick={() => go('#about')}>About</button>
          <button onClick={() => go('#services')}>Expertise</button>
          <button onClick={() => go('#work')}>Work</button>
        </nav>
        <div className="header-actions">
          <button
            aria-label="Change colour theme"
            className="theme-switch"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="header-contact" onClick={() => go('#contact')}>
            Let’s talk <ArrowUpRight size={15} />
          </button>
        </div>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {['#about', '#services', '#work', '#contact'].map((x) => (
              <button key={x} onClick={() => go(x)}>
                {x.slice(1)}
              </button>
            ))}
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              Switch theme
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
