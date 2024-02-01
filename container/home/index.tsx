import React from "react";
import styles from "./assets/style/styles.module.css";
import Button from "@/components/UI/button";
import facebook from "./assets/icon/facebook.svg";
import play from "./assets/icon/play-store.svg";
import Image from "next/image";
import Link from "next/link";

const HomeContainer = () => {
  return (
    <>
      <main>
        <div className={`container ${styles.homeMain}`}>
          <aside className={styles.buttonContainer}>
            <Button className={styles.guesBtn}>Misafir Olarak Oyna</Button>
            <Button className={styles.facebookBtn}>
              <Image
                className={styles.icon}
                src={facebook}
                alt="facebook oyuncafe"
              />
              Facebook’la Giriş Yap
            </Button>
            <Button className={styles.googleBtn}>
              <Image
                className={styles.icon}
                src={play}
                alt="play store oyuncafe"
              />
              Google Play ile Giriş
            </Button>
            <Link href={"/login"} className={styles.loginBtn}>
              Giriş Yap
            </Link>
            <Link href={"/register"} className={styles.registerBtn}>
              Kayıt Ol
            </Link>
          </aside>
          <section>{/* <Register /> */}</section>
        </div>
      </main>
    </>
  );
};

export default HomeContainer;
