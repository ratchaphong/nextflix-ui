import api from "@/lib/axios";
import axios from "axios";
import { MOCK_ACCESS_TOKEN, MOCK_PROFILE, PACKAGES } from "@/mock";
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  AddProfilePayload,
  ProfileResponse,
  CheckEmailPayload,
  CheckEmailResponse,
  FetchAllPackagesResponse,
} from "@/types/login.store";
import { logger } from "@/lib/logger";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";

export const AuthService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    if (USE_MOCK) {
      logger.log("🔧 Using MOCK login");
      return new Promise((resolve) =>
        setTimeout(() => resolve(MOCK_ACCESS_TOKEN), 500)
      );
    }

    try {
      const { data } = await api.post<LoginResponse>("/auth/login", payload);
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Login failed unexpectedly.";
        logger.error("❌ Login error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },

  register: async (payload: RegisterPayload): Promise<void> => {
    if (USE_MOCK) {
      logger.log("🔧 Using MOCK register");
      return new Promise((resolve) => setTimeout(() => resolve(), 500));
    }

    try {
      await api.post<void>("/auth/register", payload);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Register failed unexpectedly.";
        logger.error("❌ Register error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },

  getProfile: async (): Promise<ProfileResponse> => {
    if (USE_MOCK) {
      logger.log("🔧 Using MOCK getProfile");
      return new Promise((resolve) =>
        setTimeout(() => resolve(MOCK_PROFILE), 500)
      );
    }

    try {
      const { data } = await api.get<ProfileResponse>("/auth/profile", {});
      return data;
    } catch (error: unknown) {
      // logger.log(error, axios.isAxiosError(error));
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Failed to fetch profile.";
        logger.error("❌ Profile error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },

  addProfile: async (payload: AddProfilePayload): Promise<void> => {
    if (USE_MOCK) {
      logger.log("🔧 Using MOCK addProfile");
      return new Promise((resolve) => setTimeout(() => resolve(), 500));
    }

    try {
      await api.post<void>("/profiles", payload);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Add profile failed unexpectedly.";
        logger.error("❌ Add profile error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred while adding profile.");
    }
  },

  updateProfile: async (
    id: string,
    payload: AddProfilePayload
  ): Promise<void> => {
    if (USE_MOCK) {
      logger.log("🔧 Using MOCK updateProfile");
      return new Promise((resolve) => setTimeout(() => resolve(), 500));
    }

    try {
      await api.patch<void>(`/profiles/${id}`, payload);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Update failed unexpectedly.";
        logger.error("❌ Update error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },

  refreshToken: async (): Promise<LoginResponse> => {
    if (USE_MOCK) {
      logger.log("🔧 Using MOCK refreshToken");
      return new Promise((resolve) =>
        setTimeout(() => resolve(MOCK_ACCESS_TOKEN), 500)
      );
    }

    try {
      const { data } = await api.post<LoginResponse>("/auth/access-token");
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Refresh token failed unexpectedly.";
        logger.error("❌ Refresh token error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred during token refresh.");
    }
  },

  checkEmail: async (
    payload: CheckEmailPayload
  ): Promise<CheckEmailResponse> => {
    if (USE_MOCK) {
      logger.log("🔧 Using MOCK checkEmail");
      return new Promise((resolve) =>
        setTimeout(() => resolve({ isAvailable: true }), 500)
      );
    }

    try {
      const { data } = await api.get<CheckEmailResponse>("/auth/check-email", {
        params: payload,
      });
      return data;
    } catch (error: unknown) {
      // logger.log(error, axios.isAxiosError(error));
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Failed to fetch profile.";
        logger.error("❌ Profile error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },

  fetchAllPackages: async (): Promise<FetchAllPackagesResponse> => {
    if (USE_MOCK) {
      logger.log("🔧 Using MOCK fetchAllPackages");
      return new Promise((resolve) => setTimeout(() => resolve(PACKAGES), 500));
    }

    try {
      const { data } = await api.get<FetchAllPackagesResponse>(
        "/subscriptions",
        {}
      );
      return data;
    } catch (error: unknown) {
      // logger.log(error, axios.isAxiosError(error));
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Failed to fetch all packages.";
        logger.error("❌ Fetch pakages error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },
};
