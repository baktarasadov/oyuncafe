"use client";
import React, { useState } from "react";
import Modal from "./UI/modal";
import ReservationList from "./reservation/reservationList";

const Alma = () => {
  const [click, setClick] = useState<boolean>(true);
  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    let config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: 'https://oyuncafeapi.kemalcelikturk.com/Auth/preRegister',
      headers: {
        'X-Client-IP': '127.0.0.1',
        'Content-Type': 'application/json'
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
