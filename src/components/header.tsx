import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="logo da empresa" width={150} height={50} />
      <h1> MINHA PIROw</h1>
    </div>
  );
}
