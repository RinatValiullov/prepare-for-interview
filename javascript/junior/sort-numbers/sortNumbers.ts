const sortNumbers = (arrayOfNums: number[]) => {

    for (let i = 0; i < arrayOfNums.length; i++) {
        for (let j = i; j < arrayOfNums.length; j++) {
            if (arrayOfNums[i] > arrayOfNums[j]) {
                [arrayOfNums[i], arrayOfNums[j]] = [arrayOfNums[j], arrayOfNums[i]];
            }
        }
    }

    console.log(arrayOfNums);

}

const numbers1: number[] = [5, 2, 7, 3, 1];
const numbers2: number[] = [2, 8, 3, 0, 4];


sortNumbers(numbers1);
sortNumbers(numbers2);
