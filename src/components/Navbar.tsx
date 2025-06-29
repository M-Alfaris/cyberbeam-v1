import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.services, href: '#services' },
    { name: t.technologies, href: '#technologies' },
    { name: t.team, href: '#team' },
    { name: t.about, href: '#about' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-supabase-darker/90 backdrop-blur-lg border-b border-supabase-green/20' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href={`/${language}`}
            className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}
            whileHover={{ scale: 1.05 }}
            aria-label="Cyberbeam - AI Solutions Company"
          >
            <Zap className="h-8 w-8 text-custom-green glow-text" />
            <span className="text-xl font-bold bg-gradient-to-r from-custom-teal to-custom-green bg-clip-text text-transparent">
              {t.heroTitle}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <div className={`flex items-baseline space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-custom-green transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-custom-green focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-supabase-gray/95 backdrop-blur-lg border-b border-supabase-green/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-custom-green transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;