import React, { useEffect } from 'react';
import { ArrowDownIcon, MapPinIcon, CarIcon, BedIcon, UtensilsIcon, CameraIcon, BrushIcon, SparklesIcon, SmartphoneIcon, QrCodeIcon, AppleIcon, UserStarIcon, MountainIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import { Parallax } from './Parallax';
import { travelServices, travelRoutes, culturalActivities } from '../data';

interface TravelPageProps {
  onBack: () => void;
}

export const TravelPage: React.FC<TravelPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen animate-fade-in-up selection:bg-[#C6A87C] selection:text-white">
       {/* Nav */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5E0D6]">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 group cursor-pointer text-[#1A1918]"
        >
          <div className="w-8 h-8 border border-[#1A1918]/30 rounded-full flex items-center justify-center group-hover:bg-[#1A1918] group-hover:text-white transition-all duration-300">
             <ArrowDownIcon className="w-3 h-3 rotate-90" />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Home</span>
        </button>
        <span className="text-[#C6A87C] text-xs tracking-[0.3em] uppercase">Culture & Travel</span>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-[#1A1918]">
        <div className="absolute inset-0 z-0 bg-[#1A1918]">
            <Parallax speed={0.2} className="w-full h-full">
                <img 
                    src="https://b0.bdstatic.com/8b19875cb98cd087d1e4857a146c8599.jpg" // Road/Forest image
                    alt="Sichuan-Xizang Highway" 
                    className="w-full h-full object-cover opacity-60"
                    decoding="async"
                />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-[#F2F0EB]">
            <ScrollReveal animation="fade-up">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <span className="h-[1px] w-12 bg-[#C6A87C]"></span>
                    <span className="text-[#C6A87C] tracking-[0.5em] text-xs uppercase">Cang Jing Travel</span>
                    <span className="h-[1px] w-12 bg-[#C6A87C]"></span>
                </div>
                <h1 className="text-5xl md:text-8xl serif font-light mb-8 tracking-wide">问道川藏<br/><span className="text-3xl md:text-5xl italic opacity-80 mt-4 block">寻觅雪域秘境</span></h1>
                <p className="text-[#B0AEA8] max-w-xl mx-auto leading-loose font-light tracking-widest text-sm">
                   始于熊猫故里，终于圣城拉萨。<br/>
                   在世界屋脊的公路上，重拾内心的秩序。
                </p>
            </ScrollReveal>
        </div>
      </section>

      {/* Origin: Panda Valley */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2">
                <ScrollReveal animation="fade-up">
                    <h3 className="text-[#C6A87C] text-xs font-bold uppercase tracking-[0.2em] mb-4">The Origin</h3>
                    <h2 className="text-4xl md:text-5xl serif text-[#1A1918] mb-8 leading-tight">起点：成都熊猫谷<br/><span className="text-2xl text-[#8A8885] italic font-light">竹林掩映下的始发站</span></h2>
                    <p className="text-[#5E5C58] leading-loose text-justify font-light mb-8">
                        旅程从天府之国的都江堰熊猫谷开启。在这里，您将首先感受到川西平原的温润与生机。我们在熊猫谷设有专属接待中心，为您提供行前说明会、装备检查及车辆交付服务。在出发前，与国宝大熊猫来一场亲密邂逅，为这段高原朝圣之旅注入治愈的力量。
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-xs text-[#1A1918] tracking-widest uppercase border border-[#E5E0D6] px-4 py-2">
                             <MapPinIcon className="w-4 h-4 text-[#C6A87C]" /> 成都都江堰
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#1A1918] tracking-widest uppercase border border-[#E5E0D6] px-4 py-2">
                             <span className="text-[#C6A87C] text-lg leading-none">0</span> km 起始点
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            <div className="md:w-1/2 relative h-[500px]">
                <Parallax speed={0.05} className="w-full h-full bg-[#E5E0D6]">
                    <img 
                        src="https://images.unsplash.com/photo-1526716121440-dc3b4f254a0a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Panda / Bamboo" 
                        className="w-full h-full object-cover shadow-2xl" 
                        loading="lazy" 
                        decoding="async"
                    />
                </Parallax>
                <div className="absolute -bottom-10 -left-10 bg-[#FDFBF7] p-8 shadow-xl max-w-xs hidden md:block">
                     <p className="serif text-xl text-[#1A1918] italic">“竹深树密虫鸣处，时有微凉不是风。”</p>
                </div>
            </div>
        </div>
      </section>

      {/* The Journey (New Parallax Section) */}
      <section className="relative w-full bg-[#0C0C0B] text-white overflow-hidden py-32">
         {/* Fixed Background for Parallax */}
         <div className="absolute inset-0 opacity-40 bg-[#0C0C0B]">
             <Parallax speed={0.3} className="w-full h-[120%] -top-[10%] relative">
                 <img 
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop" 
                    alt="Mountain Range" 
                    className="w-full h-full object-cover grayscale" 
                    loading="lazy" 
                    decoding="async"
                 />
             </Parallax>
             <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0B] via-transparent to-[#0C0C0B]"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal animation="fade-up">
                <div className="text-center mb-32">
                    <h4 className="text-[#C6A87C] tracking-[0.4em] text-xs font-medium uppercase mb-4">The Ascent</h4>
                    <h2 className="text-4xl md:text-5xl serif font-light">云端天路 · 海拔攀升</h2>
                    <p className="text-[#8A8885] mt-6 font-light">从天府盆地到雪域高原，每一步都是修行</p>
                </div>
            </ScrollReveal>

            <div className="relative max-w-4xl mx-auto">
                {/* Central Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C6A87C]/50 to-transparent -translate-x-1/2 hidden md:block"></div>

                {/* Stop 1: Chengdu */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-32 group">
                    <div className="md:w-5/12 text-center md:text-right order-2 md:order-1 px-6">
                        <ScrollReveal animation="slide-in-left">
                           <h3 className="text-2xl serif text-[#E5E5E5] group-hover:text-[#C6A87C] transition-colors">成都 / 熊猫谷</h3>
                           <p className="text-xs text-[#8A8885] uppercase tracking-widest mt-2">Starting Point</p>
                           <p className="text-sm text-[#999] mt-4 font-light leading-relaxed">温润湿润的盆地气候，翠竹环绕，开启进藏前的最后一次深呼吸。</p>
                        </ScrollReveal>
                    </div>
                    <div className="md:w-2/12 flex justify-center order-1 md:order-2 mb-6 md:mb-0 relative">
                        <div className="w-16 h-16 rounded-full border border-[#C6A87C] bg-[#1A1918] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(198,168,124,0.3)]">
                            <span className="text-[#C6A87C] text-xs font-bold">500m</span>
                        </div>
                    </div>
                    <div className="md:w-5/12 order-3 md:order-3"></div>
                </div>

                {/* Stop 2: Kangding */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-32 group">
                    <div className="md:w-5/12 order-3 md:order-1"></div>
                    <div className="md:w-2/12 flex justify-center order-1 md:order-2 mb-6 md:mb-0 relative">
                        <div className="w-16 h-16 rounded-full border border-white/20 bg-[#1A1918] flex items-center justify-center relative z-10 group-hover:border-[#C6A87C] group-hover:scale-110 transition-all duration-500">
                            <span className="text-white/60 group-hover:text-[#C6A87C] text-xs font-bold transition-colors">2560m</span>
                        </div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left order-2 md:order-3 px-6">
                        <ScrollReveal animation="slide-in-right">
                           <h3 className="text-2xl serif text-[#E5E5E5] group-hover:text-[#C6A87C] transition-colors">康定</h3>
                           <p className="text-xs text-[#8A8885] uppercase tracking-widest mt-2">Gateway to Xizang</p>
                           <p className="text-sm text-[#999] mt-4 font-light leading-relaxed">溜溜城下，折多山前。汉藏文化交汇之地，翻过此山，便是真正的高原。</p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Stop 3: Litang */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-32 group">
                    <div className="md:w-5/12 text-center md:text-right order-2 md:order-1 px-6">
                        <ScrollReveal animation="slide-in-left">
                           <h3 className="text-2xl serif text-[#E5E5E5] group-hover:text-[#C6A87C] transition-colors">理塘</h3>
                           <p className="text-xs text-[#8A8885] uppercase tracking-widest mt-2">Sky City</p>
                           <p className="text-sm text-[#999] mt-4 font-light leading-relaxed">世界高城，天空之城。在4000米海拔拥抱长青春科尔寺的恢弘。</p>
                        </ScrollReveal>
                    </div>
                    <div className="md:w-2/12 flex justify-center order-1 md:order-2 mb-6 md:mb-0 relative">
                        <div className="w-16 h-16 rounded-full border border-white/20 bg-[#1A1918] flex items-center justify-center relative z-10 group-hover:border-[#C6A87C] group-hover:scale-110 transition-all duration-500">
                            <span className="text-white/60 group-hover:text-[#C6A87C] text-xs font-bold transition-colors">4014m</span>
                        </div>
                    </div>
                    <div className="md:w-5/12 order-3 md:order-3"></div>
                </div>

                {/* Stop 4: Nyingchi */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-32 group">
                    <div className="md:w-5/12 order-3 md:order-1"></div>
                    <div className="md:w-2/12 flex justify-center order-1 md:order-2 mb-6 md:mb-0 relative">
                         <div className="w-16 h-16 rounded-full border border-white/20 bg-[#1A1918] flex items-center justify-center relative z-10 group-hover:border-[#C6A87C] group-hover:scale-110 transition-all duration-500">
                            <span className="text-white/60 group-hover:text-[#C6A87C] text-xs font-bold transition-colors">3100m</span>
                        </div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left order-2 md:order-3 px-6">
                        <ScrollReveal animation="slide-in-right">
                           <h3 className="text-2xl serif text-[#E5E5E5] group-hover:text-[#C6A87C] transition-colors">林芝</h3>
                           <p className="text-xs text-[#8A8885] uppercase tracking-widest mt-2">Xizang Switzerland</p>
                           <p className="text-sm text-[#999] mt-4 font-light leading-relaxed">雪域江南，氧气充足。漫步鲁朗林海，看南迦巴瓦峰日照金山。</p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Stop 5: Lhasa */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 group">
                    <div className="md:w-5/12 text-center md:text-right order-2 md:order-1 px-6">
                        <ScrollReveal animation="slide-in-left">
                           <h3 className="text-2xl serif text-[#E5E5E5] group-hover:text-[#C6A87C] transition-colors">拉萨</h3>
                           <p className="text-xs text-[#8A8885] uppercase tracking-widest mt-2">Holy City</p>
                           <p className="text-sm text-[#999] mt-4 font-light leading-relaxed">日光之城，信仰终点。在布达拉宫脚下，完成身体与灵魂的朝圣。</p>
                        </ScrollReveal>
                    </div>
                    <div className="md:w-2/12 flex justify-center order-1 md:order-2 mb-6 md:mb-0 relative">
                         <div className="w-20 h-20 rounded-full border-2 border-[#C6A87C] bg-[#1A1918] flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(198,168,124,0.5)] scale-110">
                            <span className="text-[#C6A87C] text-sm font-bold">3650m</span>
                        </div>
                    </div>
                    <div className="md:w-5/12 order-3 md:order-3"></div>
                </div>
            </div>
         </div>
      </section>

      {/* Cultural Immersion Section */}
      <section className="py-32 bg-[#2C2B29] text-[#E5DBC0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A1918] skew-x-12 translate-x-20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
           <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                 <div>
                    <h4 className="text-[#C6A87C] tracking-[0.3em] text-xs font-medium uppercase mb-4">Cultural Immersion</h4>
                    <h2 className="text-3xl md:text-4xl text-[#F2F0EB] serif font-light">非遗 · 匠心体验</h2>
                 </div>
                 <p className="text-[#8A8885] text-sm max-w-md text-right font-light mt-4 md:mt-0">
                    不止于观看，更在于亲手触碰。<br/>用指尖感受传承千年的藏地温度。
                 </p>
              </div>
           </ScrollReveal>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {culturalActivities.map((activity, index) => (
                 <ScrollReveal key={activity.id} animation="fade-up" delay={index * 150}>
                    <div className="group relative h-[400px] overflow-hidden cursor-pointer bg-[#1A1918]">
                       <img 
                            src={activity.image} 
                            alt={activity.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                            loading="lazy" 
                            decoding="async"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                       <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-3 mb-2">
                             <BrushIcon className="w-5 h-5 text-[#C6A87C]" />
                             <span className="text-[#C6A87C] text-xs tracking-[0.2em] uppercase">{activity.enTitle}</span>
                          </div>
                          <h3 className="text-2xl serif text-white mb-4">{activity.title}</h3>
                          <p className="text-gray-300 text-xs leading-loose mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                             {activity.description}
                          </p>
                          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                             {activity.tags.map((tag, i) => (
                                <span key={i} className="text-[10px] border border-white/20 px-2 py-1 text-[#B0AEA8]">{tag}</span>
                             ))}
                          </div>
                       </div>
                    </div>
                 </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* Routes Comparison */}
      <section className="py-32 bg-[#1A1918] text-[#F2F0EB]">
         <div className="container mx-auto px-6">
            <ScrollReveal animation="fade-up">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl serif font-light">双线入藏 · 殊途同归</h2>
                    <div className="w-12 h-[1px] bg-[#C6A87C] mx-auto mt-6"></div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {travelRoutes.map((route) => (
                    <ScrollReveal key={route.id} animation="fade-up" delay={100}>
                        <div className="border border-white/10 p-10 hover:border-[#C6A87C] transition-colors duration-500 group h-full relative overflow-hidden">
                             {/* Background Image */}
                            {route.image && (
                                <div className="absolute inset-0 z-0">
                                    <img 
                                        src={route.image} 
                                        alt={route.name} 
                                        className="w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 transform group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    {/* Gradient overlay to ensure text readability even when image is visible */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-[#1A1918]/90 to-[#1A1918]/80 pointer-events-none"></div>
                                </div>
                            )}

                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-8xl leading-none group-hover:text-[#C6A87C] transition-colors">{route.id}</div>
                                
                                <h3 className="text-2xl serif mb-2 text-[#E5E5E5]">{route.name}</h3>
                                <div className="text-[#C6A87C] text-xs tracking-[0.2em] mb-8">{route.distance} / {route.duration}</div>
                                
                                <p className="text-[#999] leading-relaxed text-sm mb-10 min-h-[4rem]">
                                    {route.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="text-xs uppercase tracking-widest text-[#555] mb-2">Key Stops</div>
                                    <div className="flex flex-wrap gap-2">
                                        {route.stops.map((stop, i) => (
                                            <span key={i} className="text-[10px] border border-white/20 px-2 py-1 text-[#B0AEA8]">{stop}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
         </div>
      </section>

      {/* Services (Expanded) */}
      <section className="py-32 bg-[#F5F2EB]">
         <div className="container mx-auto px-6">
            <div className="mb-20">
                <h4 className="text-[#C6A87C] tracking-[0.3em] text-xs font-medium uppercase mb-4">Premium Services</h4>
                <h2 className="text-3xl md:text-5xl text-[#1A1918] serif font-light">全境守护 · 定制私享</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {travelServices.map((service, index) => (
                    <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
                        <div className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                            <div className="h-56 overflow-hidden relative shrink-0 bg-[#E5E0D6]">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    loading="lazy" 
                                    decoding="async"
                                />
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#1A1918]">
                                    {service.id === 'rental' && <CarIcon className="w-5 h-5" />}
                                    {service.id === 'photo' && <CameraIcon className="w-5 h-5" />}
                                    {service.id === 'wellness' && <SparklesIcon className="w-5 h-5" />}
                                    {service.id === 'hotel' && <BedIcon className="w-5 h-5" />}
                                    {service.id === 'dining' && <UtensilsIcon className="w-5 h-5" />}
                                    {service.id === 'butler' && <UserStarIcon className="w-5 h-5" />}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col grow">
                                <h3 className="text-xl serif text-[#1A1918] mb-1">{service.title}</h3>
                                <p className="text-[10px] text-[#C6A87C] uppercase tracking-[0.2em] mb-6">{service.enTitle}</p>
                                <p className="text-[#8A8885] text-xs leading-loose mb-6 grow">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mt-auto">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-[#5E5C58]">
                                            <span className="w-1 h-1 bg-[#C6A87C] rounded-full"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
         </div>
      </section>

      {/* APP Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-20">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <ScrollReveal animation="slide-in-left">
                        <h4 className="text-[#C6A87C] tracking-[0.3em] text-xs font-medium uppercase mb-4">Digital Companion</h4>
                        <h2 className="text-4xl md:text-5xl text-[#1A1918] serif font-light mb-8">藏境文旅 APP<br/><span className="text-2xl text-[#8A8885] italic font-light">科技赋能 · 人文随行</span></h2>
                        <p className="text-[#5E5C58] leading-loose mb-10 font-light text-justify">
                            这不仅仅是一个工具，更是您的智能旅行管家。我们将复杂的行程管理隐入后台，通过科技手段实时响应您的需求。从海拔适应性监测到私享营地的静谧预约，让每一次探索都从容不迫，让科技的温度温暖您的朝圣之路。
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            <div className="flex gap-4">
                                <div className="mt-1 text-[#C6A87C]"><SmartphoneIcon className="w-6 h-6" /></div>
                                <div>
                                    <h3 className="serif text-[#1A1918] text-lg mb-1">私享预订</h3>
                                    <p className="text-xs text-[#8A8885] leading-relaxed">一键锁定稀缺资源，从野奢帐篷到非遗体验。</p>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <div className="mt-1 text-[#C6A87C]"><MountainIcon className="w-6 h-6" /></div>
                                <div>
                                    <h3 className="serif text-[#1A1918] text-lg mb-1">安全护航</h3>
                                    <p className="text-xs text-[#8A8885] leading-relaxed">实时海拔/血氧监测，24小时SOS一键救援响应。</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <div className="p-3 border border-[#E5E0D6] bg-white">
                                <QrCodeIcon className="w-20 h-20 text-[#1A1918] stroke-[1]" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <button className="flex items-center gap-3 bg-[#1A1918] text-white px-5 py-3 hover:bg-[#C6A87C] transition-colors duration-300 min-w-[160px]">
                                    <AppleIcon className="w-5 h-5" />
                                    <div className="text-left">
                                        <div className="text-[9px] uppercase tracking-wider opacity-70">Download on the</div>
                                        <div className="text-xs font-bold leading-none">App Store</div>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 bg-white border border-[#E5E0D6] text-[#1A1918] px-5 py-3 hover:border-[#1A1918] transition-colors duration-300 min-w-[160px]">
                                    <div className="text-left">
                                        <div className="text-[9px] uppercase tracking-wider opacity-70">Get it on</div>
                                        <div className="text-xs font-bold leading-none">Android</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center relative">
                     <Parallax speed={-0.05}>
                        <div className="relative w-[300px] h-[600px] bg-[#1A1918] rounded-[2.5rem] border-4 border-[#2C2B29] shadow-2xl overflow-hidden">
                             {/* Mockup Content */}
                            <img 
                                src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600&auto=format&fit=crop" 
                                alt="App UI" 
                                className="w-full h-full object-cover opacity-60" 
                                loading="lazy" 
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-transparent to-transparent"></div>
                            
                            {/* Fake UI Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] text-[#C6A87C] uppercase tracking-widest">Reservation</span>
                                        <span className="text-[10px] text-white bg-[#C6A87C] px-2 py-0.5 rounded-full">Confirmed</span>
                                    </div>
                                    <h3 className="text-white serif text-lg">Songtsam Linka Retreat</h3>
                                    <p className="text-white/60 text-xs">3 Nights · Glacial View Villa</p>
                                </div>
                                 <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] text-[#C6A87C] uppercase tracking-widest">Vehicle</span>
                                        <span className="text-[10px] text-white/50">Arriving in 15m</span>
                                    </div>
                                    <h3 className="text-white serif text-lg">Land Cruiser LC300</h3>
                                    <p className="text-white/60 text-xs">Lhasa - Nyingchi Route</p>
                                </div>
                            </div>
                        </div>
                     </Parallax>
                     
                     {/* Decorative background circle behind phone */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#C6A87C]/20 rounded-full -z-10"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#F5F2EB] rounded-full -z-20 blur-3xl"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#1A1918] text-center">
          <ScrollReveal animation="fade-up">
              <h2 className="text-3xl md:text-5xl serif text-[#E5E5E5] font-light mb-8">即刻启程</h2>
              <p className="text-[#8A8885] max-w-lg mx-auto mb-10 font-light">
                  定制您的川藏线专属行程，专业团队全程保障。<br/>
                  从平原到高原，不仅是海拔的攀升，更是心灵的净化。
              </p>
              <button className="px-12 py-4 border border-[#C6A87C] text-[#C6A87C] text-xs tracking-[0.3em] uppercase hover:bg-[#C6A87C] hover:text-[#1A1918] transition-all duration-500">
                  预约咨询
              </button>
          </ScrollReveal>
      </section>

    </div>
  );
};