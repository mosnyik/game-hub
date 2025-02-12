import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConatainer from "./GameCardConatainer";
import { GameQuery } from "../types/game-types";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const totalGameCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <InfiniteScroll
        dataLength={totalGameCount ?? 0} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading more games...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>
        //     &#8595; Pull down to refresh
        //   </h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>
        //     &#8593; Release to refresh
        //   </h3>
        // }
      >
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
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
