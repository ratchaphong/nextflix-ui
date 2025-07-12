// src/app/[locale]/movies/page.tsx
import { fetchFilms, Movie } from "@/lib/ghibliApi";
import Link from "next/link";

export default async function MoviesPage() {
  const films = await fetchFilms();

  return (
    <main className="p-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {films.map((film: Movie) => (
        <Link
          key={film.id}
          href={`/movies/${film.id}`}
          className="block border p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <h2 className="font-semibold text-lg">{film.title}</h2>
          <p className="text-sm text-gray-500">By {film.director}</p>
        </Link>
      ))}
    </main>
  );
}
