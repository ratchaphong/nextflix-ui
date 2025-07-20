export interface ApiErrorModalState {
  visible: boolean;
  message: string | null;
  show: (message?: string) => void;
  hide: () => void;
}
