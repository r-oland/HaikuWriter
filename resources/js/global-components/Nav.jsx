// Components==============
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styles/Mixins";
// =========================

const Wrapper = styled.div`
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 50px;
    }

    ul {
        display: flex;
        align-items: center;

        li {
            padding-left: 1.5em;

            a {
                cursor: pointer;
            }
        }
    }
`;

export default function Nav() {
    const router = useHistory();
    const admin = false;

    return (
        <Container>
            <Wrapper>
                <button onClick={() => router.push("/")}>
                    <img src="img/logo.svg" alt="logo" />
                </button>
                <ul>
                    <li>
                        <a onClick={() => router.push("/overview")}>Haiku's</a>
                    </li>
                    <li>
                        <a onClick={() => router.push("/write")}>Write</a>
                    </li>
                    {admin && (
                        <li>
                            <a onClick={() => router.push("/")}>Add</a>
                        </li>
                    )}
                </ul>
            </Wrapper>
        </Container>
    );
}
