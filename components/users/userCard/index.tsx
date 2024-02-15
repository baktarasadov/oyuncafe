import React, { memo } from "react";
import styles from "./assets/style/styles.module.css";
import { santepheapFont } from "@/utils/font";
import { IPlayerCard } from "@/types/home/iPlayer";
import Image from "next/image";
import RandomImg from "./assets/images/joker.jpg";
import starIcon from "./assets/icon/star.svg";
import diamondIcon from "./assets/icon/diamond.svg";
import coinIcon from "./assets/icon/coin.svg";
import plusIcon from "./assets/icon/plus.svg";
import Button from "@/components/UI/button";
const PlayerCard = () => {
  const handleButtonClick = (): void => {
    console.log("test");
  };
  return (
    <div className={styles.userCard}>
            <div className={styles.userImgCon}>
              <Image
                src={RandomImg}
                alt="user image"
                className={styles.userImage}
              />
            </div>

            <div className={styles.userInfo}>
              <div className={styles.userInfoLeft}>
                <h5 className={styles.username}>kullanici_Adi</h5>
                <div className={styles.userLevel}>
                  <Image
                    src={starIcon}
                    alt="star image"
                    className={styles.starIcon}
                  />
                  <p className={styles.levelText}>Seviye 1</p>
                </div>
              </div>

              <div className={styles.userInfoRight}>
                <div className={styles.coinBox}>
                  <Image
                    src={diamondIcon}
                    alt="diamond image"
                    className={styles.diamondIcon}
                  />

                  <p className={styles.coinText}>1500</p>

                  <Button
                    className={styles.plusButton}
                    onClick={handleButtonClick}
                  >
                    <Image
                      src={plusIcon}
                      alt="plus image"
                      className={styles.plusIcon}
                    />
                  </Button>
                </div>
                <div className={styles.coinBox}>
                  <Image
                    src={coinIcon}
                    alt="coin image"
                    className={styles.coinIcon}
                  />

                  <p className={styles.coinText}>1.299.999</p>

                  <Button
                    className={styles.plusButton}
                    onClick={handleButtonClick}
                  >
                    <Image
                      src={plusIcon}
                      alt="user image"
                      className={styles.plusIcon}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
  );
};

export default memo(PlayerCard);
