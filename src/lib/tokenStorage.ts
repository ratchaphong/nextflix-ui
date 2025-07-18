import {
  ACCESS_TOKEN_KEY,
  TOKEN_TIMESTAMP_KEY,
  TOKEN_EXPIRY_MS,
  EARLY_EXPIRY_BUFFER_MS,
  NEAR_EARLY_EXPIRY_BUFFER_MS,
} from "@/utils";

export const tokenStorage = {
  setToken: (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    localStorage.setItem(TOKEN_TIMESTAMP_KEY, Date.now().toString());
  },

  getToken: (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  getTokenTimestamp: (): number | null => {
    const raw = localStorage.getItem(TOKEN_TIMESTAMP_KEY);
    return raw ? parseInt(raw, 10) : null;
  },

  isTokenExpired: (): boolean => {
    const timestamp = tokenStorage.getTokenTimestamp();
    if (!timestamp) return true;

    const now = Date.now();
    return now - timestamp > TOKEN_EXPIRY_MS - EARLY_EXPIRY_BUFFER_MS;
  },

  isTokenNearExpiry: (): boolean => {
    const timestamp = tokenStorage.getTokenTimestamp();
    if (!timestamp) return false;

    const now = Date.now();
    return (
      now - timestamp >
      TOKEN_EXPIRY_MS - (EARLY_EXPIRY_BUFFER_MS + NEAR_EARLY_EXPIRY_BUFFER_MS)
    );
  },

  clearToken: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(TOKEN_TIMESTAMP_KEY);
  },
};
