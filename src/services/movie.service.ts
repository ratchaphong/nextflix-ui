import {
  MOCK_MOVIE_OMDB,
  MOCK_MOVIES_OMDB,
  // MOCK_MOVIE_OMDB,
  MOCK_RECOMMENDED_VIDEO,
} from "@/mock";
import {
  FetchByCategoryPayload,
  FetchMoviesByIdPayload,
  FetchMovieByIdResponse,
  FetchMoviesResponse,
  FetchRecommendedResponse,
} from "@/types/movie.store";
import api from "@/lib/axios";
import axios from "axios";
import { Movie } from "@/types/global";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";
// const OMDB_API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const MovieService = {
  fetchMovies: async (): Promise<FetchMoviesResponse> => {
    try {
      const searchQuery = "batman";
      if (USE_MOCK) {
        const data = MOCK_MOVIES_OMDB;
        console.log("🔧 Using MOCK fetchMovies");
        return new Promise((resolve) =>
          setTimeout(() => {
            const transformed: Movie[] = data.Search.map((item) => ({
              id: item.imdbID,
              title: item.Title,
              year: parseInt(item.Year),
              image: item.Poster,
              ageRating: "N/A", // OMDb ไม่มี age rating โดยตรง
              description: "N/A", // ต้องใช้ API แบบ `i=ttxxxx` เพิ่มเติมเพื่อเอารายละเอียด
              tags: [], // ไม่มี tag โดยตรง
            }));
            resolve({ data: transformed });
          }, 500)
        );
      }

      const { data } = await api.get<FetchMoviesResponse>(`/movies/search`, {
        params: {
          q: searchQuery,
        },
        timeout: 60_000,
      });
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Failed to fetch movies.";
        console.error("❌ getMovies error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred while fetching movies.");
    }
  },

  fetchMovieById: async (
    payload: FetchMoviesByIdPayload
  ): Promise<FetchMovieByIdResponse> => {
    try {
      if (USE_MOCK) {
        const data = MOCK_MOVIE_OMDB;
        console.log("🔧 Using MOCK fetchMovieById");
        return new Promise((resolve) =>
          setTimeout(() => {
            const transformed: Movie = {
              id: data.imdbID,
              title: data.Title,
              year: parseInt(data.Year),
              image: data.Poster,
              ageRating: "N/A", // OMDb ไม่มี age rating โดยตรง
              description: "N/A", // ต้องใช้ API แบบ `i=ttxxxx` เพิ่มเติมเพื่อเอารายละเอียด
              tags: [], // ไม่มี tag โดยตรง
            };
            resolve(transformed);
          }, 500)
        );
      }

      const { data } = await api.get<FetchMovieByIdResponse>(
        `/movies/${payload.id}`,
        {
          timeout: 60_000,
        }
      );

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error?.response?.data?.message || "Failed to fetch movie.";
        console.error("❌ getMovieById error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred while fetching movie.");
    }
  },

  fetchRecommended: async (): Promise<FetchRecommendedResponse> => {
    try {
      if (USE_MOCK) {
        const data = MOCK_RECOMMENDED_VIDEO;
        console.log("🔧 Using MOCK fetchRecommended");
        return new Promise((resolve) =>
          setTimeout(() => {
            const transformed: FetchRecommendedResponse = { data };
            resolve(transformed);
          }, 500)
        );
      }
      const { data } = await api.get<FetchRecommendedResponse>(
        `/movies/recommended`,
        {}
      );
      return data;
    } catch (error) {
      console.error("❌ getRecommendedVideos error:", error);
      throw new Error("Failed to fetch recommended videos.");
    }
  },

  fetchByCategory: async (
    payload: FetchByCategoryPayload
  ): Promise<FetchRecommendedResponse> => {
    try {
      if (USE_MOCK) {
        const data = MOCK_RECOMMENDED_VIDEO;
        console.log("🔧 Using MOCK fetchByCategory");
        console.log(payload);
        return new Promise((resolve) =>
          setTimeout(() => {
            const transformed: FetchRecommendedResponse = { data };
            resolve(transformed);
          }, 500)
        );
      }

      const { data } = await api.get<FetchRecommendedResponse>(
        `/movies/recommended`,
        {}
      );

      return data;
    } catch (error) {
      console.error("❌ getVideosByCategory error:", error);
      throw new Error("Failed to fetch videos by category.");
    }
  },

  // getMoviesDraft: async (): Promise<Movie[]> => {
  //   try {
  //     if (USE_MOCK) {
  //       const data = MOCK_MOVIES_OMDB;
  //       console.log("🔧 Using MOCK getMovies");
  //       return new Promise((resolve) =>
  //         setTimeout(() => {
  //           const transformed: Movie[] = data.Search.map((item) => ({
  //             id: item.imdbID,
  //             title: item.Title,
  //             year: parseInt(item.Year),
  //             image: item.Poster,
  //             ageRating: "N/A",
  //             description: "N/A",
  //             tags: [],
  //           }));
  //           resolve(transformed);
  //         }, 500)
  //       );
  //     }

  //     const searchQuery = "batman";
  //     const url = `https://www.omdbapi.com/?s=${encodeURIComponent(
  //       searchQuery
  //     )}&apikey=${OMDB_API_KEY}`;

  //     const { data } = await axios.get(url);

  //     if (data.Response === "True" && Array.isArray(data.Search)) {
  //       const transformed: Movie[] = data.Search.map(
  //         (item: {
  //           imdbID: string;
  //           Title: string;
  //           Year: string;
  //           Poster: string;
  //         }) => ({
  //           id: item.imdbID,
  //           title: item.Title,
  //           year: parseInt(item.Year),
  //           image: item.Poster,
  //           ageRating: "N/A", // OMDb ไม่มี age rating โดยตรง
  //           description: "N/A", // ต้องใช้ API แบบ `i=ttxxxx` เพิ่มเติมเพื่อเอารายละเอียด
  //           tags: [], // ไม่มี tag โดยตรง
  //         })
  //       );
  //       return transformed;
  //     } else {
  //       throw new Error(data.Error || "No movies found.");
  //     }
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       const message =
  //         error.response?.data?.message || "Failed to fetch movies.";
  //       console.error("❌ getMovies error:", message);
  //       throw new Error(message);
  //     }
  //     throw new Error("An unknown error occurred while fetching movies.");
  //   }
  // },

  // getMovieByIdDraft: async (imdbID: string): Promise<Movie> => {
  //   try {
  //     if (USE_MOCK) {
  //       const data = MOCK_MOVIE_OMDB;
  //       console.log("🔧 Using MOCK getMovieById");
  //       return new Promise((resolve) =>
  //         setTimeout(() => {
  //           const transformed: Movie = {
  //             id: data.imdbID,
  //             title: data.Title,
  //             year: parseInt(data.Year),
  //             image: data.Poster,
  //             ageRating: data.Rated || "N/A",
  //             description: data.Plot || "No description available.",
  //             tags: (data.Genre || "").split(",").map((g: string) => g.trim()),
  //           };
  //           resolve(transformed);
  //         }, 500)
  //       );
  //     }

  //     const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${OMDB_API_KEY}`;
  //     const { data } = await axios.get(url);

  //     if (data.Response === "True") {
  //       return {
  //         id: data.imdbID,
  //         title: data.Title,
  //         year: parseInt(data.Year),
  //         image: data.Poster,
  //         ageRating: data.Rated || "N/A",
  //         description: data.Plot || "No description available.",
  //         tags: (data.Genre || "").split(",").map((g: string) => g.trim()),
  //       };
  //     } else {
  //       throw new Error(data.Error || "Movie not found.");
  //     }
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       const message =
  //         error.response?.data?.message || "Failed to fetch movie.";
  //       console.error("❌ getMovieById error:", message);
  //       throw new Error(message);
  //     }
  //     throw new Error("An unknown error occurred while fetching movie.");
  //   }
  // },
};
