import * as Yup from "yup";

export const homeSchema = (t: (key: string) => string) =>
  Yup.object({
    email: Yup.string()
      .email(t("emailInvalid") || "Invalid email")
      .required(t("emailRequired") || "Email is required"),
  });
