import Button from "@/components/UI/button";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import searchIcon from "../assets/icons/searchIcon.svg";
import Input from "@/components/UI/input";
import TableCard from "../tableCard";
import SalonChat from "../salonChat";

const GameSalon = () => {
  return (
    <>
      <div className={styles.gameSalon}>
        <div className={styles.gameSalonHead}>
          <div className={styles.gameSalonName}>
            <span>SALON#</span> ÇAYLAKLAR
          </div>

          <Button className={styles.nowPlayBtn}>HEMEN OYNA</Button>

          <div className={styles.tableSearch}>
            <Image
              className={styles.searchIcon}
              src={searchIcon}
              alt="search icon"
            />
            <Input placeholder="Search table" type="text" />
          </div>
        </div>

        <div className={styles.gameSalonBody}>
          <div className={styles.tableCardsCon}>
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
          </div>

          <div className={styles.salonChatCon}>
            <SalonChat />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameSalon;
