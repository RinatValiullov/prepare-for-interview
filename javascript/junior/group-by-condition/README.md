## Write a function that takes two parameters: array of elements and condition (function or string). This function returns the array grouped according to the condition

***

Input 1: 
```
const arrayOfNumbers = [1.2, 1.8, 2.5, 2.6];
groupBy(arrayOfNumbers, Math.floor);
```

Output 1:
```
{ '1': [1.2, 1.8], '2': [2.5, 2.6] };
```

Input 2: 
```
const arrayOfStrings = ['hello', 'welcome', 'see you'];
groupBy(arrayOfStrings, 'length');
```

Output 2:
```
{ '5': ['hello'], '7': ['welcome', 'see you'] };
```

***
