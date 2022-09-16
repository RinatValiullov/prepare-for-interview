const deepEqual = (input1?: any, input2?: any) => {
  if (Number.isNaN(input1) && Number.isNaN(input2)) {
    return true;
  }

  if (typeof input1 !== typeof input2) {
    return false;
  }

  if (typeof input1 !== "object" || input1 === null || input2 === null) {
    return input1 === input2;
  }

  if (Object.keys(input1).length !== Object.keys(input2).length) {
    return false;
  }

  for (const key of Object.keys(input1)) {
    if (!deepEqual(input1[key], input2[key])) {
      return false;
    }
  }

  return true;
};

const input1_1 = { x: 15, z: { c: 12 } };
const input2_1 = { x: 15, z: { c: 12 } };

const input1_2 = { x: 15, z: [8, 9] };
const input2_2 = { x: 15, z: [8, 9] };

const input1_3 = { x: 15, z: { c: 0 } };
const input2_3 = { x: 15, z: { c: 1 } };

const input1_4 = { x: 15 };
const input2_4 = { x: 15, z: { c: 1 } };

const input1_5 = NaN;
const input2_5 = NaN;

const input1_6 = "string";
const input2_6 = 15;

const output1 = deepEqual(input1_1, input2_1);
const output2 = deepEqual(input1_2, input2_2);
const output3 = deepEqual(input1_3, input2_3);
const output4 = deepEqual(input1_4, input2_4);
const output5 = deepEqual(input1_5, input2_5);
const output6 = deepEqual(input1_6, input2_6);
const output7 = deepEqual();

console.log(`input1_1 and input2_1 are equal: ${output1}`);
console.log(`input1_2 and input2_2 are equal: ${output2}`);
console.log(`input1_3 and input2_3 are equal: ${output3}`);
console.log(`input1_4 and input2_4 are equal: ${output4}`);
console.log(`input1_5 and input2_5 are equal: ${output5}`);
console.log(`input1_6 and input2_6 are equal: ${output6}`);
console.log(
  `If there are no arguments, which is the same as they are equal to undefined: ${output7}`
);

export { deepEqual };
