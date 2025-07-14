// services/movie.service.ts

export interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  year: number;
  ageRating: string;
}

// 🔧 mock data แบบในคำถาม
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
    // ✅ ใช้ mock ถ้าไม่มี API หรืออยู่ใน dev
    // const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true";
    const USE_MOCK = true;

    if (USE_MOCK) {
      return mockMovies;
    }

    const res = await fetch(`/api/movies`);

    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(errorBody.message || "Failed to fetch movies");
    }

    return res.json();
  },
};
