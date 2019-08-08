export function pickRandom(arr, count) {
    let _arr = [...arr];
    return [...Array(count)].map(() => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]);
}

export function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
