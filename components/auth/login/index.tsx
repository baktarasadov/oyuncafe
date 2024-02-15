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
const Login = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const onSubmit = async (values: IFormLogin) => {
    console.log(values);
  };

  const handleButtonClick = (): void => {
    if (Object.keys(formik.errors).length > 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };
  const formik = useFormik<IFormLogin>({
    initialValues: {
      fullname: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <>
      <div>
        <div className={`${styles.mainForm} ${nunitoFont.className}`}>
          <h2 className={styles.title}>Login</h2>

          <form onSubmit={formik.handleSubmit}>
            <div className={styles.loginForm}>
              {loginInputs.map((element) => (
                <div key={element.name} className={styles.inputGroup}>
                  <label htmlFor={element.name}>
                    {element.name[0].toUpperCase() + element.name.slice(1)}
                  </label>
                  <Input
                    value={formik.values[element.name as keyof IFormLogin]}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setShowError(false);
                    }}
                    placeholder={element.placeholder}
                    type={element.type}
                    id={element.name}
                  />
                  {showError && (
                    <p className={styles.error}>
                      {formik.errors[element.name as keyof IFormLogin]}
                    </p>
                  )}
                </div>
              ))}
            </div>
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
