"use client";

import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [stage, setStage] = useState(0); 

  useEffect(() => {
    // 1. After 1.2s, draw completes, start blur/fade of text
    const t1 = setTimeout(() => {
      setStage(1);
    }, 1200);

    // 2. After 1.6s, start fading the entire overlay
    const t2 = setTimeout(() => {
      setStage(2);
    }, 1600);

    // 3. After 2.0s, completely hide the overlay
    const t3 = setTimeout(() => {
      setStage(3);
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (stage === 3) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#f5f0eb] flex items-center justify-center transition-opacity duration-300 ${stage === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className={`transition-all duration-400 ease-in-out ${stage >= 1 ? 'opacity-0 blur-[8px]' : 'opacity-100 blur-0'}`}>
        <svg viewBox="0 0 500 200" className="w-[80vw] md:w-[500px]">
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="middle"
            className="font-molle animate-draw-text text-7xl md:text-8xl lg:text-[120px]"
            fill="none"
            stroke="#e8a0b8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            Sayee
          </text>
        </svg>
      </div>

      <style jsx global>{`
        .animate-draw-text {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-signature 1.2s ease-in-out forwards;
        }
        @keyframes draw-signature {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
