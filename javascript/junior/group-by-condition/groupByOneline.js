const groupByOneline = (array, condition) => {
    return array.reduce((count, element) => {
        const key = typeof condition === "function" ? condition(element) : element[condition];
        if (!count[key]) {
            count[key] = [];
        }
        count[key].push(element);
        return count;
    }, {});
};
const arrayOfNumbers = [1.2, 1.8, 2.5, 2.6];
const output1 = groupByOneline(arrayOfNumbers, Math.floor);
const arrayOfStrings = ["hello", "welcome", "see you"];
const output2 = groupByOneline(arrayOfStrings, "length");
console.log(output1);
console.log(output2);
export { groupByOneline };
