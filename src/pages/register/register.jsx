import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utilites";

import { signup } from "../../firebase/firebase.utilits";
import FormInput from "../../components/form-Input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import { SignUpContainer, SignUpTitle } from "./register.styles";

const SignUp = () => {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const submitHandler = async ( ) => {

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit(submitHandler)}>
        
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          Register={register}
        />

        <p> {errors.displayName?.message} </p>

        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          Register={register}
        />

        <p> {errors.email?.message} </p>

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          Register={register}
        />
        <p> {errors.password?.message} </p>

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          Register={register}
        />
        <p> {errors.confirmPassword?.message} </p>

        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
