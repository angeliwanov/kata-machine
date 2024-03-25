export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (i; i < breaks.length; i += jumpAmount) {
        console.log(i);
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        console.log(i);
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
