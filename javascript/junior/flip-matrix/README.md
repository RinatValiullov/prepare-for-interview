## Write a function that takes a matrix (3*3) and flips it 90 degrees clockwise. Additionally write two more functions that flip the matrix 180 and 270 degrees respectively.

***

Input 1:
```
const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
flipMatrix90(matrix);
flipMatrix180(matrix);
flipMatrix270(matrix);
```

Output 1: 
```
[ [7, 4, 1], [8, 5, 2], [9, 6, 3] ];
[ [9, 8, 7], [6, 5, 4], [3, 2, 1] ];
[ [3, 6, 9], [2, 5, 8], [1, 4, 7] ];
```

Input 2:
```
const matrix = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ];
flipMatrix90(matrix);
flipMatrix180(matrix);
flipMatrix270(matrix);
```

Output 2: 
```
[ ['g', 'd', 'a'], ['h', 'e', 'b'], ['i', 'f', 'c'] ];
[ ['i', 'h', 'g'], ['f', 'e', 'd'], ['c', 'b', 'a'] ];
[ ['c', 'f', 'i'], ['b', 'e', 'h'], ['a', 'd', 'g'] ];
```

***
