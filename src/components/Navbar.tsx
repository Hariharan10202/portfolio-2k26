import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Profile", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(13,10,7,0.97)] shadow-[0_4px_20px_rgba(194,103,42,0.15)]"
          : "bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? "1px solid rgba(194,103,42,0.2)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("#hero")}
          className="western-title text-[#c9942a] text-sm tracking-[0.3em] hover:text-[#d4b896] transition-colors duration-300 text-glow"
        >
          H.T
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="western-subtitle text-[#8b6914] text-xs tracking-[0.2em] hover:text-[#c2672a] transition-all duration-300 relative group"
            >
              {item.label.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c2672a] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile hamburger / close button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 text-[#c2672a]"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none select-none">✕</span>
          ) : (
            <>
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
            </>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[rgba(13,10,7,0.99)] border-t border-[rgba(194,103,42,0.2)]"
            style={{ zIndex: 50 }}
          >
            <div className="px-6 py-4 flex flex-col">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="western-subtitle text-[#8b6914] text-xs tracking-[0.2em] hover:text-[#c2672a] active:text-[#c2672a] transition-colors text-left py-3 border-b border-[rgba(194,103,42,0.1)] last:border-0 w-full"
                >
                  {item.label.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
