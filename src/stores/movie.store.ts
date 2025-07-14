// stores/movie.store.ts
import { create } from "zustand";
import { Movie, MovieService } from "@/services/movie.service";

interface MovieState {
  movies: Movie[];
  current: Movie | null;
  fetchMovies: () => Promise<void>;
  setCurrent: (movie: Movie) => void;
  clearCurrent: () => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  current: null,

  fetchMovies: async () => {
    try {
      const data = await MovieService.getMovies();
      set({ movies: data });
    } catch (err) {
      console.error("❌ Fetch movie failed:", err);
      set({ movies: [] });
    }
  },

  setCurrent: (movie) => set({ current: movie }),
  clearCurrent: () => set({ current: null }),
}));
