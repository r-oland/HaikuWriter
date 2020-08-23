// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { HaikuContext } from "../pages/Write";
// =========================

const Title = styled.p`
    ${({ theme: { fontSize } }) => fontSize.h3}
    font-weight: 700;
    margin-bottom: 0.5em;
`;

const Line = styled.p`
    ${({ theme: { fontSize } }) => fontSize.xl}
`;

export default function Completion() {
    const {
        newHaiku: { title, line1, line2, line3 }
    } = useContext(HaikuContext);

    return (
        <>
            <Title>{title}</Title>
            <Line> {line1}</Line>
            <Line> {line2}</Line>
            <Line> {line3}</Line>
        </>
    );
}
