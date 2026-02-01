import React, { useEffect, useRef } from 'react';

interface ParallaxProps {
  speed?: number; // Positive for moving with scroll (slower), Negative for moving against (faster)
  children: React.ReactNode;
  className?: string;
  horizontal?: boolean;
}

export const Parallax: React.FC<ParallaxProps> = ({ 
  speed = 0.1, 
  children, 
  className = "",
  horizontal = false
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Check if element is in viewport (with some buffer)
      const buffer = 200;
      if (rect.top < windowHeight + buffer && rect.bottom > -buffer) {
        // Calculate distance from center of viewport
        const center = horizontal ? windowWidth / 2 : windowHeight / 2;
        const elementCenter = horizontal 
          ? rect.left + rect.width / 2 
          : rect.top + rect.height / 2; // This top is relative to viewport, which changes on scroll
        
        // However, getBoundingClientRect returns position relative to viewport.
        // As we scroll down, rect.top decreases.
        // We want an offset based on scroll position.
        
        // A simpler parallax approach:
        // offset = (distanceFromCenter) * speed
        // If element is at center, offset is 0.
        // If element is below center, offset is positive (pushed down) -> looks like it's moving slower
        
        const offset = (elementCenter - center) * speed;

        if (horizontal) {
            ref.current.style.transform = `translate3d(${offset}px, 0, 0)`;
        } else {
            ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [speed, horizontal]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};