import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./state/store";
import theme from "./theme";


const AppProvider = ({ children }: { children: JSX.Element }) => {
  return (
          <Provider store={store}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </Provider>
  );
};

export default AppProvider;
