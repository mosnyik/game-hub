import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatainer from "./GameCardConatainer";
import { GameQuery } from "../types/game-types";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={"6"}>
        {isLoading &&
          !error &&
          skeletons.map((skeleton) => (
            <GameCardConatainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardConatainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardConatainer key={game.id}>
                <GameCard game={game} />
              </GameCardConatainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginTop={4}>
          {isFetching ? "Load..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;

{
  /* {data?.results.map((game) => (
    <GameCardConatainer key={game.id}>
      <GameCard game={game} />
    </GameCardConatainer>
  ))} */
}
