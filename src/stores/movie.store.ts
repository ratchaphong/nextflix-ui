// stores/movie.store.ts
import { create } from "zustand";
import { MovieService } from "@/services/movie.service";
import { MovieState } from "@/types/movie.store";
import { useToastStore } from "./toast.store";

const showToast = useToastStore.getState().showToast;

export const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  movie: null,
  recommended: [],
  categoryVideos: [],
  loading: false,
  error: null,

  fetchMovies: async () => {
    set({ loading: true, movies: [], error: null });

    try {
      const data = await MovieService.fetchMovies();
      set({ movies: data });
    } catch (err) {
      console.error("❌ Fetch movie failed:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      showToast(errorMessage, "error");
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  fetchMovieById: async (payload) => {
    set({ loading: true, movie: null, error: null });

    try {
      const movie = await MovieService.fetchMovieById(payload);
      set({ movie });
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
      const data = await MovieService.fetchRecommended();
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

  fetchByCategory: async (payload) => {
    set({ loading: true, error: null });

    try {
      const { data } = await MovieService.fetchByCategory(payload);
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
}));
