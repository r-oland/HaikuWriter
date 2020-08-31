// Components==============
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
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
    const {
        lines: { line1, line2, line3 }
    } = useSelector(({ lines }) => ({ lines }));

    const [step, setStep] = useState(1);
    const [newHaiku, setNewHaiku] = useState({
        title: "",
        line1: "",
        line2: "",
        line3: ""
    });

    return (
        <Wrapper>
            <HaikuContext.Provider
                value={{ step, setStep, setNewHaiku, newHaiku }}
            >
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
