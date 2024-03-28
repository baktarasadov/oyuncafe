"use client";
import React, { useState } from "react";
import styles from "./assets/styles/styles.module.css";
const Void = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.containerGeneral}>
      <div className={styles.language}>
        <div>Ses</div>

        <label className={styles.switch}>
          <input type="checkbox" defaultChecked={true} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.language}>
        <div>Mikrofon</div>

        <label className={styles.switch}>
          <input type="checkbox" defaultChecked={true} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.language}>
        <div>Titreşim</div>

        <label className={styles.switch}>
          <input type="checkbox" defaultChecked={true} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.language}>
        <div>Efektler</div>

        <label className={styles.switch}>
          <input type="checkbox" defaultChecked={true} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
    </div>
  );
};

export default Void;
