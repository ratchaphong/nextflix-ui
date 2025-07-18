import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  ProfileResponse,
  AddProfilePayload,
} from "@/types/login";
import api from "@/lib/axios";
import axios from "axios";
import { MOCK_ACCESS_TOKEN, MOCK_PROFILE } from "@/mock";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";

export const AuthService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    if (USE_MOCK) {
      console.log("🔧 Using MOCK login");
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
        console.error("❌ Login error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },

  register: async (payload: RegisterPayload): Promise<void> => {
    if (USE_MOCK) {
      console.log("🔧 Using MOCK register");
      return new Promise((resolve) => setTimeout(() => resolve(), 500));
    }

    try {
      await api.post<void>("/auth/register", payload);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Register failed unexpectedly.";
        console.error("❌ Register error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },

  getProfile: async (): Promise<ProfileResponse> => {
    if (USE_MOCK) {
      console.log("🔧 Using MOCK getProfile");
      return new Promise((resolve) =>
        setTimeout(() => resolve(MOCK_PROFILE), 500)
      );
    }

    try {
      const { data } = await api.get<ProfileResponse>("/auth/profile", {});
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Failed to fetch profile.";
        console.error("❌ Profile error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },

  addProfile: async (payload: AddProfilePayload): Promise<void> => {
    if (USE_MOCK) {
      console.log("🔧 Using MOCK addProfile");
      return new Promise((resolve) => setTimeout(() => resolve(), 500));
    }

    try {
      await api.post<void>("/profiles", payload);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Add profile failed unexpectedly.";
        console.error("❌ Add profile error:", message);
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
      console.log("🔧 Using MOCK updateProfile");
      return new Promise((resolve) => setTimeout(() => resolve(), 500));
    }

    try {
      await api.patch<void>(`/profiles/${id}`, payload);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Update failed unexpectedly.";
        console.error("❌ Update error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred.");
    }
  },

  refreshToken: async (): Promise<LoginResponse> => {
    if (USE_MOCK) {
      console.log("🔧 Using MOCK refreshToken");
      return new Promise((resolve) =>
        setTimeout(() => resolve(MOCK_ACCESS_TOKEN), 500)
      );
    }

    try {
      const { data } = await api.post<LoginResponse>("/auth/refresh-token");
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Refresh token failed unexpectedly.";
        console.error("❌ Refresh token error:", message);
        throw new Error(message);
      }
      throw new Error("An unknown error occurred during token refresh.");
    }
  },
};
