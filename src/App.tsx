// Root component. Manages currentView and stance.
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import NotesView from './views/NotesView';
import FlashcardsView from './views/FlashcardsView';
import DrillView from './views/DrillView';

type View = 'dashboard' | 'notes' | 'flashcards' | 'drill';
type Stance = 'orthodox' | 'southpaw';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [stance, setStance] = useState<Stance>('orthodox');

  if (currentView === 'notes') {
    return <NotesView stance={stance} onBack={() => setCurrentView('dashboard')} />;
  }
  if (currentView === 'flashcards') {
    return <FlashcardsView stance={stance} onBack={() => setCurrentView('dashboard')} />;
  }
  if (currentView === 'drill') {
    return <DrillView stance={stance} onBack={() => setCurrentView('dashboard')} />;
  }
  return (
    <Dashboard
      stance={stance}
      onStanceChange={setStance}
      onNavigate={(view) => setCurrentView(view)}
    />
  );
}
