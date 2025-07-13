"use client";
import MovieRow from "@/components/MovieRow";
import Navbar from "./component/navbar/navbar";
const DashBoard = () => {
  const categories = [
    { title: "มาแรงตอนนี้", fetchUrl: "/api/trending" },
    { title: "Netflix Originals", fetchUrl: "/api/originals" },
    { title: "แอ็คชัน", fetchUrl: "/api/action" },
    { title: "คอมเมดี้", fetchUrl: "/api/comedy" },
  ];
  return (
    <div>
      <Navbar />
      <main style={{ backgroundColor: "#111", color: "#fff", padding: "20px" }}>
        {categories.map((cat) => (
          <MovieRow key={cat.title} title={cat.title} fetchUrl={cat.fetchUrl} />
        ))}
      </main>
    </div>
  );
};

export default DashBoard;
