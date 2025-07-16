import { Movie, VideoItem } from "@/types/movie";
// import api from "@/lib/axios";
import axios from "axios";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";
const OMDB_API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
// const INVIDIOUS_BASE = "https://invidious.snopyta.org/api/v1";

// const mockMovies: Movie[] = Array.from({ length: 10 }, (_, i) => ({
//   id: String(i + 1),
//   title: `รายการที่ ${i + 1}`,
//   image: `https://picsum.photos/300/450?random=${i + 1}`,
//   year: 2025,
//   ageRating: "16+",
//   description: "เนื้อเรื่องจำลอง: การล้างแค้นในโลกใต้ดินขององค์กรลึกลับ...",
//   tags: ["แอคชั่น", "ระทึกขวัญ", "ดราม่า"],
// }));

const MOCK_MOVIES_OMDB = {
  Search: [
    {
      Title: "Batman Begins",
      Year: "2005",
      imdbID: "tt0372784",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "The Batman",
      Year: "2022",
      imdbID: "tt1877830",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      imdbID: "tt2975590",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Batman",
      Year: "1989",
      imdbID: "tt0096895",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzZmZWViM2EtNzhlMi00NzBlLWE0MWEtZDFjMjk3YjIyNTBhXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Batman Returns",
      Year: "1992",
      imdbID: "tt0103776",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTliMDVkYTktZDdlMS00NTAwLWJhNzYtMWIwMDZjN2ViMGFiXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Batman & Robin",
      Year: "1997",
      imdbID: "tt0118688",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzU3ZjE3M2UtM2E4Ni00MDI5LTkyZGUtOTFkMGIyYjNjZGU3XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Batman Forever",
      Year: "1995",
      imdbID: "tt0112462",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTUyNjJhZWItMTZkNS00NDc4LTllNjUtYTg3NjczMzA5ZTViXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "The Lego Batman Movie",
      Year: "2017",
      imdbID: "tt4116284",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    },
    {
      Title: "Batman: The Animated Series",
      Year: "1992–1995",
      imdbID: "tt0103359",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
      Year: "2016",
      imdbID: "tt18689424",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
    },
  ],
  totalResults: "613",
  Response: "True",
};

const MOCK_MOVIE_OMDB = {
  Title: "Batman v Superman: Dawn of Justice",
  Year: "2016",
  Rated: "R",
  Released: "25 Mar 2016",
  Runtime: "151 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "Zack Snyder",
  Writer: "Bob Kane, Bill Finger, Jerry Siegel",
  Actors: "Ben Affleck, Henry Cavill, Amy Adams",
  Plot: "Batman is manipulated by Lex Luthor to fear Superman. Superman´s existence is meanwhile dividing the world and he is framed for murder during an international crisis. The heroes clash and force the neutral Wonder Woman to reemerge.",
  Language: "English",
  Country: "United States, Morocco",
  Awards: "14 wins & 33 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "6.5/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "28%",
    },
    {
      Source: "Metacritic",
      Value: "44/100",
    },
  ],
  Metascore: "44",
  imdbRating: "6.5",
  imdbVotes: "772,378",
  imdbID: "tt2975590",
  Type: "movie",
  DVD: "N/A",
  BoxOffice: "$330,360,194",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

const MOCK_RECOMMENDED_VIDEO: VideoItem[] = [
  {
    id: "QYDza3BLr1w",
    title: "三浦大知 (Daichi Miura) / Polytope -Conceptual Film-",
    thumbnail: "https://img.youtube.com/vi/QYDza3BLr1w/hqdefault.jpg",
    video: "https://www.youtube.com/embed/QYDza3BLr1w?autoplay=1",
    description: "New Single「Horizon Dreamer / Polytope」2025.06.25 Release.",
  },
  {
    id: "NRtnUVaRwXM",
    title: "INVISIBLE",
    thumbnail: "https://img.youtube.com/vi/NRtnUVaRwXM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/NRtnUVaRwXM?autoplay=1",
    description: "INVISIBLE · Duran Duran",
  },
  {
    id: "HegSBovl24I",
    title:
      "利比《跳楼机》(官方歌词MV)｜LBI - Jumping Machine (Official Lyric Video)",
    thumbnail: "https://img.youtube.com/vi/HegSBovl24I/hqdefault.jpg",
    video: "https://www.youtube.com/embed/HegSBovl24I?autoplay=1",
    description: "数位收听：https://smexlbi.lnk.to/JumpingMachine",
  },
  {
    id: "OodEsjZ88TQ",
    title: "Fujii Kaze - Hachikō [Official video]",
    thumbnail: "https://img.youtube.com/vi/OodEsjZ88TQ/hqdefault.jpg",
    video: "https://www.youtube.com/embed/OodEsjZ88TQ?autoplay=1",
    description: '“Hachikō" - The 1st single from his 3rd Album',
  },
  {
    id: "y8VfziFZMGY",
    title: "Sins of The Father",
    thumbnail: "https://img.youtube.com/vi/y8VfziFZMGY/hqdefault.jpg",
    video: "https://www.youtube.com/embed/y8VfziFZMGY?autoplay=1",
    description:
      "Sins of The Father · Donna Burke · Ludvig Forssell · Akihiro Honda",
  },
  {
    id: "Y36b8_WFejI",
    title: "KIRINJI - killer tune kills me feat. YonYon",
    thumbnail: "https://img.youtube.com/vi/Y36b8_WFejI/hqdefault.jpg",
    video: "https://www.youtube.com/embed/Y36b8_WFejI?autoplay=1",
    description: "KIRINJI ニュー・シングル「killer tune kills me feat. YonYon",
  },
  {
    id: "mXHKjFKBC0g",
    title: "The Man Who Sold the World (2010 Remaster)",
    thumbnail: "https://img.youtube.com/vi/mXHKjFKBC0g/hqdefault.jpg",
    video: "https://www.youtube.com/embed/mXHKjFKBC0g?autoplay=1",
    description: "The Man Who Sold the World (2010 Remaster) · Midge Ure",
  },
  {
    id: "sySlY1XKlhM",
    title: "Raindrops Keep Falling on my Head",
    thumbnail: "https://img.youtube.com/vi/sySlY1XKlhM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/sySlY1XKlhM?autoplay=1",
    description: "Raindrops Keep Falling on my Head · B.J. Thomas",
  },
];

