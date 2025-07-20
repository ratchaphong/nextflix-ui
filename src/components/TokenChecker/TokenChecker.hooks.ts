import { usePathname, useRouter } from "@/i18n/navigation";
import { tokenStorage } from "@/lib/tokenStorage";
import { useAuthStore } from "@/stores/auth.store";
import { GUEST_ONLY_PATHS, PROTECTED_PATHS } from "@/utils";
import { useEffect, useState } from "react";

export default function useTokenChecker() {
  const [isReady, setIsReady] = useState(false);
  const [tokenExpired, setTokenExpired] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const {
    getProfile,
    setAccessToken,
    refreshToken,
    setProfileId,
    profile,
    accessToken,
  } = useAuthStore();

  useEffect(() => {
    const init = async () => {
      const token = tokenStorage.getToken();
      const profileId = tokenStorage.getProfileId();

      if (token && tokenStorage.isTokenExpired()) {
        console.warn("⏳ Token expired. Logging out...");
        setTokenExpired(true);
        setIsReady(true);
        return;
      }

      if (token) {
        // console.info("✅ Token is valid:", token);
        setAccessToken(token); // ✅ sync token เข้า store
        if (profileId) setProfileId(profileId);

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

    console.log("⚠️ pathname : ", pathname);
    init();
  }, [pathname, profile]);

  useEffect(() => {
    let refreshing = false;
    let interval: NodeJS.Timeout;

    const getToken = async () => {
      try {
        refreshing = true;
        await refreshToken();
        refreshing = false;
      } catch (err) {
        console.error("⚠️ Failed to get refresh token:", err);
        refreshing = false;
        setTokenExpired(true);
      }
    };

    const startInterval = () => {
      interval = setInterval(() => {
        const token = tokenStorage.getToken();

        if (!token) return;

        if (tokenStorage.isTokenExpired()) {
          console.warn("⏳ Token expired from interval.");
          setTokenExpired(true);
          clearInterval(interval);
        } else if (tokenStorage.isTokenNearExpiry() && !refreshing) {
          console.info("⚠️ Token is near expiry. Refreshing...");
          clearInterval(interval);
          getToken();
        }
      }, 1000);
    };

    startInterval();

    return () => clearInterval(interval);
  }, [accessToken]);

  return { isReady, tokenExpired };
}
