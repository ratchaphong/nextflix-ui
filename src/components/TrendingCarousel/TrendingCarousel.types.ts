import { Movie } from "@/services/movie.service";

export interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}
