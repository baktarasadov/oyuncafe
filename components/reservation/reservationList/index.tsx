import React from "react";
import styles from "../assets/style/styles.module.css";
import { santepheapFont } from "@/utils/font";
import ReservationItem from "../reservationItem";
const ReservationList = () => {
  return (
    <div className={`${styles.reservationList} ${santepheapFont.className}`}>
      <h2>HALL RENTAL</h2>
      <div className={`container ${styles.list}`}>
        <ReservationItem price={20} title="Baslangic" userCount={5} />
        <ReservationItem
          price={230000}
          title="Orta direkler"
          userCount={1445}
        />
        <ReservationItem price={300} title="Baslangic" userCount={51} />
        <ReservationItem price={300} title="Baslangic" userCount={51} />
        {/* <ReservationItem price={300} title="Baslangic" userCount={51} /> */}
        {/* <ReservationItem price={300} title="Baslangic" userCount={51} /> */}
        {/* <ReservationItem price={300} title="Baslangic" userCount={51} /> */}
        {/* <ReservationItem price={300} title="Baslangic" userCount={51} /> */}
        <ReservationItem price={300} title="Baslangic" userCount={51} />
        <ReservationItem price={300} title="Baslangic" userCount={51} />
      </div>
    </div>
  );
};

export default ReservationList;
