import { Button, HStack, Image, List, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../types/game-types";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text> </Text>}
      <List.Root as="ul" variant="plain">
        {isLoading &&
          !error &&
          skeletons.map(() => <GenreListSkeleton />)}
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                src={getCropedImageUrl(genre.image_background)}
                height={"30px"}
                width={"30px"}
                borderRadius={"10px"}
                marginBottom={"7px"}
              />
              <Button
                fontSize={"lg"}
                border="none"
                background="none"
                color="inherit"
                _focus={{ textDecoration: "underline", color: "blue" }}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
