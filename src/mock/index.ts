import { Package, VideoItem } from "@/types/global";
import { LoginResponse, ProfileResponse } from "@/types/login.store";
import { USER_ROLES } from "@/utils/constants";

export const MOCK_ACCESS_TOKEN: LoginResponse = {
  accessToken: "mock_token_123",
};

export const MOCK_PROFILE: ProfileResponse = {
  id: "user_001",
  email: "admin@example.com",
  name: "คุณพ่อ",
  role: USER_ROLES.OWNER,
  package: {
    id: "pkg_family",
    name: "Family Plan",
    maxProfiles: 5,
    maxMembers: 4,
    price: 399,
    resolution: "UHD",
  },
  household: {
    id: "household_001",
    name: "บ้านสุขสันต์",
    members: [
      {
        id: "user_001",
        email: "admin@example.com",
        name: "คุณพ่อ",
        role: USER_ROLES.OWNER,
      },
    ],
  },
  profiles: [
    {
      id: "profile_001",
      name: "คุณพ่อ",
      image: "/image/avatar.jpg",
      isLocked: false,
      ownerId: "user_001",
    },
  ],
};

export const MOCK_MOVIES_OMDB = {
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

export const MOCK_MOVIE_OMDB = {
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

export const MOCK_RECOMMENDED_VIDEO: VideoItem[] = [
  {
    id: "QYDza3BLr1w",
    title: "三浦大知 (Daichi Miura) / Polytope -Conceptual Film-",
    thumbnail: "https://img.youtube.com/vi/QYDza3BLr1w/hqdefault.jpg",
    video: "https://www.youtube.com/embed/QYDza3BLr1w?autoplay=1",
    description: "New Single「Horizon Dreamer / Polytope」2025.06.25 Release.",
    category: [],
    releaseDate: "",
  },
  {
    id: "NRtnUVaRwXM",
    title: "INVISIBLE",
    thumbnail: "https://img.youtube.com/vi/NRtnUVaRwXM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/NRtnUVaRwXM?autoplay=1",
    description: "INVISIBLE · Duran Duran",
    category: [],
    releaseDate: "",
  },
  {
    id: "HegSBovl24I",
    title:
      "利比《跳楼机》(官方歌词MV)｜LBI - Jumping Machine (Official Lyric Video)",
    thumbnail: "https://img.youtube.com/vi/HegSBovl24I/hqdefault.jpg",
    video: "https://www.youtube.com/embed/HegSBovl24I?autoplay=1",
    description: "数位收听：https://smexlbi.lnk.to/JumpingMachine",
    category: [],
    releaseDate: "",
  },
  {
    id: "OodEsjZ88TQ",
    title: "Fujii Kaze - Hachikō [Official video]",
    thumbnail: "https://img.youtube.com/vi/OodEsjZ88TQ/hqdefault.jpg",
    video: "https://www.youtube.com/embed/OodEsjZ88TQ?autoplay=1",
    description: '“Hachikō" - The 1st single from his 3rd Album',
    category: [],
    releaseDate: "",
  },
  {
    id: "y8VfziFZMGY",
    title: "Sins of The Father",
    thumbnail: "https://img.youtube.com/vi/y8VfziFZMGY/hqdefault.jpg",
    video: "https://www.youtube.com/embed/y8VfziFZMGY?autoplay=1",
    description:
      "Sins of The Father · Donna Burke · Ludvig Forssell · Akihiro Honda",
    category: [],
    releaseDate: "",
  },
  {
    id: "Y36b8_WFejI",
    title: "KIRINJI - killer tune kills me feat. YonYon",
    thumbnail: "https://img.youtube.com/vi/Y36b8_WFejI/hqdefault.jpg",
    video: "https://www.youtube.com/embed/Y36b8_WFejI?autoplay=1",
    description: "KIRINJI ニュー・シングル「killer tune kills me feat. YonYon",
    category: [],
    releaseDate: "",
  },
  {
    id: "mXHKjFKBC0g",
    title: "The Man Who Sold the World (2010 Remaster)",
    thumbnail: "https://img.youtube.com/vi/mXHKjFKBC0g/hqdefault.jpg",
    video: "https://www.youtube.com/embed/mXHKjFKBC0g?autoplay=1",
    description: "The Man Who Sold the World (2010 Remaster) · Midge Ure",
    category: [],
    releaseDate: "",
  },
  {
    id: "sySlY1XKlhM",
    title: "Raindrops Keep Falling on my Head",
    thumbnail: "https://img.youtube.com/vi/sySlY1XKlhM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/sySlY1XKlhM?autoplay=1",
    description: "Raindrops Keep Falling on my Head · B.J. Thomas",
    category: [],
    releaseDate: "",
  },
];

export const MOCK_VIDEO_BY_CATEGORY: VideoItem[] = [
  {
    id: "Ox8ZLF6cGM0",
    title: "Superman | Official Trailer | DC",
    thumbnail: "https://img.youtube.com/vi/Ox8ZLF6cGM0/hqdefault.jpg",
    video: "https://www.youtube.com/embed/Ox8ZLF6cGM0?autoplay=1",
    description:
      "Official trailer for Superman (2025), the James Gunn DCU relaunch.",
    category: ["Action", "Fantasy", "Sci‑Fi"],
    releaseDate: "2025-07-11",
  },
  {
    id: "0FSwsrFpkbw",
    title: "From the World of John Wick: Ballerina (2025) Official Trailer",
    thumbnail: "https://img.youtube.com/vi/0FSwsrFpkbw/hqdefault.jpg",
    video: "https://www.youtube.com/embed/0FSwsrFpkbw?autoplay=1",
    description:
      "Official trailer for Ballerina, spin‑off from the John Wick universe.",
    category: ["Action", "Thriller"],
    releaseDate: "2025-06-06",
  },
  {
    id: "-sAOWhvheK8",
    title: "Marvel Studios' Thunderbolts* | Final Trailer",
    thumbnail: "https://img.youtube.com/vi/-sAOWhvheK8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/-sAOWhvheK8?autoplay=1",
    description:
      "Final trailer for Thunderbolts*, Marvel’s upcoming anti‑hero team movie.",
    category: ["Action", "Fantasy", "Superhero"],
    releaseDate: "2025-07-25",
  },
  {
    id: "8yh9BPUBbbQ",
    title: "F1® The Movie | Main Trailer",
    thumbnail: "https://img.youtube.com/vi/8yh9BPUBbbQ/hqdefault.jpg",
    video: "https://www.youtube.com/embed/8yh9BPUBbbQ?autoplay=1",
    description:
      "Trailer for F1: The Movie featuring Brad Pitt, in theaters June 27, 2025.",
    category: ["Action", "Drama", "Sport"],
    releaseDate: "2025-06-27",
  },
  {
    id: "AZr9lYz12jw",
    title: "Bridget Jones: Mad About the Boy | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/AZr9lYz12jw/hqdefault.jpg",
    video: "https://www.youtube.com/embed/AZr9lYz12jw?autoplay=1",
    description:
      "Official trailer for Bridget Jones: Mad About the Boy, streaming February 2025.",
    category: ["Romance", "Comedy", "Drama"],
    releaseDate: "2025-02-14",
  },
  {
    id: "8J646zM7UM8",
    title: "Heads of State - Official Trailer | Prime Video",
    thumbnail: "https://img.youtube.com/vi/8J646zM7UM8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/8J646zM7UM8?autoplay=1",
    description:
      "Two heads are better than one. Idris Elba and John Cena star in Heads of State, coming to Prime Video July 2.",
    category: ["Comedy", "Action", "Thriller"],
    releaseDate: "2025-07-02",
  },
  {
    id: "v05tfNInHsU",
    title: "Summer of 69 | Official Trailer | Hulu",
    thumbnail: "https://img.youtube.com/vi/v05tfNInHsU/hqdefault.jpg",
    video: "https://www.youtube.com/embed/v05tfNInHsU?autoplay=1",
    description:
      "An awkward high school senior hires an exotic dancer to help seduce her crush before graduation. Streams May 9, 2025 on Hulu.",
    category: ["Comedy", "Romance", "Drama"],
    releaseDate: "2025-05-09",
  },
  {
    id: "husMGbXEIho",
    title: "THE MONKEY - Official Redband Trailer",
    thumbnail: "https://img.youtube.com/vi/husMGbXEIho/hqdefault.jpg",
    video: "https://www.youtube.com/embed/husMGbXEIho?autoplay=1",
    description:
      "Based on the Stephen King story, produced by James Wan. Opens February 21, 2025.",
    category: ["Horror", "Comedy"],
    releaseDate: "2025-02-21",
  },
  {
    id: "-5xzjw_0d_0",
    title: "ONE OF THEM DAYS Official Trailer (2025)",
    thumbnail: "https://img.youtube.com/vi/-5xzjw_0d_0/hqdefault.jpg",
    video: "https://www.youtube.com/embed/-5xzjw_0d_0?autoplay=1",
    description:
      "Comedy featuring Keke Palmer & SZA racing to repay rent money.",
    category: ["Comedy"],
    releaseDate: "2025-03-06",
  },
  {
    id: "fWSNV4GiaYs",
    title: "YOU'RE CORDIALLY INVITED Official Trailer | Prime Video",
    thumbnail: "https://img.youtube.com/vi/fWSNV4GiaYs/hqdefault.jpg",
    video: "https://www.youtube.com/embed/fWSNV4GiaYs?autoplay=1",
    description:
      "Wedding chaos comedy starring Will Ferrell & Reese Witherspoon, premieres January 30, 2025.",
    category: ["Comedy", "Romance"],
    releaseDate: "2025-01-30",
  },
  {
    id: "bKGxHflevuk",
    title: "Sinners | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/bKGxHflevuk/hqdefault.jpg",
    video: "https://www.youtube.com/embed/bKGxHflevuk?autoplay=1",
    description:
      "Michael B. Jordan stars in Sinners, a vampire revenge drama. In theaters April 18, 2025.",
    category: ["Action", "Drama", "Horror"],
    releaseDate: "2025-04-18",
  },
  {
    id: "oL6jZqExlIk",
    title: "Eddington | Official Trailer HD | A24",
    thumbnail: "https://img.youtube.com/vi/oL6jZqExlIk/hqdefault.jpg",
    video: "https://www.youtube.com/embed/oL6jZqExlIk?autoplay=1",
    description:
      "Ari Aster's pandemic-era satire starring Joaquin Phoenix, Pedro Pascal; in theaters July 18, 2025.",
    category: ["Drama", "Mystery", "Thriller"],
    releaseDate: "2025-07-18",
  },
  {
    id: "55tuwgvaMHY",
    title: "SOVEREIGN Official Trailer (2025)",
    thumbnail: "https://img.youtube.com/vi/55tuwgvaMHY/hqdefault.jpg",
    video: "https://www.youtube.com/embed/55tuwgvaMHY?autoplay=1",
    description:
      "Nick Offerman and Jacob Tremblay star in a father-son standoff thriller, releasing July 11, 2025.",
    category: ["Drama", "Crime", "Thriller"],
    releaseDate: "2025-07-11",
  },
  {
    id: "_T4JHPowGbg",
    title: "Sovereign | Official Trailer | In Theaters July 11",
    thumbnail: "https://img.youtube.com/vi/_T4JHPowGbg/hqdefault.jpg",
    video: "https://www.youtube.com/embed/_T4JHPowGbg?autoplay=1",
    description:
      "Father and son on the run from police in a standoff scenario.",
    category: ["Drama", "Crime"],
    releaseDate: "2025-07-11",
  },
  {
    id: "42DFmfmm0AY",
    title: "HEADS OF STATE Official Trailer 2",
    thumbnail: "https://img.youtube.com/vi/42DFmfmm0AY/hqdefault.jpg",
    video: "https://www.youtube.com/embed/42DFmfmm0AY?autoplay=1",
    description: "Second official trailer for Heads of State.",
    category: ["Comedy", "Action", "Thriller"],
    releaseDate: "2025-07-02",
  },
  {
    id: "jGS4VKMQE_I",
    title: "The Stranger in My Home | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/jGS4VKMQE_I/hqdefault.jpg",
    video: "https://www.youtube.com/embed/jGS4VKMQE_I?autoplay=1",
    description:
      "A stranger's claim that a couple's daughter was switched at birth triggers a family crisis. Starring Sophia Bush.",
    category: ["Family", "Drama", "Mystery", "Thriller"],
    releaseDate: "2025-06-24",
  },
  {
    id: "tdhh-2iW_n8",
    title: "My Mother's Wedding | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/tdhh-2iW_n8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/tdhh-2iW_n8?autoplay=1",
    description:
      "Three sisters return home for their mother’s wedding in this heartfelt family drama starring Scarlett Johansson.",
    category: ["Drama", "Romance", "Family"],
    releaseDate: "2025-08-08",
  },
  {
    id: "DCWcK4c-F8Q",
    title: "The Amateur | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/DCWcK4c-F8Q/hqdefault.jpg",
    video: "https://www.youtube.com/embed/DCWcK4c-F8Q?autoplay=1",
    description:
      "Rami Malek stars in The Amateur, a CIA cryptographer turned reluctant agent, in theaters April 11, 2025.",
    category: ["Thriller", "Crime", "Drama"],
    releaseDate: "2025-04-11",
  },
  {
    id: "Du0Xp8WX_7I",
    title: "BLACK BAG - Official Trailer",
    thumbnail: "https://img.youtube.com/vi/Du0Xp8WX_7I/hqdefault.jpg",
    video: "https://www.youtube.com/embed/Du0Xp8WX_7I?autoplay=1",
    description:
      "Michael Fassbender & Rege-Jean Page star in spy thriller Black Bag, opening March 14, 2025.",
    category: ["Thriller", "Crime", "Drama"],
    releaseDate: "2025-03-14",
  },
  {
    id: "bs_nFwh5eJw",
    title: "DROP | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/bs_nFwh5eJw/hqdefault.jpg",
    video: "https://www.youtube.com/embed/bs_nFwh5eJw?autoplay=1",
    description:
      "Widowed mother's first date turns into psychological thriller. In theaters April 11, 2025.",
    category: ["Thriller", "Mystery", "Drama"],
    releaseDate: "2025-04-11",
  },
  {
    id: "1kmjAnvFw3I",
    title: "Den of Thieves 2: Pantera | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/1kmjAnvFw3I/hqdefault.jpg",
    video: "https://www.youtube.com/embed/1kmjAnvFw3I?autoplay=1",
    description:
      "Gerard Butler returns in Den of Thieves 2: Pantera, in theaters January 10, 2025.",
    category: ["Crime", "Action", "Thriller"],
    releaseDate: "2025-01-10",
  },
  {
    id: "kBskrYZfhw8",
    title: "Bring Her Back | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/kBskrYZfhw8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/kBskrYZfhw8?autoplay=1",
    description:
      "Philippou Brothers’ horror Bring Her Back debuts May 30, 2025.",
    category: ["Horror", "Mystery", "Thriller"],
    releaseDate: "2025-05-30",
  },
  {
    id: "IceTkSOSNJI",
    title: "I Know What You Did Last Summer | New Trailer",
    thumbnail: "https://img.youtube.com/vi/IceTkSOSNJI/hqdefault.jpg",
    video: "https://www.youtube.com/embed/IceTkSOSNJI?autoplay=1",
    description:
      "Legacy sequel of 90s slasher, starring Freddie Prinze Jr. & Jennifer Love Hewitt, in theaters July 18, 2025.",
    category: ["Horror", "Mystery", "Thriller"],
    releaseDate: "2025-07-18",
  },
  {
    id: "d7aCEE-ua7s",
    title: "The Stranger in My Home | Official Trailer (alt)",
    thumbnail: "https://img.youtube.com/vi/d7aCEE-ua7s/hqdefault.jpg",
    video: "https://www.youtube.com/embed/d7aCEE-ua7s?autoplay=1",
    description:
      "Alternate trailer for The Stranger in My Home, featuring Sophia Bush again.",
    category: ["Family", "Drama", "Mystery"],
    releaseDate: "2025-06-24",
  },
  {
    id: "3o17SMmG7Js",
    title: "My Mother's Wedding | Official Trailer HD",
    thumbnail: "https://img.youtube.com/vi/3o17SMmG7Js/hqdefault.jpg",
    video: "https://www.youtube.com/embed/3o17SMmG7Js?autoplay=1",
    description:
      "HD version of My Mother's Wedding trailer starring Scarlett Johansson.",
    category: ["Drama", "Romance", "Family"],
    releaseDate: "2025-08-08",
  },
  {
    id: "ZgZccxuj2RY",
    title: "FLOW - Official US Trailer",
    thumbnail: "https://img.youtube.com/vi/ZgZccxuj2RY/hqdefault.jpg",
    video: "https://www.youtube.com/embed/ZgZccxuj2RY?autoplay=1",
    description:
      "A wondrous journey following a cat after a devastating flood. Animation, no dialogue.",
    category: ["Family", "Fantasy", "Drama"],
    releaseDate: "2025-03-21",
  },
  {
    id: "tA1s65o_kYM",
    title: "Mickey 17 | Official Trailer 2",
    thumbnail: "https://img.youtube.com/vi/tA1s65o_kYM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/tA1s65o_kYM?autoplay=1",
    description:
      "Bong Joon Ho’s sci-fi black comedy starring Robert Pattinson. In cinemas Mar 7, 2025.",
    category: ["Sci-Fi", "Fantasy", "Mystery"],
    releaseDate: "2025-03-07",
  },
  {
    id: "jan5CFWs9ic",
    title: "Jurassic World Rebirth | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/jan5CFWs9ic/hqdefault.jpg",
    video: "https://www.youtube.com/embed/jan5CFWs9ic?autoplay=1",
    description:
      "A new era is born. Watch the Jurassic World Rebirth trailer now. In theaters July 2, 2025.",
    category: ["Action", "Sci-Fi", "Adventure"],
    releaseDate: "2025-07-02",
  },
  {
    id: "x7IDuEoLl4A",
    title: "JURASSIC WORLD REBIRTH – FINAL TRAILER 2025",
    thumbnail: "https://img.youtube.com/vi/x7IDuEoLl4A/hqdefault.jpg",
    video: "https://www.youtube.com/embed/x7IDuEoLl4A?autoplay=1",
    description:
      "World’s most dangerous creatures in Jurassic World: Rebirth. The next chapter in the legendary franchise.",
    category: ["Action", "Sci-Fi", "Adventure"],
    releaseDate: "2025-07-02",
  },
  {
    id: "22w7z_lT6YM",
    title: "How To Train Your Dragon | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/22w7z_lT6YM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/22w7z_lT6YM?autoplay=1",
    description:
      "Live‑action reimagining of the beloved franchise, directed by Dean DeBlois. In theaters June 13, 2025.",
    category: ["Family", "Fantasy", "Adventure"],
    releaseDate: "2025-06-13",
  },
  {
    id: "y94EzJJXjoQ",
    title: "How To Train Your Dragon Live Action | FINAL TRAILER",
    thumbnail: "https://img.youtube.com/vi/y94EzJJXjoQ/hqdefault.jpg",
    video: "https://www.youtube.com/embed/y94EzJJXjoQ?autoplay=1",
    description:
      "TV spot / final trailer for *How to Train Your Dragon* live‑action.",
    category: ["Family", "Fantasy", "Adventure"],
    releaseDate: "2025-06-13",
  },
  {
    id: "Qr_kX0D3DNA",
    title: "Companion | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/Qr_kX0D3DNA/hqdefault.jpg",
    video: "https://www.youtube.com/embed/Qr_kX0D3DNA?autoplay=1",
    description:
      "Official trailer for *Companion*, a sci‑fi horror‑thriller starring Sophie Thatcher and Jack Quaid.",
    category: ["Sci-Fi", "Thriller", "Horror"],
    releaseDate: "2025-01-31",
  },
  {
    id: "DEHfVwmJNRs",
    title: "THE THURSDAY MURDER CLUB Official Trailer",
    thumbnail: "https://img.youtube.com/vi/DEHfVwmJNRs/hqdefault.jpg",
    video: "https://www.youtube.com/embed/DEHfVwmJNRs?autoplay=1",
    description:
      "Official trailer for *The Thursday Murder Club*, arrives Netflix August 28, 2025.",
    category: ["Mystery", "Comedy", "Crime"],
    releaseDate: "2025-08-28",
  },
  {
    id: "2diHa2CxMu0",
    title: "Dora and the Search for Sol Dorado | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/2diHa2CxMu0/hqdefault.jpg",
    video: "https://www.youtube.com/embed/2diHa2CxMu0?autoplay=1",
    description:
      "Live‑action Dora the Explorer movie, premieres July 2, 2025 on Nickelodeon/Paramount+.",
    category: ["Family", "Adventure", "Comedy"],
    releaseDate: "2025-07-02",
  },
  {
    id: "qSu6i2iFMO0",
    title: "Sonic the Hedgehog 3 | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/qSu6i2iFMO0/hqdefault.jpg",
    video: "https://www.youtube.com/embed/qSu6i2iFMO0?autoplay=1",
    description:
      "New adventure featuring Sonic, Knuckles & Tails; introduces Shadow voiced by Keanu Reeves.",
    category: ["Family", "Adventure", "Comedy"],
    releaseDate: "2024-12-20",
  },
  {
    id: "N30Ln9zhIkQ",
    title: "Companion | Teaser Trailer",
    thumbnail: "https://img.youtube.com/vi/N30Ln9zhIkQ/hqdefault.jpg",
    video: "https://www.youtube.com/embed/N30Ln9zhIkQ?autoplay=1",
    description:
      "Teaser trailer for *Companion* (sci‑fi horror‑thriller), sets tone before official trailer.",
    category: ["Sci-Fi", "Thriller", "Horror"],
    releaseDate: "2025-01-31",
  },
  {
    id: "VqpvnzxpzeA",
    title: "How to Train Your Dragon – New IMAX Trailer",
    thumbnail: "https://img.youtube.com/vi/VqpvnzxpzeA/hqdefault.jpg",
    video: "https://www.youtube.com/embed/VqpvnzxpzeA?autoplay=1",
    description:
      "IMAX trailer highlighting cinematic spectacle of the live‑action adaptation.",
    category: ["Family", "Fantasy", "Adventure"],
    releaseDate: "2025-06-13",
  },
  {
    id: "wJO_vIDZn-I",
    title: "A Minecraft Movie | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/wJO_vIDZn-I/hqdefault.jpg",
    video: "https://www.youtube.com/embed/wJO_vIDZn-I?autoplay=1",
    description:
      "Get ready to craft your world. A Minecraft Movie from Warner Bros., in theaters April 4, 2025.",
    category: ["Family", "Fantasy", "Adventure"],
    releaseDate: "2025-04-04",
  },
  {
    id: "XnkqomKfd90",
    title: "Guns & Moses | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/XnkqomKfd90/hqdefault.jpg",
    video: "https://www.youtube.com/embed/XnkqomKfd90?autoplay=1",
    description:
      "When hate attacks his community, a rabbi becomes a gunslinger in Guns & Moses.",
    category: ["Crime", "Drama", "Thriller"],
    releaseDate: "2025-06-01",
  },
  {
    id: "UWMzKXsY9A4",
    title: "Final Destination: Bloodlines | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/UWMzKXsY9A4/hqdefault.jpg",
    video: "https://www.youtube.com/embed/UWMzKXsY9A4?autoplay=1",
    description:
      "The next chapter of Final Destination arrives in IMAX May 16, 2025.",
    category: ["Horror", "Thriller"],
    releaseDate: "2025-05-16",
  },
  {
    id: "HTi-e20yVNs",
    title: "The Ballad of Wallis Island | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/HTi-e20yVNs/hqdefault.jpg",
    video: "https://www.youtube.com/embed/HTi-e20yVNs?autoplay=1",
    description:
      "Eccentric billionaire reunites his favorite band on a remote island. In theaters March 28, 2025.",
    category: ["Comedy", "Music", "Drama"],
    releaseDate: "2025-03-28",
  },
  {
    id: "GdRXPAHIEW4",
    title: "The Brutalist | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/GdRXPAHIEW4/hqdefault.jpg",
    video: "https://www.youtube.com/embed/GdRXPAHIEW4?autoplay=1",
    description:
      "Brady Corbet's epic starring Adrien Brody, opening December 20, 2024.",
    category: ["Drama", "Historical", "Biography"],
    releaseDate: "2024-12-20",
  },
  {
    id: "bEErqpfb3HM",
    title: "Blue Road – The Edna O'Brien Story | Trailer",
    thumbnail: "https://img.youtube.com/vi/bEErqpfb3HM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/bEErqpfb3HM?autoplay=1",
    description:
      "Portrait documentary of Irish writer Edna O'Brien. Release date TBD 2025.",
    category: ["Documentary", "Biography"],
    releaseDate: "2025-??-??",
  },
  {
    id: "Ke4WHqYhem8",
    title: "The Righteous Gemstones Season 4 | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/Ke4WHqYhem8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/Ke4WHqYhem8?autoplay=1",
    description:
      "Final season of the comedy series, streaming March 9, 2025 on Max.",
    category: ["Comedy", "Drama", "TV"],
    releaseDate: "2025-03-09",
  },
  {
    id: "QZJzhS8EXKo",
    title: "The Map That Leads to You | Official Trailer",
    thumbnail: "https://img.youtube.com/vi/QZJzhS8EXKo/hqdefault.jpg",
    video: "https://www.youtube.com/embed/QZJzhS8EXKo?autoplay=1",
    description:
      "Romance stars Madelyn Cline & KJ Apa. Prime Video release Aug 20, 2025.",
    category: ["Romance", "Drama"],
    releaseDate: "2025-08-20",
  },
  {
    id: "SyOzg8p1gYE",
    title: "The Map That Leads to You | First Look Trailer",
    thumbnail: "https://img.youtube.com/vi/SyOzg8p1gYE/hqdefault.jpg",
    video: "https://www.youtube.com/embed/SyOzg8p1gYE?autoplay=1",
    description:
      "Early teaser for The Map That Leads to You, setting romantic tone.",
    category: ["Romance", "Drama"],
    releaseDate: "2025-08-20",
  },
  {
    id: "mmixDu9L-7E",
    title: "The Map That Leads to You | First Look",
    thumbnail: "https://img.youtube.com/vi/mmixDu9L-7E/hqdefault.jpg",
    video: "https://www.youtube.com/embed/mmixDu9L-7E?autoplay=1",
    description: "Another teaser highlighting European travels & romance.",
    category: ["Romance", "Drama"],
    releaseDate: "2025-08-20",
  },
];

export const PACKAGES: Package[] = [
  {
    id: "basic-id",
    name: "Basic",
    maxProfiles: 1,
    maxMembers: 1,
    price: 0,
    resolution: "480p",
  },
  {
    id: "standard-id",
    name: "Standard",
    maxProfiles: 2,
    maxMembers: 2,
    price: 99,
    resolution: "720p",
  },
  {
    id: "premium-id",
    name: "Premium",
    maxProfiles: 4,
    maxMembers: 4,
    price: 199,
    resolution: "1080p",
  },
];
