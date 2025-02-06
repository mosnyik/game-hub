import { Game } from "./game-types";

export interface FetchGamesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Array<Game>;
}