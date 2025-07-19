import { VideoItem } from "@/types/global";

export interface VideoCarouselProps {
  title: string;
  items: VideoItem[];
  onInfoClick: (e: React.MouseEvent, id: string) => void;
}
