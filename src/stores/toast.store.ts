// stores/toast.store.ts
import { ToastState } from "@/types/toast";
import { create } from "zustand";

export const useToastStore = create<ToastState>((set) => ({
  message: null,
  type: null,
  visible: false,
  showToast: (message, type) => set({ message, type, visible: true }),
  hideToast: () => set({ message: null, type: null, visible: false }),
}));
