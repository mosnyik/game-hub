import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatainer from "./GameCardConatainer";
import { Genre, Platform } from "../types/game-types";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGame(selectedGenre , selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={"3"}>
        {isLoading &&
          !error &&
          skeletons.map((skeleton) => (
            <GameCardConatainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardConatainer>
          ))}
        {data.map((game) => (
          <GameCardConatainer key={game.id}>
            <GameCard game={game} />
          </GameCardConatainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
