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
  title: string;
  page: number;
  perPage: number;
  orderBy: "title" | "releaseDate";
  order: "asc" | "desc";
}

export type FetchMovieByIdResponse = Movie;

// export interface FetchMoviesResponse extends Array<Movie> {}
export type FetchMoviesResponse = Movie[];

// export interface FetchRecommendedResponse extends Array<VideoItem> {}
export type FetchRecommendedResponse = VideoItem[];

export interface FetchByCategoryResponse {
  data: FetchRecommendedResponse;
  page: number;
  perPage: number;
  total: number;
  totalPage: number;
}
