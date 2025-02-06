export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
