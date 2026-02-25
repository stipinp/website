import React from 'react';
import { motion } from 'motion/react';

const TeamMember: React.FC<{
  name: string;
  role: string;
  image: string;
  links: { label: string; url: string }[];
  index: number;
}> = ({ name, role, image, links, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="flex flex-col items-center text-center group"
  >
    <div className="relative w-64 h-64 mb-8 overflow-hidden border border-suri-cream/10 bg-suri-blue/20">
      <div className="absolute inset-0 pixel-grid opacity-10" />
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-suri-purple/60 to-transparent" />
    </div>
    
    <h3 className="text-3xl font-bold tracking-tighter mb-1">{name}</h3>
    <p className="text-xs uppercase tracking-[0.4em] text-suri-yellow mb-6 font-bold">{role}</p>
    
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          className="text-[10px] uppercase tracking-widest text-suri-cream/40 hover:text-suri-cream transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  </motion.div>
);

export const TeamSection: React.FC = () => {
  const team = [
    {
      name: 'Stipinpixel',
      role: 'Artist',
      image: '/images/stipinpixel.jpg',
      links: [
        { label: 'Twitter', url: 'https://x.com/stipinpixel' },
        { label: 'Instagram', url: 'https://www.instagram.com/stipinp/' },
        { label: 'Fxhash', url: 'https://www.fxhash.xyz/u/stipinpixel' },
        { label: 'Website', url: 'https://stipinp.com/' },
      ],
    },
    {
      name: 'Matthew Seremet',
      role: 'Code support',
      image: '/images/matthew.jpg',
      links: [
        { label: 'Twitter', url: 'https://x.com/frostbitten' },
        { label: 'Instagram', url: 'https://www.instagram.com/eatpoopart' },
        { label: 'Fxhash', url: 'https://www.fxhash.xyz/u/frostbitten' },
        { label: 'Website', url: 'https://frostxhash.clxn.art/' },

      ],
    },
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {team.map((member, i) => (
          <TeamMember key={member.name} {...member} index={i} />
        ))}
      </div>
    </section>
  );
};
