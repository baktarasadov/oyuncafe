import React from "react";
import load from "./assets/image/load.svg";
import Image from "next/image";
import { nunitoFont } from "@/utils/font";
import styles from "./assets/style/styles.module.css";
const Loading = () => {
  return (
    <>
      <div className={`${nunitoFont.className}`}>
        <Image className={styles.image} src={load} alt="load" />
        <div>
          <h2 className={styles.loadingText}>Loading...</h2>
          <div className={styles.loading}>
            <div className={styles.inner}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
