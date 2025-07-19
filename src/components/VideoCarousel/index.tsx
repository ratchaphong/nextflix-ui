import useVideoCarousel from "./VideoCarousel.hooks";
import styles from "./VideoCarousel.module.css";
import { VideoCarouselProps } from "./VideoCarousel.types";

export function VideoCarousel({
  title,
  items,
  onInfoClick,
}: VideoCarouselProps) {
  const { carouselRef, t, scroll, hoveredMovieId, setHoveredMovieId } =
    useVideoCarousel();

  return (
    <section className={styles.carousel__wrapper}>
      <h2 className={styles.carousel__title}> {t(title)}</h2>

      <button
        onClick={() => scroll("left")}
        className={styles.carousel__nav + " " + styles.prev}
      >
        &#10094;
      </button>

      <div className={styles.carousel} ref={carouselRef}>
        {items.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className={styles.card__thumbnail}
              onMouseEnter={() => setHoveredMovieId(movie.id)}
            />
            <div
              className={styles.mini__modal}
              onMouseLeave={() => setHoveredMovieId(null)}
            >
              {hoveredMovieId === movie.id && (
                <iframe
                  className={styles.mini__video}
                  src={`${movie.video}&mute=1&controls=0&loop=1`}
                  title={`Preview of ${movie.title}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
              <div className={styles.mini__content}>
                <h4>{movie.title}</h4>
                <button onClick={(e) => onInfoClick(e, movie.id)}>
                  {t("info")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className={styles.carousel__nav + " " + styles.next}
      >
        &#10095;
      </button>
    </section>
  );
}
