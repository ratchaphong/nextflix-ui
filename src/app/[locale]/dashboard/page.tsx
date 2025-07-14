"use client";

import MovieRow from "@/components/MovieRow";
import { useDashBoard } from "./dashboard.hooks";

const DashboardPage = () => {
  const { categories } = useDashBoard();

  return (
    <main
    // style={{ backgroundColor: "#111", color: "#fff", padding: "20px" }}
    >
      {categories.map((cat) => (
        <MovieRow key={cat.title} title={cat.title} fetchUrl={cat.fetchUrl} />
      ))}
    </main>
  );
};

export default DashboardPage;
