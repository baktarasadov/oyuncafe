import Image from "next/image";
import React from "react";
import styles from "../assets/style/styles.module.css";
import gift from "../assets/image/gift.svg";
import poker from "../assets/image/poker.svg";
const HomeAdvertising = () => {
  return (
    <>
      <div className={styles.adverst}>
        <div>
          <Image src={gift} alt="gift" className={styles.giftImg} />
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Play with your friends!</h2>
          <p className={styles.subTitle}>Unique rewards are waiting for you!</p>
        </div>
        <div>
          <Image src={poker} alt="poker" className={styles.pokerImage} />
        </div>
      </div>
    </>
  );
};

export default HomeAdvertising;
