"use client";
import MovieRow from "@/components/MovieRow";
import Navbar from "./component/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./dashboard.module.css";
import Footer from "@/components/footer/footer";
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
      <Footer />
    </div>
  );
};

export default DashBoard;
