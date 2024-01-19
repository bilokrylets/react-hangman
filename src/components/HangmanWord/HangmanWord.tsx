import styles from './HangmanWord.module.scss';

type Props = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

const HangmanWord = ({ wordToGuess, guessedLetters, reveal }: Props) => {
  return (
    <div className={styles.hangmanWord}>
      {wordToGuess.split('').map((letter, index) => (
        <span className={styles.hangmanWord__letter} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
export default HangmanWord;
