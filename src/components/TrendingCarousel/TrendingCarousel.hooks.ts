import { useRef, useState } from "react";

export function useTrendingCarousel() {
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

  return { scroll, setSelected, selected, trendingItems, scrollRef };
}
