"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import { createAxiosInstance, getToken, postAuth } from "@/service/httpService";

dotenv.config();

const Alma = () => {
  // const handle = async () => {
  //   const data = await getToken("/Auth/preRegister");
  //   const res = await postAuth<any>("/Auth/register", {
  //     // body: {
  //     username: "kerrmalllvdvd",
  //     pass: "erdem.123",
  //     email: "ekaml@yandex.com",
  //     // },
  //   });
  //   console.log(res);
  // };
  return (
    <div>
      {/* <button onClick={handle}>click me</button>
      <p style={{ color: "red" }}>{process.env.IP_URL}</p> */}
    </div>
  );
};

export default Alma;
