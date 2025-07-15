import { Movie } from "@/types/movie";
import api from "@/lib/axios";
import axios from "axios";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";

const mockMovies: Movie[] = Array.from({ length: 10 }, (_, i) => ({
  id: String(i + 1),
  title: `รายการที่ ${i + 1}`,
  image: `https://picsum.photos/300/450?random=${i + 1}`,
  year: 2025,
  ageRating: "16+",
  description: "เนื้อเรื่องจำลอง: การล้างแค้นในโลกใต้ดินขององค์กรลึกลับ...",
  tags: ["แอคชั่น", "ระทึกขวัญ", "ดราม่า"],
}));

export const MovieService = {
  getMovies: async (): Promise<Movie[]> => {
    if (USE_MOCK) {
      console.log("🔧 Using MOCK getMovies");
      return new Promise((resolve) =>
        setTimeout(() => resolve(mockMovies), 500)
      );
    }

    try {
      const { data } = await api.get<Movie[]>("/api/movies");
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
};
