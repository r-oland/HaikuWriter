function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function getLineOptions(line) {
    const shuffledArr = shuffle(line);
    return [shuffledArr[0], shuffledArr[1], shuffledArr[2]];
}
