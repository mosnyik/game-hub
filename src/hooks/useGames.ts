import { Game } from "../types/game-types";
import useData from "./useData";

const useGame = () => useData<Game>("/games");

export default useGame;
