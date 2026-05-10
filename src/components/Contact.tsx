"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden bg-brand-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-amatic text-7xl md:text-8xl font-bold text-neutral-800 mb-6">
            and that's a wrap.
          </h2>
          <p className="font-reenie text-4xl text-neutral-500 mb-12">
            Thanks for stopping by.<br/>
            Let's build something meaningful together.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a 
            href="mailto:sayeedeshmukh06@gmail.com" 
            className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md hover:border-brand-pink/30 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors">
              <Mail size={18} />
            </div>
            <span className="font-jakarta font-medium text-neutral-700">Email Me</span>
          </a>

          <a 
            href="https://github.com/sayeedeshmukh" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md hover:border-brand-pink/30 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-[#333] group-hover:text-white transition-colors">
              <FaGithub size={18} />
            </div>
            <span className="font-jakarta font-medium text-neutral-700">GitHub</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/sayee-deshmukh-aa7633290/" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md hover:border-brand-pink/30 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
              <FaLinkedin size={18} />
            </div>
            <span className="font-jakarta font-medium text-neutral-700">LinkedIn</span>
          </a>
          
          <a 
            href="https://www.behance.net/" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md hover:border-brand-pink/30 transition-all duration-300 w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-[#1769ff] group-hover:text-white transition-colors">
              <FaBehance size={18} />
            </div>
            <span className="font-jakarta font-medium text-neutral-700">Behance</span>
          </a>
        </motion.div>
        
        <div className="mt-16 text-neutral-400 text-sm font-medium">
          © {new Date().getFullYear()} Sayee Deshmukh. Designed & Built with ❤️
        </div>
      </div>
    </section>
  );
}
