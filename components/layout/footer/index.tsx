"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import apple from "./assets/icon/app-store.svg";
import play from "./assets/icon/play-store.svg";
import styles from "./style/styles.module.css";
import { nunitoFont } from "@/utils/font";
import Button from "@/components/UI/button";
import Modal from "@/components/UI/modal";
const Footer = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = (): void => {
    setClick(!click);
  };
  return (
    <>
      <footer className={` ${styles.footer} ${nunitoFont.className}`}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.linkContainer}>
            <Button onClick={handleClick} className={styles.link}>
              Privacy Policy
            </Button>
            <Button onClick={handleClick} className={styles.link}>
              Terms of use
            </Button>
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
      {click && (
        <Modal handleClick={handleClick}>
          <div className={styles.head}>
            <h2>Privacy Policy and Terms of Use</h2>
          </div>
          <div className={styles.content}>
            <div className={styles.contentContainer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button className={`${styles.btn} ${nunitoFont.className}`}>
              I agree
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default memo(Footer);
