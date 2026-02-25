import React from 'react';
import { motion } from 'motion/react';
import { QUECHUA_WORDS } from '../constants';

const FloatingWord: React.FC<{ word: string; translation: string; index: number }> = ({ word, translation, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        opacity: { duration: 0.8, delay: index * 0.2 },
        y: { duration: 0.8, delay: index * 0.2 }
      }}
      whileHover={{ scale: 1.05 }}
      className="p-8 border border-suri-cream/5 bg-suri-blue/5 backdrop-blur-sm group"
    >
      <h4 className="text-3xl font-bold text-suri-yellow mb-2 group-hover:text-suri-green transition-colors">{word}</h4>
      <p className="text-xs uppercase tracking-[0.3em] text-suri-cream/40">{translation}</p>
    </motion.div>
  );
};

export const Lenguaje: React.FC = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-20">
          <h2 className="text-xs uppercase tracking-[0.5em] text-suri-green mb-6 font-bold">Lenguaje</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8">TERRITORIAL TRACES</h3>
          <p className="text-suri-cream/60 text-xl leading-relaxed">
            In Suri Dimension, words in Quechua appear.<br />
            Quechua is an Andean language spoken in regions of Argentina, Bolivia, and Peru.<br /><br />
            Its presence functions as a territorial trace within the universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUECHUA_WORDS.map((item, i) => (
            <FloatingWord key={item.word} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
