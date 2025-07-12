// src/lib/ghibliApi.ts

export type Movie = {
  id: string;
  title: string;
  description: string;
  director: string;
  release_date: string;
};

export async function fetchFilms(): Promise<Movie[]> {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  if (!res.ok) throw new Error("Failed to fetch films");
  return res.json();
}

export async function fetchFilmById(id: string): Promise<Movie> {
  const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
  if (!res.ok) throw new Error("Failed to fetch film");
  return res.json();
}
