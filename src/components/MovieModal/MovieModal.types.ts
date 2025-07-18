import { Movie } from "@/types/global";

export interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export interface UseMovieModalProps {
  movie: Movie;
}
