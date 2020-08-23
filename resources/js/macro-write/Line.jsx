// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { HaikuContext } from "../pages/Write";
import getLineOptions from "./getLineOptions";
// =========================

const Wrapper = styled.div``;

const Text = styled.p`
    ${({ theme: { fontSize } }) => fontSize.h3}
    cursor: pointer;
    margin-bottom: 1em;
`;

export default function Line({ lines }) {
    const { step, setStep, setNewHaiku } = useContext(HaikuContext);

    function handleClick(e) {
        e.persist();

        if (step > 4) return;

        if (step === 1)
            setNewHaiku(prev => ({ ...prev, line1: e.target.innerHTML }));
        if (step === 2)
            setNewHaiku(prev => ({ ...prev, line2: e.target.innerHTML }));
        if (step === 3)
            setNewHaiku(prev => ({ ...prev, line3: e.target.innerHTML }));

        setStep(prev => prev + 1);
    }

    return (
        <Wrapper>
            {getLineOptions(lines).map((e, index) => {
                return (
                    <Text key={index} onClick={handleClick}>
                        {e}
                    </Text>
                );
            })}
        </Wrapper>
    );
}
