import { Package, User } from "./global";

export interface AuthState {
  loading: boolean;
  accessToken: string | null;
  profile: User | null;
  success: string | null;
  error: string | null;
  profileId: string | null;
  packages: Package[];

  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  getProfile: () => Promise<void>;
  addProfile: (payload: AddProfilePayload) => Promise<void>;
  updateProfile: (id: string, payload: AddProfilePayload) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  setAccessToken: (token: string) => void;
  setProfileId: (profileId: string) => void;
  checkEmail: (payload: CheckEmailPayload) => Promise<boolean>;
  fetchAllPackages: () => Promise<void>;
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

export interface CheckEmailPayload {
  email: string;
}

export interface LoginResponse {
  accessToken: string;
}

export type ProfileResponse = User;

export interface CheckEmailResponse {
  isAvailable: boolean;
}

export type FetchAllPackagesResponse = Package[];
