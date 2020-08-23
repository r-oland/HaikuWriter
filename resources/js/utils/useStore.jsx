import axios from "axios";
import { useEffect, useState } from "react";

export const useStore = () => {
    const [loading, setLoading] = useState(true);
    const [haikus, setHaikus] = useState([]);
    const [lines, setLines] = useState({ line1: [], line2: [], line3: [] });

    useEffect(() => {
        axios.get("/api/allHaikus").then(h => {
            const haikuRes = h.data;
            setHaikus(haikuRes);

            axios.get("/api/allLines").then(l => {
                const lineRes = l.data;

                if (lineRes) {
                    const line1 = lineRes
                        .filter(e => e.line1 !== null)
                        .map(e => e.line1);
                    const line2 = lineRes
                        .filter(e => e.line2 !== null)
                        .map(e => e.line2);
                    const line3 = lineRes
                        .filter(e => e.line3 !== null)
                        .map(e => e.line3);

                    setLines({ line1, line2, line3 });
                    setLoading(false);
                }
            });
        });
    }, []);

    return { haikus, setHaikus, lines, setLines, loading };
};
