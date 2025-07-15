import { Movie } from "@/types/movie";

export interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}
