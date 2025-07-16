import { useRouter } from "@/i18n/navigation";
import { useMovieStore } from "@/stores/movie.store";
import { Movie } from "@/types/movie";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function useMovieModal({ movie }: { movie: Movie }) {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const { movie: m, fetchMovieById } = useMovieStore();

  const handleSignInClick = () => {
    router.push("/login");
  };

  useEffect(() => {
    // console.log(movie);
    fetchMovieById(movie.id);
  }, [movie]);

  return { t, detail: m, handleSignInClick };
}
