"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { tokenStorage } from "@/lib/tokenStorage";

interface Props {
  children: React.ReactNode;
}

const GUEST_ONLY_PATHS = ["/", "/login", "/register"];
const PROTECTED_PATHS = ["/selectProfile", "/dashboard"];

export default function TokenChecker({ children }: Props) {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = tokenStorage.getToken();

    if (token && tokenStorage.isTokenExpired()) {
      console.warn("⏳ Token expired. Logging out...");
      tokenStorage.clearToken();
      router.replace("/");
    } else if (token) {
      console.info("✅ Token is valid:", token);

      if (GUEST_ONLY_PATHS.includes(pathname)) {
        console.log("🔒 Redirecting logged-in user out of guest page...");
        router.replace("/selectProfile");
        return;
      }
    } else {
      console.info("ℹ️ No token found.");

      if (PROTECTED_PATHS.includes(pathname)) {
        console.log(
          "🚫 Guest attempting to access protected page. Redirecting..."
        );
        router.replace("/login");
        return;
      }
    }

    setIsReady(true);
  }, [pathname, router]);

  if (!isReady) return null;

  return <>{children}</>;
}
