"use client";

import styles from "./MovieRow.module.css";
import MovieCard from "../MovieCard";
import { movies } from "../MovieCard/MovieCard.type";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MovieRow({
  title,
}: {
  title: string;
  fetchUrl: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.arrowLeft} onClick={() => scroll("left")}>
          <FaChevronLeft size={32} />
        </button>
        <div className={styles.rowPosters} ref={rowRef}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button className={styles.arrowRight} onClick={() => scroll("right")}>
          <FaChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
