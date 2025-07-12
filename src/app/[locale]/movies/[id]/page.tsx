"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchFilmById, Movie } from "@/lib/ghibliApi";

export default function FilmDetailPage() {
  const { id } = useParams();
  const [film, setFilm] = useState<Movie | null>(null);

  useEffect(() => {
    if (id && typeof id === "string") {
      fetchFilmById(id).then(setFilm);
    }
  }, [id]);

  if (!film) return <p>Loading...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{film.title}</h1>
      <p className="mt-2 text-gray-700">{film.description}</p>
      <p className="mt-4 text-sm text-gray-500">
        Directed by {film.director} • {film.release_date}
      </p>
    </main>
  );
}
