import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'motion/react';
import nube1 from "../assets/nube_1.png";
import nube2 from "../assets/nube_2.png";
import nube3 from "../assets/nube_3.png";
import nube4 from "../assets/nube_4.png";
import nube5 from "../assets/nube_5.png";

export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cloudsContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Clouds Logic
    const contenedor = cloudsContainerRef.current;
    if (contenedor) {
      contenedor.innerHTML = ''; // Clear existing
      const misNubes = [nube1, nube2, nube3, nube4, nube5];
      const cantidad = 13;

      for (let i = 0; i < cantidad; i++) {
        const img = document.createElement("img");
        const randomImg = misNubes[Math.floor(Math.random() * misNubes.length)];
        img.src = randomImg;
        img.className = "absolute pointer-events-none opacity-20 mix-blend-screen";
        img.style.filter = "grayscale(100%) brightness(200%)";

        const posX = Math.random() * 90;
        const posY = Math.random() * 100;
        const size = Math.random() * 200 + 150;

        img.style.left = posX + "vw";
        img.style.top = posY + "vh";
        img.style.width = size + "px";

        if (Math.random() > 0.5) {
          img.style.transform = "scaleX(-1)";
        }

        contenedor.appendChild(img);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; size: number; speed: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.3 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(245, 245, 240, 0.15)';
      
      particles.forEach(p => {
        ctx.fillRect(p.x, p.y, p.size, p.size);
        p.y -= p.speed;
        if (p.y < -10) p.y = canvas.height + 10;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-suri-purple">
      {/* Dusk Gradient */}
      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        className="absolute inset-[-10%] bg-gradient-to-br from-[#1a0b2e] via-[#2d1b33] to-[#4a1d1d] opacity-80" 
      />
      
      {/* Nubes Fondo */}
      <div id="nubes-fondo" ref={cloudsContainerRef} className="absolute inset-0 pointer-events-none" />

      {/* Animated Glows */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-suri-green/5 blur-[150px]" 
      />
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-suri-red/5 blur-[120px]" 
      />
      
      {/* Noise and Particles */}
      <div className="noise-bg" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />
      
      {/* Fog Overlay */}
      <motion.div 
        animate={{ 
          x: [-20, 20, -20],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fog-layer opacity-30" 
      />
    </div>
  );
};
