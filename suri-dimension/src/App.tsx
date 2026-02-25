import React, { useState } from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CharacterGrid } from './components/CharacterGrid';
import { GenerativeSystem } from './components/GenerativeSystem';
import { Lenguaje } from './components/Lenguaje';
import { BaseConceptual } from './components/BaseConceptual';
import { TeamSection } from './components/TeamSection';
import { EthereumSection } from './components/EthereumSection';
import { Footer } from './components/Footer';
import { CharacterPanel } from './components/CharacterPanel';
import { Character } from './constants';

export default function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <div className="relative min-h-screen selection:bg-suri-yellow selection:text-suri-purple">
      <Background />
      
      <main>
        <Hero onCharacterClick={setSelectedCharacter} />
        <About />
        <CharacterGrid onCharacterClick={setSelectedCharacter} />
        <GenerativeSystem />
        <Lenguaje />
        <BaseConceptual />
        <TeamSection />
        <EthereumSection />
      </main>

      <Footer />

      {selectedCharacter && (
        <CharacterPanel 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      )}
    </div>
  );
}
