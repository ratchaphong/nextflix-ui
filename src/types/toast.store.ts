type ToastType = "success" | "error";

export interface ToastState {
  message: string | null;
  type: ToastType | null;
  visible: boolean;
  showToast: (message: string, type: ToastType) => void;
  hideToast: () => void;
}
