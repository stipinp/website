import React from 'react';
import { motion } from 'motion/react';
import { CHARACTERS, Character } from '../constants';

export const CharacterGrid: React.FC<{ onCharacterClick: (char: Character) => void }> = ({ onCharacterClick }) => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-xs uppercase tracking-[0.5em] text-suri-green mb-4 font-bold">The Culture</h2>
        <h3 className="text-4xl md:text-6xl font-bold">INHABITANTS</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CHARACTERS.map((char, i) => (
          <motion.div
            key={char.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => onCharacterClick(char)}
            className="group relative aspect-square bg-suri-blue/10 border border-suri-cream/5 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-suri-purple/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <img
              src={char.image}
              alt={char.name}
              className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-xs uppercase tracking-widest text-suri-yellow font-bold mb-1">{char.type}</p>
              <p className="text-sm font-bold text-suri-cream">{char.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
