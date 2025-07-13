import { useState, useRef } from "react";
import styles from "./TrendingCarousel.module.css";
import MovieModal from "../MovieModal";

export default function TrendingCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const trendingItems: {
    id: number;
    image: string;
    title: string;
    year: number;
    ageRating: string;
    tags: string[];
    description: string;
  }[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `รายการที่ ${i + 1}`,
    image: `https://picsum.photos/300/450?random=${i + 1}`,
    year: 2025,
    ageRating: "16+",
    description: "เนื้อเรื่องจำลอง: การล้างแค้นในโลกใต้ดินขององค์กรลึกลับ...",
    tags: ["แอคชั่น", "ระทึกขวัญ", "ดราม่า"],
  }));

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const amount = container.offsetWidth;
      container.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.carousel__section}>
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
              <span className={styles.carousel__number}>{index + 1}</span>
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
    </section>
  );
}
