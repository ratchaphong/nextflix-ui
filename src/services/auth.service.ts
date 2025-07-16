import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  ProfileResponse,
} from "@/types/login";
import api from "@/lib/axios";
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
      const { data } = await api.post<LoginResponse>("/api/login", payload);
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
      await api.post<LoginResponse>("/api/register", payload);
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
        setTimeout(
          () =>
            resolve({
              user: {
                id: "user_001",
                email: "admin@example.com",
                name: "คุณพ่อ",
                role: "OWNER",
              },
              package: {
                id: "pkg_family",
                name: "Family Plan",
                maxProfiles: 5,
                maxMembers: 4,
                price: 399,
                resolution: "UHD",
              },
              household: {
                id: "household_001",
                name: "บ้านสุขสันต์",
                members: [
                  {
                    id: "user_001",
                    email: "admin@example.com",
                    name: "คุณพ่อ",
                    role: "OWNER",
                  },
                ],
              },
              profiles: [
                {
                  id: "profile_001",
                  name: "คุณพ่อ",
                  image: "/image/avatar.jpg",
                  isLocked: false,
                  ownerId: "user_001",
                },
              ],
            }),
          500
        )
      );
    }

    try {
      const { data } = await api.get<ProfileResponse>("/api/profile", {});
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
