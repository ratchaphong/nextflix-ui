import CryptoJS from "crypto-js";

const STORAGE_KEY = "rememberLogin";
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || "secret";

export const secureStorage = {
  setLogin: (email: string, password: string) => {
    const encrypted = CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
    const payload = JSON.stringify({ email, password: encrypted });
    localStorage.setItem(STORAGE_KEY, payload);
  },

  getLogin: (): { email: string; password: string } | null => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    try {
      const { email, password } = JSON.parse(raw);
      const bytes = CryptoJS.AES.decrypt(password, SECRET_KEY);
      const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
      return { email, password: decryptedPassword };
    } catch (e) {
      console.warn("🔐 Failed to decrypt secureStorage:", e);
      return null;
    }
  },

  clearLogin: () => {
    localStorage.removeItem(STORAGE_KEY);
  },
};
