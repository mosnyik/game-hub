import { useQuery } from "@tanstack/react-query";
import { Game, GameQuery } from "../types/game-types";
import apiClient from "../services/api-client";
import { FetchResponse } from "../types/axios-types";

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchTerm,
          },
        })
        .then((res) => res.data),
    staleTime: 15 * 60 * 1000,
  });

export default useGame;
