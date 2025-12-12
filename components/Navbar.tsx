import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = NAV_LINKS.map(link => link.path.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const id = path.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 h-16 flex items-center justify-between rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] w-[95%] md:w-full'
            : 'bg-transparent w-full'
        }`}
      >
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 hover:opacity-80 transition-opacity"
        >
          Lokesh<span className="text-pink-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.path.substring(1);
            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 relative ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50"
          >
            <div className="flex flex-col p-4 space-y-2">
              {NAV_LINKS.map((link) => {
                 const isActive = activeSection === link.path.substring(1);
                 return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => scrollToSection(e, link.path)}
                    className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-white border border-white/5' 
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                 );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;