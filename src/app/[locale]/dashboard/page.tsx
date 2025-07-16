"use client";

import { useState } from "react";
import styles from "./dashboard.module.css";
import cx from "classnames";
// import { useDashboard } from "./dashboard.hooks";

const VIDEO_ID = "QYDza3BLr1w"; // 👈 ID จากลิงก์ YouTube

const DashboardPage = () => {
  // const { categories } = useDashboard();

  const [showVideo, setShowVideo] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

      {/* {categories.map((cat) => (
        <MovieRow key={cat.title} title={cat.title} fetchUrl={cat.fetchUrl} />
      ))} */}
    </main>
  );
};

export default DashboardPage;
