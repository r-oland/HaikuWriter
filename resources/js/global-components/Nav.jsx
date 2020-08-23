// Components==============
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styles/Mixins";
// =========================

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const Items = styled.div`
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

    return (
        <Wrapper>
            <Container>
                <Items>
                    <button onClick={() => router.push("/")}>
                        <img src="img/logo.svg" alt="logo" />
                    </button>
                    <ul>
                        <li>
                            <a onClick={() => router.push("/overview")}>
                                Haiku's
                            </a>
                        </li>
                        <li>
                            <a onClick={() => router.push("/write")}>Write</a>
                        </li>
                        <li>
                            <a onClick={() => router.push("/add")}>Add</a>
                        </li>
                    </ul>
                </Items>
            </Container>
        </Wrapper>
    );
}
