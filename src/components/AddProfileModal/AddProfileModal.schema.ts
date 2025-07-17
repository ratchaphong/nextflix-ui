import * as Yup from "yup";

export const addProfileSchema = (t: (key: string) => string) =>
  Yup.object({
    name: Yup.string().required(t("nameRequired")),
  });
