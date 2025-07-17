import { useAuthStore } from "@/stores/auth.store";

export default function useDropdownMenu() {
  const { logout } = useAuthStore();
  return { logout };
}
