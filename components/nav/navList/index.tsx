import { navList } from "@/constants/layout/nav";
import React, { memo } from "react";
import NavItem from "../navItem";
import background from "../assets/icon/background.svg";
import Image from "next/image";
import styles from "../assets/style/styles.module.css";
const NavList = () => {
  return (
    <>
      <ul className={styles.navList}>
        {navList.map((nav) => (
          <li key={nav.title} className={styles.navItem}>
            <Image src={background} className={styles.navImg} alt={nav.title} />
            <NavItem href={nav.href}>{nav.title}</NavItem>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(NavList);
