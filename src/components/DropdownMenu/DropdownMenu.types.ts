import { Profile } from "@/types/login";

export interface DropdownMenuProps {
  profile: Profile;
  t: (key: string) => string;
}
