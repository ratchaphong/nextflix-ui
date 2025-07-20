import { User } from "./global";

export interface AuthState {
  loading: boolean;
  accessToken: string | null;
  profile: User | null;
  success: string | null;
  error: string | null;
  profileId: string | null;

  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  getProfile: () => Promise<void>;
  addProfile: (payload: AddProfilePayload) => Promise<void>;
  updateProfile: (id: string, payload: AddProfilePayload) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  setAccessToken: (token: string) => void;
  setProfileId: (profileId: string) => void;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

export interface AddProfilePayload {
  name: string;
  image: string;
}

export interface LoginResponse {
  accessToken: string;
}

export type ProfileResponse = User;
