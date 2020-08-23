// Components==============
import Axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/Mixins";
import { StoreContext } from "../utils/Context";
// =========================

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    place-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
        margin: 0 auto;
    }

    input,
    button,
    label {
        ${({ theme: { fontSize } }) => fontSize.h4}
        width: 100%;
        display: block;
    }

    input {
        background: none;
        border: none;
        border-bottom: 2px solid ${({ theme: { primary } }) => primary};
        text-align: center;
        margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
        color: ${({ theme: { gray } }) => gray[12]};
        ${({ theme: { fontSize } }) => fontSize.xl}
        text-align: left;
    }
`;

export default function Add() {
    const [newLines, setNewLines] = useState({});
    const { lines, setLines } = useContext(StoreContext);

    function addLine(newLine, line, nr) {
        if (newLine) {
            let newArr = line;

            newArr.push(newLine);
            setLines(prev => ({ ...prev, [nr]: newArr }));
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        addLine(newLines.line1, lines.line1, "line1");
        addLine(newLines.line2, lines.line2, "line2");
        addLine(newLines.line3, lines.line3, "line3");

        Axios.post("/api/newLine", newLines).then(() => setNewLines({}));
    };

    const handleChange = e => {
        e.persist();

        setNewLines(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <Wrapper>
            <Container>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="line1">First line </label>
                    <input
                        type="text"
                        name="line1"
                        value={newLines.line1 ? newLines.line1 : ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="line2">Second line </label>
                    <input
                        type="text"
                        name="line2"
                        value={newLines.line2 ? newLines.line2 : ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="line3">Third line </label>
                    <input
                        type="text"
                        name="line3"
                        value={newLines.line3 ? newLines.line3 : ""}
                        onChange={handleChange}
                    />

                    <button>Submit</button>
                </form>
            </Container>
        </Wrapper>
    );
}
