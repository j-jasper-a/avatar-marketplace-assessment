export interface Avatar {
  id: number;
  name: string;
  sex: string;
  price: number;
  description: string;
  ratings: number;
  likes: number;
  imageUrl: string;
  creatorName: string;
  creatorAvatar: string;
  autoUpload: boolean;
  platforms: { platformId: number; platformName: string }[];
}

export interface Avatars {
  avatars: Avatar[];
}
