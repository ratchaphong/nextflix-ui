// stores/apiErrorModal.store.ts
import { ApiErrorModalState } from "@/types/apiErrorModal.store";
import { create } from "zustand";

export const useApiErrorModalStore = create<ApiErrorModalState>((set) => ({
  visible: false,
  message: null,
  show: (message) => set({ visible: true, message }),
  hide: () => set({ visible: false, message: null }),
}));
