export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  preview_url: string;
}


export const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    preview_url: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
  },
  {
    id: 2,
    title: "Money Heist",
    poster_path: "/MoEKaPFHABtA1xKoOteirGaHl1.jpg",
    preview_url: "https://www.youtube.com/watch?v=iS3xjLskC8s",
  },
  {
    id: 3,
    title: "Wednesday",
    poster_path: "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    preview_url: "https://www.youtube.com/watch?v=Di310WS8zLk",
  },
  {
    id: 4,
    title: "The Witcher",
    poster_path: "/zq8Cl3PNIDGU3iWNRoc5nEZ6pCe.jpg",
    preview_url: "https://www.youtube.com/watch?v=tjujvMkqWe4",
  },
  {
    id: 5,
    title: "Squid Game",
    poster_path: "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    preview_url: "https://www.youtube.com/watch?v=oqxAJKy0ii4",
  },
  {
    id: 6,
    title: "Breaking Bad",
    poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    preview_url: "https://www.youtube.com/watch?v=HhesaQXLuRY",
  },
  {
    id: 7,
    title: "All of Us Are Dead",
    poster_path: "/hY9DbdQWfRGwJ4dkqkBdfFBcXKE.jpg",
    preview_url: "https://www.youtube.com/watch?v=IN5TD4VRcSM",
  },
];
