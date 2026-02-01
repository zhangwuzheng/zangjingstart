import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Parallax } from './Parallax';

export const BrandStory: React.FC = () => {
  return (
    <section id="brand" className="py-24 md:py-40 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative Background Text - Parallax Effect */}
      <div className="absolute top-20 right-0 z-0 pointer-events-none select-none opacity-[0.03]">
        <Parallax speed={-0.15}>
            <div className="text-[12rem] md:text-[18rem] font-serif text-[#1A1918] leading-none tracking-tighter">
                STORY
            </div>
        </Parallax>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          
          {/* Image/Visual Side */}
          <div className="w-full md:w-5/12 relative">
             <Parallax speed={0.05}>
                <ScrollReveal animation="scale-up" duration={1200}>
                <div className="aspect-[3/4] overflow-hidden shadow-2xl group bg-[#E5E0D6]">
                    <img 
                        src="https://zangjingtech.oss-cn-chengdu.aliyuncs.com/ZANGJINGSTART/sy01.PNG" 
                        alt="Xizang Landscape" 
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale-[20%]"
                        loading="lazy"
                    />
                </div>
                </ScrollReveal>
             </Parallax>
             
             <ScrollReveal animation="fade-up" delay={400} className="absolute -bottom-12 -right-12 z-20 hidden md:block">
               <div className="w-56 h-56 bg-[#C6A87C] p-8 flex flex-col justify-center text-white shadow-xl bg-opacity-95 backdrop-blur-sm">
                  <span className="text-xs uppercase tracking-[0.2em] mb-4 opacity-70">Mission</span>
                  <p className="serif text-2xl leading-relaxed font-light">守护<br/>雪域<br/>珍稀</p>
               </div>
             </ScrollReveal>
          </div>

          {/* Text Content Side */}
          <div className="w-full md:w-7/12 pt-12 md:pl-12">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-6">
                 <span className="h-[1px] w-8 bg-[#C6A87C]"></span>
                 <h4 className="text-[#C6A87C] tracking-[0.3em] text-xs font-medium uppercase">Brand Positioning</h4>
              </div>
              <h2 className="text-4xl md:text-6xl text-[#1A1918] serif font-light mb-12 leading-tight">
                守护雪域珍稀<br />
                <span className="text-[#A8A49D] text-3xl md:text-5xl italic font-thin block mt-2">传递藏地价值</span>
              </h2>
            </ScrollReveal>
            
            <div className="space-y-12 text-[#5E5C58] leading-loose">
              <ScrollReveal animation="fade-up" delay={200}>
                <div>
                  <h3 className="text-lg text-[#2C2B29] serif mb-4 tracking-wide border-b border-[#E5E0D6] pb-2 inline-block">品牌定位</h3>
                  <p className="font-light text-sm md:text-base text-justify">
                    藏境山水—高端西藏特产品牌，植根4500米+高海拔净土，甄选那曲虫草、7100冰川水、林芝野生藏松茸等珍稀资源。不止传递高原特产，更承载雪域生活哲学，让自然之馈与生活智慧直抵心间。
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={400}>
                <div>
                  <h3 className="text-lg text-[#2C2B29] serif mb-4 tracking-wide border-b border-[#E5E0D6] pb-2 inline-block">品牌使命</h3>
                  <p className="font-light text-sm md:text-base text-justify">
                    守护雪域珍稀、传递藏地价值，将西藏高端特产带向世界，传递高原魅力与生态文化，推动行业可持续发展，赋能当地经济与文化续航。
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};