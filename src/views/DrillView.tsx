// Drill view: 10s motivational countdown, timed combo name reveal
import { useState, useEffect, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { belts } from '../data/combos';
import type { Combo } from '../data/combos';
import BeltSelector from '../components/BeltSelector';
import ComboDisplay from '../components/ComboDisplay';
import { motivationalQuotes } from '../data/quotes';
import { shuffle } from '../utils/shuffle';

type Phase = 'setup' | 'countdown' | 'drill';

type Props = { stance: 'orthodox' | 'southpaw'; onBack: () => void };

export default function DrillView({ stance, onBack }: Props) {
  const [selectedBelt, setSelectedBelt] = useState(belts[0].name);
  const [phase, setPhase] = useState<Phase>('setup');
  const [deck, setDeck] = useState<Combo[]>([]);
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [quote, setQuote] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function clearTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function startDrill() {
    const selectedIndex = belts.findIndex(b => b.name === selectedBelt);
    const cumulative = belts.slice(0, selectedIndex + 1).flatMap(b => b.combos);
    setDeck(shuffle(cumulative));
    setIndex(0);
    setRevealed(false);
    setQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
    setPhase('countdown');
    setTimeLeft(10);
  }

  function endDrill() {
    clearTimer();
    setPhase('setup');
  }

  function advance() {
    clearTimer();
    setRevealed(false);
    if (index + 1 >= deck.length) {
      setPhase('setup');
    } else {
      setIndex(i => i + 1);
    }
  }

  useEffect(() => {
    if (phase !== 'countdown') return;
    clearTimer();
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearTimer();
          setPhase('drill');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return clearTimer;
  }, [phase]);

  useEffect(() => {
    if (phase !== 'drill' || revealed || !deck[index]) return;
    setTimeLeft(deck[index].seconds);
    clearTimer();
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearTimer();
          setRevealed(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return clearTimer;
  }, [phase, index, revealed, deck]);

  useEffect(() => {
    if (phase !== 'drill' || !revealed) return;
    const timeout = setTimeout(() => {
      setRevealed(false);
      if (index + 1 >= deck.length) {
        setPhase('setup');
      } else {
        setIndex(i => i + 1);
      }
    }, 8000);
    return () => clearTimeout(timeout);
  }, [phase, revealed, index, deck]);

  if (phase === 'countdown') {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-8 text-center">
        <div className="text-primary text-8xl lg:text-[12rem] font-black tabular-nums mb-8 lg:mb-12">
          {timeLeft}
        </div>
        <p className="text-gray-400 text-base lg:text-2xl max-w-xl lg:max-w-3xl italic">"{quote}"</p>
      </div>
    );
  }

  if (phase === 'drill' && deck[index]) {
    const combo = deck[index];
    return (
      <div className="relative min-h-screen bg-gray-950 flex flex-col items-center justify-center px-8 text-center">
        <button
          onClick={endDrill}
          className="absolute top-6 left-4 lg:left-8 flex items-center gap-2 text-gray-600 hover:text-white text-sm lg:text-base min-h-[44px]"
        >
          <FiArrowLeft /> End
        </button>
        <div className="text-gray-600 text-xs lg:text-sm mb-4 lg:mb-6">
          {index + 1} / {deck.length}
        </div>
        <div className="text-white font-black text-4xl lg:text-7xl xl:text-8xl mb-8 lg:mb-12">
          {combo.name}
        </div>
        {revealed ? (
          <div className="text-xl lg:text-3xl xl:text-4xl">
            <ComboDisplay combo={combo.combo} stance={stance} />
          </div>
        ) : (
          <div className="text-primary text-7xl lg:text-[10rem] font-black tabular-nums">
            {timeLeft}
          </div>
        )}
      </div>
    );
  }

  const selectedIndex = belts.findIndex(b => b.name === selectedBelt);
  const cumulativeCombos = belts.slice(0, selectedIndex + 1).flatMap(b => b.combos);
  const hasCombo = cumulativeCombos.length > 0;

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-4 lg:px-8 py-6 lg:py-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm lg:text-base mb-6 min-h-[44px]"
        >
          <FiArrowLeft /> Home
        </button>
        <div className="flex flex-row items-baseline gap-6 mb-8 lg:mb-10">
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl tracking-wide uppercase">Drill</h2>
          <span className="text-sm lg:text-base">
            <span className="text-strike-left font-medium">Left</span>
            <span className="text-gray-600 mx-1">/</span>
            <span className="text-strike-right font-medium">Right</span>
          </span>
        </div>
        <BeltSelector belts={belts} selectedBelt={selectedBelt} onSelect={setSelectedBelt} />
        {hasCombo ? (
          <>
            <ul className="mb-8 lg:mb-10 flex flex-col gap-3 lg:gap-4">
              {cumulativeCombos.map(combo => (
                <li key={combo.name} className="text-gray-300 text-base sm:text-lg lg:text-2xl">
                  {combo.name}
                </li>
              ))}
            </ul>
            <button
              onClick={startDrill}
              className="w-full sm:w-auto block sm:mx-auto bg-primary text-white font-semibold px-10 py-3 lg:px-14 lg:py-5 rounded-full text-lg lg:text-2xl hover:opacity-90 transition-opacity min-h-[44px]"
            >
              Start
            </button>
          </>
        ) : (
          <p className="text-gray-700 text-sm lg:text-base italic mt-8">No combos for this belt yet.</p>
        )}
      </div>
    </div>
  );
}
