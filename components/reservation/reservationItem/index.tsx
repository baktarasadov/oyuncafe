import Button from "@/components/UI/button";
import React from "react";
import Image from "next/image";
import userIcon from "../assets/icon/user.svg";
import priceIcon from "../assets/icon/price.svg";
import styles from "../assets/style/styles.module.css";
import { santepheapFont } from "@/utils/font";
import { IReservation } from "@/types/reservation/IReservation";
const ReservationItem: React.FC<IReservation> = ({
  price,
  title,
  userCount,
}) => {
  return (
    <>
      <div className={styles.reservationItem}>
        <p className={styles.title}>{title}</p>
        <div className={styles.users}>
          <Image src={userIcon} alt="user" className={styles.userIcon} />
          <span>{userCount}</span>
        </div>
        <div className={styles.price}>
          <Image src={priceIcon} alt="price" className={styles.priceIcon} />
          <span>{price}</span>
        </div>
        <Button className={`${santepheapFont.className} ${styles.btn}`}>
          Satin al
        </Button>
      </div>
    </>
  );
};

export default ReservationItem;
