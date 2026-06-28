import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, Target, Code } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Career Objective",
    desc: "Seeking an internship or entry-level role in software engineering, where I can apply my problem-solving skills in Java and expertise in web development to build scalable applications.",
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Code,
    title: "Development Focus",
    desc: "Passionate about React ecosystem, server-side design with Node/Express, and relational/NoSQL databases. Actively sharpening Java and DSA foundations.",
    color: "text-teal-500 bg-teal-500/10 border-teal-500/20",
  },
  {
    icon: BookOpen,
    title: "Academic Background",
    desc: "Pursuing Bachelor of Engineering in Computer Engineering (AI specialization) at GH Raisoni College of Engineering, Pune. Current CGPA reflects consistent dedication.",
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Award,
    title: "Competitions & Clubs",
    desc: "Smart India Hackathon (SIH) Winner — College Level. Collaborated in a team of 6 to build a web solution for a government ministry problem statement.",
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-mono text-indigo-500 dark:text-teal-400 font-bold mb-2"
          >
            Get to Know Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Description Pitch Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-2xl glassmorphism dark:glassmorphism flex flex-col justify-between h-full border border-slate-100 dark:border-slate-800/80 shadow-md"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-heading text-slate-800 dark:text-slate-100 text-left">
                Final Year Student & Developer
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-left leading-relaxed text-sm sm:text-base">
                I am Rohit Deore, a Computer Engineering student specializing in
                AI, studying at
                <span className="text-indigo-600 dark:text-teal-300 font-medium">
                  {" "}
                  GH Raisoni College of Engineering, Pune with a CGPA of 7.77
                </span>
                .
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-left leading-relaxed text-sm sm:text-base">
                I fell in love with coding because of the thrill of translating
                complex logical issues into clean, working web modules. Whether
                it's building interactive user interfaces using React/Tailwind,
                mapping out APIs, or writing custom solutions in Java, I look
                forward to working on challenging projects.
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-left leading-relaxed text-sm sm:text-base">
                My day-to-day stack revolves around modern Javascript and Java.
                I spend a significant amount of time studying structures,
                processes, and basic cloud platforms like AWS.
              </p>
            </div>

            {/* Quick stats box inside card */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800 pt-6 mt-8">
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-500 font-heading">
                  4th
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                  Year Student
                </div>
              </div>
              <div className="text-left font-mono">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-heading">
                  5+
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                  Projects Done
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-heading">
                  100+
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                  DSA Solved
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid list (Highlights) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl glassmorphism dark:glassmorphism border border-slate-100 dark:border-slate-800/80 shadow-sm flex flex-col items-start text-left glow-hover"
                >
                  <div className={`p-3 rounded-xl border ${item.color} mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-slate-800 dark:text-slate-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
