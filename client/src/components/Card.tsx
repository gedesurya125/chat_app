import React from "react";
import { Box, FormControl, Input, Heading } from "@chakra-ui/react";

export const Card = () => {
  return (
    <Box className="card" width={["100%"]}>
      <CardHeadings />
    </Box>
  );
};

const CardHeadings = () => {
  return (
    <Heading as="h3" size="md">
      Login First
    </Heading>
  );
};
