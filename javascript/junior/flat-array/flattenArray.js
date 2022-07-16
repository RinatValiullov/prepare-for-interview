var multidimensionalArray = [[1], [[2]], [3, [4, [5, [6]]]]];
var flattenArray = function (multiArray) {
    var result = [];
    for (var i = 0; i < multiArray.length; i++) {
        if (Array.isArray(multiArray[i])) {
            var flat = flattenArray(multiArray[i]);
            for (var j = 0; j < flat.length; j++) {
                result.push(flat[j]);
            }
        }
        else {
            result.push(multiArray[i]);
        }
    }
    return result;
};
var resultArray = flattenArray(multidimensionalArray);
console.log(resultArray);
