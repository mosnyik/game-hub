import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List.Root as='ul' variant="plain" >
        {isLoading && !error && <GenreListSkeleton />}
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
              <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
