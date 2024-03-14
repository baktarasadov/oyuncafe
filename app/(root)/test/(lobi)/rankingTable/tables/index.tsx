"use client";
import { useState } from "react";
import React from "react";
import styles from "./assets/style/styles.module.css";
import Table from "../table";
import { TableData } from "../data/data";

const TableScore: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.tabContainer}>
          <h5 className={styles.scoreHeadm}>OYUNCU SIRALAMASI</h5>
          <button
            className={
              activeTab === 0
                ? `${styles.button} ${styles.activeTab}`
                : styles.button
            }
            onClick={() => showTab(0)}
          >
            EN İYİLER
          </button>
          <button
            className={
              activeTab === 1
                ? `${styles.button} ${styles.activeTab}`
                : styles.button
            }
            onClick={() => showTab(1)}
          >
            HAFTANIN İYİLERİ
          </button>
          <button
            className={
              activeTab === 2
                ? `${styles.button} ${styles.activeTab}`
                : styles.button
            }
            onClick={() => showTab(2)}
          >
            GÜNÜN İYİLERİ
          </button>
        </div>

        <div
          className={`${styles.tabContent} ${
            activeTab === 0 ? styles.active : ""
          }`}
        >
          <Table data={TableData.data1} />
        </div>
        <div
          id="tab2"
          className={`${styles.tabContent} ${
            activeTab === 1 ? styles.active : ""
          }`}
        >
          <Table data={TableData.data2} />
        </div>

        <div
          id="tab3"
          className={`${styles.tabContent} ${
            activeTab === 2 ? styles.active : ""
          }`}
        >
          <Table data={TableData.data3} />
        </div>
      </div>
    </div>
  );
};

export default TableScore;
