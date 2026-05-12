// Two button toggle for Orthodox / Southpaw stance
type Stance = 'orthodox' | 'southpaw';

type Props = {
  stance: Stance;
  onChange: (stance: Stance) => void;
};

export default function StanceToggle({ stance, onChange }: Props) {
  return (
    <div className="flex rounded-lg overflow-hidden border border-gray-700">
      <button
        onClick={() => onChange('orthodox')}
        className={`px-5 py-2 text-sm font-medium transition-colors ${
          stance === 'orthodox'
            ? 'bg-primary text-white'
            : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
        }`}
      >
        Orthodox
      </button>
      <button
        onClick={() => onChange('southpaw')}
        className={`px-5 py-2 text-sm font-medium transition-colors ${
          stance === 'southpaw'
            ? 'bg-primary text-white'
            : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
        }`}
      >
        Southpaw
      </button>
    </div>
  );
}
