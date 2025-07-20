export const HIDDEN_PATHS_FOOTER = ["/select-profile", "/login"];

export const HIDDEN_PATHS_HEADER = ["/select-profile"];

export const HIDDEN_SIGN_IN_BUTTON_HEADER = ["/login"];

export const GUEST_ONLY_PATHS = ["/", "/login"];

export const PROTECTED_PATHS = [
  "/select-profile",
  "/dashboard",
  "/movie-search",
  "/movies",
];

export const ACCESS_TOKEN_KEY = "accessToken";

export const TOKEN_TIMESTAMP_KEY = "accessTokenTimestamp";

export const TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 ชั่วโมง

export const EARLY_EXPIRY_BUFFER_MS = 5 * 60 * 1000; // 5 นาที = 300,000 ms

export const NEAR_EARLY_EXPIRY_BUFFER_MS = 3 * 60 * 1000; // 3 นาที
