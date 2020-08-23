// Components==============
import Axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { HaikuContext } from "../pages/Write";
import { StoreContext } from "../utils/Context";
// =========================

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        transform: translateY(-50px);
    }
`;

const TitleField = styled.input`
    ${({ theme: { fontSize } }) => fontSize.h3}
    background: none;
    border: none;
    border-bottom: 2px solid ${({ theme: { primary } }) => primary};
    text-align: center;
`;

const Button = styled.button`
    border: 3px solid black;
    padding: 0.25em 1em;
    margin-top: 2em;
    display: inline-block;
    ${({ theme: { fontSize } }) => fontSize.l}
`;

export default function Title() {
    const [title, setTitle] = useState("");
    const { step, setStep, setNewHaiku, newHaiku } = useContext(HaikuContext);
    const { setHaikus } = useContext(StoreContext);

    function handleSubmit(e) {
        e.preventDefault();

        if (step === 4 && title) {
            setNewHaiku(prev => ({ ...prev, title }));
            setStep(5);

            setHaikus(prev => [...prev, { ...newHaiku, title }]);

            Axios.post("/api/newHaiku", { ...newHaiku, title });
        }
    }

    return (
        <Form onSubmit={handleSubmit} method="post">
            <h2>Name your poem</h2>
            <TitleField
                name="title"
                value={title}
                onChange={e => {
                    setTitle(e.target.value);
                }}
            />
            <Button>Finish Haiku</Button>
        </Form>
    );
}
