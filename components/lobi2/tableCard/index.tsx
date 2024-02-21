import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import coinIcon from "../assets/icons/coinIcon.svg";
import gamersIcon from "../assets/icons/gamersIcon.svg";
import Player from "../player";
import PlayerSeat from "../playerSeat";

const TableCard = () => {
  return (
    <div className={styles.tableCard}>
      <div className={styles.tableHead}>
        <div className={styles.tableNumber}>1</div>
        <button className={styles.watchBtn}>İZLE</button>
      </div>

      <div className={styles.playersCon}>
          {/* <PlayerSeat /> */}
          <Player />

        <div className={styles.tableMain}>
          <Player />

          <div className={styles.tableDetails}>
            <div className={styles.playersCount}>
              <Image
                src={gamersIcon}
                className={styles.playersIcon}
                alt="gamers"
              />
              4
            </div>

            <div className={styles.coins}>
              <div className={styles.coinCard}>
                <Image
                  src={coinIcon}
                  className={styles.coinIcon}
                  alt="coin icon"
                />
                10.000
              </div>
            </div>
          </div>

          <PlayerSeat />
        </div>

          <Player />
      </div>
    </div>
  );
};

export default TableCard;
