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
  const [sohowError, setShowError] = useState<boolean>(false);
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
          <h2 className={styles.title}>Üye Girişi</h2>
          <Link href={"/"} className={styles.close}>
            <IoClose />
          </Link>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.loginForm}>
              {loginInputs.map((element) => (
                <div key={element.name} className={styles.inputGroup}>
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
                  {sohowError && (
                    <p className={styles.error}>
                      {formik.errors[element.name as keyof IFormLogin]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.btnContainer}>
              <Button className={styles.closeBtn}>KAPAT</Button>
              <Button className={styles.nextBtn}>GİRİŞ</Button>
            </div>
          </form>
        </div>
        <div className={styles.end}>
          <Button className={styles.memberBtn}>Üye Ol</Button>
          <Button className={styles.forgotBtn} type="submit">
            Şifremi Unuttum
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(Login);
