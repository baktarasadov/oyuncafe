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
const Register = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Kadın");
  const [sohowError, setShowError] = useState<boolean>(false);
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
      <div className={`${styles.mainForm} ${nunitoFont.className}`}>
        <h2 className={styles.title}>Hesabını Oluştur!</h2>
        <span className={styles.close}>
          <IoClose />
        </span>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          {registerInputs.map((element) => (
            <div key={element.name} className={styles.inputGroup}>
              <label htmlFor={element.name}>{element.labelName}</label>
              <Input
                value={formik.values[element.name as keyof IFormRegister]}
                onChange={(e) => {
                  formik.handleChange(e);
                  setShowError(false);
                }}
                type={element.type}
                id={element.name}
              />
              {sohowError && (
                <p className={styles.error}>
                  {formik.errors[element.name as keyof IFormRegister]}
                </p>
              )}
            </div>
          ))}
          <div className={styles.radioGroup}>
            <p>Cinsiyet</p>
            <div className={styles.radioContainer}>
              <div>
                <Input
                  type="radio"
                  id="Kadin"
                  name="cinsiyet"
                  value="Kadın"
                  checked={selectedOption == "Kadın"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <label htmlFor="Kadın">Kadın</label>
              </div>
              <div>
                <Input
                  type="radio"
                  id="Kisi"
                  name="cinsiyet"
                  value="Kişi"
                  checked={selectedOption == "Kişi"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <label htmlFor="Kişi">Kişi</label>
              </div>
            </div>
          </div>
          <Button
            className={styles.btnRegister}
            type="submit"
            onClick={handleButtonClick}
          >
            Hesabımı Oluştur
          </Button>
        </form>
      </div>
    </>
  );
};

export default memo(Register);
