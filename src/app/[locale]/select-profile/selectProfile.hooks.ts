"use client";
import { useRouter } from "@/i18n/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { useTranslations } from "next-intl";

interface MemberM {
  name: string;
  img: string;
  locked: boolean;
}

const members: MemberM[] = [
  {
    name: "bom",
    img: "/image/avatar.jpg",
    locked: false,
  },
  {
    name: "basss",
    img: "/image/avatar_2.jpg",
    locked: true,
  },
  {
    name: "boss",
    img: "/image/avatar_3.jpg",
    locked: false,
  },
  {
    name: "mark",
    img: "/image/avatar.jpg",
    locked: false,
  },
];

export const useSelectProfile = () => {
  const { logout } = useAuthStore();
  const router = useRouter();
  const t = useTranslations("SelectProfilePage");

  const handleSelectUser = (m: MemberM) => {
    console.log(m);
    router.push("/dashboard");
  };

  const handleSignOut = () => {
    logout();
  };

  return { t, members, handleSelectUser, handleSignOut };
};
