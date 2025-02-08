import { Game, GameQuery } from "../types/game-types";
import useData from "./useData";

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );

export default useGame;
