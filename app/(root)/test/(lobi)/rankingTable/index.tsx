import React from "react";
import styles from "./assets/style/styles.module.css";
import skoreImage from "./assets/icons/skoreimg.png";
import skoreImage2 from "./assets/icons/skoreimg2.png";
import skoreImage3 from "./assets/icons/skoreimg3.png";
import cup from "./assets/icons/cup.png";
import { ModalProps } from "@/types/headerLobi/NavLink";
import Image from "next/image";
import TableScore from "./tables";
const RankingTable = ({ closeModal }: ModalProps) => {
  return (
    <div className={styles.rankingTable}>
      <div className={styles.centeredContainer}>
        <div className={styles.containerLeft}>
          <div className={styles.leftHeader}>
            <h2>en iyi ilk 3 oyuncu</h2>
          </div>
          <div className={styles.scoreImgContainer}>
            <div className={`${styles.allImage} ${styles.backgroundImage}`}>
              <Image
                className={styles.scoreImg}
                src={skoreImage}
                alt="score1"
              />
              <div className={styles.userInfo}>
                <span className={styles.userName}>Kullanıcı adı</span>
                <div className={styles.scoreCupContent}>
                  <Image className={styles.scoreCup} src={cup} alt="score1" />
                  <span>123123</span>
                </div>
              </div>
            </div>
            <div className={styles.allImageRow}>
              <div className={styles.allImage}>
                <Image
                  className={styles.scoreImg}
                  src={skoreImage2}
                  alt="score1"
                />
                <div className={styles.userInfo}>
                  <span className={styles.userName}>Kullanıcı_adı</span>
                  <div className={styles.scoreCupContent}>
                    <Image className={styles.scoreCup} src={cup} alt="score1" />
                    <span>39900</span>
                  </div>
                </div>
              </div>
              <div className={styles.allImage}>
                <Image
                  className={styles.scoreImg}
                  src={skoreImage3}
                  alt="score1"
                />
                <div className={styles.userInfo}>
                  <span className={styles.userName}>Kullanıcı adı</span>
                  <div className={styles.scoreCupContent}>
                    <Image className={styles.scoreCup} src={cup} alt="score1" />
                    <span>39900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>
          <TableScore closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default RankingTable;
