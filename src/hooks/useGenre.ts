import { useQuery } from "@tanstack/react-query";
import { Genre } from "../types/game-types";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenre = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    // initialData:
  });
};
// useData<Genre>("/genres");

export default useGenre;
