import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  ProfileResponse,
} from "@/types/login";
import axios from "axios";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";

export const AuthService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    if (USE_MOCK) {
      console.log("🔧 Using MOCK login");
      return new Promise((resolve) =>
        setTimeout(() => resolve({ accessToken: "mock_token_123" }), 500)
      );
    }

    try {
      const { data } = await axios.post<LoginResponse>("/api/login", payload);
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

  register: async (payload: RegisterPayload): Promise<LoginResponse> => {
    if (USE_MOCK) {
      console.log("🔧 Using MOCK register");
      return new Promise((resolve) =>
        setTimeout(() => resolve({ accessToken: "mock_token_registered" }), 500)
      );
    }

    try {
      const { data } = await axios.post<LoginResponse>(
        "/api/register",
        payload
      );
      return data;
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

  getProfile: async (token: string): Promise<ProfileResponse> => {
    if (USE_MOCK) {
      console.log("🔧 Using MOCK getProfile");
      return new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              id: "1",
              email: "mock@example.com",
              name: "Mock User",
            }),
          500
        )
      );
    }

    try {
      const { data } = await axios.get<ProfileResponse>("/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
};
