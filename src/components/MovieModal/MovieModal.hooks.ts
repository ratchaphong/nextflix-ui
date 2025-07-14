import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function useMovieModal() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/login");
  };

  return { t, handleSignInClick };
}
