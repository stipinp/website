import React from 'react';
import { motion } from 'motion/react';

export const BaseConceptual: React.FC = () => {
  const concepts = [
    {
      title: "Fantasy Archaeology",
      description: "Reinterpreting archaeological textures through pixel abstraction."
    },
    {
      title: "Poetic Sci-Fi",
      description: "A future where ancient iconographies inhabit the digital ether."
    },
    {
      title: "Material Culture",
      description: "Inspired by the iconography and territory of Northwest Argentina."
    }
  ];

  return (
    <section className="relative py-40 px-6 bg-suri-purple/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] text-suri-green mb-6 font-bold">Research</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8">ARCHAEOLOGY <br /> CONCEPT</h3>
            <p className="text-suri-cream/60 text-xl leading-relaxed mb-12">
              Suri Dimension draws from research in iconography, materiality, and territory of Northwestern Argentina.<br />

              Forms are not replicated: they are reinterpreted through pixel synthesis and generative logic.<br /><br />

              It is a dimension where memory, geography, and visual speculation converge.
            </p>
            
            <div className="space-y-8">
              {concepts.map((concept, i) => (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="border-l-2 border-suri-green pl-6"
                >
                  <h4 className="text-lg font-bold text-suri-cream mb-2 uppercase tracking-widest">{concept.title}</h4>
                  <p className="text-suri-cream/40 text-sm">{concept.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-suri-yellow/5 blur-[100px] rounded-full" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] md:aspect-square bg-suri-blue/20 border border-suri-cream/5 overflow-hidden"
            >
              <img 
                src="https://gateway.fxhash.xyz/ipfs/QmUwVKnWfJzx9zX7fZhEHVf4AyXPrA6EJGNWUP3iswnMDW?img-width=1200&img-quality=80&img-format=webp" 
                alt="Conceptual Base"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
