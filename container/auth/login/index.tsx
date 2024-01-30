import React from "react";
import styles from "../assets/style/styles.module.css";
import Login from "@/components/auth/login";

const LoginContainer = () => {
  return (
    <>
      <main className={styles.background}>
        <section>
          <Login />
        </section>
      </main>
    </>
  );
};

export default LoginContainer;
