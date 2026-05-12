// Home screen
import type { ElementType } from 'react';
import { FiBook, FiLayers, FiZap } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import StanceToggle from './StanceToggle';

type View = 'notes' | 'flashcards' | 'drill';

type Props = {
  stance: 'orthodox' | 'southpaw';
  onStanceChange: (stance: 'orthodox' | 'southpaw') => void;
  onNavigate: (view: View) => void;
};

const sections: { view: View; Icon: ElementType; label: string; description: string }[] = [
  { view: 'notes', Icon: FiBook, label: 'Notes', description: 'Browse combos by belt' },
  { view: 'flashcards', Icon: FiLayers, label: 'Flashcards', description: 'Test your combo names' },
  { view: 'drill', Icon: FiZap, label: 'Drill', description: 'Timed combo practice' },
];

export default function Dashboard({ stance, onStanceChange, onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-widest text-white uppercase">BMT Notes</h1>
          <p className="text-xs text-gray-500 mt-2 tracking-widest uppercase">Muay Thai Reference</p>
        </div>
        <div className="flex justify-center mb-10">
          <StanceToggle stance={stance} onChange={onStanceChange} />
        </div>
        <div className="flex flex-col gap-4">
          {sections.map(({ view, Icon, label, description }) => (
            <button
              key={view}
              onClick={() => onNavigate(view)}
              className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-primary transition-colors text-left group"
            >
              <Icon className="text-primary text-2xl flex-shrink-0" />
              <div className="flex-1">
                <div className="text-white font-semibold">{label}</div>
                <div className="text-gray-500 text-sm mt-0.5">{description}</div>
              </div>
              <FaAngleRight className="text-gray-600 group-hover:text-primary transition-colors text-xl flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
