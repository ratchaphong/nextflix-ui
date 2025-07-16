"use client";

import { useState } from "react";

export function useDashboard() {
  const [showVideo, setShowVideo] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { title: "มาแรงตอนนี้", fetchUrl: "/api/trending" },
    { title: "Netflix Originals", fetchUrl: "/api/originals" },
    { title: "แอ็คชัน", fetchUrl: "/api/action" },
    { title: "คอมเมดี้", fetchUrl: "/api/comedy" },
  ];

  return { categories, showVideo, setShowVideo, showModal, setShowModal };
}
