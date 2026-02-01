import React, { useEffect } from 'react';
import { news } from '../data';
import { ScrollReveal } from './ScrollReveal';
import { ArrowDownIcon } from './Icons';

interface NewsPageProps {
  onBack: () => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen animate-fade-in-up">
       {/* Nav */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5E0D6]">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 group cursor-pointer text-[#1A1918]"
        >
          <div className="w-8 h-8 border border-[#1A1918]/30 rounded-full flex items-center justify-center group-hover:bg-[#1A1918] group-hover:text-white transition-all duration-300">
             <ArrowDownIcon className="w-3 h-3 rotate-90" />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Home</span>
        </button>
        <span className="text-[#C6A87C] text-xs tracking-[0.3em] uppercase">News & Updates</span>
      </div>

      <div className="pt-32 pb-24 container mx-auto px-6 max-w-5xl">
         <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl serif text-[#1A1918] mb-4 font-light">新闻动态</h1>
            <p className="text-[#8A8885] text-sm tracking-widest uppercase mb-20">Latest Stories from the Plateau</p>
         </ScrollReveal>

         <div className="space-y-20">
            {news.map((item, index) => (
               <ScrollReveal key={item.id} animation="fade-up" delay={index * 100}>
                  <div className="flex flex-col md:flex-row gap-10 group cursor-pointer">
                     <div className="w-full md:w-5/12 aspect-[4/3] overflow-hidden">
                        <img 
                           src={item.image} 
                           alt={item.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
                        />
                     </div>
                     <div className="w-full md:w-7/12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4">
                           <span className="text-[#C6A87C] text-xs font-bold uppercase tracking-widest">{item.category}</span>
                           <span className="w-8 h-[1px] bg-[#E5E0D6]"></span>
                           <span className="text-[#8A8885] text-xs tracking-wider">{item.date}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl serif text-[#1A1918] mb-6 group-hover:text-[#C6A87C] transition-colors leading-tight">
                           {item.title}
                        </h2>
                        <p className="text-[#5E5C58] leading-loose text-sm text-justify font-light">
                           {item.summary}
                        </p>
                        <div className="mt-8">
                           <span className="text-xs uppercase tracking-[0.2em] text-[#1A1918] border-b border-[#1A1918] pb-1 group-hover:text-[#C6A87C] group-hover:border-[#C6A87C] transition-colors">Read Full Story</span>
                        </div>
                     </div>
                  </div>
               </ScrollReveal>
            ))}
         </div>
      </div>
    </div>
  );
};