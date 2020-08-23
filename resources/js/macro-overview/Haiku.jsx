// Components==============
import Axios from "axios";
import React, { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../utils/Context";
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
    const { haikus, setHaikus } = useContext(StoreContext);

    function removeHaiku() {
        const id = e.id;

        const newHaikuList = haikus.filter(haiku => haiku.id !== e.id);
        setHaikus(newHaikuList);

        Axios.post("/api/deleteHaiku", { id });
    }

    return (
        <Wrapper>
            <Flex>
                <Title>{e.title}</Title>
                <button onClick={removeHaiku}>x</button>
            </Flex>
            <Line> {e.line1}</Line>
            <Line> {e.line2}</Line>
            <Line> {e.line3}</Line>
        </Wrapper>
    );
}
