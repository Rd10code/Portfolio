import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const roles = [
  'Full Stack Web Developer',
  'Java Programmer',
  'DSA Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      // Deleting speed
      setTypingSpeed(50);
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      }, typingSpeed);
    } else {
      // Typing speed
      setTypingSpeed(100);
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    // Handle switching states
    if (!isDeleting && displayText === currentFullText) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      // Move to next word
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden relative"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[80px] -z-10 dark:block hidden" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[90px] -z-10 dark:block hidden" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Text details */}
        <div className="md:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glassmorphism text-sm text-indigo-600 dark:text-teal-400 font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Open to Internships & Opportunities
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white leading-tight"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent text-glow">
                Rohit Deore
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center h-8"
            >
              <span className="mr-2 text-slate-600 dark:text-slate-400">A</span>
              <span className="text-indigo-600 dark:text-teal-400 font-bold border-r-2 border-indigo-500 dark:border-teal-400 pr-1 animate-caret">
                {displayText}
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            I'm a final-year Computer Engineering student at GH Raisoni College of Engineering, Pune.
            I design and build interactive, robust web applications and love solving complex algorithms in Java.
          </motion.p>

          {/* Call to actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={handleScrollToContact}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all cursor-pointer focus:outline-none"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 glassmorphism text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-teal-400 rounded-xl font-medium flex items-center gap-2 glow-hover cursor-pointer focus:outline-none"
            >
              Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social connections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 pt-6"
          >
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-500 tracking-wider uppercase">
              Connect:
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Rd10code"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/deorerohit/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rohitdeore2004@gmail.com"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Graphic/Avatar */}
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
          >
            {/* Spinning decorative background rings */}
            <div className="absolute inset-0 border border-dashed border-indigo-500/20 rounded-full animate-spin [animation-duration:40s]" />
            <div className="absolute inset-4 border border-teal-500/10 rounded-full animate-spin [animation-duration:25s] [animation-direction:reverse]" />
            
            {/* Main Avatar Container with glassmorphic look */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden glassmorphism dark:glassmorphism p-3 box-glow flex items-center justify-center border border-indigo-500/20">
              <div className="w-full h-full rounded-full bg-slate-900/40 flex flex-col items-center justify-center p-6 relative overflow-hidden group">
                {/* Glowing mesh background inside */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-teal-500/10" />
                
                {/* Coding Symbol Graphic */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-24 h-24 sm:w-32 sm:h-32 text-indigo-400 dark:text-teal-400/90 filter drop-shadow-[0_0_10px_rgba(20,184,166,0.3)] animate-pulse"
                >
                  <path
                    fill="currentColor"
                    d="M30 65L15 50L30 35L34.2 39.2L23.4 50L34.2 60.8L30 65ZM70 65L65.8 60.8L76.6 50L65.8 39.2L70 35L85 50L70 65ZM44.2 70L40 68.3L55.8 30L60 31.7L44.2 70Z"
                  />
                </svg>
                
                {/* Static floating bits representing code elements */}
                <div className="absolute top-10 left-12 text-xs font-mono text-indigo-400/70 select-none">{"{}"}</div>
                <div className="absolute bottom-12 right-12 text-xs font-mono text-teal-400/70 select-none">{"</>"}</div>
                <div className="absolute top-24 right-8 text-[10px] font-mono text-slate-500 select-none">{"const rohit = () =>"}</div>
                <div className="absolute bottom-20 left-6 text-[10px] font-mono text-slate-500 select-none">java.util.*</div>
              </div>
            </div>
            
            {/* Small floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 px-3 py-1.5 rounded-lg glassmorphism text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 border border-indigo-500/30 flex items-center gap-1.5"
            >
              ☕ Java
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-lg glassmorphism text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 border border-teal-500/30 flex items-center gap-1.5"
            >
              ⚛️ React
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 }}
              className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-lg glassmorphism text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 border border-amber-500/30 flex items-center gap-1.5"
            >
              🏆 SIH Winner
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
