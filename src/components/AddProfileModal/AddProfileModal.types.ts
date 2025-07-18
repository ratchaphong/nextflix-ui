import { Profile } from "@/types/global";
import { AddProfileFormValues } from "@/types/login.form";
import { FormikHelpers } from "formik";

export interface AddProfileModalProps {
  onClose: () => void;
  onSubmit: (
    values: AddProfileFormValues,
    actions: FormikHelpers<AddProfileFormValues>
  ) => void;
  data: Profile | null;
}

export interface UseAddProfileModalProps {
  data: Profile | null;
}
