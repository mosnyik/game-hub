import { Game, Genre } from "../types/game-types";
import useData from "./useData";

const useGame = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGame;
