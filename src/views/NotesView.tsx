// Notes view — belt selector and cumulative color-coded combo list
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { belts } from '../data/combos';
import BeltSelector from '../components/BeltSelector';
import ComboDisplay from '../components/ComboDisplay';

type Props = {
  stance: 'orthodox' | 'southpaw';
  onBack: () => void;
};

export default function NotesView({ stance, onBack }: Props) {
  const [selectedBelt, setSelectedBelt] = useState(belts[0].name);

  const selectedIndex = belts.findIndex(b => b.name === selectedBelt);
  const cumulativeBelts = belts.slice(0, selectedIndex + 1);

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-2xl lg:max-w-5xl mx-auto px-4 lg:px-8 py-6 lg:py-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm lg:text-base mb-6 min-h-[44px]"
        >
          <FiArrowLeft /> Home
        </button>
        <BeltSelector belts={belts} selectedBelt={selectedBelt} onSelect={setSelectedBelt} />
        <div className="flex flex-col gap-8 lg:gap-12">
          {cumulativeBelts.map(belt => (
            <div key={belt.name}>
              <div className="text-xs lg:text-sm text-gray-500 uppercase tracking-widest mb-3 lg:mb-4">
                {belt.name} Belt - {belt.combos.length} combo{belt.combos.length !== 1 ? 's' : ''}
              </div>
              {belt.combos.length === 0 ? (
                <p className="text-gray-700 text-sm lg:text-base italic">No combos added yet.</p>
              ) : (
                <div className="flex flex-col gap-2 lg:gap-3">
                  {belt.combos.map(combo => (
                    <div key={combo.name} className="bg-gray-900 rounded-lg px-4 lg:px-6 py-3 lg:py-5">
                      <div className="text-gray-500 text-xs lg:text-sm mb-1 lg:mb-2">{combo.name}</div>
                      <div className="text-sm sm:text-base lg:text-xl">
                        <ComboDisplay combo={combo.combo} stance={stance} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