export const MovieService = {
  //   getMovies: async (): Promise<Movie[]> => {
  //     if (USE_MOCK) {
  //       console.log("🔧 Using MOCK getMovies");
  //       return new Promise((resolve) =>
  //         setTimeout(() => resolve(mockMovies), 500)
  //       );
  //     }

  //     try {
  //       const { data } = await api.get<Movie[]>("/api/movies");
  //       return data;
  //     } catch (error: unknown) {
  //       if (axios.isAxiosError(error)) {
  //         const message =
  //           error.response?.data?.message || "Failed to fetch movies.";
  //         console.error("❌ getMovies error:", message);
  //         throw new Error(message);
  //       }
  //       throw new Error("An unknown error occurred while fetching movies.");
  //     }
  //   },

  getMovies: async (): Promise<Movie[]> => {
    try {
      if (USE_MOCK) {
        const data = MOCK_MOVIES_OMDB;
        console.log("🔧 Using MOCK getMovies");
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
            resolve(transformed);
          }, 500)
        );
      }

      const searchQuery = "batman"; // ✅ คำค้นต้องไม่ว่าง
      const url = `https://www.omdbapi.com/?s=${encodeURIComponent(
        searchQuery
      )}&apikey=${OMDB_API_KEY}`;

      const { data } = await axios.get(url);

      if (data.Response === "True" && Array.isArray(data.Search)) {
        const transformed: Movie[] = data.Search.map(
          (item: {
            imdbID: string;
            Title: string;
            Year: string;
            Poster: string;
          }) => ({
            id: item.imdbID,
            title: item.Title,
            year: parseInt(item.Year),
            image: item.Poster,
            ageRating: "N/A", // OMDb ไม่มี age rating โดยตรง
            description: "N/A", // ต้องใช้ API แบบ `i=ttxxxx` เพิ่มเติมเพื่อเอารายละเอียด
            tags: [], // ไม่มี tag โดยตรง
          })
        );
        return transformed;
      } else {
        throw new Error(data.Error || "No movies found.");
      }
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

  getMovieById: async (imdbID: string): Promise<Movie> => {
    try {
      if (USE_MOCK) {
        const data = MOCK_MOVIE_OMDB;
        console.log("🔧 Using MOCK getMovieById");
        return new Promise((resolve) =>
          setTimeout(() => {
            const transformed: Movie = {
              id: data.imdbID,
              title: data.Title,
              year: parseInt(data.Year),
              image: data.Poster,
              ageRating: data.Rated || "N/A",
              description: data.Plot || "No description available.",
              tags: (data.Genre || "").split(",").map((g: string) => g.trim()),
            };
            resolve(transformed);
          }, 500)
        );
      }

      const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${OMDB_API_KEY}`;
      const { data } = await axios.get(url);

      if (data.Response === "True") {
        return {
          id: data.imdbID,
          title: data.Title,
          year: parseInt(data.Year),
          image: data.Poster,
          ageRating: data.Rated || "N/A",
          description: data.Plot || "No description available.",
          tags: (data.Genre || "").split(",").map((g: string) => g.trim()),
        };
      } else {
        throw new Error(data.Error || "Movie not found.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Failed to fetch movie.";
        console.error("❌ getMovieById error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred while fetching movie.");
    }
  },

  getRecommendedVideos: async (): Promise<VideoItem[]> => {
    try {
      if (USE_MOCK) {
        const data = MOCK_RECOMMENDED_VIDEO;
        console.log("🔧 Using MOCK getRecommendedVideos");
        return new Promise((resolve) =>
          setTimeout(() => {
            const transformed: VideoItem[] = data;
            resolve(transformed);
          }, 500)
        );
      }

      // const { data } = await axios.get(`${INVIDIOUS_BASE}/trending`);

      // const transformed: VideoItem[] = data.map((item: any) => ({
      //   id: item.videoId,
      //   title: item.title,
      //   thumbnail: `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`,
      //   video: `https://www.youtube.com/embed/${item.videoId}?autoplay=1`,
      //   description: item.description || "No description",
      // }));

      // return transformed;
      return [];
    } catch (error) {
      console.error("❌ getRecommendedVideos error:", error);
      throw new Error("Failed to fetch recommended videos.");
    }
  },

  getVideosByCategory: async (category: string): Promise<VideoItem[]> => {
    try {
      console.log(category);
      // const { data } = await axios.get(`${INVIDIOUS_BASE}/search`, {
      //   params: {
      //     q: category,
      //     type: "video",
      //   },
      // });

      // const transformed: VideoItem[] = data.map((item: any) => ({
      //   id: item.videoId,
      //   title: item.title,
      //   thumbnail: `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`,
      //   video: `https://www.youtube.com/embed/${item.videoId}?autoplay=1`,
      //   description: item.description || "No description",
      // }));

      // return transformed;
      return [];
    } catch (error) {
      console.error("❌ getVideosByCategory error:", error);
      throw new Error("Failed to fetch videos by category.");
    }
  },
};
