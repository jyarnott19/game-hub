import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      //   width={{ sm: "350px", md: "350px", lg: "300px", xl: "250px" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
