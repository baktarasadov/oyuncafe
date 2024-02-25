import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import playerImg from "../assets/images/joker.jpg";

const UserMessage = () => {
  return (
    <div className={styles.userMessageCon}>
      <Image src={playerImg} className={styles.playerImg} alt="user" />
      <p className={styles.message}>kullanici_Adi: ss</p>
    </div>
  );
};

export default UserMessage;
