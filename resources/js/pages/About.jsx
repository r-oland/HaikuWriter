// Components==============
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function About() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    };

    return (
        <Wrapper>
            About page
            <button onClick={handleClick}>to home</button>
        </Wrapper>
    );
}
