//import { Skeleton } from '@chakra-ui/react'
import { Card } from "@chakra-ui/react/card";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root
      borderRadius={10}
      overflow="hidden"
      width={{ sm: "350px", md: "350px", lg: "300px", xl: "250px" }}
    >
      <Skeleton height="200px" />
      <Card.Body display="inline-block">
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
