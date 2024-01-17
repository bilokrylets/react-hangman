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

const HangmanDrawing = () => {
  return (
    <div className={styles.hangmanStand}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className={styles.hangmanStand__dropdown} />
      <div className={styles.hangmanStand__topPortion} />
      <div className={styles.hangmanStand__stand} />
      <div className={styles.hangmanStand__bottom} />
    </div>
  );
};
export default HangmanDrawing;
