"use client";
import React, { useState } from "react";
import styles from "./assets/styles/styles.module.css";
const Account = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.containerGeneral}>
      <div className={styles.language}>
        <div>Davet</div>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" defaultChecked={true} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
      </div>
      <div className={styles.language}>
        <div>Özel Sohbet</div>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" defaultChecked={true} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
      </div>
      <div className={styles.language}>
        <div>Çevrimdışı Görün</div>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" defaultChecked={true} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
      </div>
      <div className={styles.language}>
        <div>Listeden Gizlen</div>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" defaultChecked={true} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
      </div>
      <div className={styles.language}>
        <div>Nick ve Yazı Rengi</div>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" defaultChecked={true} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Account;
