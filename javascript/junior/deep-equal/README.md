## Write a function that will compare input parameters, returning whether they are equal according to a recursive equality algorithm.

***

Input 1:
```
const input1 = { x: 15, z: { c: 12 } };
const input2 = { x: 15, z: { c: 12 } };
deepEqual(input1, input2);

```

Output 1: 
```
true
```

Input 2:
```
const input1 = { x: 15, z: [ 8, 9 ] };
const input2 = { x: 15, z: [ 8, 9 ] };
deepEqual(input1, input2);

```

Output 2: 
```
true
```

Input 3:
```
const input1 = { x: 15, z: { c: 0 } };
const input2 = { x: 15, z: { c: 1 } };
deepEqual(input1, input2);

```

Output 3: 
```
false
```

Input 4:
```
const input1 = { x: 15 };
const input2 = { x: 15, z: { c: 1 } };
deepEqual(input1, input2);

```

Output 4: 
```
false
```

Input 5:
```
const input1 = NaN;
const input2 = NaN;
deepEqual(input1, input2);

```

Output 5: 
```
true
```

Input 6:
```
const input1 = "string";
const input2 = 15;
deepEqual(input1, input2);

```

Output 6: 
```
false
```

***
