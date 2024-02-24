import styles from "@/styles/modules/footer/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <h2>Desenvolvido por Gustavo Kozlowski © 2024</h2>
      </div>
    </footer>
  );
}
