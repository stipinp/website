import React from 'react';
import { motion } from 'motion/react';

export const EthereumSection: React.FC = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 inline-block"
        >
          <img 
            src="/images/_base-square.svg" 
            alt="Base Logo" 
            className="w-20 h-20 drop-shadow-[0_0_20px_rgba(0,82,255,0.4)]"
          />
        </motion.div>
        
        <h2 className="text-xs uppercase tracking-[0.5em] text-suri-green mb-6 font-bold">Infrastructure</h2>
        <h3 className="text-4xl md:text-6xl font-bold mb-8">BUILT ON BASE</h3>
        <p className="text-suri-cream/60 text-xl leading-relaxed max-w-2xl mx-auto">
          Secured by the Base network. On Fxhash.
        </p>
        
        <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-40">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold">TOKEN SURI</div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold">STORAGE IPFS</div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold">VERIFIED CONTRACT</div>
        </div>
      </div>
    </section>
  );
};
