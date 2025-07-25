import * as Yup from "yup";

export const registerSchema = (t: (key: string) => string) =>
  Yup.object().shape({
    packageId: Yup.string().required(t("packageRequired")),
  });
