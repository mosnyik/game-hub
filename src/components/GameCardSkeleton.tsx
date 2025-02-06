import { Card, CardBody, HStack, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius={20} maxW={"sm"} overflow={"hidden"}>
      <Skeleton height="200px" />
      <SkeletonText noOfLines={2} />
      <CardBody>
        <HStack justifyContent={"space-between"} margin={1}>
          <Skeleton height="6" width={"100px"}></Skeleton>
          <Skeleton height="6" width={"30px"}></Skeleton>
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
