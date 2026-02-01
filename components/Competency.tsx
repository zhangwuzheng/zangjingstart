import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Competency: React.FC = () => {
  return (
    <section className="py-32 bg-[#F5F2EB]">
       <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 mb-20 items-end border-b border-[#D4D4D4] pb-10">
             <div className="md:w-1/3">
                <ScrollReveal animation="fade-up">
                  <h4 className="text-[#C6A87C] tracking-[0.3em] text-xs font-medium mb-4 uppercase">Competency</h4>
                  <h2 className="text-3xl md:text-4xl text-[#1A1918] serif font-light">实力筑基 · 核心能力</h2>
                </ScrollReveal>
             </div>
             <div className="md:w-2/3 flex justify-end">
                <p className="text-[#8A8885] text-sm max-w-md font-light leading-relaxed text-right hidden md:block">
                  依托国企背景与完善的供应链体系，<br/>为雪域珍宝的每一次抵达保驾护航。
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {/* Item 1 */}
             <ScrollReveal animation="fade-up" delay={100}>
               <div className="bg-white p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-700 group h-full">
                  <div className="h-56 mb-8 overflow-hidden bg-[#F0EFED]">
                     <img src="https://n.sinaimg.cn/spider20230814/100/w1500h1000/20230814/966a-64406a6f1b90bd964c758942ce36ac2b.jpg" alt="Quality Control" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] grayscale-[30%] group-hover:grayscale-0" loading="lazy" />
                  </div>
                  <h3 className="text-xl serif font-normal text-[#1A1918] mb-4 group-hover:text-[#C6A87C] transition-colors">严苛品控与权威保障</h3>
                  <div className="w-8 h-[1px] bg-[#C6A87C] mb-4 opacity-50"></div>
                  <p className="text-[#8A8885] text-xs leading-loose">三重权威认证：国企联合背书 + 国家地理标志。</p>
                  <p className="text-[#8A8885] text-xs leading-loose">区块链全程溯源：技术赋能，产品源头、流转全程透明可查。</p>
               </div>
             </ScrollReveal>

             {/* Item 2 */}
             <ScrollReveal animation="fade-up" delay={200}>
               <div className="bg-white p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-700 group h-full">
                  <div className="h-56 mb-8 overflow-hidden bg-[#F0EFED]">
                     <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop" alt="Logistics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] grayscale-[30%] group-hover:grayscale-0" loading="lazy" />
                  </div>
                  <h3 className="text-xl serif font-normal text-[#1A1918] mb-4 group-hover:text-[#C6A87C] transition-colors">供应链与渠道实力</h3>
                  <div className="w-8 h-[1px] bg-[#C6A87C] mb-4 opacity-50"></div>
                  <p className="text-[#8A8885] text-xs leading-loose">仓储物流网络：藏区多地设仓，高效流通新鲜直达。</p>
                  <p className="text-[#8A8885] text-xs leading-loose">专业冷链配送：覆盖最后一公里，高原特产品质无损。</p>
               </div>
             </ScrollReveal>

             {/* Item 3 */}
             <ScrollReveal animation="fade-up" delay={300}>
               <div className="bg-white p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-700 group h-full">
                  <div className="h-56 mb-8 overflow-hidden bg-[#F0EFED]">
                     <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop" alt="Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] grayscale-[30%] group-hover:grayscale-0" loading="lazy" />
                  </div>
                  <h3 className="text-xl serif font-normal text-[#1A1918] mb-4 group-hover:text-[#C6A87C] transition-colors">极致服务与资源独享</h3>
                  <div className="w-8 h-[1px] bg-[#C6A87C] mb-4 opacity-50"></div>
                  <p className="text-[#8A8885] text-xs leading-loose">稀缺资源专享：独家签约秘境营地与非遗大师，解锁深度体验。</p>
                  <p className="text-[#8A8885] text-xs leading-loose">全域无忧保障：自建沿途补给站与24小时救援中心，落地能力强大。</p>
               </div>
             </ScrollReveal>
          </div>
       </div>
    </section>
  );
};