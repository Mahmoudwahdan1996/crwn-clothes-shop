import React, { useState } from "react";

import { forgotPassword } from "../../firebase/firebase.utilits";

import FormInput from "../../components/form-Input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForForgetPassword } from "../../utilites";

import {
  ForgetContainer,
  ForgetTitle,
  SpanForOr,
  ForgetLink,
} from "./forget-password.styles";

const ForgetPassword = () => {
  const [userEmail, setUserEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForForgetPassword),
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    setUserEmail(value);
  };

  const submitHandler = async (e) => {
    try {
      await forgotPassword(userEmail);
      alert(
        `An email is sent to ${userEmail} for password reset instructions.`
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ForgetContainer>
      <ForgetTitle>Forget Password </ForgetTitle>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormInput
          name='email'
          type='email'
          value={userEmail}
          required
          label='email'
          onChange={changeHandler}
          Register={register}
        />
        <p>{errors.email?.message}</p>

        <CustomButton className="send-password"  type='submit'>Send Password</CustomButton>
      </form>
      <SpanForOr>or</SpanForOr>
      <ForgetLink to='/login'> Login</ForgetLink>
    </ForgetContainer>
  );
};

export default ForgetPassword;
