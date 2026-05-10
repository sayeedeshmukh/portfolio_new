"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, creativeWorks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"projects" | "creative">("projects");

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden bg-white/30">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12 space-y-6">
          <div className="flex p-1 bg-white/50 backdrop-blur-md rounded-xl border border-white shadow-sm">
            <button 
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2.5 rounded-lg font-jakarta font-semibold text-sm transition-all duration-300 ${activeTab === "projects" ? "bg-brand-pink text-white shadow-md" : "text-neutral-500 hover:text-neutral-800"}`}
            >
              Development
            </button>
            <button 
              onClick={() => setActiveTab("creative")}
              className={`px-6 py-2.5 rounded-lg font-jakarta font-semibold text-sm transition-all duration-300 ${activeTab === "creative" ? "bg-brand-pink text-white shadow-md" : "text-neutral-500 hover:text-neutral-800"}`}
            >
              Creative & Design
            </button>
          </div>
          <h2 className="font-amatic text-5xl md:text-6xl font-bold text-neutral-800">
            {activeTab === "projects" ? "Project Highlights" : "Illustrations & Design"}
          </h2>
        </div>

        {activeTab === "projects" && (
          <div className="relative group">
            <button 
              onClick={() => {
                const slider = document.getElementById("projects-slider");
                if (slider) slider.scrollBy({ left: -350, behavior: "smooth" });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-20 bg-white p-3 rounded-full shadow-lg border border-neutral-100 text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <div 
              id="projects-slider"
              className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4 px-4 -mx-4 gap-6"
            >
            {projects.map((project, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={project.id} 
                className="w-[85vw] sm:w-[300px] md:w-[350px] shrink-0 snap-center"
              >
                <div className="glass-card rounded-3xl overflow-hidden flex flex-col h-full bg-white/80 border border-white shadow-sm hover:shadow-xl transition-all duration-500 group/card">
                  <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 flex gap-2">
                      {project.website && (
                        <a href={project.website} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-neutral-900 hover:text-brand-pink hover:scale-110 transition-transform">
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-neutral-900 hover:text-brand-pink hover:scale-110 transition-transform">
                          <FaGithub size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="text-[10px] font-jakarta font-bold tracking-wider uppercase text-brand-pink mb-1.5 block">{project.role}</span>
                      <h3 className="font-jakarta text-xl font-bold text-neutral-800 mb-1">{project.name}</h3>
                      <p className="text-xs font-medium text-neutral-500 mb-3">{project.tagline}</p>
                      <p className="text-neutral-600 line-clamp-3 text-xs leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.slice(0,3).map((tech, i) => (
                          <span key={i} className="text-[10px] font-medium px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-[10px] font-medium px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <Link href={`/projects/${project.id}`} className="inline-flex items-center text-sm text-brand-pink font-semibold hover:text-brand-pink-dark transition-colors group/link">
                        View Case Study 
                        <ArrowRight size={14} className="ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
            <button 
              onClick={() => {
                const slider = document.getElementById("projects-slider");
                if (slider) slider.scrollBy({ left: 350, behavior: "smooth" });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-20 bg-white p-3 rounded-full shadow-lg border border-neutral-100 text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {activeTab === "creative" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {creativeWorks.map((work, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={work.id} 
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-neutral-100"
              >
                <Image 
                  src={work.image} 
                  alt={work.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-jakarta font-bold text-lg mb-1">{work.name}</h3>
                  {work.link && (
                    <a href={work.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-white/80 hover:text-white transition-colors">
                      View Work <ExternalLink size={12} className="ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
