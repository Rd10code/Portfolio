import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';

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


const categories = ['All', 'Full Stack', 'Frontend'];

const projectsData = [
  {
    id: 1,
    title: 'WanderStay',
    category: 'Full Stack',
    desc: 'A full-stack Airbnb-inspired rental platform with listing creation, image upload via Cloudinary, map integration, user reviews, and Passport.js authentication. Deployed on Render.',
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Cloudinary', 'Passport.js'],
    github: 'https://github.com/Rd10code/Major-Project',
    demo: 'https://github.com/Rd10code/Major-Project',
    gradient: 'from-violet-600/20 to-indigo-600/20 text-indigo-400',
    iconText: '🏠',
  },
  {
    id: 2,
    title: 'BeatFlow',
    category: 'Full Stack',
    desc: 'A MERN stack music streaming app with playlist management, audio playback controls, and a clean Spotify-inspired UI. Features user auth and MongoDB-backed song library.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Rd10code/Music-streaming-platform',
    demo: 'https://music-streaming-platform-sigma.vercel.app/',
    gradient: 'from-emerald-600/20 to-teal-600/20 text-emerald-400',
    iconText: '🎵',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Frontend',
    desc: 'Personal developer portfolio built with React + Vite. Features dark/light mode, Framer Motion animations, particle background, GitHub stats section, and a working contact form.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Rd10code',
    demo: 'https://rohitdeore.vercel.app/',
    gradient: 'from-blue-600/20 to-teal-600/20 text-teal-400',
    iconText: '⚡',
  },

  {
    id: 4,
    title: 'Simon Says Game',
    category: 'Frontend',
    desc: 'A browser-based memory sequence game built with vanilla JavaScript. Features progressive difficulty, color-sound feedback, streak tracking, and DOM animations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Rd10code/LinkedIn-Showcase/tree/main/Simon%20Say',
    demo: 'https://github.com/Rd10code/LinkedIn-Showcase/tree/main/Simon%20Say',
    gradient: 'from-fuchsia-600/20 to-pink-600/20 text-pink-400',
    iconText: '🎮',
  },
    {
    id: 5,
    title: 'Paymesh-UPI Without Internet',
    category: 'Full Stack',
    desc: 'simulating UPI-style transactions over a device-to-device gossip mesh network.',
    tech: ['Java','Spring-Boot','React','Maven'],
    github: 'https://github.com/Rd10code/PayMesh',
    demo: 'https://github.com/Rd10code/PayMesh',
    gradient: 'from-fuchsia-600/20 to-pink-600/20 text-pink-400',
    iconText: '💰',
  },
];


export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-indigo-500 dark:text-teal-400 font-bold mb-2">
            My Creative Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Projects
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <Filter className="w-4 h-4 text-slate-400 mr-1 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full cursor-pointer transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/10'
                  : 'glassmorphism text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200/10 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="group flex flex-col justify-between rounded-2xl glassmorphism dark:glassmorphism border border-slate-100 dark:border-slate-800/80 shadow-md overflow-hidden glow-hover h-full"
              >
                <div>
                  {/* Decorative Project Header / Placeholder Visual */}
                  <div
                    className={`h-48 w-full bg-gradient-to-tr ${project.gradient} relative flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800/60`}
                  >
                    {/* Grid Pattern overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:14px_24px]" />
                    
                    {/* Animated circle glow */}
                    <div className="absolute w-24 h-24 rounded-full bg-current opacity-5 blur-[30px] group-hover:scale-150 transition-transform duration-500" />
                    
                    <span className="text-6xl select-none filter drop-shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
                      {project.iconText}
                    </span>
                    
                    {/* Category Tag overlay */}
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] uppercase font-mono tracking-wider text-slate-350 border border-slate-750">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-bold font-heading text-slate-800 dark:text-slate-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Tech tags and action links */}
                <div className="p-6 pt-0 text-left">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-slate-100 dark:bg-slate-900 text-[10px] font-mono px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors ml-auto"
                    >
                      Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
