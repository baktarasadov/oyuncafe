"use client";
import Image from "next/image";
import React from "react";
import cancel from "./assets/icon/cancel.svg";
import styles from "./assets/style/styles.module.css";
import { santepheapFont } from "@/utils/font";
import Button from "../button";
import OutsideClickHandler from "react-outside-click-handler";
import { IModal } from "@/types/ui/IModal";
const Modal: React.FC<IModal> = ({ handleClick, children }) => {
  return (
    <>
      <div className={`${santepheapFont.className} ${styles.main}`}>
        <OutsideClickHandler
          onOutsideClick={() => {
            handleClick();
          }}
        >
          <div className={styles.modalContainer}>
            {children}
            <Image
              src={cancel}
              alt="cancel"
              className={styles.close}
              onClick={() => handleClick()}
            />
          </div>
        </OutsideClickHandler>
      </div>
    </>
  );
};

export default Modal;
