import * as yup from "yup";

export const schema = yup.object().shape({
  displayName: yup.string(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "confirm password must match with password"
    ),
});


export const schemaForForgetPassword = yup.object().shape({
  email: yup.string().email().required(),
});


export const schemaForResetPassword = yup.object().shape({
  password: yup.string().min(4).max(15).required(),
});