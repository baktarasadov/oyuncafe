import Register from "@/components/auth/register";
import React from "react";
import styles from "../assets/style/styles.module.css";
const RegisterContainer = () => {
  return (
    <>
      <div className={styles.background}>
        <section>
          <Register />
        </section>
      </div>
    </>
  );
};

export default RegisterContainer;
