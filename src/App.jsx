import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import ThemeToggle from './components/ThemeToggle';
import BackToTop from './components/BackToTop';

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen relative text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* Dynamic particles field synced to current theme */}
      <ParticlesBackground theme={theme} />

      {/* Navigation Bar */}
      <Navbar theme={theme} />

      {/* Main Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <Hero />
        
        {/* Section separators to create subtle glowing breaks */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/20 dark:via-slate-800/40 to-transparent my-4" />
        <About />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/20 dark:via-slate-800/40 to-transparent my-4" />
        <Skills />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/20 dark:via-slate-800/40 to-transparent my-4" />
        <Projects />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/20 dark:via-slate-800/40 to-transparent my-4" />
        <Experience />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/20 dark:via-slate-800/40 to-transparent my-4" />
        <GitHubStats />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/20 dark:via-slate-800/40 to-transparent my-4" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Helpers */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <BackToTop />
    </div>
  );
}
