import React, { useEffect, useRef } from 'react';

export const MistEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;

    const particles: {x: number, y: number, r: number, dx: number, dy: number, a: number}[] = [];
    // Increase count for density
    const particleCount = 60; 

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 60 + 20, // Larger particles for cloud feel
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.1,
        a: Math.random() * 0.15 // Lower alpha for subtlety
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        // Wrap around screen
        if (p.x < -100) p.x = width + 100;
        if (p.x > width + 100) p.x = -100;
        if (p.y < -100) p.y = height + 100;
        if (p.y > height + 100) p.y = -100;

        ctx.beginPath();
        // Create soft cloud-like gradients
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.a})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${p.a * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.rect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
       if (!canvas.parentElement) return;
       width = canvas.width = canvas.parentElement.offsetWidth;
       height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none mix-blend-soft-light opacity-60" />;
};