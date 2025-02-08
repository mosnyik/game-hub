export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchTerm: string;
}
