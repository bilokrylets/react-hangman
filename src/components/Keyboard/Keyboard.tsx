import styles from './Keyboard.module.scss';

const ALPHABET: string[] = [...'abcdefghijklmnopqrstuvwxyz'];

type Props = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: Props) => {
  return (
    <div className={styles.keyboard}>
      {ALPHABET.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.keyboard__key} 
            ${isActive ? styles.keyboard__key_active : ''}
            ${isInactive ? styles.keyboard__key_inactive : ''}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
export default Keyboard;
