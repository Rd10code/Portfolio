import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to add border/bg opacity to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for highlighting navigation links
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section occupies the center 20%
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-slate-950/70 dark:bg-slate-950/75 backdrop-blur-md border-b border-slate-200/10 dark:border-slate-800/50 shadow-lg shadow-slate-900/5 dark:shadow-none'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleScrollToSection('home')}
          className="text-2xl font-bold tracking-tight font-heading text-slate-900 dark:text-white flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <span className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            RD
          </span>
          <span className="hidden sm:inline text-lg font-medium text-slate-700 dark:text-slate-300">
            .portfolio
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none ${
                activeSection === item.id
                  ? 'text-indigo-600 dark:text-teal-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-indigo-50 dark:bg-slate-800/40 border border-indigo-100/10 dark:border-slate-700/30 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-slate-100 dark:border-slate-900 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-indigo-50 dark:bg-slate-900 text-indigo-600 dark:text-teal-400 font-bold border-l-4 border-indigo-500 dark:border-teal-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
