import * as Yup from "yup";
import parsePhoneNumber from "libphonenumber-js";

Yup.addMethod(Yup.string, "validPhoneNumber", function (errorMessage) {
  return this.test("is-phone-valid", errorMessage, function (value) {
    const commonMsgErr = "phone number is not valid.";
    if (!value || typeof value !== "string") {
      return this.createError({
        path: this.path,
        message: errorMessage || commonMsgErr,
      });
    }
    const validPhone = parsePhoneNumber(value, {
      defaultCountry: "AU",
    });
    if (!validPhone) {
      return this.createError({
        path: this.path,
        message: errorMessage || commonMsgErr,
      });
    }
    return true;
  });
});

const _MSG_ = {
  /**
   * payload: {label: string, path: string, value: string}
   * @returns string message
   */
  required: () => {
    return "Mandatory field not entered";
  },
  requiredSelect: () => {
    return "Mandatory field is required.";
  },
  length: (data: any) => `Required length ${data.length} chars`,
  max: (data: any) => `Exceeds max length ${data.max} chars`,
  integer: () => "Must be a valid integer",
};

export default {
  _MSG_,
  email: Yup.string().email("Your email address is not valid").trim().max(255),
  firstName: Yup.string().trim().max(32),
  lastName: Yup.string().trim().max(32),
  password: Yup.string()
    .trim()
    .required(_MSG_.required)
    .min(8, "From 8 characters")
    .matches(/^(?=.*[a-z]).+$/, "At least one lowercase letter")
    .matches(/^(?=.*[A-Z]).+$/, "At least one uppercase letter")
    .matches(/^(?=.*\d).+$/, "At least one number")
    .matches(/^(?=.*[@#$%^&+=!]).*$/, "At least one symbol")
    .max(16, "Under 16 characters"),
  confirmTerms: Yup.boolean().oneOf([true], "Please agree to the terms"),
  phoneNumber: Yup.string()
    .required(_MSG_.required)
    .min(9, "The minimum length of the phone number is 9 characters.")
    .max(16, "The maximum length of the phone number is 15 characters.")
    .matches(/^[0-9+]+$/, "Your phone number is not valid.")
    .validPhoneNumber("Your phone number is not valid."),
};
