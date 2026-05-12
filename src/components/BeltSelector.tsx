// Row of belt pill buttons
import { Belt } from '../data/combos';

type Props = {
  belts: Belt[];
  selectedBelt: string;
  onSelect: (beltName: string) => void;
};

export default function BeltSelector({ belts, selectedBelt, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {belts.map(belt => (
        <button
          key={belt.name}
          onClick={() => onSelect(belt.name)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
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
