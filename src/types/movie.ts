export interface MovieState {
  movies: Movie[];
  movie: Movie | null;
  loading: boolean;
  current: Movie | null;
  error: string | null;
  fetchMovies: () => Promise<void>;
  fetchMovieById: (id: string) => Promise<void>;
  setCurrent: (movie: Movie) => void;
  clearCurrent: () => void;
}

export interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  year: number;
  ageRating: string;
}
