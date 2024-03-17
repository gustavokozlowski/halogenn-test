'use-client'

import styles from "@/styles/modules/item/Item.module.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export default function MenuBars() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className={styles["container"]}>
      {toggleMenu && (
        <ul className={styles["content"]}>
          <li className={styles["items"]}>Início</li>
          <li className={styles["items"]}>Produtos</li>
          <li className={styles["items"]}>Sobre nós</li>
          <li className={styles["items"]}>Contato</li>
        </ul>
      )}
      <FontAwesomeIcon onClick={toggleNav} id={styles["icon"]} icon={faBars} />
    </div>
  );
}
