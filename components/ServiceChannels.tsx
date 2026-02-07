import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ShoppingBagIcon, StoreIcon, TruckIcon, ShieldCheckIcon } from './Icons';

export const ServiceChannels: React.FC = () => {
  return (
    <section className="bg-[#1A1918] py-24 text-[#E5DBC0] relative overflow-hidden border-b border-white/[0.05]">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-20">
            <h4 className="text-[#C6A87C] tracking-[0.4em] text-xs font-medium mb-6 uppercase">服务保障</h4>
            <h2 className="text-3xl md:text-5xl text-[#F2F0EB] serif font-light tracking-wide">全渠道尊享 · 交付无忧</h2>
          </div>
        </ScrollReveal>

        {/* Service Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Online Channels */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="bg-[#22211F] p-10 h-full border border-[#C6A87C]/10 hover:border-[#C6A87C]/50 transition-colors duration-500 group">
              <div className="mb-6 text-[#C6A87C] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500">
                <ShoppingBagIcon className="w-10 h-10 stroke-[0.8]" />
              </div>
              <h3 className="text-xl serif text-[#F2F0EB] mb-6 font-light">线上臻选</h3>
              <ul className="space-y-4 text-xs text-[#999] leading-loose">
                <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">▪</span>
                   <span><strong>官方小程序：</strong>会员专属权益，新品首发预约，一对一管家服务。</span>
                </li>
                <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">▪</span>
                   <span><strong>京东/天猫旗舰店：</strong>官方直营，节日礼遇，更便捷的购物体验。</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Offline Channels */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-[#22211F] p-10 h-full border border-[#C6A87C]/10 hover:border-[#C6A87C]/50 transition-colors duration-500 group">
              <div className="mb-6 text-[#C6A87C] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500">
                <StoreIcon className="w-10 h-10 stroke-[0.8]" />
              </div>
              <h3 className="text-xl serif text-[#F2F0EB] mb-6 font-light">线下尊享</h3>
              <ul className="space-y-4 text-xs text-[#999] leading-loose">
                <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">▪</span>
                   <span><strong>品牌体验店：</strong>拉萨/成都核心商圈旗舰店，沉浸式品鉴雪域珍馐。</span>
                </li>
                <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">▪</span>
                   <span><strong>高端渠道：</strong>五星级酒店精品廊、机场贵宾厅、私人会所特约专柜。</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Logistics */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="bg-[#22211F] p-10 h-full border border-[#C6A87C]/10 hover:border-[#C6A87C]/50 transition-colors duration-500 group">
              <div className="mb-6 text-[#C6A87C] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500">
                <TruckIcon className="w-10 h-10 stroke-[0.8]" />
              </div>
              <h3 className="text-xl serif text-[#F2F0EB] mb-6 font-light">极速冷链</h3>
              <ul className="space-y-4 text-xs text-[#999] leading-loose">
                <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">▪</span>
                   <span><strong>顺丰空运：</strong>拉萨/林芝产地直发，专机专送。</span>
                </li>
                <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">▪</span>
                   <span><strong>48小时必达：</strong>国内一二线城市承诺48小时内送达，锁住雪域鲜度。</span>
                </li>
                <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">▪</span>
                   <span><strong>双重保鲜：</strong>航天级保温材质 + 生物冰袋，全程低温监控。</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* After Sales */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="bg-[#22211F] p-10 h-full border border-[#C6A87C]/10 hover:border-[#C6A87C]/50 transition-colors duration-500 group">
              <div className="mb-6 text-[#C6A87C] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheckIcon className="w-10 h-10 stroke-[0.8]" />
              </div>
              <h3 className="text-xl serif text-[#F2F0EB] mb-6 font-light">无忧售后</h3>
              <ul className="space-y-4 text-xs text-[#999] leading-loose">
                <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">▪</span>
                   <span><strong>坏单包赔：</strong>鲜松茸/鲜肉类产品若有损伤，拍照即赔，极速退款。</span>
                </li>
                <li className="flex gap-3">
                   <span className="text-[#C6A87C] mt-1 text-[10px]">▪</span>
                   <span><strong>七天退换：</strong>干货类产品（虫草/干菌）在未拆封状态下支持7天无理由退换。</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};