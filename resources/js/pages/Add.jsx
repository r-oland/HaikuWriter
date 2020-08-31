// Components==============
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Container } from "../styles/Mixins";
import { addLines } from "../utils/actions";
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
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(addLines({ newLines }));
        setNewLines({});
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
