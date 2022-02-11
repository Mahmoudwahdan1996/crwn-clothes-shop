import React, { useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";

import FormInput from "../../components/form-Input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import {resetPassword} from "../../firebase/firebase.utilits"


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForResetPassword } from "../../utilites";

import { ResetContainer, ResetTitle } from "./resetpassword.styles";

const useQuery = (location)=>{
    return new URLSearchParams(location.search)
}


const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForResetPassword),
  });

  const navigate =useNavigate();
  const location = useLocation();

  const [password, setPassword] = useState("");

  const changeHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

   const query = useQuery(location)


  const submitHandler = async() => {

    try{
        await resetPassword(query.get('oobCode') , password );
        alert( 'Password has been changed, you can login now.');
        navigate("/signin")

    }catch(error){
        console.log(error.message)
    }
  };
  return (
    <ResetContainer>
      <ResetTitle>Reset Password</ResetTitle>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormInput
          name='password'
          type='password'
          value={password}
          required
          label='password'
          onChange={changeHandler}
          Register={register}
        />
        <p>{errors.password?.message}</p>

        <CustomButton type='submit'>Reset Password</CustomButton>
      </form>
    </ResetContainer>
  );
};

export default ResetPassword;
