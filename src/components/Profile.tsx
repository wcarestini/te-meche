import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/48692830?v=4"
        alt="MInha imagem"
      />
      <div>
        <strong>Meu nome</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
