import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Game } from "../types/game-types";
import { FetchGamesResponse } from "../types/axios-types";
import { CanceledError } from "axios";

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // get the games from the api
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
    });

      return ()=> controller.abort()
  }, []);
  return {
    games,
    error,
  };
};

export default useGame;
