"use client";
import Image from "next/image";
import styles from './nav.module.css';
import Burger from "../burger/burger";
import Menu from "../menu/menu";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <Image
          className={styles.logo__image}
          src="/img/logo.png"
          alt="logo"
          width={250}
          height={170}
        />
      </div>
      <Burger setIsOpen={setIsOpen} />
      {isOpen && <Menu />}
    </nav>
  );
}
