// Components==============
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/themes";
import { useStore } from "./useStore";
// =========================

export const StoreContext = React.createContext();

export default function Context({ children }) {
    const contextValue = useStore();

    return (
        <ThemeProvider theme={theme}>
            <StoreContext.Provider value={contextValue}>
                {children}
            </StoreContext.Provider>
            <GlobalStyles />
        </ThemeProvider>
    );
}
