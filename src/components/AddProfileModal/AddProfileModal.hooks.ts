import useDisableBodyScroll from "@/lib/useDisableBodyScroll";
import { useTranslations } from "next-intl";
import { useMemo, useRef } from "react";
import { UseAddProfileModalProps } from "./AddProfileModal.types";
import { initialValues as i } from "./AddProfileModal.utils";
import { AddProfileFormValues } from "@/types/login.form";

export default function useAddProfileModal({ data }: UseAddProfileModalProps) {
  useDisableBodyScroll(true);
  const t = useTranslations("AddProfileModal");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFieldValue("image", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const initialValues: AddProfileFormValues = useMemo(() => {
    if (data) {
      return { ...i, name: data.name, image: data.image };
    }
    return i;
  }, [data]);

  return { t, initialValues, fileInputRef, handleImageUpload };
}
