const fibonacciSequenceCache = (function () {
  const sequence = [1, 1];

  return function (len: number) {
    console.log("Called with: ", len);
    if (sequence.length >= len) {
      console.log("No compute");
      return sequence.slice(0, len);
    }

    while (sequence.length < len) {
      const last = sequence[sequence.length - 1];
      const prev = sequence[sequence.length - 2];
      sequence.push(last + prev);
      console.log("Pushed", sequence[sequence.length - 1]);
    }

    return sequence;
  };
})();

const LEN1 = 15;
const LEN2 = 8;
const LEN3 = 10;
const output1 = fibonacciSequenceCache(LEN1);
const output2 = fibonacciSequenceCache(LEN2);
const output3 = fibonacciSequenceCache(LEN3);

console.log("Fibonacci sequence for 15 is:", output1);
console.log("Fibonacci sequence for 8 is:", output2);
console.log("Fibonacci sequence for 10 is:", output3);

export { fibonacciSequenceCache };
