import { Game, Genre, Platform } from "../types/game-types";
import useData from "./useData";

const useGame = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { 
      params: 
      { genres: selectedGenre?.id, 
        platforms: selectedPlatform?.id 
      } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGame;
