import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import playerImg from "../assets/images/joker.jpg";

const Player = () => {
  return (
    <div className={styles.playerCard}>
      <Image src={playerImg} className={styles.playerImgSquare} alt="user" />
      <p className={styles.playerUsername}>kullanici_Adi</p>
    </div>
  );
};

export default Player;
