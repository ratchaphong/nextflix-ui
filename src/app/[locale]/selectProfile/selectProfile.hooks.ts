"use client";
import { useRouter,} from "@/i18n/navigation";


export const useSelectProfile = () => {
  const router = useRouter();
    // const t = useTranslations("selectProfile");
  const profiles = [
    { name: "bom", img: "/image/avatar.jpg" },
    { name: "basss", img: "/image/avatar_2.jpg", locked: true },
    { name: "boss", img: "/image/avatar_3.jpg" },
    { name: "mark", img: "/image/avatar.jpg" },
  ];

   const handleSelect = () => {
    router.push("/dashboard");
  };
  return {
    profiles,
    handleSelect
  };
};
