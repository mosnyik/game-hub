import { Game, Genre } from "./game-types";

export interface FetchGamesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Game>;
}

export interface FetchGenreResponse {
  conut: number;
  results: Genre[];
}
