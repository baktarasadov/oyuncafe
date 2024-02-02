import React from "react";
import styles from "./assets/style/styles.module.css";
import Button from "@/components/UI/button";
import facebook from "./assets/icon/facebook.svg";
import play from "./assets/icon/play-store.svg";
import Image from "next/image";
import Link from "next/link";
import gift from "./assets/image/gift.svg";
import poker from "./assets/image/poker.svg";
import { nunitoFont } from "@/utils/font";
const HomeContainer = () => {
  return (
    <>
      <main>
        <div className={`container ${styles.homeMain} ${nunitoFont.className}`}>
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
          <div className={styles.right}>
            <section className={styles.adverst}>
              <div>
                <Image src={gift} alt="gift" className={styles.giftImage} />
              </div>
              <div>
                <h2>Arkadaşlarınla Oyna!</h2>
                <p>Eşsiz ödüller seni bekliyor!</p>
              </div>
              <div>
                <Image src={poker} alt="poker" />
              </div>
            </section>
            <div className={styles.playerCount}>
              <p>Count of Players:</p>
              <span>5,275</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeContainer;
