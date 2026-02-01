import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { MenuIcon, CloseIcon } from './Icons';

const navItems: NavItem[] = [
  { label: '品牌定位', id: 'brand', type: 'link' },
  { label: '品质基石', id: 'quality', type: 'link' },
  { label: '核心产品', id: 'products', type: 'link' },
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
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`
                text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group py-2
                ${item.id === 'travel' 
                  ? 'text-[#C6A87C] font-bold text-sm' // Removed border, added bold/size
                  : `${showBackground ? 'text-[#B0AEA8]' : 'text-white/80'} hover:text-[#C6A87C] font-medium`
                }
              `}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#C6A87C] transition-all duration-300 group-hover:w-full w-0"></span>
            </button>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1A1918]/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 h-screen">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`
                text-lg tracking-widest text-left py-4 border-b border-white/5 font-serif font-light
                ${item.id === 'travel' ? 'text-[#C6A87C] font-normal' : 'text-[#E5E5E5] hover:text-[#C6A87C]'}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};