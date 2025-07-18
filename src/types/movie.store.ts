import { Movie, VideoItem } from "./global";

export interface MovieState {
  movies: Movie[];
  movie: Movie | null;
  recommended: VideoItem[];
  categoryVideos: VideoItem[];
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
  fetchMovieById: (payload: FetchMoviesByIdPayload) => Promise<void>;
  fetchRecommended: () => Promise<void>;
  fetchByCategory: (payload: FetchByCategoryPayload) => Promise<void>;
}

export interface FetchMoviesByIdPayload {
  id: string;
}

export interface FetchByCategoryPayload {
  category: string;
}

export type FetchMovieByIdResponse = Movie;

export interface FetchMoviesResponse {
  data: Movie[];
}

export interface FetchRecommendedResponse {
  data: VideoItem[];
}

export type FetchByCategoryResponse = FetchRecommendedResponse;
