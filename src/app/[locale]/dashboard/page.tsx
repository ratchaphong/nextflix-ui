"use client";

import styles from "./dashboard.module.css";
import cx from "classnames";
import { useDashboard } from "./dashboard.hooks";
import { useState, useRef } from "react";

const VIDEO_ID = "QYDza3BLr1w"; // 👈 ID จากลิงก์ YouTube
const MOVIES = [
  {
    id: "QYDza3BLr1w",
    title: "SANCTUARY",
    thumbnail: "https://img.youtube.com/vi/QYDza3BLr1w/hqdefault.jpg",
    // video: "/videos/sanctuary-preview.mp4",
    video: "https://www.youtube.com/embed/QYDza3BLr1w?autoplay=1",
    description: "An ancient sport steeped in tradition...",
  },
  {
    id: "NRtnUVaRwXM",
    title: "SANCTUARY",
    thumbnail: "https://img.youtube.com/vi/NRtnUVaRwXM/hqdefault.jpg",
    // video: "/videos/sanctuary-preview.mp4",
    video: "https://www.youtube.com/embed/NRtnUVaRwXM?autoplay=1",
    description: "An ancient sport steeped in tradition...",
  },
  {
    id: "HegSBovl24I",
    title: "SANCTUARY",
    thumbnail: "https://img.youtube.com/vi/HegSBovl24I/hqdefault.jpg",
    // video: "/videos/sanctuary-preview.mp4",
    video: "https://www.youtube.com/embed/HegSBovl24I?autoplay=1",
    description: "An ancient sport steeped in tradition...",
  },
  {
    id: "OodEsjZ88TQ",
    title: "SANCTUARY",
    thumbnail: "https://img.youtube.com/vi/OodEsjZ88TQ/hqdefault.jpg",
    // video: "/videos/sanctuary-preview.mp4",
    video: "https://www.youtube.com/embed/OodEsjZ88TQ?autoplay=1",
    description: "An ancient sport steeped in tradition...",
  },
  {
    id: "Y36b8_WFejI",
    title: "SANCTUARY",
    thumbnail: "https://img.youtube.com/vi/Y36b8_WFejI/hqdefault.jpg",
    // video: "/videos/sanctuary-preview.mp4",
    video: "https://www.youtube.com/embed/Y36b8_WFejI?autoplay=1",
    description: "An ancient sport steeped in tradition...",
  },
  {
    id: "mXHKjFKBC0g",
    title: "SANCTUARY",
    thumbnail: "https://img.youtube.com/vi/mXHKjFKBC0g/hqdefault.jpg",
    // video: "/videos/sanctuary-preview.mp4",
    video: "https://www.youtube.com/embed/mXHKjFKBC0g?autoplay=1",
    description: "An ancient sport steeped in tradition...",
  },
  {
    id: "sySlY1XKlhM",
    title: "SANCTUARY",
    thumbnail: "https://img.youtube.com/vi/sySlY1XKlhM/hqdefault.jpg",
    // video: "/videos/sanctuary-preview.mp4",
    video: "https://www.youtube.com/embed/sySlY1XKlhM?autoplay=1",
    description: "An ancient sport steeped in tradition...",
  },
];

const DashboardPage = () => {
  const { showVideo, setShowVideo, showModal, setShowModal } = useDashboard();
  // const [hoveredMovieId, setHoveredMovieId] = useState<string | null>(null);
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 220 + 16; // width + gap
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        {!showVideo ? (
          <>
            <div className={styles.background}>
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Video Thumbnail"
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>SANCTUARY</h1>
              <p className={styles.description}>
                An ancient sport steeped in tradition. A tough rule-breaker
                hungry for fame...
              </p>
              <div className={styles.buttons}>
                <button
                  onClick={() => setShowVideo(true)}
                  className={styles.play}
                >
                  ▶ Play
                </button>
                <button
                  className={styles.more}
                  onClick={() => setShowModal(true)}
                >
                  ℹ More Info
                </button>
              </div>
            </div>
            {showModal && (
              <div
                className={styles.modalBackdrop}
                onClick={() => setShowModal(false)}
              >
                <div
                  className={cx(styles.modalContent, styles.modalZoom)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2>SANCTUARY</h2>
                  <p>
                    In the sumo ring, he can achieve it all — but at what cost?
                  </p>

                  <button
                    onClick={() => setShowModal(false)}
                    className={styles.closeBtn}
                  >
                    ✕ Close
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={styles.youtubeWrapper}>
            <button
              onClick={() => setShowVideo(false)}
              className={styles.backBtn}
            >
              ← Back
            </button>
            <iframe
              className={styles.youtubePlayer}
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
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
            <div
              key={movie.id}
              className={styles.card}
              // onMouseEnter={() => setHoveredMovieId(movie.id)}
              // onMouseLeave={(e) => {
              //   const related = e.relatedTarget as HTMLElement;
              //   if (!e.currentTarget.contains(related)) {
              //     setHoveredMovieId(null);
              //   }
              // }}
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className={styles.card__thumbnail}
              />
              <div className={styles.miniModal}>
                <iframe
                  className={styles.miniVideo}
                  src={`https://www.youtube.com/embed/${movie.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.id}`}
                  title="Mini Preview"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <div className={styles.miniContent}>
                  <h4>{movie.title}</h4>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // ป้องกันไม่ให้ปิด hover ทันที
                      setSelectedMovieId(movie.id);
                    }}
                  >
                    Info
                  </button>
                </div>
              </div>
            </div>
          ))}

          {selectedMovieId && (
            <div
              className={styles.modalBackdrop}
              onClick={() => setSelectedMovieId(null)}
            >
              <div
                className={cx(styles.modalContent, styles.modalZoom)}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  className={styles.modalVideo}
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
                  onClick={() => setSelectedMovieId(null)}
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
