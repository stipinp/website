export interface Character {
  id: string;
  name: string;
  type: 'Yukk' | 'Ancestral Wizards' | 'Maizeborn' | 'Protectors' | 'Maskeds' | 'Creatures' | 'Magical Explorers' | 'Mystic Shards';
  description: string;
  image: string;
  color: string;
}

export const CHARACTERS: Character[] = [
  {
    id: '1',
    name: 'Wooooahhhhh!!!',
    type: 'Yukk',
    description: 'The silent observers of the high plateaus, Yukk are ancient spirits bound to the stones.',
    image: '/images/Yukk.gif',
    color: '#b91c1c'
  },
  {
    id: '2',
    name: 'Ting! Ting! Ting!',
    type: 'Ancestral Wizards',
    description: 'Entities that interact with artifacts and magic to alter the states of nature.',
    image: '/images/Ancestral-Wizards.gif',
    color: '#facc15'
  },
  {
    id: '3',
    name: 'Plop! Plop! Plop!',
    type: 'Maizeborn',
    description: 'Living agrarian forms inspired by representations of the Andean territory.',
    image: '/images/Maizeborn.gif',
    color: '#94a3b8'
  },
  {
    id: '4',
    name: 'Orange and Green!',
    type: 'Magical Explorers',
    description: 'Oh!!! What is that?! The sounds of the wind among the clouds, Orange and Green! Dancing! With pastoral staff!. Explorers of shifting regions who move across the suris.',
    image: '/images/Magical-Explorers.gif',
    color: '#4ade80'
  },
  {
    id: '5',
    name: 'K’aspi!',
    type: 'Protectors',
    description: 'Ritual! K’aspi! (Stick!) Magic! Guard! Charango! (a small Andean string instrument). Stabilizers of territorial symbolic density.',
    image: '/images/Protectors.gif',
    color: '#2d1b33'
  },
  {
    id: '6',
    name: 'Mana – Ucu – Uma – Acu – Nao',
    type: 'Maskeds',
    description: 'Beings, like Yukk, who possess a magical mask and a particular spell unique to each of them.',
    image: '/images/Maskeds.gif',
    color: '#34495e'
  },
  {
    id: '7',
    name: 'Rituals in the South, North, East and West',
    type: 'Mystic Shards',
    description: 'Fragments that dance, their eyes outlined with hypnotic movements, generating magic through the chroma of their gaze. Qomer Rikuy – Puka Rikuy – Anqas Rikuy – Kulli Rikuy. Green Gaze – Red Gaze – Blue Gaze – Purple Gaze',
    image: '/images/Mystic-Shards.gif',
    color: '#818cf8'
  },
  {
    id: '8',
    name: '100',
    type: 'Creatures',
    description: '100 unique beings generated within the system, each one unrepeatable.',
    image: '/images/Creatures.gif',
    color: '#1e293b'
  }
];

export const QUECHUA_WORDS = [
  { word: 'Rikuy', translation: 'Gaze' },
  { word: 'K’aspi', translation: 'Stick' },
  { word: 'Qomer', translation: 'Green' },
  { word: 'Puka', translation: 'Red' },
  { word: 'Anqas', translation: 'Blue' },
  { word: 'Kulli', translation: 'Purple' }
  
];
