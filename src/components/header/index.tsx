'use-client';

import Image from "next/image";
import styles from "@/styles/modules/header/Header.module.scss";
import { useState, useEffect } from "react";
import MenuBars from "../menu-mobile/index";

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window === "undefined") {
      return { width: 0 };
    }
    return {
      width: window.innerWidth,
    };
  });
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth({
        width: window.innerWidth,
      });
      if (screenWidth.width < 575) {
        setMobile(true);
        return console.log(`Mudou: ${mobile}`);
      } else return setMobile(false);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth, mobile]);

  return (
    <header className={styles["container"]}>
      <div className={styles["content"]}>
        <Image
          id={styles["logo"]}
          src="/logo.svg"
          alt="logo da empresa"
          width={0}
          height={0}
        />
        <nav>
          {mobile === false ? (
            <ul>
              <li>Início</li>
              <li>Produtos</li>
              <li>Sobre nós</li>
              <li>Contato</li>
            </ul>
          ) : (
            <MenuBars />
          )}
        </nav>
        <button>
          <Image
            className={styles["icon-menu-alternative"]}
            src="/menu/Vector-5.svg"
            alt="okay"
            width={20}
            height={50}
          />
          Orçamento
        </button>
      </div>
    </header>
  );
}
