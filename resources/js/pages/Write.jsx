// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import data from "../data.json";
import Completion from "../macro-write/Completion";
import Line from "../macro-write/Line";
import Title from "../macro-write/Title";
// =========================

const Wrapper = styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const HaikuContext = React.createContext();

export default function WritePage() {
    const { line1, line2, line3 } = data;

    const [step, setStep] = useState(1);
    const [haiku, setHaiku] = useState({
        title: "",
        line1: "",
        line2: "",
        line3: ""
    });

    return (
        <Wrapper>
            <HaikuContext.Provider value={{ step, setStep, setHaiku, haiku }}>
                {step === 1 ? (
                    <Line lines={line1} />
                ) : step === 2 ? (
                    <Line lines={line2} />
                ) : step === 3 ? (
                    <Line lines={line3} />
                ) : step === 4 ? (
                    <Title />
                ) : (
                    <Completion />
                )}
            </HaikuContext.Provider>
        </Wrapper>
    );
}
