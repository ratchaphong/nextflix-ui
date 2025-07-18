import { useRouter } from "@/i18n/navigation";
import { useMovieStore } from "@/stores/movie.store";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { UseMovieModalProps } from "./MovieModal.types";

export default function useMovieModal({ movie }: UseMovieModalProps) {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const { movie: m, fetchMovieById } = useMovieStore();

  const handleSignInClick = () => {
    router.push("/login");
  };

  useEffect(() => {
    if (movie) fetchMovieById({ id: movie.id });
  }, [movie]);

  return { t, detail: m, handleSignInClick };
}
