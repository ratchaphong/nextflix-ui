import * as Yup from "yup";

export const loginSchema = (t: (key: string) => string) =>
  Yup.object().shape({
    email: Yup.string().email(t("emailInvalid")).required(t("emailRequired")),
    password: Yup.string().required(t("passwordRequired")),
    rememberMe: Yup.boolean(), // Optional, no validation needed
  });
