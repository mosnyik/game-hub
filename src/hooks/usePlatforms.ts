import apiClient from "../services/api-client";
import { FetchResponse } from "../types/axios-types";
import { Platform } from "../types/game-types";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
// useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
