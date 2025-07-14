"use client";

export function useDashBoard() {
  const categories = [
    { title: "มาแรงตอนนี้", fetchUrl: "/api/trending" },
    { title: "Netflix Originals", fetchUrl: "/api/originals" },
    { title: "แอ็คชัน", fetchUrl: "/api/action" },
    { title: "คอมเมดี้", fetchUrl: "/api/comedy" },
  ];

  return { categories };
}
