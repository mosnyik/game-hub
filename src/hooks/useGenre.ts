import { useQuery } from "@tanstack/react-query";
import { Genre } from "../types/game-types";
import apiClient from "../services/api-client";
import { FetchResponse } from "../types/axios-types";
// <FetchResponse<Genre>>

const useGenre = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    // initialData: 
  });
};
// useData<Genre>("/genres");

export default useGenre;
