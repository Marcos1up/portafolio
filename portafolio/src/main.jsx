import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";

//importar el theme de chakraui
import componentStyles from "./Theme/themeSchemas";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={componentStyles}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
