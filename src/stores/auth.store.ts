// stores/auth.store.ts
import { create } from "zustand";
import { AuthService } from "@/services/auth.service";
import { tokenStorage } from "@/lib/tokenStorage";
import { useToastStore } from "@/stores/toast.store";
import { AuthState } from "@/types/login.store";
import { useApiErrorModalStore } from "./apiErrorModal.store";

const showToast = useToastStore.getState().showToast;
const showApiErrorModal = useApiErrorModalStore.getState().show;

export const useAuthStore = create<AuthState>((set) => ({
  loading: false,
  accessToken: null,
  profile: null,
  success: null,
  error: null,
  profileId: null,

  login: async (payload) => {
    set({ loading: true, error: null });

    try {
      const { accessToken } = await AuthService.login(payload);
      set({ accessToken });
      tokenStorage.setToken(accessToken);
      showToast("Login successful", "success");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      showToast(errorMessage, "error");
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  register: async (payload) => {
    set({ loading: true, error: null });

    try {
      await AuthService.register(payload);
      showToast("Registration successful", "success");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      set({ error: errorMessage });
      showToast(errorMessage, "error");
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  getProfile: async () => {
    set({ loading: true, profile: null });

    try {
      const profile = await AuthService.getProfile();
      set({ profile });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load profile";
      showApiErrorModal();
      showToast(errorMessage, "error");
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  addProfile: async (payload) => {
    set({ loading: true });

    try {
      await AuthService.addProfile(payload);
      const profile = await AuthService.getProfile();
      set({ profile });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load profile";
      showToast(errorMessage, "error");
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  updateProfile: async (id, payload) => {
    set({ loading: true });

    try {
      await AuthService.updateProfile(id, payload);
      const profile = await AuthService.getProfile();
      set({ profile });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update profile";
      showToast(errorMessage, "error");
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    tokenStorage.clearToken();
    set({
      accessToken: null,
      profile: null,
      profileId: null,
      error: null,
    });
  },

  refreshToken: async () => {
    set({ loading: true });

    try {
      const { accessToken } = await AuthService.refreshToken();
      set({ accessToken });
      tokenStorage.setToken(accessToken);
      showToast("Session refreshed", "success");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to refresh token";
      set({ error: errorMessage });
      showToast(errorMessage, "error");
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  setAccessToken: (token) => {
    set({ accessToken: token });
  },

  setProfileId: (id: string) => {
    tokenStorage.setProfileId(id);
    set({ profileId: id });
  },
}));
