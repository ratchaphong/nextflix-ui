"use client";

import styles from "./dashboard.module.css";
import { useDashboard } from "./dashboard.hooks";
import SelectedMovieModal from "@/components/SelectedMovieModal";
import { VideoCarousel } from "@/components/VideoCarousel";

const DashboardPage = () => {
  const {
    t,
    showVideo,
    selectedMovieId,
    recommended: r,
    categoryMapByEnum: c,
    totalMovies,
    handlePlay,
    handleCloseModal,
    handleCardInfoClick,
    handleCardModalClose,
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

      <VideoCarousel
        title={"recommendedTitle"}
        items={r}
        onInfoClick={handleCardInfoClick}
      />

      {Array.from(c.entries())
        .filter(([, items]) => items.length > 0)
        .map(([cat, items]) => (
          <VideoCarousel
            key={cat}
            title={cat}
            items={items}
            onInfoClick={handleCardInfoClick}
          />
        ))}

      {selectedMovieId && (
        <SelectedMovieModal
          selectedMovieId={selectedMovieId}
          handleCardModalClose={handleCardModalClose}
          movies={totalMovies}
        />
      )}
    </main>
  );
};

export default DashboardPage;
