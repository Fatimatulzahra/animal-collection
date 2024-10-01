import './App.css';
import Flashcard from './components/FlashCard';
import { useState } from 'react';

const animalNouns = [
  { animal: 'Lions', noun: 'Pride' },
  { animal: 'Elephants', noun: 'Herd' },
  { animal: 'Crows', noun: 'Murder' },
  { animal: 'Fishs', noun: 'School' },
  { animal: 'Wolves', noun: 'Pack' },
  { animal: 'Geese', noun: 'Gaggle' },
  { animal: 'Rhinos', noun: 'Crash' },
  { animal: 'Kangaroos', noun: 'Mob' },
  { animal: 'Giraffes', noun: 'Tower' },
  { animal: 'Flamingos', noun: 'Flamboyance'}
]

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * animalNouns.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Learn your Collective Nouns!</h2>
        <h3>Guess the collective nouns of these animals</h3>
        <h5>Number of cards: 10</h5>
      </div>
      <Flashcard
        animal={animalNouns[currentIndex].animal}
        noun={animalNouns[currentIndex].noun}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
      <button onClick={handleNext}>Next</button>
   </div>
  )
}

export default App
