import React, { useEffect, useState } from 'react';
import { ProductData } from '../types';
import { ArrowDownIcon, MapPinIcon, ShieldCheckIcon, LeafIcon, MountainIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

interface ProductDetailProps {
  product: ProductData;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen animate-fade-in-up selection:bg-[#1A1918] selection:text-white pb-32">
      {/* 1. Navigation - Minimal & Sticky */}
      <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-[#1A1918] group-hover:border-[#1A1918] group-hover:text-white transition-all duration-300">
             <ArrowDownIcon className="w-3 h-3 rotate-90" />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 group-hover:text-[#1A1918] transition-colors">返回</span>
        </button>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A1918] hidden md:block">{product.subName}</span>
      </div>

      {/* 2. Hero Section: Split Screen Layout (Sticky Image) */}
      <section className="relative pt-24 md:pt-32 px-6 container mx-auto mb-24">
         <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Product Image (Sticky) */}
            <div className="w-full md:w-1/2 relative">
               <div className="sticky top-32 h-[60vh] md:h-[80vh] bg-[#F9F9F9] rounded-sm overflow-hidden flex items-center justify-center p-8">
                  <img 
                    src={product.detailImage || product.image} 
                    alt={product.name} 
                    className="max-w-full max-h-full object-contain drop-shadow-2xl mix-blend-multiply" 
                  />
                  {/* Floating Highlight Tags */}
                  <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                     {product.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest px-3 py-1 shadow-sm text-gray-600">{tag}</span>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right Column: Product Details & Specs (Scrollable) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
               <ScrollReveal animation="fade-up">
                  <span className="text-[#C6A87C] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">产品概览</span>
                  <h1 className="text-4xl md:text-6xl serif text-[#1A1918] mb-6 font-light">{product.name}</h1>
                  <p className="text-gray-500 text-sm md:text-base leading-loose font-light mb-10 text-justify">
                     {product.narrative}
                  </p>
               </ScrollReveal>

               {/* Variants Selection (The "Multiple Specs" requirement) */}
               {product.variants && (
                 <ScrollReveal animation="fade-up" delay={100}>
                   <div className="mb-10 border-t border-b border-gray-100 py-8">
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#1A1918]">可选规格</h3>
                      <div className="flex flex-col gap-3">
                         {product.variants.map((variant, i) => (
                           <div key={i} className="group flex items-center justify-between p-4 border border-gray-200 hover:border-[#1A1918] transition-all cursor-pointer">
                              <span className="text-sm text-gray-700 font-medium group-hover:text-[#1A1918]">{variant}</span>
                              <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:bg-[#1A1918] group-hover:border-[#1A1918] transition-colors"></div>
                           </div>
                         ))}
                      </div>
                   </div>
                 </ScrollReveal>
               )}

               {/* Quick Features */}
               <ScrollReveal animation="fade-up" delay={200}>
                   <div className="grid grid-cols-3 gap-4 mb-10">
                      {product.features.map((feature, i) => (
                         <div key={i} className="flex flex-col items-center text-center p-4 bg-gray-50">
                            {i === 0 && <ShieldCheckIcon className="w-5 h-5 mb-2 text-[#C6A87C]" />}
                            {i === 1 && <MountainIcon className="w-5 h-5 mb-2 text-[#C6A87C]" />}
                            {i === 2 && <LeafIcon className="w-5 h-5 mb-2 text-[#C6A87C]" />}
                            <span className="text-[10px] text-gray-600 uppercase tracking-wider">{feature}</span>
                         </div>
                      ))}
                   </div>
               </ScrollReveal>

               <button className="w-full bg-[#1A1918] text-white py-5 text-xs uppercase tracking-[0.3em] hover:bg-[#C6A87C] transition-colors duration-500">
                  立即咨询
               </button>
            </div>
         </div>
      </section>

      {/* 3. Origin Introduction: Cinematic Wide Banner */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center mb-24 bg-[#1A1918]">
         {/* Background with Dark Overlay */}
         <div className="absolute inset-0 z-0">
             <img 
               src={product.originImage || "https://images.unsplash.com/photo-1547986042-75b508f72538?q=80&w=1600&auto=format&fit=crop"} 
               alt="Origin Landscape" 
               className="w-full h-full object-cover grayscale-[30%]"
             />
             <div className="absolute inset-0 bg-black/50"></div>
         </div>
         
         <div className="relative z-10 text-center text-white px-6 max-w-4xl">
             <ScrollReveal animation="fade-up">
               <div className="flex items-center justify-center gap-2 mb-4 text-[#C6A87C]">
                  <MapPinIcon className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">产地溯源</span>
               </div>
               <h2 className="text-3xl md:text-5xl serif mb-6 drop-shadow-lg">{product.origin}</h2>
               {/* GI Images - Doubled Size */}
               {product.giImages && product.giImages.length > 0 && (
                   <div className="flex flex-wrap justify-center gap-8 mt-12">
                       {product.giImages.map((img, i) => (
                           <img 
                               key={i} 
                               src={img} 
                               alt="GI Certificate" 
                               className="h-20 md:h-24 w-auto object-contain bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:scale-105 transition-transform duration-300" 
                           />
                       ))}
                   </div>
               )}
             </ScrollReveal>
         </div>
      </section>

      {/* 4. Technical Parameters (Single Version) */}
      <section className="py-12 bg-gray-50 mb-24">
         <div className="container mx-auto px-6 max-w-4xl">
             <ScrollReveal animation="fade-up">
                 <div className="text-center mb-12">
                     <h2 className="text-2xl serif text-[#1A1918] mb-2">技术参数</h2>
                     <p className="text-xs text-gray-400 uppercase tracking-widest">严苛标准</p>
                 </div>
                 <div className="bg-white shadow-sm border border-gray-100">
                     {product.detailedSpecs?.map((spec, i) => (
                         <div key={i} className="flex flex-col sm:flex-row border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                             <div className="w-full sm:w-1/3 p-5 bg-gray-50/50 sm:border-r border-gray-100">
                                 <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{spec.label}</span>
                             </div>
                             <div className="w-full sm:w-2/3 p-5">
                                 <span className="text-sm font-serif text-[#1A1918]">{spec.value}</span>
                             </div>
                         </div>
                     ))}
                 </div>
             </ScrollReveal>
         </div>
      </section>

      {/* 5. Core Advantages (Masonry/Grid) */}
      {product.detailedFeatures && (
        <section className="container mx-auto px-6 mb-24">
           <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl serif text-[#1A1918] mb-4">核心优势</h2>
               <div className="w-10 h-[2px] bg-[#1A1918] mx-auto"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.detailedFeatures.map((feature, i) => (
                 <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                    <div className="group">
                        <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                             {feature.image && (
                                <img 
                                    src={feature.image} 
                                    alt={feature.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                />
                             )}
                        </div>
                        <div className="border-l-2 border-[#1A1918] pl-6 transition-all duration-300 group-hover:border-[#C6A87C]">
                             <span className="text-4xl font-serif text-gray-200 block mb-2 -ml-1">0{i + 1}</span>
                             <h3 className="text-xl serif text-[#1A1918] mb-3">{feature.title}</h3>
                             <p className="text-sm text-gray-500 font-light leading-relaxed text-justify">{feature.text}</p>
                        </div>
                    </div>
                 </ScrollReveal>
              ))}
           </div>
        </section>
      )}

      {/* 6. Tasting Guide (Horizontal Steps) */}
      {product.usageMethods && (
        <section className="bg-[#1A1918] text-white py-24 mb-24">
           <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                  <div>
                      <span className="text-[#C6A87C] text-xs font-bold uppercase tracking-[0.3em] mb-2 block">赏味方式</span>
                      <h2 className="text-3xl serif text-white">赏味指南</h2>
                  </div>
                  <p className="text-gray-400 text-xs font-light mt-4 md:mt-0">雪域珍宝的最佳享用方式</p>
              </div>

              <div className="space-y-12">
                  {product.usageMethods.map((method, i) => (
                      <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                          <div className="flex flex-col md:flex-row gap-8 items-center group">
                              <div className="w-full md:w-1/3 aspect-video overflow-hidden border border-white/10">
                                   {method.image && (
                                       <img src={method.image} alt={method.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                   )}
                              </div>
                              <div className="w-full md:w-2/3">
                                  <div className="flex items-center gap-4 mb-4">
                                      <span className="text-2xl font-serif text-[#C6A87C] italic">步骤 {i + 1}</span>
                                      <div className="h-[1px] flex-grow bg-white/10"></div>
                                  </div>
                                  <h3 className="text-xl serif text-white mb-2">{method.title}</h3>
                                  <p className="text-sm text-gray-400 font-light leading-loose">{method.description}</p>
                              </div>
                          </div>
                      </ScrollReveal>
                  ))}
              </div>
           </div>
        </section>
      )}

      {/* 7. FAQ (Minimal Accordion) */}
      {product.qna && (
          <section className="container mx-auto px-6 max-w-3xl">
             <ScrollReveal animation="fade-up">
                <div className="text-center mb-16">
                     <h3 className="text-[#1A1918] text-xs font-bold uppercase tracking-[0.2em] mb-4">常见问题</h3>
                     <h2 className="text-3xl serif text-[#1A1918]">常见问题解答</h2>
                </div>
             </ScrollReveal>
             
             <div className="border-t border-gray-200">
                 {product.qna.map((item, i) => (
                     <div key={i} className="border-b border-gray-200">
                         <button 
                            onClick={() => toggleFaq(i)}
                            className="w-full flex justify-between items-center py-6 text-left group"
                         >
                             <span className="serif text-lg text-[#1A1918] group-hover:text-[#C6A87C] transition-colors pr-8">{item.question}</span>
                             <span className={`text-2xl font-light text-gray-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-45 text-[#1A1918]' : ''}`}>+</span>
                         </button>
                         <div 
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                         >
                             <p className="text-gray-500 font-light text-sm leading-loose pl-4 border-l border-[#C6A87C]">
                                 {item.answer}
                             </p>
                         </div>
                     </div>
                 ))}
             </div>
          </section>
      )}
    </div>
  );
};