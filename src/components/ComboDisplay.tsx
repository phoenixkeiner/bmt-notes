// Renders a combo string with left=blue and right=red coloring
import { orthodoxMap, southpawMap } from '../data/strikeMap';

type Props = {
  combo: string;
  stance: 'orthodox' | 'southpaw';
};

export default function ComboDisplay({ combo, stance }: Props) {
  const strikes = combo.split(',').map(s => s.trim());
  let currentStance = stance;

  const items = strikes.map(strike => {
    const map = currentStance === 'orthodox' ? orthodoxMap : southpawMap;
    const side = map[strike];
    const colorClass =
      side === 'left'
        ? 'text-strike-left'
        : side === 'right'
        ? 'text-strike-right'
        : 'text-gray-300';
    if (strike === 'Switch Kick' || strike === 'Switch Body Kick' || strike === 'Switch Head Kick' || strike === 'Follow') {
      currentStance = currentStance === 'orthodox' ? 'southpaw' : 'orthodox';
    }
    return { strike, colorClass };
  });

  return (
    <span>
      {items.map(({ strike, colorClass }, index) => (
        <span key={index}>
          <span className={colorClass}>{strike}</span>
          {index < items.length - 1 && (
            <span className="text-gray-600">, </span>
          )}
        </span>
      ))}
    </span>
  );
}
