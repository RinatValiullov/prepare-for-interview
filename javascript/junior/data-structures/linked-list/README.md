## Create a `Linked List` data structure with the following operations: `prepend` - add a node to the beginning of the list; `append` - add a node to the end of the list; `delete` - remove a node from the list.

***

```
const l_list = new LinkedList();

l_list.prepend(5); // LinkedListNode { value: 5, next: null }
l_list.prepend(12); // LinkedListNode { value: 12, next: { value: 5, next: null } }
l_list.append(6); // LinkedListNode { value: 6, next: null }
l_list.append(7); // LinkedListNode { value: 7, next: null }

// LinkedListNode { value: 12, next: { value: 5, next: { value: 6, next: { value: 7, next: null } } } }
l_list.delete(12);
```

***
