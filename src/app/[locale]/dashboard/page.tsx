"use client";

import styles from "./dashboard.module.css";
import cx from "classnames";
import { useDashboard } from "./dashboard.hooks";

const DashboardPage = () => {
  const {
    showVideo,
    showModal,
    selectedMovieId,
    MOVIES,
    carouselRef,
    handlePlay,
    handleMoreInfo,
    handleCloseModal,
    handleCardInfoClick,
    handleCardModalClose,
    scroll,
  } = useDashboard();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        {!showVideo ? (
          <>
            <div className={styles.background}>
              <img
                src={`https://img.youtube.com/vi/${MOVIES[0].id}/maxresdefault.jpg`}
                alt="Video Thumbnail"
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{MOVIES[0].title}</h1>
              <p className={styles.description}>{MOVIES[0].description}</p>
              <div className={styles.buttons}>
                <button onClick={handlePlay} className={styles.play}>
                  ▶ Play
                </button>
                <button onClick={handleMoreInfo} className={styles.more}>
                  ℹ More Info
                </button>
              </div>
            </div>
            {showModal && (
              <div
                className={styles.modal__backdrop}
                onClick={handleCloseModal}
              >
                <div
                  className={cx(styles.modal__content, styles.modal__zoom)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2>{MOVIES[0].title}</h2>
                  <p>{MOVIES[0].description}</p>
                  <button
                    onClick={handleCloseModal}
                    className={styles.closeBtn}
                  >
                    ✕ Close
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={styles.youtube__wrapper}>
            <button onClick={handleCloseModal} className={styles.back_btn}>
              ← Back
            </button>
            <iframe
              className={styles.youtube_player}
              src={`https://www.youtube.com/embed/${MOVIES[0].id}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </section>

      <section className={styles.carousel__wrapper}>
        <button
          onClick={() => scroll("left")}
          className={styles.carousel__nav + " " + styles.prev}
        >
          &#10094;
        </button>
        <div className={styles.carousel} ref={carouselRef}>
          {MOVIES.map((movie) => (
            <div key={movie.id} className={styles.card}>
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className={styles.card__thumbnail}
              />
              <div className={styles.mini__modal}>
                <iframe
                  className={styles.mini__video}
                  src={`https://www.youtube.com/embed/${movie.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.id}`}
                  title="Mini Preview"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <div className={styles.mini__content}>
                  <h4>{movie.title}</h4>
                  <button onClick={(e) => handleCardInfoClick(e, movie.id)}>
                    Info
                  </button>
                </div>
              </div>
            </div>
          ))}

          {selectedMovieId && (
            <div
              className={styles.modal__backdrop}
              onClick={handleCardModalClose}
            >
              <div
                className={cx(styles.modal__content, styles.modal__zoom)}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  className={styles.modal__video}
                  src={`https://www.youtube.com/embed/${selectedMovieId}?autoplay=1&mute=0`}
                  title="Full Preview"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <h2>{MOVIES.find((m) => m.id === selectedMovieId)?.title}</h2>
                <p>
                  {MOVIES.find((m) => m.id === selectedMovieId)?.description}
                </p>
                <button
                  onClick={handleCardModalClose}
                  className={styles.closeBtn}
                >
                  ✕ Close
                </button>
              </div>
            </div>
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
