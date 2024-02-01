import Image from "next/image";
import Link from "next/link";
import React from "react";
import apple from "./assets/icon/app-store.svg";
import play from "./assets/icon/play-store.svg";
import styles from "./style/styles.module.css";
import { nunitoFont } from "@/utils/font";
const Footer = () => {
  return (
    <>
      <footer className={` ${styles.footer} ${nunitoFont.className}`}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.linkContainer}>
            <Link className={styles.link} href={"/"}>
              Privacy Policy
            </Link>
            <Link className={styles.link} href={"/"}>
              Terms of use
            </Link>
          </div>
          <p className={styles.title}>2024 Game Cafe All Rights Reserved.</p>
          <div className={styles.icons}>
            <Link href={"/"}>
              <Image src={apple} alt="oyun_cafe" className={styles.iconApple} />
            </Link>
            <Link href={"/"}>
              <Image src={play} alt="oyun_cafe" className={styles.iconPlay} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
