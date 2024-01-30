import Register from "@/components/auth/register";
import React from "react";
import styles from "../assets/style/styles.module.css";
const RegisterContainer = () => {
  return (
    <>
      <main className={styles.background}>
        <section>
          <Register />
        </section>
      </main>
    </>
  );
};

export default RegisterContainer;
