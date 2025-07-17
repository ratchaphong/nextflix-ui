import { Profile } from "@/types/login";
import { FormikHelpers } from "formik";

export interface AddProfileFormValues {
  name: string;
  image: string;
}

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
