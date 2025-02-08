import { Button, Heading, HStack, Image, List, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../types/game-types";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Heading as={"h1"} marginY={3} fontSize={"2xl"}>
        Genre
      </Heading>
      {error && <Text> </Text>}
      <List.Root as="ul" variant="plain">
        {isLoading && !error && skeletons.map(() => <GenreListSkeleton />)}
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack spaceX="1px" alignItems="center">
              <Image
                src={getCropedImageUrl(genre.image_background)}
                height={"32px"}
                width={"32px"}
                objectFit="cover"
                borderRadius={"10px"}
                marginBottom={"7px"}
              />
              <Button
                fontSize={"lg"}
                fontWeight={genre.id == selectedGenre?.id ? "bold" : ""}
                border="none"
                background="none"
                color="inherit"
                _focus={{ textDecoration: "underline", color: "blue" }}
                whiteSpace="normal"
                onClick={() => {
                  onSelectGenre(genre);
                }}
                maxWidth="200px"
                textAlign="left"
                padding="0"
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
