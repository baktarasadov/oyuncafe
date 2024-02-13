"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import { getToken } from "@/service/httpService";

dotenv.config();

const Alma = () => {
  const handle = async () => {
    await getToken("/Auth/preRegister");
  };
  return (
    <div>
      <button onClick={handle}>click me</button>
      <p style={{ color: "red" }}>{process.env.IP_URL}</p>
    </div>
  );
};

export default Alma;
