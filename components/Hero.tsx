import React, { useState } from 'react';
import { MistEffect } from './MistEffect';
import { ScrollReveal } from './ScrollReveal';
import { Parallax } from './Parallax';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30; // Movement range
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0C0C0B]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0C0C0B]">
        <Parallax speed={0.3} className="w-full h-full">
            <div className="w-full h-full scale-110 transition-transform duration-[2s] ease-out" 
                style={{ transform: `scale(1.1) translate(${-offset.x * 0.5}px, ${-offset.y * 0.5}px)` }}>
                <img
                src="https://t9.baidu.com/it/u=2741309925,2415829049&fm=193" 
                alt="Xizang Landscape"
                className="w-full h-full object-cover opacity-50 animate-pulse-slow"
                loading="eager"
                />
            </div>
        </Parallax>
        
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0B]/40 via-transparent to-[#0C0C0B] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[#0C0C0B]/30 pointer-events-none"></div>
        
        {/* Circular Design Element - Thinner lines */}
        <div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] rounded-full border border-white/[0.03] pointer-events-none animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute right-[-5%] top-[-5%] w-[40vw] h-[40vw] rounded-full border border-white/[0.05] pointer-events-none"></div>
      </div>

      <MistEffect />

      <div className="container relative z-10 h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-12 md:px-24">
        
        {/* Left Side: Modern Tagline */}
        <div 
          className="flex flex-col items-start md:w-1/2 mt-20 md:mt-0"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, transition: 'transform 0.2s ease-out' }}
        >
           <ScrollReveal animation="fade-up" delay={200}>
             <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-[1px] bg-[#C6A87C]"></div>
                <span className="text-[#C6A87C] tracking-[0.4em] uppercase text-xs font-medium">ZANGJINGTECH</span>
             </div>
           </ScrollReveal>
           
           <ScrollReveal animation="fade-up" delay={400}>
             {/* Use font-light for elegance, increased spacing */}
             <h1 className="text-4xl md:text-7xl text-[#F2F0EB] font-light leading-tight serif mb-10 drop-shadow-2xl tracking-wide">
               <span className="block mb-2">山有藏珍</span>
               <span className="block text-[#8A8885] italic">水至净境</span>
             </h1>
           </ScrollReveal>

           <ScrollReveal animation="fade-up" delay={600}>
             <p className="text-[#B0AEA8] max-w-md leading-loose font-light tracking-widest text-sm border-l border-[#C6A87C]/30 pl-6">
               守护雪域珍稀，传递藏地价值。<br/>
               <span className="text-xs opacity-70 mt-2 block">Bringing the charm of the plateau to the world.</span>
             </p>
           </ScrollReveal>
        </div>

        {/* Right Side: Traditional Vertical Text */}
        <div className="hidden md:flex h-1/2 flex-row-reverse gap-12 items-start opacity-90"
             style={{ transform: `translate(${-offset.x * 0.8}px, ${-offset.y * 0.8}px)`, transition: 'transform 0.2s ease-out' }}
        >
           <ScrollReveal animation="fade-in" delay={800} className="h-full">
             <div className="vertical-text text-[#C6A87C] text-sm tracking-[1.2em] uppercase h-full border-l border-white/[0.08] pl-6 py-8 font-light">
                ZANGJINGTECH
             </div>
           </ScrollReveal>
           <ScrollReveal animation="fade-in" delay={1000} className="h-full">
             <div className="vertical-text text-[#E5E5E5] text-3xl tracking-[0.6em] font-light serif h-full py-8 text-shadow-sm">
                山有藏珍 水至净境
             </div>
           </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator - Minimalist */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-4 z-20">
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
      </div>
    </section>
  );
};