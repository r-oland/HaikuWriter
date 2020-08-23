// Components==============
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Button = styled.button`
    margin-top: ${({ theme: { spacing } }) => spacing[5]};
    display: inline-block;
    border-bottom: solid 2.5px ${({ theme: { primary } }) => primary};
    ${({ theme: { fontSize } }) => fontSize.h3}
`;

export default function Index() {
    const router = useHistory();

    return (
        <Wrapper>
            <h1>Haiku. The art of expression</h1>
            <Button onClick={() => router.push("/write")}>Write</Button>
        </Wrapper>
    );
}
