import Image from "next/image";
import styles from "@/styles/modules/header/Header.module.scss";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<String>("disable");

  function handleDropdown(): void {
    switch (isOpen) {
      case "active":
        setIsOpen("disable");
        console.table(isOpen);
        break;
      case "disable":
        setIsOpen("active");
        console.table(isOpen);
        break;
      default:
        return console.table(isOpen);
      // break;
    }
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <nav>
          <Image
            src="/logo.png"
            alt="logo da empresa"
            width={170}
            height={40}
          />
          <ul>
            <li>Início</li>
            <div id={styles.dropdown}>
              <li onClick={handleDropdown}>Produtos</li>
              <div className={styles[`dropdown-content-${isOpen}`]}>
          
              </div>
            </div>
            <li>Laudos</li>
            <li>Sobre nós</li>
            <li>Certificações</li>
            <li>Contato</li>
          </ul>
        </nav>
        <button>Orçamento</button>
      </div>
    </header>
  );
}
