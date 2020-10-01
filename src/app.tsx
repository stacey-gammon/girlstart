import React, { useState } from 'react';
import './style.css';

export function App() {

  // Type in right answers here!
  const correctAnswers = [
    "frog"
  ]; 

  // These are our "variables".

  // This will store whether or not they guessed correctly. If it's "undefined" it means
  // they haven't made a guess yet.
  const [guessedCorrectly, setGuessedCorrectly] = useState(undefined);

  // This is where we will store their current guess - what they are typing into the
  // input box.
  const [currentGuess, setCurrentGuess] = useState('');

  // Lets keep track of how many times they guess wrong!
  const [wrongGuesses, setWrongGuesses] = useState(0);


  // These are our "Functions"

  // This function will set the guessedCorrectly variable to true if the current guess is
  // correct, otherwise it'll set it to false.
  const checkIfTheyAreRight = () => {
    if (correctAnswers.find(correctGuess => correctGuess === currentGuess)) {
      setGuessedCorrectly(true);
      setWrongGuesses(0);
    } else {
      setGuessedCorrectly(false);
      setWrongGuesses(wrongGuesses + 1);
    }
  }

  // This function returns a message only if the user has at least one wrong guess.
  const renderWrongGuessCount = () => {
    if (wrongGuesses === 0) {
      return undefined;
    } else {
      return (
       <p className="wrongGuessCount">
        Wrong guess count: {wrongGuesses}
      </p>
      )
    }
  }

  // This function returns a message based on whether they guessed correctly or not.
  // If they haven't guessed yet, it returns nothing.
  const renderResults = () => {
    // If this is undefined (not true, nor false), return nothing. They haven't guessed yet!
    if (guessedCorrectly === undefined) {
      return undefined;
    }

    if (guessedCorrectly === true) {
      return <p className="rightGuess">You got it right!</p>;
    }

    if (guessedCorrectly === false) {
      return <p className="wrongGuess">{"You got it wrong"}</p>;
    }
  }

  return (
    <div className="login-page">
      
      <h1>Welcome to the Girlstart Guessing Game!</h1>

      <div className="questions">

          <p className="text">
            Can you guess one of our favorite animals?
          </p>
          <input
            value={currentGuess}

            // Every time they press a new letter, save the current input text.
            onChange={(e) => setCurrentGuess(e.target.value)}

            // This makes it so pressing "Enter" in the input box makes a guess.
            onKeyPress={(e) => { if (e.key === 'Enter') { checkIfTheyAreRight(); } } }
          />

          <button onClick={checkIfTheyAreRight}>GUESS</button>

          {renderResults()}
          {renderWrongGuessCount()}
        
        </div>
      
    </div>
  );
}