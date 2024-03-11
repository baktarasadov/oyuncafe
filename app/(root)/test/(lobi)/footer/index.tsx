import React from "react";
import styles from "./assets/style/styles.module.css";
import okeyIcon from "./assets/icons/okey.png";
import Image from "next/image";
import invateIcon from "./assets/icons/team.png";
import Coin from "./assets/icons/coin.png";
import Radio from "@/components/share/radio";
const LobiFooter: React.FC = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      footer
      <div className={`${styles.container}`}>
        <button className={styles.iconButton}>
          <div className={styles.iconContainer}>
            <Image
              className={styles.invateIcon}
              src={invateIcon}
              alt="inviteIcon"
            />
          </div>
          <div className={styles.textContainer}>
            <p>Davet Et</p>
            <p>Kazan!</p>
          </div>
        </button>
        <Image className={styles.ımageIcon} src={okeyIcon} alt="okeypng" />
        <button className={styles.iconButton}>
          <div className={styles.iconContainer2}>
            <Image className={styles.invateIcon} src={Coin} alt="coin" />
          </div>
          <div className={styles.textContainer2}>
            <p>VİDEO İZLE</p>
            <p>
              <span>1000</span> ALTIN KAZAN!
            </p>
          </div>
        </button>
        <div className={styles.radioFm}>
          <Radio />
        </div>
      </div>
    </div>
  );
};

export default LobiFooter;
