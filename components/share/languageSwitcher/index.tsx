import React from "react";
import en from "./assets/logo/en.png";
import tr from "./assets/logo/tr.svg";
import Image from "next/image";
import styles from "./assets/style/styles.module.css";
const LanguageSwitcher = () => {
  return (
    <>
      <div>
        <Image className={styles.flag} src={tr} alt="Eng" />
      </div>
    </>
  );
};

export default LanguageSwitcher;
