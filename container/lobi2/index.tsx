"use client";
import React from "react";
import styles from "./assets/style/styles.module.css";
import { nunitoFont } from "@/utils/font";
import Lobi2Aside from "@/components/lobi2/aside";
import Button from "@/components/UI/button";
import GameSalon from "@/components/lobi2/gameSalon";
import OnlineUsers from "@/components/lobi2/onlineUsers";
const Lobi2Container = () => {
  const handleButtonClick = (): void => {
    console.log("test");
  };
  return (
    <>
      <div className={styles.main}>
        <div
          className={`container ${styles.lobi2Main} ${nunitoFont.className}`}
        >
          <aside className={styles.left}>
            <Lobi2Aside />
          </aside>

          <div className={styles.mainContent}>
            <GameSalon />

            <OnlineUsers />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lobi2Container;
