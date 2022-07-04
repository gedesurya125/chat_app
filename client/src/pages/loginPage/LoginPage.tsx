import React from "react";
import { Box } from "@chakra-ui/react";
import { Card } from "src/components";
export const LoginPage = () => {
  return (
    <Box
      className="login-page"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card />
    </Box>
  );
};
