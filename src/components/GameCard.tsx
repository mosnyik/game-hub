import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../types/game-types";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../services/image-url";

interface Prop {
  game: Game;
}
const GameCard = ({ game }: Prop) => {
  return (
    <Card.Root>
      <Image src={getCropedImageUrl(game.background_image)} objectFit="cover" />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore metascore={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
