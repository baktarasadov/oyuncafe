"use client";
import React, { useState } from "react";
import Modal from "./UI/modal";
import ReservationList from "./reservation/reservationList";

const Alma = () => {
  const [click, setClick] = useState<boolean>(true);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      {click && (
        <Modal handleClick={handleClick}>
          <ReservationList />
        </Modal>
      )}
    </div>
  );
};

export default Alma;
