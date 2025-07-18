import { Profile } from "@/types/global";

export interface DropdownMenuProps {
  profile: Profile;
  t: (key: string) => string;
}
