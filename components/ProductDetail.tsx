import React, { useEffect } from 'react';
import { ProductData } from '../types';
import { ArrowDownIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import { Parallax } from './Parallax';

interface ProductDetailProps {
  product: ProductData;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen animate-fade-in-up">
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
      <section className="relative h-[80vh] w-full overflow-hidden">
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

      {/* Basic Specs */}
      <section className="py-20 bg-white border-b border-[#E5E0D6]">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <h3 className="text-[#C6A87C] text-xs font-bold uppercase tracking-[0.2em] mb-4">Origin & Specs</h3>
               <h2 className="text-3xl serif text-[#1A1918] mb-8">产地与规格</h2>
               <div className="space-y-6 text-[#5E5C58]">
                  <div>
                     <span className="block text-xs text-[#8A8885] uppercase tracking-wider mb-1">产地 Source</span>
                     <p className="serif text-lg">{product.origin}</p>
                  </div>
                  <div>
                     <span className="block text-xs text-[#8A8885] uppercase tracking-wider mb-1">规格 Specification</span>
                     <p className="serif text-lg">{product.specs}</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap gap-4 content-start">
               {product.tags.map((tag, i) => (
                  <span key={i} className="px-6 py-3 border border-[#E5E0D6] text-[#5E5C58] text-sm tracking-widest">{tag}</span>
               ))}
            </div>
         </div>
      </section>

      {/* Detailed Features */}
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
                    <div className="bg-white p-10 shadow-sm hover:shadow-md transition-shadow duration-500 h-full border-t-2 border-transparent hover:border-[#C6A87C]">
                       <span className="text-4xl text-[#E5E0D6] serif font-bold mb-4 block">0{i + 1}</span>
                       <h3 className="text-xl serif text-[#1A1918] mb-4">{feature.title}</h3>
                       <p className="text-[#8A8885] leading-loose text-sm text-justify">
                          {feature.text}
                       </p>
                    </div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Certificates & Reports */}
      <section className="py-24 bg-[#1A1918] text-[#E5E5E5]">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
               <div>
                  <h4 className="text-[#C6A87C] tracking-[0.2em] text-xs font-medium uppercase mb-4">Trust & Safety</h4>
                  <h2 className="text-3xl serif font-light">资质与检测报告</h2>
               </div>
               <p className="text-[#8A8885] text-xs tracking-wide mt-4 md:mt-0">
                  Transparency is our promise.<br/>Every batch is tested.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Certificates */}
               {product.certificates?.map((cert, i) => (
                  <ScrollReveal key={`cert-${i}`} animation="fade-up" delay={i * 100}>
                     <div className="group cursor-zoom-in">
                        <div className="aspect-[3/4] overflow-hidden bg-white/5 mb-4 relative">
                           <img src={cert} alt="Certificate" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                           <div className="absolute inset-0 bg-[#C6A87C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-xs tracking-widest uppercase border border-white px-4 py-2">View</span>
                           </div>
                        </div>
                        <p className="text-xs text-center text-[#8A8885] tracking-widest uppercase">Qualification</p>
                     </div>
                  </ScrollReveal>
               ))}
               
               {/* Reports */}
               {product.reports?.map((report, i) => (
                  <ScrollReveal key={`rep-${i}`} animation="fade-up" delay={(product.certificates?.length || 0) * 100 + i * 100}>
                     <div className="group cursor-zoom-in">
                        <div className="aspect-[3/4] overflow-hidden bg-white/5 mb-4 relative">
                           <img src={report.image} alt={report.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-[#C6A87C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-xs tracking-widest uppercase border border-white px-4 py-2">View</span>
                           </div>
                        </div>
                        <p className="text-xs text-center text-[#8A8885] tracking-widest uppercase">{report.title}</p>
                     </div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};