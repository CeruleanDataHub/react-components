import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import { boolean } from "@storybook/addon-knobs";
import { addDecorator, addParameters } from "@storybook/react";
import React, { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { ModalProvider } from "styled-react-modal";

import { darkTheme, lightTheme } from "../src/styles/theme";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

addDecorator(storyFn => (
  <StrictMode>
    <Normalize />
    <ThemeProvider
      theme={
        boolean("Toggle light and dark theme", true) ? lightTheme : darkTheme
      }
    >
      <ModalProvider>{storyFn()}</ModalProvider>
    </ThemeProvider>
  </StrictMode>
));
