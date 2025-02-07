import { Genre } from "../types/game-types";
import useData from "./useData";

const useGenre = () => useData<Genre>("/genres");

export default useGenre;
