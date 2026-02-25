import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const LAYERS = [
  { name: 'Geography', color: '#1a0b2e', },
  { name: 'Atmosphere', color: '#34495e', },
  { name: 'Inhabitants', color: '#f5f5f0', },
  { name: 'Rituals', color: '#e74c3c', },
  { name: 'Animated sequences', color: '#f1c40f', },
];

export const GenerativeSystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-40 px-6 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-xs uppercase tracking-[0.5em] text-suri-red mb-6 font-bold">The System</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">GENERATIVE SYMBOLISM</h3>
          <p className="text-suri-cream/70 text-lg mb-10 leading-relaxed">
            Project built using the FROSTxHASH template by Matthew Seremet.
          </p>

          <div className="space-y-4">
            {LAYERS.map((layer, i) => (
              <motion.div 
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 border border-suri-cream/5 bg-suri-cream/[0.02]"
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: layer.color }} />
                <span className="text-sm font-bold uppercase tracking-widest">{layer.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full h-full max-w-md"
          >
            <img 
              src="https://gateway.fxhash.xyz/ipfs/QmVaJ2u9TZQgKpUYz1sXkbQ6qWdnTDwPmLQkZVeQ9LYkPS?img-width=1200&img-quality=80&img-format=webp" 
              alt="Generative System"
              className="w-full h-full object-contain drop-shadow-2xl border border-suri-cream/10 bg-suri-blue/10 p-4"
            />
          </motion.div>
          
          {/* Central Core */}
          <div className="absolute w-32 h-32 bg-suri-yellow/5 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const LayerImage: React.FC<{ layer: any; index: number; progress: any }> = ({ layer, index, progress }) => {
  // Assembly effect: layers move from different directions and settle in the center
  const y = useTransform(progress, [0, 0.5], [(index - 2.5) * 100, 0]);
  const opacity = useTransform(progress, [0, 0.3, 0.5], [0, 0.5, 1]);
  const scale = useTransform(progress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(progress, [0, 0.5], [index * 5 - 15, 0]);

  return (
    <motion.div
      style={{ y, opacity, scale, rotate, zIndex: index }}
      className="absolute w-64 h-64 md:w-80 md:h-80"
    >
      <div className="relative w-full h-full">
        <img 
          src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=suri-layer-${layer.seed}&backgroundColor=${layer.color.replace('#', '')}`} 
          alt={layer.name}
          className="w-full h-full object-contain drop-shadow-2xl"
        />
        {/* Layer Label */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-suri-purple/80 backdrop-blur px-2 py-1 border border-suri-cream/10">
          <span className="text-[8px] uppercase tracking-widest font-bold text-suri-cream/40">{layer.name}</span>
        </div>
      </div>
    </motion.div>
  );
};
