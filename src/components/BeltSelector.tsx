// Row of belt pill buttons
import { Belt } from '../data/combos';

type Props = {
  belts: Belt[];
  selectedBelt: string;
  onSelect: (beltName: string) => void;
};

export default function BeltSelector({ belts, selectedBelt, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
      {belts.map(belt => (
        <button
          key={belt.name}
          onClick={() => onSelect(belt.name)}
          className={`px-3 lg:px-5 py-1 lg:py-2 rounded-full text-sm lg:text-base font-medium transition-colors ${
            selectedBelt === belt.name
              ? 'bg-primary text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          {belt.name}
        </button>
      ))}
    </div>
  );
}
