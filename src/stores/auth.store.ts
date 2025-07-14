// stores/auth.store.ts
import { create } from "zustand";
import { AuthService } from "@/services/auth.service";
import { AuthState } from "@/types/login";
import { tokenStorage } from "@/lib/tokenStorage";

export const useAuthStore = create<AuthState>((set, get) => ({
  loading: false,
  accessToken: null,
  profile: null,
  error: null,

  login: async (payload) => {
    set({ loading: true, error: null });

    try {
      const { accessToken } = await AuthService.login(payload);
      set({ accessToken });
      tokenStorage.setToken(accessToken);

      const profile = await AuthService.getProfile(accessToken);
      set({ profile });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  register: async (payload) => {
    set({ loading: true, error: null });

    try {
      const { accessToken } = await AuthService.register(payload);
      set({ accessToken });

      // ✅ ดึง profile หลัง register สำเร็จ
      const profile = await AuthService.getProfile(accessToken);
      set({ profile });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  getProfile: async () => {
    const { accessToken } = get();
    if (!accessToken) return;

    try {
      const profile = await AuthService.getProfile(accessToken);
      set({ profile });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load profile";
      set({ error: errorMessage });
    }
  },

  logout: () => {
    set({
      accessToken: null,
      profile: null,
      error: null,
    });
  },
}));
