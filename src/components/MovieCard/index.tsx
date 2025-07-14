import { Movie } from "./MovieCard.type";
import styles from "./MovieCard.module.css";
import useMovieCard from "./MovieCard.hooks";

const getYouTubeEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);
  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&controls=0&loop=1&playlist=${match[1]}`
    : null;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { setIsHover, isHover } = useMovieCard();
  const isYouTube =
    movie.preview_url.includes("youtube.com") ||
    movie.preview_url.includes("youtu.be");
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(movie.preview_url) : null;

  return (
    <div
      className={styles.posterWrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {!isHover ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className={styles.poster}
        />
      ) : isYouTube && embedUrl ? (
        <iframe
          src={embedUrl}
          className={styles.videoPreview}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <video
          src={movie.preview_url}
          autoPlay
          muted
          loop
          playsInline
          className={styles.videoPreview}
        />
      )}
      <div className={styles.overlay}>
        <span>{movie.title}</span>
      </div>
    </div>
  );
};

export default MovieCard;
