// Row of belt pill buttons
import { Belt } from '../data/combos';

type Props = {
  belts: Belt[];
  selectedBelt: string;
  onSelect: (beltName: string) => void;
};

const beltBg: Record<string, string> = {
  'belt-white': 'bg-belt-white',
  'belt-yellow': 'bg-belt-yellow',
  'belt-orange': 'bg-belt-orange',
  'belt-blue': 'bg-belt-blue',
  'belt-purple': 'bg-belt-purple',
  'belt-brown': 'bg-belt-brown',
  'belt-black': 'bg-belt-black',
};

const beltText: Record<string, string> = {
  'belt-white': 'text-gray-900',
  'belt-yellow': 'text-gray-900',
  'belt-orange': 'text-white',
  'belt-blue': 'text-white',
  'belt-purple': 'text-white',
  'belt-brown': 'text-white',
  'belt-black': 'text-white',
};

export default function BeltSelector({ belts, selectedBelt, onSelect }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-6 lg:mb-8">
      {belts.map(belt => (
        <button
          key={belt.name}
          onClick={() => onSelect(belt.name)}
          className={`px-3 lg:px-5 py-1 lg:py-2 rounded-full text-sm lg:text-base font-medium transition-colors ${
            selectedBelt === belt.name
              ? `${beltBg[belt.colorKey] ?? 'bg-primary'} ${beltText[belt.colorKey] ?? 'text-white'}`
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          {belt.name}
        </button>
      ))}
    </div>
  );
}
