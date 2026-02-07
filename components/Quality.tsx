import React from 'react';
import { ShieldCheckIcon, LeafIcon, MountainIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Quality: React.FC = () => {
  return (
    <section id="quality" className="py-24 bg-[#1A1918] text-[#E5DBC0]">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-24">
              <h4 className="text-[#C6A87C] tracking-[0.4em] text-xs font-medium mb-6 uppercase">品质基石</h4>
              <h2 className="text-3xl md:text-5xl text-[#F2F0EB] serif font-light tracking-wide">品质基石 · 核心价值</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C6A87C]/20 border border-[#C6A87C]/20">
          {/* Card 1 */}
          <div className="bg-[#1A1918] p-12 hover:bg-[#22211F] transition-colors duration-700 group">
               <ScrollReveal animation="fade-up" delay={100}>
               <div className="mb-8 text-[#C6A87C] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                  <ShieldCheckIcon className="w-10 h-10 stroke-[0.8]" />
               </div>
               <h3 className="text-xl serif text-[#F2F0EB] mb-6 font-light tracking-wide">精工造物 · 品质保障</h3>
               <ul className="space-y-4 text-xs text-[#999] font-light leading-relaxed tracking-wide">
                 <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">♦</span>
                   <span><strong className="text-[#D4D4D4] font-medium">权威背书：</strong>三大国企联合背书 + 地理标志认证，筑牢正品防线</span>
                 </li>
                 <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">♦</span>
                   <span><strong className="text-[#D4D4D4] font-medium">溯源体系：</strong>区块链全链路溯源，从产地到餐桌，轨迹可溯</span>
                 </li>
                 <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">♦</span>
                   <span><strong className="text-[#D4D4D4] font-medium">工艺赋能：</strong>融合千年工艺智慧与现代尖端品控</span>
                 </li>
               </ul>
               </ScrollReveal>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1A1918] p-12 hover:bg-[#22211F] transition-colors duration-700 group">
               <ScrollReveal animation="fade-up" delay={200}>
               <div className="mb-8 text-[#C6A87C] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                  <LeafIcon className="w-10 h-10 stroke-[0.8]" />
               </div>
               <h3 className="text-xl serif text-[#F2F0EB] mb-6 font-light tracking-wide">顺势而为 · 本真之选</h3>
               <p className="text-xs text-[#999] font-light leading-relaxed tracking-wide">
                 敬循自然节律，守正取物之道。拒绝生态干预，仅以“守护者”与“搬运者”姿态，捕捉高原特产营养峰值；那曲虫草恪守‘冬为虫、夏为草’生长规律，于最佳窗口期采收。
               </p>
               </ScrollReveal>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1A1918] p-12 hover:bg-[#22211F] transition-colors duration-700 group">
               <ScrollReveal animation="fade-up" delay={300}>
               <div className="mb-8 text-[#C6A87C] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                  <MountainIcon className="w-10 h-10 stroke-[0.8]" />
               </div>
               <h3 className="text-xl serif text-[#F2F0EB] mb-6 font-light tracking-wide">净境共生 · 永续守护</h3>
               <ul className="space-y-4 text-xs text-[#999] font-light leading-relaxed tracking-wide">
                 <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">♦</span>
                   <span>取利于雪域，反哺于雪域</span>
                 </li>
                 <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">♦</span>
                   <span>虫草采挖区采补同步，维护草原生态平衡</span>
                 </li>
                 <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">♦</span>
                   <span>冰川水生产限量取水 + 全流程零排放</span>
                 </li>
               </ul>
               </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};