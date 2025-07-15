export interface AuthState {
  loading: boolean;
  accessToken: string | null;
  profile: ProfileResponse | null;
  error: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  getProfile: () => Promise<void>;
  logout: () => void;
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

export interface LoginResponse {
  accessToken: string;
}

export interface ProfileResponse {
  id: string;
  email: string;
  name: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface HomeFormValues {
  email: string;
}
