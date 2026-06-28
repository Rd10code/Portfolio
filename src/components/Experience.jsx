import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, Code2 } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Engineering (B.E.)',
    spec: 'Computer Engineering (AI Specialization)',
    institution: 'GH Raisoni College of Engineering, Pune',
    period: '2023 - Present (4th Year)',
    description: 'Focusing on core Computer Science areas: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management, Operating Systems, and Artificial Intelligence.',
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (HSC)',
    spec: 'Science Stream (PCM)',
    institution: 'Junior College (State Board)',
    period: '2021 - 2023',
    description: 'Secured high academic scores with focus on Physics, Chemistry, and Mathematics foundations.',
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (SSC)',
    spec: 'General Curriculum',
    institution: 'High School (State Board)',
    period: 'Completed 2021',
    description: 'Built basic science, mathematics, and logical foundations.',
  },
];

const achievementsData = [
  {
    id: 1,
    title: 'Smart India Hackathon (SIH) Winner',
    role: 'College-Level Winner — Team of 6',
    period: '2024',
    description: 'Won at the college level of Smart India Hackathon. Led the frontend development of a web application addressing a real-world problem statement issued by a government ministry. Team of 6 members.',
    icon: Award,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  },
  {
    id: 2,
    title: 'Consistent DSA Learner',
    role: 'LeetCode & GeeksforGeeks',
    period: 'Ongoing',
    description: 'Solved over 100+ problems on coding platforms. Proficient in recursion, trees, graphs, sorting, and dynamic programming algorithms using Java.',
    icon: Code2,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    id: 3,
    title: 'Active Open Source Contributor',
    role: 'Web Development Milestones',
    period: '2024 - Present',
    description: 'Built and open-sourced multiple projects on GitHub. Fluent in Git workflows, package managers, and standard deployment practices.',
    icon: BookOpen,
    color: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-mono text-indigo-500 dark:text-teal-400 font-bold mb-2">
            Academic & Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Education & Journey
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dual Timelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3.5 mb-10 pl-2">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-800 dark:text-slate-100">
                Education
              </h3>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800/80 ml-6 pl-8 space-y-10">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group text-left"
                >
                  {/* Timeline Indicator Ring */}
                  <span className="absolute -left-12.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 border-2 border-indigo-500 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    <GraduationCap className="w-4 h-4" />
                  </span>

                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold text-indigo-600 dark:text-teal-400 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold font-heading text-slate-800 dark:text-slate-100 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-slate-555 dark:text-slate-350 mb-2">
                      {edu.spec ? `${edu.spec} • ` : ''}{edu.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Timeline */}
          <div>
            <div className="flex items-center gap-3.5 mb-10 pl-2">
              <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-500">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-800 dark:text-slate-100">
                Key Achievements
              </h3>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800/80 ml-6 pl-8 space-y-10">
              {achievementsData.map((ach, index) => {
                const Icon = ach.icon;
                return (
                  <motion.div
                    key={ach.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative group text-left"
                  >
                    {/* Timeline Indicator Ring */}
                    <span className="absolute -left-12.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 border-2 border-teal-400 text-teal-400 group-hover:bg-teal-400 group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                      <Icon className="w-4 h-4" />
                    </span>

                    <div>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold text-teal-500 dark:text-teal-400 mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {ach.period}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold font-heading text-slate-800 dark:text-slate-100 mb-1">
                        {ach.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-slate-555 dark:text-slate-350 mb-2">
                        {ach.role}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
