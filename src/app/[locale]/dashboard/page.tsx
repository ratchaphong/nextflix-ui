"use client";

import MovieRow from "@/components/MovieRow";
import { useDashboard } from "./dashboard.hooks";

const DashboardPage = () => {
  const { categories } = useDashboard();

  return (
    <main>
      {categories.map((cat) => (
        <MovieRow key={cat.title} title={cat.title} fetchUrl={cat.fetchUrl} />
      ))}
    </main>
  );
};

export default DashboardPage;
