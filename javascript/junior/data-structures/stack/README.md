## Create a `stack` data structure with the following operations:

* `push(item)` - add an item to the stack;
* `pop()` - remove the most recently added item that was not yet removed;
* `peek()` - get the first item;
* `isEmpty()` - check if stack is empty.


***

```
const stack = new Stack();

stack.push(4);
stack.peek(); // 4
stack.push(6);
stack.push(8);
stack.pop(); // 8
stack.peek(); // 6
stack.isEmpty(); // false
```

***
