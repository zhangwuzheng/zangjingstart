import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { MenuIcon, CloseIcon } from './Icons';

const navItems: NavItem[] = [
  { label: '品牌定位', id: 'brand', type: 'link' },
  { 
    label: '核心产品', 
    id: 'products', 
    type: 'link',
    children: [
        { label: '扎塔奇规格工具', id: 'tool-zataqi', type: 'external', href: 'http://43.136.175.153:3000/' },
        { label: '礼赠组合工具', id: 'tool-gift', type: 'external', href: 'http://43.136.175.153:30001' },
    ]
  },
  { label: '新闻动态', id: 'news', type: 'action' },
  { label: '藏境文旅', id: 'travel', type: 'action' }, // Moved after News
  { label: '联系我们', id: 'footer', type: 'link' },
];

interface NavbarProps {
  onNavigate: (view: string, targetId?: string) => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    // If it has children and we are on desktop, clicking the parent might just scroll (default behavior)
    // On mobile, maybe toggle? For now, we allow clicking parent to navigate.
    
    if (item.type === 'external' && item.href) {
        setIsMobileMenuOpen(false);
        // Open external links in a new tab with security best practices
        window.open(item.href, '_blank', 'noopener,noreferrer');
        return;
    }

    setIsMobileMenuOpen(false);
    
    if (item.type === 'action') {
      onNavigate(item.id);
      return;
    }

    // Default link behavior (scroll on home, or go home then scroll)
    onNavigate('home', item.id);
  };

  const handleLogoClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If not on home, always show background
  const showBackground = isScrolled || currentView !== 'home';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 border-b ${
        showBackground 
          ? 'bg-[#0C0C0B]/80 backdrop-blur-md py-4 shadow-sm border-white/[0.05]' 
          : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={handleLogoClick} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="https://zangjingtech.oss-cn-chengdu.aliyuncs.com/3.png" 
            alt="藏境山水 Logo" 
            className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-105 opacity-90" 
          />
          <div className={`${showBackground ? 'text-[#E5E5E5]' : 'text-white'} transition-colors duration-500`}>
            <div className="flex items-baseline gap-2">
                <h1 className="text-lg font-bold tracking-[0.2em] serif">藏境山水</h1>
                <span className="text-xs font-normal opacity-90 serif">བོད་ཁུལ་གྱི་རི་ཆུ།</span>
            </div>
            <p className="text-[9px] text-[#C6A87C] tracking-[0.3em] uppercase opacity-80">ZANGJINGTECH</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <div key={item.id} className="relative group">
                <button
                onClick={() => handleNavClick(item)}
                className={`
                    text-xs tracking-[0.2em] uppercase transition-all duration-300 relative py-2 block
                    ${item.id === 'travel' 
                    ? 'text-[#C6A87C] font-bold text-sm' 
                    : `${showBackground ? 'text-[#B0AEA8]' : 'text-white/80'} hover:text-[#C6A87C] font-medium`
                    }
                `}
                >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#C6A87C] transition-all duration-300 group-hover:w-full w-0"></span>
                </button>

                {/* Dropdown for Desktop */}
                {item.children && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-48 z-50">
                        <div className="bg-[#1A1918] border border-white/10 shadow-2xl flex flex-col py-2">
                            {item.children.map(child => (
                                <button
                                    key={child.id}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNavClick(child);
                                    }}
                                    className="text-left px-6 py-3 text-[10px] text-[#B0AEA8] hover:text-[#C6A87C] hover:bg-white/5 transition-colors tracking-widest uppercase"
                                >
                                    {child.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${showBackground ? 'text-[#E5E5E5]' : 'text-white'} hover:text-[#C6A87C] transition-colors`}
        >
          {isMobileMenuOpen ? <CloseIcon className="w-6 h-6 stroke-[0.8]" /> : <MenuIcon className="w-6 h-6 stroke-[0.8]" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1A1918]/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 h-screen overflow-y-auto pb-20">
          {navItems.map((item) => (
            <div key={item.id} className="w-full">
                <button
                onClick={() => handleNavClick(item)}
                className={`
                    w-full text-lg tracking-widest text-left py-4 border-b border-white/5 font-serif font-light
                    ${item.id === 'travel' ? 'text-[#C6A87C] font-normal' : 'text-[#E5E5E5] hover:text-[#C6A87C]'}
                `}
                >
                {item.label}
                </button>
                {/* Mobile Nested Items */}
                {item.children && (
                    <div className="pl-4 flex flex-col mt-2 border-l border-white/10 ml-2">
                        {item.children.map(child => (
                             <button
                                key={child.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavClick(child);
                                }}
                                className="text-sm text-[#B0AEA8] hover:text-[#C6A87C] py-3 text-left tracking-widest font-light"
                             >
                                {child.label}
                             </button>
                        ))}
                    </div>
                )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};