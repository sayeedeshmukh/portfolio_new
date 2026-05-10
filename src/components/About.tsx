"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Layout, Sparkles } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-8 h-8 text-brand-pink" />,
    items: [
      { name: "React.js", projects: ["Orica", "Portfolio"] },
      { name: "Next.js", projects: ["Orica", "Portfolio"] },
      { name: "TypeScript", projects: ["Orica", "Portfolio"] },
      { name: "Tailwind CSS", projects: ["Orica", "Portfolio"] },
      { name: "Framer Motion", projects: ["Portfolio"] },
      { name: "HTML5 & LESS", projects: ["Type Yatra", "Virtual Labs", "Blubble"] }
    ]
  },
  {
    category: "Backend & Database",
    icon: <Database className="w-8 h-8 text-brand-pink" />,
    items: [
      { name: "Node.js & Express", projects: ["General Practice"] },
      { name: "MongoDB", projects: ["General Practice"] },
      { name: "MySQL", projects: ["General Practice"] },
      { name: "Django", projects: ["Diary Say"] },
      { name: "REST APIs", projects: ["Orica", "Diary Say"] }
    ]
  },
  {
    category: "Design & UX",
    icon: <Sparkles className="w-8 h-8 text-brand-pink" />,
    items: [
      { name: "Figma & Wireframing", projects: ["Orica", "Diary Say", "Portfolio"] },
      { name: "Responsive Design", projects: ["All Projects"] },
      { name: "UI/UX Principles", projects: ["All Projects"] },
      { name: "Prototyping", projects: ["Blubble", "Orica"] },
      { name: "Canva", projects: ["General Design"] }
    ]
  }
];

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<{name: string, projects: string[]} | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="about" className="py-16 px-6 relative" onMouseMove={handleMouseMove}>
      
      {/* Dynamic Cursor Tooltip */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.15 }}
            className="fixed pointer-events-none z-[100] bg-[#1a1a1a]/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl max-w-xs border border-white/10"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y + 20,
            }}
          >
            <p className="text-[10px] text-neutral-400 mb-2 uppercase tracking-wider font-semibold">Applied in:</p>
            <div className="flex flex-wrap gap-1.5">
              {hoveredSkill.projects.map((proj, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white font-medium">
                  {proj}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col space-y-20 relative z-10">
          {/* Top Section: Journey & What I Do */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Journey Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-sm p-8 lg:p-10 rounded-[2.5rem] border border-white/60 shadow-sm h-full flex flex-col justify-center"
          >
            <h2 className="font-amatic text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
              How it started.
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed text-lg">
              <p>
                Curious, observant, and always experimenting with design. I began exploring web development during my first year of engineering.
              </p>
              <p>
                From building simple HTML pages to developing full-stack Django and MERN applications — every project taught me how visuals and logic work together.
              </p>
            </div>
          </motion.div>

          {/* What I Do Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/50 backdrop-blur-sm p-8 lg:p-10 rounded-[2.5rem] border border-white/60 shadow-sm h-full flex flex-col justify-center"
          >
            <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-neutral-800 mb-6 leading-tight">
              It's not just coding,<br/>
              <span className="text-brand-pink">it's building experiences.</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg">
              I love connecting creativity with technology. Whether it's a decision-making app, a bookstore system, or a UI prototype — I focus on clarity, usability, and structure.
            </p>
          </motion.div>
        </div>

        {/* Middle Section: Interface Highlights Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/50 backdrop-blur-sm p-6 lg:p-8 rounded-3xl border border-white/60 shadow-sm relative overflow-hidden group flex flex-col lg:flex-row lg:items-center justify-between"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-pink transform origin-top transition-transform duration-500 hidden lg:block"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-pink transform origin-left transition-transform duration-500 lg:hidden"></div>
          <h3 className="font-jakarta font-semibold text-xl text-neutral-800 mb-6 lg:mb-0 shrink-0">Now, I create interfaces that are:</h3>
          <ul className="grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-8 w-full lg:w-auto lg:ml-auto">
            {["Clean & Minimalist", "Responsive & Fluid", "User-focused", "Minimal but expressive"].map((item, idx) => (
              <li key={idx} className="flex items-center text-neutral-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-pink mr-3 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Bottom Section: Skills & Tools Horizontal */}
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <h3 className="font-reenie text-5xl md:text-6xl text-brand-pink text-center mb-10">Skills & Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skill, idx) => (
                  <div key={idx} className="glass-card p-8 rounded-[2rem] group hover:-translate-y-1 transition-transform duration-300 border border-white/60 shadow-sm hover:shadow-xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-brand-pink/10 rounded-xl group-hover:bg-brand-pink group-hover:text-white transition-colors duration-300 text-brand-pink">
                        {skill.icon}
                      </div>
                      <h4 className="font-jakarta text-xl font-bold text-neutral-800">{skill.category}</h4>
                    </div>
                    <ul className="space-y-4">
                      {skill.items.map((item, i) => (
                        <li 
                          key={i} 
                          className="text-base text-neutral-600 font-medium flex items-center cursor-help transition-colors hover:text-brand-pink"
                          onMouseEnter={() => setHoveredSkill(item)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mr-3 group-hover:bg-brand-pink/50 transition-colors"></span>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
