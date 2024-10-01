import React from 'react';
// import './FlashCard.css';

const Flashcard = ({ animal, noun, isFlipped, setIsFlipped }) => {

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  return (
    <div className="flashcard-wrapper">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <h2>What is the collective name for {animal}?</h2>
                </div>
                <div className="flashcard-back">
                    <p>Group name: {noun}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Flashcard;
