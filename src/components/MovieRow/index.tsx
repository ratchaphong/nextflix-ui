"use client";

import { useEffect, useState } from "react";
import styles from "./MovieRow.module.css";
import MovieCard from "../MovieCard";
import { movies } from "../MovieCard/MovieCard.type";

export default function MovieRow({
  title,
  fetchUrl,
}: {
  title: string;
  fetchUrl: string;
}) {
  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.rowPosters}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
