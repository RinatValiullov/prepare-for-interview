var sortNumbers = function (arrayOfNums) {
    var _a;
    for (var i = 0; i < arrayOfNums.length; i++) {
        for (var j = i; j < arrayOfNums.length; j++) {
            if (arrayOfNums[i] > arrayOfNums[j]) {
                _a = [arrayOfNums[j], arrayOfNums[i]], arrayOfNums[i] = _a[0], arrayOfNums[j] = _a[1];
            }
        }
    }
    console.log(arrayOfNums);
};
var numbers1 = [5, 2, 7, 3, 1];
var numbers2 = [2, 8, 3, 0, 4];
sortNumbers(numbers1);
sortNumbers(numbers2);
