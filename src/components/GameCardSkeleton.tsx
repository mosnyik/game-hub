import { Card, CardBody, HStack, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <SkeletonText noOfLines={2} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Skeleton height="6" width={"100px"}></Skeleton>
          <Skeleton height="6" width={"30px"}></Skeleton>
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
