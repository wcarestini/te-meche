import styles from "../styles/components/Profile.module.css";

export function Profile() {
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
          Level 1
        </p>
      </div>
    </div>
  );
}
