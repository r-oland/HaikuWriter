// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function Layout({ children }) {
    return (
        <Wrapper>
            <p>Header</p>
            {children}
            <p>Footer</p>
        </Wrapper>
    );
}
