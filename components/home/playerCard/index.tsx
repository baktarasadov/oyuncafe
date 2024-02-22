import React, { memo } from "react";
import styles from "../assets/style/styles.module.css";
import { santepheapFont } from "@/utils/font";
import IPlayerCard from "@/types/home/IPlayer";
type test = {
  id: number;
  name: string;
  score: string;
};
const HomePlayerCard: React.FC<test> = ({ id, name, score }) => {
  return (
    <>
      <div className={`${styles.player} ${santepheapFont.className}`}>
        <b>{id}</b>
        <p>{name}</p>
        <span>{score}MR</span>
      </div>
    </>
  );
};

export default memo(HomePlayerCard);
