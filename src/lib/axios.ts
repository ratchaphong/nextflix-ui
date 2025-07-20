import axios from "axios"; // <-- ใช้เพื่อสร้าง instance
import { tokenStorage } from "./tokenStorage";
import { logger } from "./logger";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30_000,
});

axiosInstance.interceptors.request.use((config) => {
  const token = tokenStorage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const data = error.response?.data;

      logger.error("❌ Axios error:", {
        status,
        message: data?.message,
        url: error.config?.url,
        method: error.config?.method,
      });
    } else {
      logger.error("❌ Unknown error:", error);
    }

    // ✅ Don't alter the error object, just pass it on
    return Promise.reject(error);
  }
);

export default axiosInstance;
