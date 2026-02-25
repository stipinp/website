import React from 'react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const links = [
    { label: 'Twitter', url: 'https://x.com/stipinpixel' },
    { label: 'Instagram', url: 'https://www.instagram.com/stipinp/' },
    { label: 'Fxhash', url: 'https://www.fxhash.xyz/u/stipinpixel' },
    { label: 'Website', url: 'https://stipinp.com/' },
  ];

  return (
    <footer className="py-20 px-6 border-t border-suri-cream/5 bg-suri-purple/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter mb-2">SURI DIMENSION</h2>
          <p className="text-xs uppercase tracking-[0.4em] text-suri-cream/40">© 2026 Pablo Rivero AKA Stipinpixel - All Rights Reserved</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              whileHover={{ y: -2, color: '#f1c40f' }}
              className="text-xs uppercase tracking-widest text-suri-cream/60 transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="text-right hidden md:block">
          <p className="text-[10px] uppercase tracking-[0.5em] text-suri-cream/20">
            ANDEAN FUTURE<br />
          </p>
        </div>
      </div>
    </footer>
  );
};
