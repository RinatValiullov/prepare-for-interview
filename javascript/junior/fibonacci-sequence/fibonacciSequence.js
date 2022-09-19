const fibonacciSequence = (len) => {
    const sequence = [1, 1];
    if (len <= 1) {
        return sequence.slice(0, len);
    }
    while (sequence.length < len) {
        const last = sequence[sequence.length - 1];
        const prev = sequence[sequence.length - 2];
        sequence.push(last + prev);
    }
    return sequence;
};
const LEN1 = 8;
const LEN2 = 15;
const output1 = fibonacciSequence(LEN1);
const output2 = fibonacciSequence(LEN2);
console.log("Fibonacci sequence for 8 is:", output1);
console.log("Fibonacci sequence for 15 is:", output2);
export { fibonacciSequence };
