import React, { memo } from "react";
import styles from "../assets/style/styles.module.css";
import { santepheapFont } from "@/utils/font";

const HomePlayerCard: React.FC<any> = ({ id, name, score }) => {
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
