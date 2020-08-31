// Components==============
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAsyncInitial } from "../utils/reducers";
import Nav from "./Nav";
// =========================

const Wrapper = styled.div`
    height: 100%;
`;

export default function Layout({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAsyncInitial());
    }, []);

    return (
        <Wrapper>
            <Nav />
            {children}
        </Wrapper>
    );
}
