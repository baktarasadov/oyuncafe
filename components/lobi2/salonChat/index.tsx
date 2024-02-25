import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "@/components/UI/button";
import zoomIcon from "../assets/icons/zoom-icon.svg";
import closeChatIcon from "../assets/icons/close-chat-icon.svg";
import sendIcon from "../assets/icons/send-icon.svg";
import textStyleIcon from "../assets/icons/text-style.svg";
import paletteIcon from "../assets/icons/palette.svg";
import smileIcon from "../assets/images/smiley-icon 1.png";
import teaIcon from "../assets/images/cay.png";
import docsIcon from "../assets/images/Documents 1.png";
import microphoneIcon from "../assets/images/microphone 1.png";
import joinedUserIcon from "../assets/icons/joined-user-icon.svg";

import Input from "@/components/UI/input";
import UserMessage from "../userMessage";

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

      <div className={styles.salonChatBody}>
        <UserMessage />

        <div className={styles.joinedUser}>
          <Image src={joinedUserIcon} alt="joined user" />
          <p>
            <span>Kemal</span> odaya katıldı
          </p>
        </div>
      </div>

      <div className={styles.salonChatBottom}>
        <div className={styles.messageInputCon}>
          <div className={styles.messageInputLeft}>
            <div className={styles.typography}>
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

            <Input
              className={styles.messageInput}
              placeholder="Sohbet etmek için tıklayınız."
              type="text"
            />
          </div>

          <div className={styles.messageInputRight}>
            <Image src={smileIcon} alt="icon" />
            <Image src={teaIcon} alt="icon" />
            <Image src={docsIcon} alt="icon" />
            <Image src={microphoneIcon} alt="icon" />
          </div>

          <div className={styles.messageType}></div>
        </div>

        <Button className={styles.sendBtn}>
          Gönder
          <Image src={sendIcon} className={styles.sendIcon} alt="send icon" />
        </Button>
      </div>
    </div>
  );
};

export default SalonChat;
