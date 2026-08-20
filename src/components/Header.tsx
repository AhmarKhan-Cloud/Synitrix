import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Brand from "./Brand";

interface HeaderProps {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  go: (id: string) => void;
}

export default function Header({
  theme,
  setTheme,
  menuOpen,
  setMenuOpen,
  go,
}: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const visit = (target: "/" | "/about" | "/projects" | "#services") => {
    setMenuOpen(false);
    if (target === "#services") {
      if (location.pathname === "/") go("#services");
      else {
        navigate("/");
        window.setTimeout(
          () =>
            document
              .querySelector("#services")
              ?.scrollIntoView({ behavior: "smooth" }),
          60,
        );
      }
      return;
    }
    if (target === "/") {
      navigate("/");
      window.setTimeout(
        () => window.scrollTo({ top: 0, behavior: "smooth" }),
        20,
      );
      return;
    }
    navigate(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <header className="site-header">
        <Brand />
        <nav>
          <button onClick={() => visit("/")}>Home</button>
          <button onClick={() => visit("#services")}>Expertise</button>
          <button onClick={() => visit("/projects")}>Projects</button>
          <button onClick={() => visit("/about")}>About</button>
        </nav>
        <div className="header-actions">
          <button
            aria-label="Change colour theme"
            className="theme-switch"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="header-contact"
            onClick={() => {
              if (location.pathname !== "/") navigate("/");
              window.setTimeout(() => go("#contact"), 60);
            }}
          >
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
            <button onClick={() => visit("/")}>Home</button>
            <button onClick={() => visit("#services")}>Expertise</button>
            <button onClick={() => visit("/projects")}>Work</button>
            <button onClick={() => visit("/about")}>About</button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              Switch theme
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
