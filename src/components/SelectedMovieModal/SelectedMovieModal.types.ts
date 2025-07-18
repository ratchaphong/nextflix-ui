import { VideoItem } from "@/types/global";

export interface SelectedMovieModalProps {
  selectedMovieId: string;
  handleCardModalClose: () => void;
  movies: VideoItem[];
}
