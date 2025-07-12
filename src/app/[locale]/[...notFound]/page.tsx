// src/app/[locale]/[...notFound]/page.tsx
import { notFound } from "next/navigation";

export default function CatchAllNotFoundPage() {
  notFound(); // <-- trigger not-found.tsx
}
