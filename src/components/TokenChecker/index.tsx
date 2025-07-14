"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { tokenStorage } from "@/lib/tokenStorage";
import { useAuthStore } from "@/stores/auth.store";

const GUEST_ONLY_PATHS = ["/", "/login", "/register"];
const PROTECTED_PATHS = ["/selectProfile", "/dashboard"];

export default function TokenChecker({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { getProfile } = useAuthStore();

  useEffect(() => {
    const init = async () => {
      const token = tokenStorage.getToken();

      if (token && tokenStorage.isTokenExpired()) {
        console.warn("⏳ Token expired. Logging out...");
        tokenStorage.clearToken();
        router.replace("/");
        return;
      }

      if (token) {
        console.info("✅ Token is valid:", token);

        if (GUEST_ONLY_PATHS.includes(pathname)) {
          console.log("🔒 Redirecting logged-in user out of guest page...");
          router.replace("/selectProfile");
          return;
        }

        try {
          await getProfile(); // ✅ wait for profile to load
        } catch (err) {
          console.error("⚠️ Failed to get profile:", err);
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

      setIsReady(true); // ✅ now it's safe to mark as ready
    };

    init();
  }, [pathname, router]);

  if (!isReady) return null;

  return <>{children}</>;
}
