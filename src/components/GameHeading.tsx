import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../types/game-types";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as={"h1"} marginY={5 } fontSize={'5xl'}>{`${gameQuery.platform?.name || ""} ${
      gameQuery.genre?.name || ""
    }  Game`}</Heading>
  );
};

export default GameHeading;
