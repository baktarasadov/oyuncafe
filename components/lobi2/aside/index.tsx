import Button from "@/components/UI/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../assets/style/styles.module.css";
import arrowLeftIcon from "../assets/icons/arrowLeftIcon.svg";
import plusIcon from "../assets/icons/plusIcon.svg";
const Lobi2Aside = () => {
  const handleButtonClick = (): void => {
    console.log("test");
  };
  return (
    <>
      <div className={styles.controlButtons}>
        <Button className={styles.controlButton} onClick={handleButtonClick}>
        <Image
            className={styles.controlIcon}
            src={arrowLeftIcon}
            alt="control icon"
          />
        </Button>
        <Button className={styles.controlButton} onClick={handleButtonClick}>
        <Image
            className={styles.controlIcon}
            src={plusIcon}
            alt="control icon"
          />
        </Button>
      </div>
    </>
  );
};

export default Lobi2Aside;
