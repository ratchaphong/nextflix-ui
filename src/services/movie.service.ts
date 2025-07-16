import { Movie } from "@/types/movie";
// import api from "@/lib/axios";
import axios from "axios";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";

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

const API_KEY = "b2a53d3";

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
      )}&apikey=${API_KEY}`;

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

      const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
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
};
