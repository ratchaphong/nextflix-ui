// stores/movie.store.ts
import { create } from "zustand";
import { MovieService } from "@/services/movie.service";
import { MovieState } from "@/types/movie";

export const useMovieStore = create<MovieState>((set) => ({
  movies: [],
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

  setCurrent: (movie) => set({ current: movie }),
  clearCurrent: () => set({ current: null }),
}));
