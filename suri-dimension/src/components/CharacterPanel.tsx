import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Character } from '../constants';

interface CharacterPanelProps {
  character: Character;
  onClose: () => void;
}

export const CharacterPanel: React.FC<CharacterPanelProps> = ({ character, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-full md:w-[500px] z-[100] bg-suri-purple/95 backdrop-blur-xl border-l border-suri-cream/10 shadow-2xl overflow-y-auto"
      >
        <div className="p-8">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:bg-suri-cream/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-suri-cream" />
          </button>

          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-square bg-suri-blue/20 border border-suri-cream/5 mb-10 overflow-hidden"
            >
              <img 
                src={character.image} 
                alt={character.name}
                className="w-full h-full object-contain p-12"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs uppercase tracking-[0.5em] text-suri-yellow mb-4 font-bold">{character.type}</p>
              <h2 className="text-5xl font-bold mb-8 tracking-tighter">{character.name}</h2>
              
              <div className="w-20 h-1 bg-suri-green mb-8" />
              
              <p className="text-suri-cream/60 text-lg leading-relaxed mb-12">
                {character.description}
              </p>

              <div className="space-y-6">
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
