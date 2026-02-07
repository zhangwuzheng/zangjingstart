import React from 'react';
import { StoreIcon, ClockIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#0C0C0B] text-[#8A8885] py-12 border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Brand & Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
           <div className="flex items-center gap-4 mb-6 md:mb-0">
              <img 
                src="https://zangjingtech.oss-cn-chengdu.aliyuncs.com/3.png" 
                alt="Logo" 
                className="w-10 h-10 object-contain opacity-80 grayscale-[20%]" 
              />
              <div>
                <div className="flex items-baseline gap-2">
                    <h2 className="text-xl text-[#E5E5E5] serif tracking-[0.2em] font-light">藏境山水</h2>
                    <span className="text-sm text-[#E5E5E5] serif font-light opacity-80">བོད་ཁུལ་གྱི་རི་ཆུ།</span>
                </div>
                <p className="text-[8px] text-[#C6A87C] uppercase tracking-[0.4em] mt-0.5">ZANGJINGTECH</p>
              </div>
           </div>
           
           <div className="text-center md:text-right">
              <p className="serif text-lg text-[#E5E5E5] mb-1 font-light tracking-widest">山有藏珍 水至净境</p>
              <p className="text-[8px] tracking-[0.2em] uppercase opacity-50">西藏高端特产品牌</p>
           </div>
        </div>

        {/* Middle Section: Channels & Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-white/[0.05] py-10">
           
           {/* Left: Online Channels & QR Codes */}
           <ScrollReveal animation="fade-up">
             <div>
                <h4 className="text-[#C6A87C] text-[9px] font-bold uppercase tracking-[0.2em] mb-6">官方渠道</h4>
                <div className="grid grid-cols-4 gap-4 relative">
                    {/* Official Mini Program */}
                    <div className="group text-center hover:z-50 relative transition-all duration-300">
                        <div className="bg-white p-1 mx-auto mb-2 w-14 h-14 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:scale-[2.5] group-hover:-translate-y-6 group-hover:shadow-2xl relative">
                           <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ZangJingMiniProgram" 
                            alt="Mini Program" 
                            className="w-full mix-blend-multiply"
                           />
                        </div>
                        <p className="text-[8px] text-[#C6A87C] tracking-widest uppercase leading-tight scale-90 relative z-0 transition-opacity group-hover:opacity-0">藏境山水<br/>小程序</p>
                    </div>
                    {/* Tmall */}
                    <div className="group text-center hover:z-50 relative transition-all duration-300">
                        <div className="bg-white p-1 mx-auto mb-2 w-14 h-14 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:scale-[2.5] group-hover:-translate-y-6 group-hover:shadow-2xl relative">
                           <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ZangJingTmall" 
                            alt="Tmall" 
                            className="w-full mix-blend-multiply"
                           />
                        </div>
                        <p className="text-[8px] text-[#C6A87C] tracking-widest uppercase leading-tight scale-90 relative z-0 transition-opacity group-hover:opacity-0">天猫<br/>旗舰店</p>
                    </div>
                     {/* JD */}
                    <div className="group text-center hover:z-50 relative transition-all duration-300">
                        <div className="bg-white p-1 mx-auto mb-2 w-14 h-14 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:scale-[2.5] group-hover:-translate-y-6 group-hover:shadow-2xl relative">
                           <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ZangJingJD" 
                            alt="JD" 
                            className="w-full mix-blend-multiply"
                           />
                        </div>
                        <p className="text-[8px] text-[#C6A87C] tracking-widest uppercase leading-tight scale-90 relative z-0 transition-opacity group-hover:opacity-0">京东<br/>自营店</p>
                    </div>
                    {/* Douyin */}
                    <div className="group text-center hover:z-50 relative transition-all duration-300">
                        <div className="bg-white p-1 mx-auto mb-2 w-14 h-14 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:scale-[2.5] group-hover:-translate-y-6 group-hover:shadow-2xl relative">
                           <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ZangJingDouyin" 
                            alt="Douyin" 
                            className="w-full mix-blend-multiply"
                           />
                        </div>
                        <p className="text-[8px] text-[#C6A87C] tracking-widest uppercase leading-tight scale-90 relative z-0 transition-opacity group-hover:opacity-0">抖音<br/>官方直播</p>
                    </div>
                </div>
             </div>
           </ScrollReveal>

           {/* Right: Offline Locations */}
           <ScrollReveal animation="fade-up" delay={100}>
             <div>
                <h4 className="text-[#C6A87C] text-[9px] font-bold uppercase tracking-[0.2em] mb-6">线下门店</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex gap-4 group">
                        <div className="mt-1 text-[#C6A87C] group-hover:scale-110 transition-transform"><StoreIcon className="w-5 h-5" /></div>
                        <div>
                            <h5 className="text-[#F2F0EB] serif text-base mb-1 group-hover:text-[#C6A87C] transition-colors">拉萨 · 藏境旗舰店</h5>
                            <p className="text-[10px] text-[#999] leading-relaxed mb-1 font-light">
                                西藏自治区拉萨市城关区北京中路<br/>
                                布达拉宫广场东侧精品廊 1-03
                            </p>
                            <div className="flex items-center gap-2 text-[8px] text-[#C6A87C] tracking-widest uppercase">
                                <span className="flex items-center gap-1"><ClockIcon className="w-2.5 h-2.5" /> 每日 10:00 - 22:00</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 group">
                        <div className="mt-1 text-[#C6A87C] group-hover:scale-110 transition-transform"><StoreIcon className="w-5 h-5" /></div>
                        <div>
                            <h5 className="text-[#F2F0EB] serif text-base mb-1 group-hover:text-[#C6A87C] transition-colors">成都 · 太古里体验展厅</h5>
                            <p className="text-[10px] text-[#999] leading-relaxed mb-1 font-light">
                                四川省成都市锦江区中纱帽街8号<br/>
                                远洋太古里 L2-2213
                            </p>
                            <div className="flex items-center gap-2 text-[8px] text-[#C6A87C] tracking-widest uppercase">
                                <span className="flex items-center gap-1"><ClockIcon className="w-2.5 h-2.5" /> 每日 10:00 - 22:00</span>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
           </ScrollReveal>
        </div>

        {/* Bottom Section: Links & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/[0.05] pt-8">
           <div>
              <h4 className="text-[#C6A87C] text-[9px] font-bold uppercase tracking-[0.2em] mb-3">联系我们</h4>
              <p className="text-xs mb-1 font-light tracking-wide text-[#B0AEA8]">西藏自治区拉萨市柳梧新区君泰国际C栋11楼</p>
              <p className="text-xs font-light tracking-wide text-[#B0AEA8]">zangjingtech@163.com</p>
           </div>
           
           <div className="md:text-center">
              <h4 className="text-[#C6A87C] text-[9px] font-bold uppercase tracking-[0.2em] mb-3">品牌承诺</h4>
              <div className="flex flex-col gap-1 text-xs font-light text-[#B0AEA8]">
                 <span className="tracking-wide">区块链溯源保真</span>
                 <span className="tracking-wide">新鲜高效直达</span>
                 <span className="tracking-wide">一份藏地匠心</span>
              </div>
           </div>

           <div className="md:text-right flex flex-col items-center md:items-end">
              <p className="text-[9px] text-[#555] leading-relaxed tracking-widest uppercase mb-2">
                Copyright © 2024 ZANGJINGTECH. All Rights Reserved.
              </p>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-[9px] text-[#555] hover:text-[#8A8885] transition-colors tracking-widest">
                藏ICP备2025003289号-1
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
};