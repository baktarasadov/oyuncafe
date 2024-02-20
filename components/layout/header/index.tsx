import NavList from "@/components/nav/navList";
import { socialMediaList } from "@/constants/header/socialMedia";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import styles from "./assets/style/styles.module.css";
import MusicPlayer from "@/components/share/musicPlayer";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <nav>
            <NavList />
          </nav>
          <div style={{ color: "white" }}>
            <MusicPlayer />
          </div>
          <div className={styles.socialMediaContainer}>
            {socialMediaList.map((element) => (
              <Link key={element.alt} href={element.href}>
                {
                  <Image
                    className={styles.mediaIcon}
                    src={element.src}
                    alt={element.alt}
                  />
                }
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
