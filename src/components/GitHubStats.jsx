import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, GitFork, BookOpen, Stars } from 'lucide-react';

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


// Generate simulated activity values (0 = empty, 1 = low, 2 = medium, 3 = high)
const generateActivityData = () => {
  const weeks = 28; // Display 28 weeks (around 6 months)
  const days = 7;
  const grid = [];
  
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      // Create a randomized realistic distribution (heavy on weekdays, light on weekends)
      const isWeekend = d === 0 || d === 6;
      const rand = Math.random();
      let val = 0;
      
      if (isWeekend) {
        if (rand > 0.85) val = 1;
        else if (rand > 0.95) val = 2;
      } else {
        if (rand > 0.8) val = 3;
        else if (rand > 0.5) val = 2;
        else if (rand > 0.25) val = 1;
      }
      week.push(val);
    }
    grid.push(week);
  }
  return grid;
};

const activityGrid = generateActivityData();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const stats = [
  { label: 'Total Repositories', value: '7', icon: GitFork, color: 'text-blue-500' },
  { label: 'Yearly Commits', value: '260+', icon: Stars, color: 'text-emerald-500' },
  { label: 'Coding Solutions', value: '100+', icon: Code, color: 'text-indigo-500' },
];

const profiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/Rd10code',
    desc: 'Check my repositories, projects, and active contributions.',
    icon: Github,
    color: 'hover:border-slate-800 hover:text-slate-800 dark:hover:text-slate-100',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Rd10code/',
    desc: '100+ problems solved. Focus on arrays, trees, and graphs.',
    icon: Code,
    color: 'hover:border-amber-500/55 hover:text-amber-500',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/Rd10code/',
    desc: 'Practiced core structures, algorithms, and logical queries.',
    icon: BookOpen,
    color: 'hover:border-emerald-500/55 hover:text-emerald-500',
  },
];

export default function GitHubStats() {
  return (
    <section id="github-stats" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-mono text-indigo-500 dark:text-teal-400 font-bold mb-2">
            Activity & Profiles
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Coding Statistics
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl glassmorphism dark:glassmorphism border border-slate-100 dark:border-slate-800/80 text-left flex items-center justify-between shadow-sm glow-hover"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-3xl font-extrabold font-heading text-slate-800 dark:text-white">
                    {item.value}
                  </p>
                </div>
                <div className={`p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contribution Graph Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl glassmorphism dark:glassmorphism border border-slate-100 dark:border-slate-800/80 shadow-md mb-12 text-left overflow-x-auto"
        >
          <div className="flex items-center gap-2 mb-6">
            <Github className="w-5 h-5 text-indigo-500" />
            <h3 className="text-lg font-bold font-heading text-slate-800 dark:text-slate-150">
              GitHub Contribution Activity
            </h3>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-mono font-medium ml-auto">
              Active Commits
            </span>
          </div>

          <div className="min-w-[500px]">
            {/* Months Header row */}
            <div className="flex pl-8 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-500 gap-14">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            <div className="flex gap-1.5 items-start">
              {/* Days Column */}
              <div className="flex flex-col justify-between h-[105px] pr-2 text-[10px] font-bold text-slate-500 dark:text-slate-500 select-none">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Grid representation */}
              <div className="flex gap-1">
                {activityGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((val, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 ${
                          val === 0
                            ? 'bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-transparent'
                            : val === 1
                            ? 'bg-emerald-800/30 dark:bg-emerald-950/70 border border-transparent'
                            : val === 2
                            ? 'bg-emerald-600/60 dark:bg-emerald-700/50 border border-transparent'
                            : 'bg-emerald-500 dark:bg-emerald-400 border border-transparent'
                        } hover:scale-125 hover:ring-1 hover:ring-indigo-500`}
                        title={`Contribution Level: ${val}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Graph Legend */}
            <div className="flex items-center gap-1.5 justify-end text-[10px] font-bold text-slate-500 dark:text-slate-500 mt-4 pr-1">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-slate-100 dark:bg-slate-900" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-800/30 dark:bg-emerald-950/70" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-600/60 dark:bg-emerald-700/50" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-550 dark:bg-emerald-400" />
              <span>More</span>
            </div>
          </div>
        </motion.div>

        {/* Coding Profiles Cards */}
        <h3 className="text-xl font-bold font-heading text-slate-800 dark:text-slate-200 mb-6 text-center">
          Developer & Coding Profiles
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 rounded-2xl glassmorphism dark:glassmorphism border border-slate-100 dark:border-slate-800/80 text-left flex flex-col justify-between shadow-sm cursor-pointer transition-all duration-300 ${profile.color} hover:translate-y-[-4px] group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 text-indigo-500 group-hover:text-current transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-slate-800 dark:text-slate-100 mb-1">
                    {profile.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {profile.desc}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
