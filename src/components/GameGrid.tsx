import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatainer from "./GameCardConatainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={"5"}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConatainer>
              <GameCardSkeleton key={skeleton} />{" "}
            </GameCardConatainer>
          ))}
        {games.map((game) => (
          <GameCardConatainer>
            <GameCard key={game.id} game={game} />
          </GameCardConatainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
