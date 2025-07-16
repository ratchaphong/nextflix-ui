"use client";

import styles from "./dashboard.module.css";
import { useDashboard } from "./dashboard.hooks";
import SelectedMovieModal from "@/components/SelectedMovieModal";

const DashboardPage = () => {
  const {
    t,
    showVideo,
    selectedMovieId,
    recommended: r,
    carouselRef,
    handlePlay,
    handleCloseModal,
    handleCardInfoClick,
    handleCardModalClose,
    scroll,
  } = useDashboard();

  if (r.length === 0) return null;

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        {!showVideo ? (
          <>
            <div className={styles.background}>
              <img
                src={r[0].thumbnail.replace(
                  "/hqdefault.jpg",
                  "/maxresdefault.jpg"
                )}
                alt="Video Thumbnail"
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{r[0].title}</h1>
              <p className={styles.description}>{r[0].description}</p>
              <div className={styles.buttons}>
                <button onClick={handlePlay} className={styles.play}>
                  {t("play")}
                </button>
                <button
                  onClick={(e) => handleCardInfoClick(e, r[0].id)}
                  className={styles.more}
                >
                  {t("moreInfo")}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.youtube__wrapper}>
            <button onClick={handleCloseModal} className={styles.back_btn}>
              {t("back")}
            </button>
            <iframe
              className={styles.youtube_player}
              src={r[0].video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </section>

      <section className={styles.carousel__wrapper}>
        <h2 className={styles.carousel__title}>{t("recommendedTitle")}</h2>
        <button
          onClick={() => scroll("left")}
          className={styles.carousel__nav + " " + styles.prev}
        >
          &#10094;
        </button>
        <div className={styles.carousel} ref={carouselRef}>
          {r.map((movie) => (
            <div key={movie.id} className={styles.card}>
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className={styles.card__thumbnail}
              />
              <div className={styles.mini__modal}>
                <iframe
                  className={styles.mini__video}
                  src={`${movie.video}&mute=1&controls=0&loop=1`}
                  title="Mini Preview"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <div className={styles.mini__content}>
                  <h4>{movie.title}</h4>
                  <button onClick={(e) => handleCardInfoClick(e, movie.id)}>
                    {t("info")}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {selectedMovieId && (
            <SelectedMovieModal
              selectedMovieId={selectedMovieId}
              handleCardModalClose={handleCardModalClose}
              movies={r}
            />
          )}
        </div>
        <button
          onClick={() => scroll("right")}
          className={styles.carousel__nav + " " + styles.next}
        >
          &#10095;
        </button>
      </section>
    </main>
  );
};

export default DashboardPage;
