import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../types/game-types";

interface Prop {
  game: Game;
}
const GameCard = ({ game }: Prop) => {
  return (
    <Card.Root borderRadius={20} maxW={"sm"} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
