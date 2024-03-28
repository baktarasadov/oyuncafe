"use client";
import React, { useState } from "react";
import styles from "./assets/styles/styles.module.css";
const General = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.containerGeneral}>
      <div className={styles.language}>
        <div>Dil Seçenekleri</div>

        <label className={styles.switch}>
          <input type="checkbox" defaultChecked={true} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.language}>
        <div>Hemen Oyna Ayarları</div>

        <label className={styles.switch}>
          <input type="checkbox" defaultChecked={true} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.language}>
        <div>Masa İçi Mesajlaşma</div>

        <label className={styles.switch}>
          <input type="checkbox" defaultChecked={true} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.language}>
        <div>Sohbet Balonları</div>

        <label className={styles.switch}>
          <input type="checkbox" defaultChecked={true} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
    </div>
  );
};

export default General;
