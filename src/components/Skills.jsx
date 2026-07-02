import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, ShieldAlert, Cpu, ToggleLeft } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Layout,
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Code,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'EJS', level: 75 },
      { name: 'Spring-Boot',level:65},
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    color: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    id: 'programming',
    label: 'Programming & DSA',
    icon: Cpu,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Data Structures & Algorithms', level: 80 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    icon: ToggleLeft,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'AWS Basics', level: 60 },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 dark:block hidden" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-indigo-500 dark:text-teal-400 font-bold mb-2">
            My Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Selector buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full cursor-pointer transition-all duration-200 border ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/10'
                : 'glassmorphism text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200/10 dark:border-slate-800'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full cursor-pointer transition-all duration-200 border ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/10'
                  : 'glassmorphism text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200/10 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {filteredCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                className="p-6 sm:p-8 rounded-2xl glassmorphism dark:glassmorphism border border-slate-100 dark:border-slate-850/80 shadow-sm glow-hover"
              >
                <div className="flex items-center gap-3.5 mb-6 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                  <div className={`p-2.5 rounded-xl border ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-800 dark:text-slate-100 text-left">
                    {category.label}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium text-slate-700 dark:text-slate-350">
                        <span>{skill.name}</span>
                        <span className="font-mono text-xs">{skill.level}%</span>
                      </div>
                      
                      {/* Custom meter track */}
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: skillIdx * 0.1 }}
                          className={`h-full bg-gradient-to-r ${
                            category.id === 'frontend'
                              ? 'from-blue-500 to-indigo-500'
                              : category.id === 'backend'
                              ? 'from-indigo-500 to-purple-500'
                              : category.id === 'database'
                              ? 'from-teal-400 to-emerald-500'
                              : category.id === 'programming'
                              ? 'from-purple-500 to-pink-500'
                              : 'from-amber-400 to-orange-500'
                          } rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
