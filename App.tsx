import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { Quality } from './components/Quality';
import { Competency } from './components/Competency';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { NoiseOverlay } from './components/NoiseOverlay';
import { ProductDetail } from './components/ProductDetail';
import { NewsPage } from './components/NewsPage';
import { TravelPage } from './components/TravelPage';
import { ServiceChannels } from './components/ServiceChannels';
import { products } from './data';

// Simple View Types
type ViewState = 
  | { type: 'home' }
  | { type: 'product'; productId: string }
  | { type: 'news' }
  | { type: 'travel' };

function App() {
  const [currentView, setCurrentView] = useState<ViewState>({ type: 'home' });

  // Handle scrolling when view changes to home
  const handleNavigate = (view: string, targetId?: string) => {
    if (view === 'home') {
      if (currentView.type !== 'home') {
        setCurrentView({ type: 'home' });
        // Wait for render then scroll
        setTimeout(() => {
          if (targetId) {
            const el = document.getElementById(targetId);
            el?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        if (targetId) {
          const el = document.getElementById(targetId);
          el?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else if (view === 'news') {
      setCurrentView({ type: 'news' });
    } else if (view === 'travel') {
      setCurrentView({ type: 'travel' });
    }
  };

  const handleProductClick = (productId: string) => {
    setCurrentView({ type: 'product', productId });
  };

  // Render Logic
  const renderContent = () => {
    if (currentView.type === 'product') {
      const product = products.find(p => p.id === currentView.productId);
      if (product) {
        return <ProductDetail product={product} onBack={() => setCurrentView({ type: 'home' })} />;
      }
    }

    if (currentView.type === 'news') {
      return <NewsPage onBack={() => setCurrentView({ type: 'home' })} />;
    }

    if (currentView.type === 'travel') {
      return <TravelPage onBack={() => setCurrentView({ type: 'home' })} />;
    }

    // Home View
    return (
      <>
        <Hero />
        <BrandStory />
        <Quality />
        <Competency />
        <Products onProductClick={handleProductClick} />
        <ServiceChannels />
        
        {/* Visual Transition Section */}
        <section className="py-32 bg-[#1A1918] relative overflow-hidden">
           <div className="absolute inset-0 opacity-20">
               <img src="https://picsum.photos/1920/1080?image=1064" alt="Texture" className="w-full h-full object-cover grayscale" />
           </div>
           <div className="container mx-auto px-6 relative z-10 text-center">
              <div className="mb-8">
                  <span className="text-[#C6A87C] text-xs tracking-[0.4em] uppercase border-b border-[#C6A87C]/30 pb-2">Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-5xl text-[#E5DBC0] serif font-light mb-10 tracking-wide">
                  如修行者般<br/><span className="italic opacity-80">澄澈从容</span>
              </h2>
              <p className="text-[#8A8885] max-w-2xl mx-auto leading-loose font-light text-sm md:text-base tracking-wide">
                 “温润真诚共情消费者需求，守正革新激活传统匠心。<br/>沟通兼具‘净’与‘暖’——进产品精准传递纯净与考究，互动时以真诚传递温度。”
              </p>
              <div className="mt-16 flex justify-center gap-6 opacity-50">
                 <div className="w-[1px] h-12 bg-gradient-to-b from-[#C6A87C] to-transparent"></div>
              </div>
           </div>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] overflow-x-hidden selection:bg-[#C6A87C] selection:text-white">
      <NoiseOverlay />
      
      {/* Navbar state needs to know if we are on a detail page to change style/behavior if needed, 
          though Navbar component handles styling based on scroll/transparency. 
          We pass onNavigate to control page switching. */}
      <Navbar 
        onNavigate={handleNavigate} 
        currentView={currentView.type}
      />
      
      {renderContent()}

      <Footer />
    </div>
  );
}

export default App;