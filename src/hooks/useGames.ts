import { useQuery } from "@tanstack/react-query";
import { Game, GameQuery } from "../types/game-types";
import { FetchResponse } from "../types/axios-types";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchTerm,
        },
      }),
    staleTime: 15 * 60 * 1000,
  });

export default useGame;
