const twoSum = (numbers, target) => {
    for (let firstTerm = 0; firstTerm < numbers.length - 1; firstTerm++) {
        const firstElement = numbers[firstTerm];
        for (let secondTerm = firstTerm + 1; secondTerm < numbers.length; secondTerm++) {
            const secondElement = numbers[secondTerm];
            if (firstElement + secondElement === target) {
                return [firstTerm, secondTerm];
            }
        }
    }
};
const numbers1 = [3, 2, 4];
const target1 = 6;
const numbers2 = [-2, 1, 7, 3, 10];
const target2 = 5;
const numbers3 = [5, 5];
const target3 = 10;
const output1 = twoSum(numbers1, target1);
const output2 = twoSum(numbers2, target2);
const output3 = twoSum(numbers3, target3);
console.log(`Elements in the array [${numbers1}] with indices ${output1?.join(' and ')} form a sum equal to ${target1}`);
console.log(`Elements in the array [${numbers2}] with indices ${output2?.join(' and ')} form a sum equal to ${target2}`);
console.log(`Elements in the array [${numbers3}] with indices ${output3?.join(' and ')} form a sum equal to ${target3}`);
export { twoSum };
