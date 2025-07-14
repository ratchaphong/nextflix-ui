import styles from "./TrendingCarousel.module.css";
import MovieModal from "../MovieModal";
import { useTrendingCarousel } from "./TrendingCarousel.hooks";

export default function TrendingCarousel() {
  const { scroll, setSelected, selected, trendingItems, scrollRef } =
    useTrendingCarousel();

  return (
    <div className={styles.carousel}>
      <h2 className={styles.carousel__title}>กำลังฮิต</h2>
      <div className={styles.carousel__wrapper}>
        <button className={styles.nav__button} onClick={() => scroll("left")}>
          &#10094;
        </button>
        <div className={styles.carousel__container} ref={scrollRef}>
          {trendingItems.map((item, index) => (
            <div
              key={item.id}
              className={styles.carousel__item}
              onClick={() => setSelected(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className={styles.carousel__image}
              />
              {/* <span className={styles.carousel__number}>{index + 1}</span> */}
            </div>
          ))}
        </div>
        <button className={styles.nav__button} onClick={() => scroll("right")}>
          &#10095;
        </button>
      </div>

      {selected !== null && (
        <MovieModal
          movie={trendingItems[selected]}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
