// Components==============
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/themes";
import { store } from "./store";
// =========================

export default function Context({ children }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {children}
                <GlobalStyles />
            </ThemeProvider>
        </Provider>
    );
}
