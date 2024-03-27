// Modal.js
import React from "react";
import styles from "../assets/style/styles.module.css";
import userIcon from "./assets/users.png";
import userCoin from "./assets/coin.png";
import closeIcon from "./assets/cross.png";
import Image from "next/image";
import { ModalProps } from "@/types/header/INav";
import { data } from "./data";
const Modal = ({ closeModal }: ModalProps) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalHeader}>
        <div className={styles.header}>
          <h2>Salon Kirala</h2>
        </div>

        <Image src={closeIcon} onClick={closeModal} alt="closeıcon" />
      </div>
      <div className={styles.modalList}>
        {data.map((data) => (
          <div className={styles.modalListItem} key={data.livingId}>
            <h2>{data.livingName}</h2>
            <div className={styles.modalUserIcon}>
              <Image src={userIcon} alt="userıcon" />
              <span>{data.userCount}</span>
            </div>
            <div className={styles.modalUserCoin}>
              <Image src={userCoin} alt="usercoin" />
              <span>{data.userMoney}</span>
            </div>
            <div className={styles.buyBtn}>
              <button>Satın Al</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
