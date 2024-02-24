"use client";
import React, { memo } from "react";
import styles from "./assets/style/styles.module.css";
import UserCard from "@/components/users/userCard";
import Input from "@/components/UI/input";
import Button from "@/components/UI/button";
import plusIcon from "./assets/icon/plusIcon.svg";
import giftIcon from "./assets/icon/giftIcon.svg";
import peopleIcon from "./assets/icon/peopleIcon.svg";
import settingsIcon from "./assets/icon/settingsIcon.svg";
import shoppingCartIcon from "./assets/icon/shoppingCartIcon.svg";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
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
                <li>
                  <Link className={styles.navLink} href="/">
                    <Image
                      src={plusIcon}
                      alt="user image"
                      className={styles.navIcon}
                    />
                  </Link>
                </li>
                <li>
                  <Link className={styles.navLink} href="/">
                    <Image
                      src={giftIcon}
                      alt="user image"
                      className={styles.navIcon}
                    />
                  </Link>
                </li>
                <li>
                  <Link className={styles.navLink} href="/">
                    <Image
                      src={plusIcon}
                      alt="user image"
                      className={styles.navIcon}
                    />
                  </Link>
                </li>
                <li>
                  <Link className={styles.navLink} href="/">
                    <Image
                      src={peopleIcon}
                      alt="user image"
                      className={styles.navIcon}
                    />
                  </Link>
                </li>
                <li>
                  <Link className={styles.navLink} href="/">
                    <Image
                      src={settingsIcon}
                      alt="user image"
                      className={styles.navIcon}
                    />
                  </Link>
                </li>
                <li>
                  <Link className={styles.navLink} href="/">
                    <Image
                      src={shoppingCartIcon}
                      alt="user image"
                      className={styles.shopCartIcon}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
