import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "@/components/UI/button";
import zoomIcon from "../assets/icons/zoom-icon.svg";
import closeChatIcon from "../assets/icons/close-chat-icon.svg";
import sendIcon from "../assets/icons/send-icon.svg";
import textStyleIcon from "../assets/icons/text-style.svg";
import paletteIcon from "../assets/icons/palette.svg";
import Input from "@/components/UI/input";

const SalonChat = () => {
  return (
    <div className={styles.salonChat}>
      <div className={styles.salonChatHead}>
        <h3>Salon Sohbeti</h3>

        <div className={styles.salonHeadControl}>
          <div className="mode"></div>
          <Button className={styles.cleanBtn}>Temizle</Button>

          <Image src={zoomIcon} className={styles.zoomIcon} alt="zoom icon" />

          <Image
            src={closeChatIcon}
            className={styles.closeChatIcon}
            alt="close chat icon"
          />
        </div>
      </div>

      <div className={styles.salonChatBody}></div>

      <div className={styles.salonChatBottom}>
        <div className="messageInput">
          <div className="textStyle">
            <Image
              src={textStyleIcon}
              className={styles.textStyleIcon}
              alt="text style"
            />
            <Image
              src={paletteIcon}
              className={styles.paletteIcon}
              alt="palette"
            />
          </div>

          <Input placeholder="Sohbet etmek için tıklayınız." type="text" />

          <div className="messageType"></div>
        </div>

        <Button className={styles.cleanBtn}>
          Gönder
          <Image src={sendIcon} className={styles.sendIcon} alt="send icon" />
        </Button>
      </div>
    </div>
  );
};

export default SalonChat;
