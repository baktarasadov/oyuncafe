import Button from "@/components/UI/button";
import styles from "./styles.module.css";
import Image from "next/image";
import starIcon from "../assets/icons/user-star.svg";
import pointIcon from "../assets/icons/p-icon.svg";
import seatIcon from "../assets/icons/sitting-man.svg";
import userLevelBg from "../assets/icons/user-level.svg";

import userImg from "../assets/images/joker.jpg";

const OnlineUserCard = () => {
  return (
    <>
      <div className={styles.onlineUserCard}>
        <div className={styles.userInfo}>
          <Image src={starIcon} className={styles.starIcon} alt="star icon" />
          <div className={styles.userImgCon}>
            <Image src={userImg} className={styles.userImg} alt="user" />
            <div className={styles.userLevel}>
              <Image
                src={userLevelBg}
                className={styles.userLevelBg}
                alt="user"
              />

              <p className={styles.userLevelNumber}>1</p>
            </div>
          </div>

          <p className={styles.username}>kullanici_Adi</p>
        </div>

        <div className={styles.userEarnings}>
          <div className={styles.userPoints}>
            <Image
              src={pointIcon}
              className={styles.pointIcon}
              alt="point icon"
            />
            170760
          </div>

          <Image src={seatIcon} className={styles.seatIcon} alt="seat icon" />
        </div>
      </div>
    </>
  );
};

export default OnlineUserCard;
