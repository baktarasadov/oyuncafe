"use client";
import Input from "@/components/UI/input";
import { IFormLogin } from "@/types/auth/IAuth";
import { useFormik } from "formik";
import React, { memo, useState } from "react";
import styles from "../assets/style/styles.module.css";
import { nunitoFont } from "@/utils/font";
import { IoClose } from "react-icons/io5";
import Button from "@/components/UI/button";
import Link from "next/link";
import { loginSchema } from "@/schema/login";
import { loginInputs } from "@/constants/auth/login";
import useFormValidation from "@/hoc/useFormValidation";
import useAuth from "@/hoc/auth/useAuth";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Login = () => {
  const { loading, setError, error, onSubmit } = useAuth("/Auth/login");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik<IFormLogin>({
    initialValues: {
      username: "",
      pass: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  const { showError, setShowError, handleButtonClick } =
    useFormValidation(formik);

  if (loading) {
    return (
      <>
        <div style={{ color: "white", fontSize: "30px" }}>Loading...</div>
      </>
    );
  }
  return (
    <>
      <div>
        <div className={`${styles.mainForm} ${nunitoFont.className}`}>
          <h2 className={styles.title}>Login</h2>
          <form
            className={styles.form}
            onSubmit={formik.handleSubmit}
            onChange={() => setError("")}
          >
            <div className={styles.loginForm}>
              {loginInputs.map((element) => (
                <div key={element.name} className={styles.inputGroup}>
                  <label htmlFor={element.name}>{element.label}</label>
                  <Input
                    value={formik.values[element.name as keyof IFormLogin]}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setShowError(false);
                    }}
                    className={
                      element.type === "password" ? styles.relative : ""
                    }
                    placeholder={element.placeholder}
                    type={
                      element.type === "password"
                        ? showPassword
                          ? "text"
                          : "password"
                        : element.type
                    }
                    id={element.name}
                  />
                  {element.type === "password" && (
                    <span
                      className={styles.passwordHid}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {!showPassword ? <VscEye /> : <VscEyeClosed />}
                    </span>
                  )}
                  {showError && (
                    <p className={styles.error}>
                      {formik.errors[element.name as keyof IFormLogin]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className={styles.errorMessage2}>{error}</p>
            <div className={styles.btnContainer}>
              <Link href={"/"} className={styles.closeBtn}>
                Close
              </Link>
              <Button className={styles.nextBtn} onClick={handleButtonClick}>
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className={styles.end}>
          <Link href={"/register"} className={styles.memberBtn}>
            Create a new account
          </Link>
          <Button className={styles.forgotBtn} type="submit">
            Forgot your password?
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(Login);
