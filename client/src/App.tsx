import React from "react";

// External Dependencies
import { Flex, Heading } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { LoginPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
