import React, { useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { CHARACTERS, Character } from '../constants';

const FloatingCharacter: React.FC<{ 
  character: Character; 
  onHover: (name: string | null) => void;
  onClick: (char: Character) => void;
  index: number;
}> = ({ character, onHover, onClick, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Repulsion effect: move away from the cursor
    // We calculate the distance from the center and push the character away
    const moveX = (centerX - e.clientX) * 1.5;
    const moveY = (centerY - e.clientY) * 1.5;
    
    // Clamp the movement to prevent them from flying too far
    const maxMove = 80;
    const clampedX = Math.max(-maxMove, Math.min(maxMove, moveX));
    const clampedY = Math.max(-maxMove, Math.min(maxMove, moveY));
    
    x.set(clampedX);
    y.set(clampedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onHover(null);
  };

  // Random initial positions within safe margins (10% to 90%)
  const initialX = 10 + (index % 4) * 20 + Math.random() * 5;
  const initialY = 10 + Math.floor(index / 4) * 25 + Math.random() * 5;

  return (
    <motion.div
      className="absolute cursor-pointer z-20 pointer-events-auto"
      style={{ 
        left: `${initialX}%`, 
        top: `${initialY}%`,
        x: springX,
        y: springY
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -20, 0],
      }}
      transition={{ 
        opacity: { duration: 1, delay: index * 0.1 },
        y: { duration: 5 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => onHover(character.name)}
      onClick={() => onClick(character)}
    >
      <img 
        src={character.image} 
        alt={character.name}
        className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
};

export const Hero: React.FC<{ onCharacterClick: (char: Character) => void }> = ({ onCharacterClick }) => {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-suri-cream">
            PARTY IN SURI DIMENSION <br />
            
          </h1>
          <p className="text-suri-cream/60 text-lg uppercase tracking-[0.5em] font-medium">
            Generative project<br />
            Hand-drawn pixel by pixel<br /><br />
            <a 
              href="https://www.fxhash.xyz/project/party-in-suri-dimension-f40e7590-dab3-4f7d-bd00-75ebb26239aa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 border border-suri-green/50 text-suri-green hover:bg-suri-green hover:text-suri-purple transition-all duration-300 tracking-[0.2em] text-sm font-bold"
            >
              Deployed on Base
            </a>
          </p>
        </motion.div>
      </div>

      {/* Floating Characters Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {CHARACTERS.map((char, i) => (
          <FloatingCharacter 
            key={char.name} 
            character={char} 
            index={i}
            onHover={setHoveredName}
            onClick={onCharacterClick}
          />
        ))}
      </div>

      {/* Tooltip */}
      {hoveredName && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 bg-suri-purple/80 backdrop-blur-md border border-suri-cream/20 px-6 py-2 rounded-full"
        >
          <p className="text-suri-cream font-mono text-sm uppercase tracking-widest">{hoveredName}</p>
        </motion.div>
      )}
    </section>
  );
};
