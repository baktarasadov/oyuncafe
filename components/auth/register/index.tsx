"use client";
import Input from "@/components/UI/input";
import { registerInputs } from "@/constants/auth/register";
import { registerSchema } from "@/schema/register";
import { IFormRegister } from "@/types/auth/IAuth";
import { useFormik } from "formik";
import React, { memo } from "react";

const Register = () => {
  const onSubmit = async (values: IFormRegister) => {
    console.log(values);
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
      <h2>Hesabını Oluştur</h2>
      <form onSubmit={formik.handleSubmit}>
        {registerInputs.map((element) => (
          <div key={element.name}>
            <label htmlFor={element.name}>{element.name}</label>
            <Input
              value={formik.values[element.name as keyof IFormRegister]}
              onChange={(e) => {
                formik.handleChange(e);
                //   setShowError(false);
              }}
              // className="bg-inherit text-sm"
              type={element.type}
              id={element.name}
            />
          </div>
        ))}
        <p>Cinsiyet</p>
      </form>
    </>
  );
};

export default memo(Register);
