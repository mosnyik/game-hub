import { useQuery } from "@tanstack/react-query";
import { Platform } from "../types/game-types";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
// useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
