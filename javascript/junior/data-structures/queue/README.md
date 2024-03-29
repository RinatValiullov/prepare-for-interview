## Create a `queue` data structure with the following operations: `enqueue` - add an entity to the rear position; `dequeue` - remove an entity from front position; `print` - show the current queue state in the console; `size` - get the `queue` size.

***

```
const queue = new Queue();

queue.enqueue(5); // Queue { '0': 5 }
queue.enqueue(12); // Queue { '0': 5, '1': 12 }
queue.dequeue(); // value: 5, Queue { '1': 12 }
queue.print(); // output Queue { 1: 12 }
queue.peek(); // 12
queue.enqueue(7); // Queue { '1': 12, '2': 7 }
queue.print(); // output Queue { '1': 12, '2': 7 }
queue.size(); // 2
```

***
