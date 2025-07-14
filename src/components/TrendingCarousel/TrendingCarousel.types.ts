export interface TrendingCarouselModalProps {
  id: number;
  image: string;
  title: string;
  year: number;
  ageRating: string;
  tags: string[];
  description: string;
}

export interface MovieModalProps {
  movie: TrendingCarouselModalProps;
  onClose: () => void;
}
