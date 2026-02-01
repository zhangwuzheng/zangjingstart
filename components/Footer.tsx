import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#0C0C0B] text-[#8A8885] py-20 border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
           <div className="flex items-center gap-5 mb-8 md:mb-0">
              <img 
                src="https://zangjingtech.oss-cn-chengdu.aliyuncs.com/3.png" 
                alt="Logo" 
                className="w-14 h-14 object-contain opacity-80 grayscale-[20%]" 
              />
              <div>
                <div className="flex items-baseline gap-3">
                    <h2 className="text-2xl text-[#E5E5E5] serif tracking-[0.2em] font-light">藏境山水</h2>
                    <span className="text-lg text-[#E5E5E5] serif font-light opacity-80">བོད་ཁུལ་གྱི་རི་ཆུ།</span>
                </div>
                <p className="text-[10px] text-[#C6A87C] uppercase tracking-[0.4em] mt-1">ZANGJINGTECH</p>
              </div>
           </div>
           
           <div className="text-center md:text-right">
              <p className="serif text-xl text-[#E5E5E5] mb-2 font-light tracking-widest">山有藏珍 水至净境</p>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-50">High-End Xizang Specialty Brand</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/[0.05] pt-12">
           <div>
              <h4 className="text-[#C6A87C] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Contact</h4>
              <p className="text-sm mb-3 font-light tracking-wide text-[#B0AEA8]">西藏自治区拉萨市柳梧新区君泰国际C栋11楼</p>
              <p className="text-sm font-light tracking-wide text-[#B0AEA8]">zangjingtech@163.com</p>
           </div>
           
           <div className="md:text-center">
              <h4 className="text-[#C6A87C] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Commitment</h4>
              <div className="flex flex-col gap-3 text-sm font-light text-[#B0AEA8]">
                 <span className="tracking-wide">区块链溯源保真</span>
                 <span className="tracking-wide">新鲜高效直达</span>
                 <span className="tracking-wide">一份藏地匠心</span>
              </div>
           </div>

           <div className="md:text-right flex flex-col items-center md:items-end">
              <p className="text-[10px] text-[#555] leading-relaxed tracking-widest uppercase mb-4">
                Copyright © 2024 ZANGJINGTECH.<br/>
                All Rights Reserved.
              </p>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#555] hover:text-[#8A8885] transition-colors tracking-widest">
                藏ICP备2025003289号-1
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
};