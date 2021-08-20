## Write a function that make a deep copy of an object.

***

Input:
```
const original = { a: { b: { c: { d: 5 } } } };

const copy = deepCopy(original);
```

Output: 
```
Use nodejs assert module:

assert.deepStrictEqual(original, copy); // Ok
```

***
