import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { signInWithGoogle, login } from "../../firebase/firebase.utilits";

import FormInput from "../../components/form-Input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utilites";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  LinksContainer,
} from "./signIn.styles";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const { email, password } = userCredentials;

  const submitHandler = async () => {
    try {
      await login(email, password);
      navigate(location.state?.from ?? "/");
      mounted.current && setUserCredentials({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormInput
          name='email'
          type='email'
          value={email}
          label='email'
          onChange={changeHandler}
          Register={register}
        />
        <p> {errors.email?.message} </p>

        <FormInput
          name='password'
          type='password'
          value={password}
          label='password'
          onChange={changeHandler}
          Register={register}
        />
        <p> {errors.password?.message} </p>

        <LinksContainer>
          <Link to='/forget-password'>Forget Password ?</Link>
          <Link to='/register'>Register</Link>
        </LinksContainer>
        <ButtonsBarContainer>
          <CustomButton className="sign-in" type='submit'>Sign In</CustomButton>
          <CustomButton className="sign-in" onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            sign in with google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
