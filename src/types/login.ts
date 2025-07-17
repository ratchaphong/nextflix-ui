export interface AuthState {
  loading: boolean;
  accessToken: string | null;
  profile: ProfileResponse | null;
  success: string | null;
  error: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  getProfile: () => Promise<void>;
  addProfile: (payload: AddProfilePayload) => Promise<void>;
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
  user: {
    id: string;
    email: string;
    name: string;
    role: "OWNER" | "MEMBER";
  };
  package: {
    id: string;
    name: string;
    maxProfiles: number;
    maxMembers: number;
    price: number;
    resolution: string; // e.g., "HD", "UHD"
  };
  household: {
    id: string;
    name: string;
    members: HouseholdMember[];
  };
  profiles: Profile[];
}

export interface HouseholdMember {
  id: string;
  email: string;
  name: string;
  role: "OWNER" | "MEMBER";
}

export interface Profile {
  id: string;
  name: string;
  image: string;
  isLocked: boolean;
  pin?: string; // ✅ ถ้า isLocked = true ต้องมี pin
  ownerId: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface HomeFormValues {
  email: string;
}

export interface AddProfilePayload {
  name: string;
  image: string;
}
