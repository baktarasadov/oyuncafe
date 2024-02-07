"use client";
import React from "react";
import styles from "./assets/style/styles.module.css";
import { nunitoFont } from "@/utils/font";
import Carousel from "@/components/UI/carousel";
import HomeAside from "@/components/home/aside";
import HomeAdvertising from "@/components/home/advertising";
import HomePlayers from "@/components/home/players";
const HomeContainer = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={`container ${styles.homeMain} ${nunitoFont.className}`}>
          <aside className={styles.left}>
            <HomeAside />
          </aside>
          <div className={styles.right}>
            <section>{/* <HomeAdvertising /> */}</section>
            <section className={styles.players}>
              <HomePlayers />
            </section>
            <div className={styles.playerCount}>
              <p>Count of Players:</p>
              <span>5,275</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
