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
    <div className="min-h-screen bg-gray-950 flex flex-col px-4 py-12 sm:px-8 lg:px-16">
      <div className="text-center mb-10 lg:mb-16">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-widest text-white uppercase">BMT Notes</h1>
        <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-2 lg:mt-4 tracking-widest uppercase">Muay Thai Reference</p>
      </div>
      <div className="flex justify-center mb-10 lg:mb-16">
        <StanceToggle stance={stance} onChange={onStanceChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 w-full max-w-5xl lg:max-w-7xl mx-auto flex-1">
        {sections.map(({ view, Icon, label, description }) => (
          <button
            key={view}
            onClick={() => onNavigate(view)}
            className="flex sm:flex-col items-center sm:justify-center gap-4 sm:gap-8 bg-gray-900 border border-gray-800 rounded-xl p-5 sm:p-10 lg:p-16 hover:border-primary hover:bg-gray-800 transition-colors text-left group min-h-[44px] sm:min-h-[240px] lg:min-h-[320px]"
          >
            <Icon className="text-primary text-2xl sm:text-6xl lg:text-8xl flex-shrink-0" />
            <div className="flex-1 sm:text-center">
              <div className="text-white font-semibold sm:text-2xl lg:text-3xl">{label}</div>
              <div className="text-gray-500 text-sm sm:text-base lg:text-xl mt-0.5 sm:mt-2">{description}</div>
            </div>
            <FaAngleRight className="text-gray-600 group-hover:text-primary transition-colors text-xl flex-shrink-0 sm:hidden" />
          </button>
        ))}
      </div>
    </div>
  );
}
