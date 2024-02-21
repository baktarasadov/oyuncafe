import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import arrowDownIcon from "../assets/icons/arrowDownIcon.svg";

const PlayerSeat = () => {
  return (
    <div className={styles.playerSeat}>
      <Image
        src={arrowDownIcon}
        className={styles.arrowDownIcon}
        alt="arrow icon"
      />
    </div>
  );
};

export default PlayerSeat;
