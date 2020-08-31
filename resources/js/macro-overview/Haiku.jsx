// Components==============
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeHaiku } from "../utils/actions";
// =========================

const Wrapper = styled.div`
    padding-bottom: ${({ theme: { spacing } }) => spacing[8]};
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5em;

    button {
        color: ${({ theme: { primary } }) => primary};
        ${({ theme: { fontSize } }) => fontSize.h2}
        font-weight: 700;
    }
`;

const Title = styled.p`
    ${({ theme: { fontSize } }) => fontSize.h3}
    font-weight: 700;
`;

const Line = styled.p`
    ${({ theme: { fontSize } }) => fontSize.xl}
`;

export default function Haiku({ e }) {
    const dispatch = useDispatch();

    function remove() {
        const id = e.id;

        dispatch(removeHaiku({ id }));
    }

    return (
        <Wrapper>
            <Flex>
                <Title>{e.title}</Title>
                <button onClick={remove}>x</button>
            </Flex>
            <Line> {e.line1}</Line>
            <Line> {e.line2}</Line>
            <Line> {e.line3}</Line>
        </Wrapper>
    );
}
