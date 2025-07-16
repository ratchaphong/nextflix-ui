import { VideoItem } from "@/types/movie";

export interface SelectedMovieModalProps {
  selectedMovieId: string;
  handleCardModalClose: () => void;
  movies: VideoItem[];
}
