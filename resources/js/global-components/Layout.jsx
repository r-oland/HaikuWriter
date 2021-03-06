// Components==============
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
// =========================

const Wrapper = styled.div`
    height: 100%;
`;

export default function Layout({ children }) {
    return (
        <Wrapper>
            <Nav />
            {children}
        </Wrapper>
    );
}
