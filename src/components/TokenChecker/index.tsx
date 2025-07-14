"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { tokenStorage } from "@/lib/tokenStorage";
import { useAuthStore } from "@/stores/auth.store";

const GUEST_ONLY_PATHS = ["/", "/login", "/register"];
const PROTECTED_PATHS = ["/select-profile", "/dashboard"];

export default function TokenChecker({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { getProfile, profile } = useAuthStore();

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
          router.replace("/select-profile");
          return;
        }

        // ✅ เรียก getProfile แค่ถ้ายังไม่มี profile
        if (!profile) {
          try {
            await getProfile();
          } catch (err) {
            console.error("⚠️ Failed to get profile:", err);
          }
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
    };

    init();
  }, [pathname, router, getProfile, profile]);

  if (!isReady) return null;

  return <>{children}</>;
}
