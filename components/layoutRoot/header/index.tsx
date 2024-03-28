"use client";
import React, { memo, useState } from "react";
import styles from "./assets/style/styles.module.css";
import UserCard from "@/components/users/userCard";
import Input from "@/components/UI/input";
import Button from "@/components/UI/button";
import plusIcon from "./assets/icon/plusIcon.svg";
import giftIcon from "./assets/icon/giftIcon.svg";
import peopleIcon from "./assets/icon/peopleIcon.svg";
import settingsIcon from "./assets/icon/settingsIcon.svg";
import rankingIcon from "./assets/icon/ranking.svg";
import shoppingCartIcon from "./assets/icon/shoppingCartIcon.svg";
import Link from "next/link";
import Image from "next/image";
import RankingTable from "@/app/(root)/test/(lobi)/rankingTable";
import { Icon } from "@/types/headerLobi/NavLink";
import LobiSettings from "@/app/(root)/test/(lobi)/settings";
const icons: Icon[] = [
  { icon: plusIcon, alt: "PlusIcon", className: styles.navIcon },
  { icon: giftIcon, alt: "GiftIcon", className: styles.navIcon },
  { icon: rankingIcon, alt: "RankIcon", className: styles.navIcon },
  { icon: peopleIcon, alt: "PeopleIcon", className: styles.navIcon },
  { icon: settingsIcon, alt: "SettingsIcon", className: styles.navIcon },
  {
    icon: shoppingCartIcon,
    alt: "Shopping Cart Icon",
    className: styles.shopCartIcon,
  },
];
const Header: React.FC = () => {
  const [isRankingTable, setIsRankingTable] = useState<boolean>(false);
  const [isSettingsTable, setIsSettingsTable] = useState<boolean>(false);

  const openModal = () => {
    setIsRankingTable(true);
  };

  const closeModal = () => {
    setIsRankingTable(false);
  };
  const openModalSettings = () => {
    setIsSettingsTable(true);
  };

  const closeModalSettings = () => {
    setIsSettingsTable(false);
  };

  const handleNavItemClick = (rankTable: string) => {
    if (rankTable === "RankIcon") {
      openModal();
      closeModalSettings();
    }
    if (rankTable === "SettingsIcon") {
      openModalSettings();
      closeModal();
    }
  };
  const handleButtonClick = (): void => {
    console.log("test");
  };
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <UserCard />

          <div className={styles.headerRight}>
            <div className={styles.searchCon}>
              <Input
                // value={""}
                onChange={(e) => {}}
                placeholder="Lorem Ipsum is simply dummy text of the printing..."
                type="text"
              />
              <Button
                className={styles.searchButton}
                onClick={handleButtonClick}
              >
                Yaz Gönder
              </Button>
            </div>

            <nav>
              <ul className={styles.navLinks}>
                {icons.map(({ icon, alt, className }, index) => (
                  <li key={index} onClick={() => handleNavItemClick(alt)}>
                    <Link className={styles.navLink} href="#">
                      <Image src={icon} alt={alt} className={className} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {isRankingTable && <RankingTable closeModal={closeModal} />}
      {isSettingsTable && <LobiSettings closeModal={closeModalSettings} />}
    </>
  );
};

export default memo(Header);
