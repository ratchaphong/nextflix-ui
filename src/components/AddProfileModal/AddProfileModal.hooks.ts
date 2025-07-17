import useDisableBodyScroll from "@/lib/useDisableBodyScroll";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function useAddProfileModal() {
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

  return { t, fileInputRef, handleImageUpload };
}
