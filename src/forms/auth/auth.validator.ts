import * as Yup from "yup";
import baseSchema from "../base.validator";

export default {
  signinSchema: Yup.object({
    email: baseSchema.email.required(baseSchema._MSG_.required),
    password: Yup.string().required(baseSchema._MSG_.required).trim(),
  }),

  signupSchema: {
    basicInfo: Yup.object({
      email: baseSchema.email.required(baseSchema._MSG_.required),
      phoneNumber: baseSchema.phoneNumber,
      firstName: baseSchema.firstName.required(baseSchema._MSG_.required),
      lastName: baseSchema.lastName.required(baseSchema._MSG_.required),
      confirmTerms: baseSchema.confirmTerms.required(),
    }).required(),
    password: Yup.object({
      password: baseSchema.password,
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password")], "The passwords you entered do not match")
        .required(baseSchema._MSG_.required)
        .trim()
        .max(255),
    }).required(),
  },

  forgotSchema: Yup.object({
    email: baseSchema.email.required(baseSchema._MSG_.required),
  }).required(),

  recoveryPasswordSchema: Yup.object({
    password: baseSchema.password,
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password")], "The passwords you entered do not match")
      .required(baseSchema._MSG_.required)
      .trim()
      .max(255),
    code: Yup.string().required(),
  }).required(),
};
