// stores/movie.store.ts
import { create } from "zustand";
import { MovieService } from "@/services/movie.service";
import { MovieState } from "@/types/movie";

export const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  movie: null,
  recommended: [],
  categoryVideos: [],
  loading: false,
  current: null,
  error: null,

  fetchMovies: async () => {
    set({ loading: true, movies: [], error: null });

    try {
      const data = await MovieService.getMovies();
      set({ movies: data });
    } catch (err) {
      console.error("❌ Fetch movie failed:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  fetchMovieById: async (id: string) => {
    set({ loading: true, movie: null, error: null });

    try {
      const data = await MovieService.getMovieById(id);
      set({ movie: data });
    } catch (err) {
      console.error("❌ Fetch movie by ID failed:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  fetchRecommended: async () => {
    set({ loading: true, error: null });

    try {
      const data = await MovieService.getRecommendedVideos();
      set({ recommended: data });
    } catch (err) {
      console.error("❌ Fetch recommended videos failed:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  fetchByCategory: async (category: string) => {
    set({ loading: true, error: null });

    try {
      const data = await MovieService.getVideosByCategory(category);
      set({ categoryVideos: data });
    } catch (err) {
      console.error("❌ Fetch category videos failed:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  setCurrent: (movie) => set({ current: movie }),
  clearCurrent: () => set({ current: null }),
}));
