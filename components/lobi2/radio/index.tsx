import React from "react";
import styles from "./styles.module.css";
import Button from "@/components/UI/button";
import playIcon from "../assets/icons/play-icon.svg";
import backIcon from "../assets/icons/back-icon.svg";
import nextIcon from "../assets/icons/next-icon.svg";
import radioIcon from "../assets/icons/radio-icon.svg";
import Image from "next/image";

const Radio = () => {
  return (
    <div className={styles.radio}>
      <div className={styles.radioButtons}>
        <Button className={styles.radioButton}>
          <Image src={playIcon} alt="play icon" />
        </Button>
        <Button className={styles.radioButton}>
          <Image src={backIcon} alt="back icon" />
        </Button>
        <Button className={styles.radioButton}>
          <Image src={nextIcon} alt="next icon" />
        </Button>
      </div>
      <div className={styles.radioFm}>
        <p>Alem Fm</p>
        <Image src={radioIcon} alt="radio icon" />
      </div>
    </div>
  );
};

export default Radio;
