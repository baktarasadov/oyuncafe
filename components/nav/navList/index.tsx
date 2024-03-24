"use client";
import React, { memo } from "react";
import NavItem from "../navItem";
import background from "../assets/icon/background.svg";
import Image from "next/image";
import styles from "../assets/style/styles.module.css";
import { navList } from "@/constants/header/nav";
import { useState } from "react";
import Modal from "../modal";
import { tree } from "next/dist/build/templates/app-page";
import { INavItem } from "@/types/header/INav";
const NavList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNavItemClick = (navItem: INavItem) => {
    if (navItem.title === "Reservation") {
      console.log("asd");
      openModal();
    }
  };
  return (
    <>
      <ul className={styles.navList}>
        {navList.map((nav) => (
          <li
            key={nav.title}
            onClick={() => handleNavItemClick(nav)}
            className={styles.navItem}
          >
            <Image src={background} className={styles.navImg} alt={nav.title} />
            <NavItem href={nav.href}>{nav.title}</NavItem>
          </li>
        ))}
      </ul>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
};

export default memo(NavList);
