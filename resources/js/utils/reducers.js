import Axios from "axios";
import { addHaiku, addLines, getInitial, removeHaiku } from "./actions";

export function reducer(state, action) {
    const { type, payload } = action;

    if (type === getInitial().type) {
        const { haikus, lines } = payload;

        const line1 = lines.filter(e => e.line1 !== null).map(e => e.line1);
        const line2 = lines.filter(e => e.line2 !== null).map(e => e.line2);
        const line3 = lines.filter(e => e.line3 !== null).map(e => e.line3);

        return { ...state, haikus, lines: { line1, line2, line3 } };
    }

    if (type === removeHaiku().type) {
        const { id } = payload;
        const haikus = state.haikus;

        const newHaikuList = haikus.filter(haiku => haiku.id !== id);

        Axios.post("/api/deleteHaiku", { id });
        return { ...state, haikus: newHaikuList };
    }

    if (type === addHaiku().type) {
        const { newHaiku, title } = payload;

        Axios.post("/api/newHaiku", { ...newHaiku, title });
        return { ...state, haikus: [...state.haikus, { ...newHaiku, title }] };
    }

    if (type === addLines().type) {
        const { newLines } = payload;
        const arr = Object.entries(newLines);

        let updatedLines = state.lines;

        arr.forEach(e => {
            const key = e[0];
            const value = e[1];

            if (key === "line1") updatedLines.line1.push(value);
            if (key === "line2") updatedLines.line2.push(value);
            if (key === "line3") updatedLines.line3.push(value);
        });

        Axios.post("/api/newLine", newLines).then(() => setNewLines({}));
        return { ...state, lines: updatedLines };
    }

    return state;
}

// THUNKS

export const getAsyncInitial = () => async dispatch => {
    const req1 = await Axios.get("/api/allHaikus");
    const haikus = await req1.data;

    const req2 = await Axios.get("/api/allLines");
    const lines = await req2.data;

    dispatch(getInitial({ haikus, lines }));
};
