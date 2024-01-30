"use client";
import Input from "@/components/UI/input";
import { registerInputs } from "@/constants/auth/register";
import { registerSchema } from "@/schema/register";
import { IFormRegister } from "@/types/auth/IAuth";
import { useFormik } from "formik";
import React, { memo, useState } from "react";
import styles from "../assets/style/styles.module.css";
import { nunitoFont } from "@/utils/font";
import { IoClose } from "react-icons/io5";
import Button from "@/components/UI/button";
import Link from "next/link";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Register = () => {
  const [selectedOption, setSelectedOption] = useState<string>("male");
  const [sohowError, setShowError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const onSubmit = async (values: IFormRegister) => {
    console.log(values);
  };

  const handleButtonClick = (): void => {
    if (Object.keys(formik.errors).length > 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };
  const formik = useFormik<IFormRegister>({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <>
      <div>
        <div className={`${styles.mainForm} ${nunitoFont.className}`}>
          <h2 className={styles.title}>Sign In</h2>
          <Link href={"/"} className={styles.close}>
            <IoClose />
          </Link>
          <form onSubmit={formik.handleSubmit} className={styles.registerForm}>
            {registerInputs.map((element) => (
              <div key={element.name} className={styles.inputGroup}>
                <label htmlFor={element.name}>
                  {element.name[0].toUpperCase() + element.name.slice(1)}
                </label>
                <div className={styles.input}>
                  <Input
                    value={formik.values[element.name as keyof IFormRegister]}
                    placeholder={element.placeholder}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setShowError(false);
                    }}
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
                      className={styles.password}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VscEye /> : <VscEyeClosed />}
                    </span>
                  )}
                  {sohowError && (
                    <p className={styles.error}>
                      {formik.errors[element.name as keyof IFormRegister]}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div className={styles.radioGroup}>
              <p>Gender</p>
              <div className={styles.radioContainer}>
                <div>
                  <Input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={selectedOption == "male"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label htmlFor="Kadın">Male</label>
                </div>
                <div>
                  <Input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className={nunitoFont.className}
                    checked={selectedOption == "female"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label htmlFor="Kişi">Female</label>
                </div>
              </div>
            </div>
            <Button
              className={`${styles.btnRegister} ${nunitoFont.className}`}
              type="submit"
              onClick={handleButtonClick}
            >
              Sign In
            </Button>
            <Link className={styles.link} href={"/auth/login"}>
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(Register);
