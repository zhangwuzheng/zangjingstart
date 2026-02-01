import React from 'react';
import { products } from '../data';
import { ScrollReveal } from './ScrollReveal';
import { Parallax } from './Parallax';

interface ProductsProps {
  onProductClick: (productId: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
  return (
    <section id="products" className="bg-[#FDFBF7] overflow-hidden">
      
      {/* Section Header */}
      <div className="py-32 text-center">
         <ScrollReveal animation="fade-up">
           <div className="flex justify-center items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#C6A87C]"></span>
              <h4 className="text-[#C6A87C] tracking-[0.3em] text-xs font-medium uppercase">Collection</h4>
              <span className="w-12 h-[1px] bg-[#C6A87C]"></span>
           </div>
           <h2 className="text-4xl md:text-5xl text-[#1A1918] serif font-light tracking-wide">雪域珍选 · 核心产品</h2>
         </ScrollReveal>
      </div>

      <div className="flex flex-col gap-0">
        {products.map((product, index) => (
          <div key={product.id} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[90vh]`}>
            
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative group overflow-hidden h-[60vh] md:h-auto cursor-pointer" onClick={() => onProductClick(product.id)}>
               <Parallax speed={0.1} className="h-full w-full">
                <ScrollReveal animation="scale-up" duration={1500} className="w-full h-full">
                    <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    />
                </ScrollReveal>
               </Parallax>
               
               {/* Elegant Numbering */}
               <div className={`absolute ${index % 2 === 0 ? 'right-10' : 'left-10'} bottom-10 z-20`}>
                  <Parallax speed={-0.05}>
                    <ScrollReveal animation="fade-up" delay={500}>
                        <span className="text-8xl md:text-9xl font-serif italic text-white/80 drop-shadow-md">
                        {index + 1}
                        </span>
                    </ScrollReveal>
                  </Parallax>
               </div>
               
               <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white border border-white px-8 py-3 tracking-[0.3em] uppercase text-xs backdrop-blur-sm">View Details</span>
               </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#FDFBF7] relative">
               {/* Watermark Parallax */}
               <div className="absolute top-20 right-10 z-0 pointer-events-none opacity-[0.04] overflow-hidden mix-blend-multiply">
                  <Parallax speed={-0.1}>
                    <div className="text-[5rem] md:text-[8rem] font-serif text-[#1A1918] leading-none whitespace-nowrap tracking-tighter uppercase">
                        {product.id}
                    </div>
                  </Parallax>
               </div>

               <div className="relative z-10 max-w-lg">
                  <ScrollReveal animation="fade-up">
                    <div className="flex flex-wrap gap-3 mb-8">
                      {product.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-1 border border-[#D4D4D4] text-[#8A8885] text-[10px] tracking-[0.2em] uppercase hover:border-[#C6A87C] hover:text-[#C6A87C] transition-colors duration-500">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-5xl serif text-[#1A1918] mb-3 font-light">{product.name}</h3>
                    <p className={`text-xs font-bold tracking-[0.3em] uppercase mb-10 ${product.accentColor} opacity-80`}>{product.subName}</p>

                    <p className="text-[#5E5C58] leading-loose mb-10 font-light text-sm md:text-base text-justify">
                      {product.narrative}
                    </p>

                    <div className="mb-10">
                       <h5 className="text-[#1A1918] serif text-lg mb-4">Highlights</h5>
                       <ul className="space-y-3">
                         {product.features.map((feature, i) => (
                           <li key={i} className="flex items-center gap-3 text-xs text-[#8A8885] tracking-wide uppercase">
                              <span className={`w-1 h-1 rounded-full ${product.accentColor.replace('text', 'bg')}`}></span>
                              {feature}
                           </li>
                         ))}
                       </ul>
                    </div>

                    <button 
                      onClick={() => onProductClick(product.id)}
                      className="px-10 py-4 border border-[#1A1918] text-[#1A1918] text-xs tracking-[0.2em] hover:bg-[#1A1918] hover:text-white transition-all duration-500 uppercase"
                    >
                      Discover More
                    </button>
                  </ScrollReveal>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};