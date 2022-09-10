/*
  LinkedListNode class represent one item in our collection of items
*/
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(comparator) {
        this.head = null;
        this.tail = null;
        this.comparator =
            comparator ||
                function (i, j) {
                    if (i < j)
                        return -1;
                    if (i > j)
                        return 1;
                    return 0;
                };
    }
    prepend(item) {
        let newNode = new LinkedListNode(item, this.head);
        let head = this.head;
        head = newNode;
        if (!this.tail) {
            let tail = this.tail;
            tail = newNode;
        }
        return newNode;
    }
}
const l_list = new LinkedList();
console.log("prepend value 5:", l_list.prepend(5));
console.log("prepend value 12:", l_list.prepend(12));
// console.log(l_list);
export { LinkedList };
