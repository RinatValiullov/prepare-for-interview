## Create a `Linked List` data structure with the following operations:

* `prepend(item)` - add an item to the beginning of the list;
* `append(item)` - add an item to the end of the list;
* `delete(item)` - remove an item from the list;
* `deleteHead()` - remove a head from the list;
* `deleteTail()` - remove a tail from the list;
* `forEach(callback)` - executes a provided `callback` function once for each list node;
* `reverseForEach(callback)` - traversing the list backwards and applying the `callback` function to each node, starting from the end;
* `find(item)` - find an item in the list.

***

```
const l_list = new LinkedList();

l_list.prepend(2);
l_list.prepend(1);
l_list.append(3);
l_list.append(4);
l_list.delete(3);
l_list.append(5);
l_list.deletedHead();
l_list.deletedTail();

l_list.forEach(node => 2 * node); // 12, 14 ({ value: 6, next: { value: 7, next: null } })

l_list.reverseForEach(node => node / 2); // 3.5, 3 (7, 6) ({ value: 6, next: { value: 7, next: null } })

l_list.find(6); // get the whole node { value: 6, next: { value: 7, next: null } }

/* final LinkedList:
  { value: 6, next: { value: 7, next: null } }
*/
```

***
