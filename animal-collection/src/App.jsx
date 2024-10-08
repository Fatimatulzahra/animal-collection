import './App.css';
import Flashcard from './components/FlashCard';
import { useState } from 'react';

const animalNouns = [
  { animal: 'Lions', noun: 'Pride' },
  { animal: 'Elephants', noun: 'Herd' },
  { animal: 'Crows', noun: 'Murder' },
  { animal: 'Fish', noun: 'School' },
  { animal: 'Wolves', noun: 'Pack' },
  { animal: 'Geese', noun: 'Gaggle' },
  { animal: 'Rhinos', noun: 'Crash' },
  { animal: 'Kangaroos', noun: 'Mob' },
  { animal: 'Giraffes', noun: 'Tower' },
  { animal: 'Flamingos', noun: 'Flamboyance' }
]

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNext = () => {
    setFeedback('');
    setIsFlipped(false);
    setGuess('');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % animalNouns.length);
  };

  const handleBack = () => {
    setFeedback(''); 
    setIsFlipped(false);
    setGuess('');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + animalNouns.length) % animalNouns.length);
  };

  const handleSubmit = () => {
    if (guess.toLowerCase() === animalNouns[currentIndex].noun.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect! The correct answer is ${animalNouns[currentIndex].noun}.`);
    }
    setIsFlipped(true); 
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

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className="feedback-section">
        <p>{feedback}</p>
      </div>

      <div className="navigation-buttons">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
