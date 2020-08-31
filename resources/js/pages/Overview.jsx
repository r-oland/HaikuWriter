// Components==============
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Haiku from "../macro-overview/Haiku";
import { Container } from "../styles/Mixins";
import { getAsyncInitial } from "../utils/reducers";
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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAsyncInitial());
    }, []);

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
