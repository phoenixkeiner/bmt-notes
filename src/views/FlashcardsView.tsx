// Flashcards view: belt selector, shuffled deck, tap-to-flip cards
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiRotateCcw } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { belts } from '../data/combos';
import type { Combo } from '../data/combos';
import BeltSelector from '../components/BeltSelector';
import ComboDisplay from '../components/ComboDisplay';
import { shuffle } from '../utils/shuffle';

type Props = { stance: 'orthodox' | 'southpaw'; onBack: () => void };

export default function FlashcardsView({ stance, onBack }: Props) {
  const [selectedBelt, setSelectedBelt] = useState(belts[0].name);
  const [deck, setDeck] = useState<Combo[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const selectedIndex = belts.findIndex(b => b.name === selectedBelt);
    const cumulative = belts.slice(0, selectedIndex + 1).flatMap(b => b.combos);
    setDeck(shuffle(cumulative));
    setIndex(0);
    setFlipped(false);
  }, [selectedBelt]);

  const current = deck[index];
  const total = deck.length;

  function handlePrev() {
    setFlipped(false);
    setIndex(i => (i - 1 + total) % total);
  }

  function handleNext() {
    setFlipped(false);
    setIndex(i => (i + 1) % total);
  }

  function reshuffle() {
    setDeck(shuffle([...deck]));
    setIndex(0);
    setFlipped(false);
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-4 lg:px-8 py-6 lg:py-10">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm lg:text-base min-h-[44px]"
          >
            <FiArrowLeft /> Home
          </button>
          {total > 0 && (
            <button
              onClick={reshuffle}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm lg:text-base min-h-[44px]"
            >
              <FiRotateCcw className="text-base lg:text-lg" /> Shuffle
            </button>
          )}
        </div>

        <BeltSelector belts={belts} selectedBelt={selectedBelt} onSelect={setSelectedBelt} />

        {total === 0 ? (
          <p className="text-gray-700 text-sm lg:text-base italic mt-8">No combos for this belt yet.</p>
        ) : (
          <>
            <div className="text-center text-gray-600 text-xs lg:text-sm mb-4">
              {index + 1} / {total}
            </div>

            <button
              onClick={() => setFlipped(f => !f)}
              className="w-full min-h-[200px] lg:min-h-[320px] bg-gray-900 border border-gray-800 rounded-2xl p-8 lg:p-14 flex flex-col items-center justify-center gap-4 lg:gap-6 hover:border-primary transition-colors text-center"
            >
              {!flipped ? (
                <div className="text-white font-semibold text-2xl lg:text-4xl xl:text-5xl">
                  {current.name}
                </div>
              ) : (
                <div className="text-lg lg:text-2xl xl:text-3xl">
                  <ComboDisplay combo={current.combo} stance={stance} />
                </div>
              )}
              <div className="text-gray-600 text-xs lg:text-sm mt-2">
                {flipped ? 'tap to see name' : 'tap to reveal combo'}
              </div>
            </button>

            <div className="flex items-center justify-between mt-6 lg:mt-8">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm lg:text-base min-h-[44px] px-4"
              >
                <FaChevronLeft /> Prev
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm lg:text-base min-h-[44px] px-4"
              >
                Next <FaChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
