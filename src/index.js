import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./context/AuthContext";
import MainProvider from "./context/MainContext";
import { BrowserRouter } from "react-router-dom";
import theme from "./Theme";
import { ColorModeScript } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <AuthProvider>
      <MainProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MainProvider>
    </AuthProvider>
  </ChakraProvider>
);
