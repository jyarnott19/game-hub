//import { Skeleton } from '@chakra-ui/react'
import { Card } from "@chakra-ui/react/card";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body display="inline-block">
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
