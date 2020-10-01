import React, { useState } from 'react';
import './style.css';

export function App() {

  const favoriteAnimals = [
    "frog"
  ]; 

  const [guessedCorrectly, setGuessedCorrectly] = useState(undefined);
  const [currentGuess, setCurrentGuess] = useState('');
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);

  const checkIfTheyAreRight = () => {
    if (favoriteAnimals.find(animal => animal === currentGuess)) {
      setGuessedCorrectly(true);
      setCorrectGuesses(correctGuesses + 1);
    } else {
      setGuessedCorrectly(false);
      setWrongGuesses(wrongGuesses + 1);
    }
  }


  return (
    <div className="login-page">
      
      <h1>Welcome to the Girlstart Guessing Game!</h1>

      <div className="questions">

        <div className="question">

          <p className="text">Can you guess one of our favorite animals?</p>
          <input onChange={(e) => setCurrentGuess(e.target.value)}/>
          <button disabled={wrongGuesses > 3} onClick={checkIfTheyAreRight}>GUESS</button>

          {
            guessedCorrectly === true ? <p className="rightGuess">You got it right!</p> :
            guessedCorrectly === false ? <p className="wrongGuess">{wrongGuesses > 3 ? "You got so many wrong you can't guess anymore!" : "You got it wrong"}</p> :
              null
          }
          
          <p className="results">
            Correct guess count: {correctGuesses}
            <br/>
            Wrong guess count: {wrongGuesses}
          </p>

        </div>
      
      
      </div>
    </div>
  );
}