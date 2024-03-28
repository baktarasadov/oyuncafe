"use client";
import React, { useState } from "react";
import styles from "./assets/styles/styles.module.css";
import Image from "next/image";
import noteIcon from "./assets/ıcons/notebook.png";
import userIcon from "./assets/ıcons/people.png";
import headPhone from "./assets/ıcons/headphone.png";
import General from "./general";
import Account from "./Account";
import Void from "./void";
import { ModalProps } from "@/types/headerLobi/NavLink";
const LobiSettings = ({ closeModal }: ModalProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const showTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerLeft}>
        <div className={styles.tabContainer}>
          <button
            className={
              activeTab === 0
                ? `${styles.button} ${styles.activeTab}`
                : styles.button
            }
            onClick={() => showTab(0)}
          >
            <Image className={styles.noteIcon} src={noteIcon} alt="noteıcon" />
            <span>GENEL</span>
          </button>
          <button
            className={
              activeTab === 1
                ? `${styles.button} ${styles.activeTab}`
                : styles.button
            }
            onClick={() => showTab(1)}
          >
            <Image className={styles.noteIcon} src={userIcon} alt="userIcon" />
            <span>HESAP</span>
          </button>
          <button
            className={
              activeTab === 2
                ? `${styles.button} ${styles.activeTab}`
                : styles.button
            }
            onClick={() => showTab(2)}
          >
            <Image
              className={styles.noteIcon}
              src={headPhone}
              alt="headPhone"
            />
            <span>SES</span>
          </button>
          <button className={styles.closeBtn} onClick={closeModal}>
            Kapat
          </button>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div
          className={`${styles.tabContent} ${
            activeTab === 0 ? styles.active : ""
          }`}
        >
          <General />
        </div>
        <div
          id="tab2"
          className={`${styles.tabContent} ${
            activeTab === 1 ? styles.active : ""
          }`}
        >
          <Account />
        </div>

        <div
          id="tab3"
          className={`${styles.tabContent} ${
            activeTab === 2 ? styles.active : ""
          }`}
        >
          <Void />
        </div>
      </div>
    </div>
  );
};

export default LobiSettings;
