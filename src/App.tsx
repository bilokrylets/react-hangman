import { useState } from 'react';
import words from '../wordList.json';
import './app.scss';
import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing';

function App() {
  const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [wordGuess, setWordGuess] = useState<string>(randomWord);
  const [guessLetters, setguessLetters] = useState<string[]>([]);

  return (
    <div className="hangman">
      <div className="hangman__result"> lose - win</div>
      <HangmanDrawing />
      {/* <HangmanWord />
      <Keyboard /> */}
    </div>
  );
}

export default App;
