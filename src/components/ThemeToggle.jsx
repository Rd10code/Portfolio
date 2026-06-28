import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="fixed bottom-6 right-20 z-50 p-3 rounded-full glassmorphism dark:glassmorphism text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 shadow-lg glow-hover transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Toggle dark and light theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 animate-pulse" />
      ) : (
        <Moon className="w-5 h-5 animate-pulse" />
      )}
    </button>
  );
}
