import React, { useEffect, useRef, useState } from 'react';
import { ProductData } from '../types';
import { ArrowDownIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import { Parallax } from './Parallax';

interface ProductDetailProps {
  product: ProductData;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  // Combine certificates and reports into one array for the slider
  const galleryItems = [
    ...(product.certificates || []).map(src => ({ type: 'Qualification', title: '资质认证', image: src })),
    ...(product.reports || []).map(r => ({ type: 'Report', title: r.title, image: r.image }))
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 340; // Card width + gap
      const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen animate-fade-in-up selection:bg-[#C6A87C] selection:text-white">
      {/* Navigation Bar Placeholder for Back Button */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
             <ArrowDownIcon className="w-4 h-4 rotate-90" />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
           <img src={product.detailImage || product.image} alt={product.name} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-6">
           <div className="max-w-4xl">
              <ScrollReveal animation="fade-up">
                <span className={`block text-xs md:text-sm tracking-[0.4em] uppercase mb-6 ${product.accentColor.replace('text-', 'text-white/90 ')}`}>{product.subName}</span>
                <h1 className="text-5xl md:text-7xl serif font-light mb-8 tracking-wide">{product.name}</h1>
                <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
                   {product.narrative}
                </p>
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Basic Specs & Introduction */}
      <section className="py-24 bg-white border-b border-[#E5E0D6]">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
               <ScrollReveal animation="fade-up">
                   <h3 className="text-[#C6A87C] text-xs font-bold uppercase tracking-[0.2em] mb-4">Origin & Specs</h3>
                   <h2 className="text-3xl serif text-[#1A1918] mb-8">产地与规格</h2>
                   <div className="space-y-6 text-[#5E5C58]">
                      <div>
                         <span className="block text-xs text-[#8A8885] uppercase tracking-wider mb-2">产地 Source</span>
                         <p className="serif text-xl text-[#1A1918]">{product.origin}</p>
                      </div>
                      <div>
                         <span className="block text-xs text-[#8A8885] uppercase tracking-wider mb-2">规格 Specification</span>
                         <p className="serif text-xl text-[#1A1918]">{product.specs}</p>
                      </div>
                      <div className="pt-6">
                        <div className="flex flex-wrap gap-3">
                            {product.tags.map((tag, i) => (
                                <span key={i} className="px-5 py-2 border border-[#E5E0D6] text-[#5E5C58] text-xs tracking-widest uppercase">{tag}</span>
                            ))}
                        </div>
                      </div>
                   </div>
               </ScrollReveal>
            </div>
            
            {/* Detailed Specs Table (New) */}
            <div className="bg-[#FDFBF7] p-10 border border-[#E5E0D6]">
                <ScrollReveal animation="fade-up" delay={100}>
                    <h3 className="serif text-xl text-[#1A1918] mb-6 pb-4 border-b border-[#E5E0D6]">详细参数</h3>
                    <div className="space-y-4">
                        {product.detailedSpecs ? (
                            product.detailedSpecs.map((spec, i) => (
                                <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-[#E5E0D6]/50 last:border-0">
                                    <span className="text-[#8A8885] font-light">{spec.label}</span>
                                    <span className="text-[#1A1918] serif font-medium">{spec.value}</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-[#8A8885]">暂无详细参数</p>
                        )}
                    </div>
                </ScrollReveal>
            </div>
         </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-[#FDFBF7]">
         <div className="container mx-auto px-6">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-20">
                 <h2 className="text-3xl md:text-4xl serif text-[#1A1918]">产品核心特点</h2>
                 <div className="w-12 h-[1px] bg-[#C6A87C] mx-auto mt-6"></div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {product.detailedFeatures?.map((feature, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                    <div className="bg-white p-10 shadow-sm hover:shadow-lg transition-all duration-500 h-full border-t-2 border-transparent hover:border-[#C6A87C] group">
                       <span className="text-4xl text-[#E5E0D6] serif font-bold mb-4 block group-hover:text-[#C6A87C] transition-colors">0{i + 1}</span>
                       <h3 className="text-xl serif text-[#1A1918] mb-4">{feature.title}</h3>
                       <p className="text-[#8A8885] leading-loose text-sm text-justify font-light">
                          {feature.text}
                       </p>
                    </div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Usage Methods Section (Redesigned to match Features) */}
      {product.usageMethods && (
        <section className="py-24 bg-white border-b border-[#E5E0D6]">
           <div className="container mx-auto px-6">
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-20">
                     <h4 className="text-[#C6A87C] tracking-[0.2em] text-xs font-medium uppercase mb-4">How to Enjoy</h4>
                     <h2 className="text-3xl md:text-4xl serif text-[#1A1918]">赏味指南</h2>
                     <div className="w-12 h-[1px] bg-[#C6A87C] mx-auto mt-6"></div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {product.usageMethods.map((method, i) => (
                    <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                        <div className="bg-[#FDFBF7] p-10 shadow-sm hover:shadow-lg transition-all duration-500 h-full border-t-2 border-transparent hover:border-[#C6A87C] group">
                           <span className="text-4xl text-[#E5E0D6] serif font-bold mb-4 block group-hover:text-[#C6A87C] transition-colors italic">0{i + 1}</span>
                           <h3 className="text-xl serif text-[#1A1918] mb-4">{method.title}</h3>
                           <p className="text-[#8A8885] leading-loose text-sm text-justify font-light">
                              {method.description}
                           </p>
                        </div>
                    </ScrollReveal>
                  ))}
              </div>
           </div>
        </section>
      )}
      
      {/* FAQ Section (New) */}
      {product.qna && (
          <section className="py-24 bg-[#FDFBF7]">
             <div className="container mx-auto px-6 max-w-4xl">
                 <ScrollReveal animation="fade-up">
                    <div className="text-center mb-16">
                         <h4 className="text-[#C6A87C] tracking-[0.2em] text-xs font-medium uppercase mb-4">Q&A</h4>
                         <h2 className="text-3xl serif text-[#1A1918]">常见问题</h2>
                    </div>
                 </ScrollReveal>
                 
                 <div className="space-y-4">
                     {product.qna.map((item, i) => (
                         <ScrollReveal key={i} animation="fade-up" delay={i * 50}>
                             <div className="bg-white border border-[#E5E0D6] overflow-hidden">
                                 <button 
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-[#FAFAFA] transition-colors"
                                 >
                                     <span className={`serif text-lg ${activeFaq === i ? 'text-[#C6A87C]' : 'text-[#1A1918]'}`}>{item.question}</span>
                                     <div className={`w-6 h-6 rounded-full border border-[#D4D4D4] flex items-center justify-center transition-transform duration-300 ${activeFaq === i ? 'rotate-180 border-[#C6A87C] text-[#C6A87C]' : 'text-[#999]'}`}>
                                        <ArrowDownIcon className="w-3 h-3" />
                                     </div>
                                 </button>
                                 <div 
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                 >
                                     <div className="p-6 pt-0 text-[#8A8885] font-light text-sm leading-loose">
                                         {item.answer}
                                     </div>
                                 </div>
                             </div>
                         </ScrollReveal>
                     ))}
                 </div>
             </div>
          </section>
      )}

      {/* Certificates & Reports Slideshow */}
      <section className="py-32 bg-[#1A1918] text-[#E5E5E5] overflow-hidden">
         <div className="container mx-auto px-6 relative">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
               <div>
                  <h4 className="text-[#C6A87C] tracking-[0.2em] text-xs font-medium uppercase mb-4">Trust & Safety</h4>
                  <h2 className="text-3xl serif font-light">资质与检测报告</h2>
               </div>
               
               {/* Controls */}
               <div className="flex gap-4 mt-8 md:mt-0">
                  <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-white/20 hover:border-[#C6A87C] hover:text-[#C6A87C] flex items-center justify-center transition-all duration-300 active:scale-95">
                     <ArrowDownIcon className="w-4 h-4 rotate-90" />
                  </button>
                  <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-white/20 hover:border-[#C6A87C] hover:text-[#C6A87C] flex items-center justify-center transition-all duration-300 active:scale-95">
                     <ArrowDownIcon className="w-4 h-4 -rotate-90" />
                  </button>
               </div>
            </div>

            {/* Slider Container */}
            <div 
               ref={scrollContainerRef}
               className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
               style={{ scrollBehavior: 'smooth' }}
            >
               {galleryItems.length > 0 ? (
                 galleryItems.map((item, i) => (
                    <div key={i} className="flex-none w-[280px] md:w-[320px] snap-start group select-none">
                       <ScrollReveal animation="fade-up" delay={i * 50} className="h-full">
                         <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6 border border-white/5 transition-all duration-500 group-hover:border-[#C6A87C]/50">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                              draggable={false}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            
                            {/* Zoom Icon Hint */}
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                               <div className="w-4 h-4 border border-white/60 rounded-full"></div>
                            </div>
                         </div>
                         
                         <div className="pl-2 border-l border-[#C6A87C] transition-all duration-300 group-hover:pl-4">
                            <p className="text-[#C6A87C] text-[10px] tracking-[0.2em] uppercase mb-1">{item.type}</p>
                            <h4 className="serif text-lg text-[#E5E5E5] group-hover:text-white transition-colors">{item.title}</h4>
                         </div>
                       </ScrollReveal>
                    </div>
                 ))
               ) : (
                  <div className="w-full text-center py-10 text-white/30 text-sm tracking-widest">
                     暂无相关报告
                  </div>
               )}
               
               {/* Padding Right for scroll feeling */}
               <div className="w-12 shrink-0"></div>
            </div>
         </div>
      </section>
    </div>
  );
};