"use client";
import React from "react";
import styles from "./assets/style/styles.module.css";
import { nunitoFont } from "@/utils/font";
import Lobi2Aside from "@/components/lobi2/aside";
const Lobi2Container = () => {
  const handleButtonClick = (): void => {
    console.log("test");
  };
  return (
    <>
      <div className={styles.main}>
        <div className={`container ${styles.homeMain} ${nunitoFont.className}`}>
          <aside className={styles.left}>
            <div className="control-buttons">
              <Lobi2Aside />
            </div>
          </aside>
          {/* <div className={styles.right}>
            <section>
              <HomeAdvertising />
            </section>
            <section className={styles.players}>
              <HomePlayers />
            </section>
            <div className={styles.playerCount}>
              <p>Count of Players:</p>
              <span>5,275</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Lobi2Container;
