import styles from './HangmanDrawing.module.scss';

const HEAD = <div className={styles.hangman__head} />;
const BODY = <div className={styles.hangman__body} />;
const RIGHT_ARM = (
  <div className={`${styles.hangman__arm} ${styles.hangman__arm_right}`} />
);
const LEFT_ARM = (
  <div className={`${styles.hangman__arm} ${styles.hangman__arm_left}`} />
);
const RIGHT_LEG = (
  <div className={`${styles.hangman__leg} ${styles.hangman__leg_right}`} />
);
const LEFT_LEG = (
  <div className={`${styles.hangman__leg} ${styles.hangman__leg_left}`} />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type Props = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: Props) => {
  return (
    <div className={styles.hangmanStand}>
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div className={styles.hangmanStand__dropdown} />
      <div className={styles.hangmanStand__topPortion} />
      <div className={styles.hangmanStand__stand} />
      <div className={styles.hangmanStand__bottom} />
    </div>
  );
};
export default HangmanDrawing;
