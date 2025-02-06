
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../types/game-types";
import PlatformIconList from "./PlatformIconList";

interface Prop {
  game: Game;
}
const GameCard = ({ game }: Prop) => {
 

  return (
    <Card.Root borderRadius={20} maxW={"sm"} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
