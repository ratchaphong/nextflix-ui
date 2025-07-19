export interface User {
  id: string;
  email: string;
  name: string;
  role: "OWNER" | "MEMBER";
  package: {
    id: string;
    name: string;
    maxProfiles: number;
    maxMembers: number;
    price: number;
    resolution: string;
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
  pin?: string;
  ownerId: string;
}

export interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  year: number;
  ageRating: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  video: string;
  description: string;
  category: string[];
  releaseDate: string;
}
