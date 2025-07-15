import { HTMLInputTypeAttribute } from "react";

export interface FormikTextInputProps {
  id: string;
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}
