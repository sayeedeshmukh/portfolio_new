"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:h-screen flex flex-col justify-center overflow-hidden pt-20 lg:pt-0 px-6 lg:px-0">
      {/* Fixed Background Big Text */}
      <div className="fixed inset-0 flex flex-col items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden z-[-10]">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
          className="font-molle text-[25vw] md:text-[280px] text-brand-pink leading-none tracking-wider whitespace-nowrap text-center"
        >
          Sayee
        </motion.h1>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
          className="font-molle text-[20vw] md:text-[240px] text-brand-pink leading-none tracking-wider whitespace-nowrap text-center"
        >
          Deshmukh
        </motion.h1>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-20 flex-grow flex flex-col justify-center px-0 lg:px-8">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col space-y-6 lg:w-[60%] xl:w-[55%] pb-12 lg:pb-0 pt-8"
        >
          <p className="font-reenie text-3xl md:text-4xl text-neutral-600">
            Hi. Since you're new here,<br/>let me be your guide.
          </p>
          <h2 className="font-amatic text-7xl md:text-8xl lg:text-[140px] font-bold leading-none text-neutral-800">
            This is <span className="text-brand-pink">Sayee.</span>
          </h2>
          
          <div className="inline-block mt-4">
            <span className="font-jakarta font-semibold text-sm md:text-base tracking-widest uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white shadow-sm inline-flex items-center">
              Creative Developer & Designer
            </span>
          </div>

          <p className="text-neutral-500 max-w-lg text-lg leading-relaxed mt-4 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm">
            I design and build thoughtful web experiences that blend logic with aesthetics. Currently pursuing B.Tech in Artificial Intelligence & Machine Learning, with a strong focus on frontend development and user-centric design.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 bg-neutral-900 text-white rounded-full font-jakarta font-medium hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
              View Work
            </a>
            <a href="mailto:sayeedeshmukh06@gmail.com" className="px-8 py-3 bg-white text-neutral-900 border border-neutral-200 rounded-full font-jakarta font-medium hover:border-brand-pink hover:text-brand-pink transition-colors shadow-sm hover:shadow-md hover:-translate-y-1 transform duration-300">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Image (Flush to edge, no background card) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.0, type: "spring", bounce: 0.4 }}
        className="relative lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-[45vw] xl:w-[40vw] h-[40vh] md:h-[50vh] lg:h-[85vh] flex flex-col items-center justify-end z-10"
      >
        <Image 
          src="/fornal photo.png" 
          alt="Sayee Deshmukh" 
          width={800} 
          height={1000} 
          priority
          className="object-contain object-bottom w-auto h-full pointer-events-none"
        />
      </motion.div>
    </section>
  );
}
