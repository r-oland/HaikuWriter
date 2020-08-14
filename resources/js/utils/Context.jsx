// Components==============
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/themes";
// =========================

export default function Context({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
            <GlobalStyles />
        </ThemeProvider>
    );
}
