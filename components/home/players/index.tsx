import Button from "@/components/UI/button";
import HomeCarousel from "@/components/home/carousel";
import { IPlayerCard } from "@/types/home/iPlayer";
import React, { memo } from "react";
import styles from "../assets/style/styles.module.css";
import { nunitoFont } from "@/utils/font";
const HomePlayers = () => {
  const list: IPlayerCard[] = [
    {
      id: 1,
      name: "Baktar asad",
      score: "23",
    },
    {
      id: 2,
      name: "Baktar asad",
      score: "23",
    },
    {
      id: 3,
      name: "Baktar asad",
      score: "23",
    },
    {
      id: 4,
      name: "Baktar asad",
      score: "23",
    },
    {
      id: 5,
      name: "Baktar asad",
      score: "23",
    },
    {
      id: 6,
      name: "Baktar asad",
      score: "23",
    },
    {
      id: 7,
      name: "Baktar asad",
      score: "23",
    },
    {
      id: 8,
      name: "Baktar asad",
      score: "23",
    },
  ];

  return (
    <>
      <div className={styles.playersContainer}>
        <div className={styles.filterContainer}>
          <Button
            className={`${styles.filterBtn} ${nunitoFont.className} ${styles.filterActive}`}
          >
            En iyiler
          </Button>
          <Button className={`${styles.filterBtn} ${nunitoFont.className}`}>
            En iyiler
          </Button>{" "}
          <Button className={`${styles.filterBtn} ${nunitoFont.className}`}>
            En iyiler
          </Button>{" "}
          <Button className={`${styles.filterBtn} ${nunitoFont.className}`}>
            En iyiler
          </Button>
          <Button className={`${styles.filterBtn} ${nunitoFont.className}`}>
            En iyiler
          </Button>{" "}
          <Button className={`${styles.filterBtn} ${nunitoFont.className}`}>
            En iyiler
          </Button>
        </div>
        <HomeCarousel playerList={list} />
      </div>
    </>
  );
};

export default memo(HomePlayers);
