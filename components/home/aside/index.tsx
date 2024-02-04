import Button from "@/components/UI/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../assets/style/styles.module.css";
import facebook from "../assets/icon/facebook.svg";
import play from "../assets/icon/play-store.svg";
import { nunitoFont } from "@/utils/font";
const HomeAside = () => {
  return (
    <>
      <div className={styles.buttonContainer}>
        <Button className={`${styles.guesBtn} ${nunitoFont.className}`}>
          Play as Guest
        </Button>
        <Button className={`${styles.facebookBtn} ${nunitoFont.className}`}>
          <Image
            className={styles.icon}
            src={facebook}
            alt="facebook oyuncafe"
          />
          Login with Facebook
        </Button>
        <Button className={`${styles.googleBtn} ${nunitoFont.className}`}>
          <Image className={styles.icon} src={play} alt="play store oyuncafe" />
          Login with Google Play
        </Button>
        <Link
          href={"/login"}
          className={`${styles.loginBtn} ${nunitoFont.className}`}
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className={`${styles.registerBtn} ${nunitoFont.className}`}
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default HomeAside;
