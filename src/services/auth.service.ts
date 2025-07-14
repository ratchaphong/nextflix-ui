// services/auth.service.ts

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

export const AuthService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(errorBody.message || "Login failed");
    }

    return res.json();
  },

  register: async (payload: RegisterPayload): Promise<LoginResponse> => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(errorBody.message || "Register failed");
    }

    return res.json();
  },

  getProfile: async (token: string): Promise<ProfileResponse> => {
    const res = await fetch("/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(errorBody.message || "Failed to fetch profile");
    }

    return res.json();
  },
};
