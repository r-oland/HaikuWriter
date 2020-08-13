// Components==============
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function Index() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/about");
    };

    return (
        <Wrapper>
            Home
            <button onClick={handleClick}>to about</button>
        </Wrapper>
    );
}
