// Components==============
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Haiku from "../macro-overview/Haiku";
import { Container } from "../styles/Mixins";
// =========================

const Wrapper = styled.div`
    padding-top: ${({ theme: { spacing } }) => spacing[12]};
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5vw;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export default function Overview() {
    const { haikus } = useSelector(({ haikus }) => ({ haikus }));

    return (
        <Container>
            <Wrapper>
                {haikus !== [] &&
                    haikus.map((e, index) => {
                        return <Haiku key={index} e={e} />;
                    })}
            </Wrapper>
        </Container>
    );
}
