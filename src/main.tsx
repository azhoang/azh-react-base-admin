import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import themes from "./themes/index.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { mainService } from "./services";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <QueryClientProvider client={mainService.client}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
