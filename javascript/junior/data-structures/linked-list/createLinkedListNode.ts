/*
  LinkedListNode class represent one item in our collection of items
*/
class LinkedListNode {
  value: any;
  next: null;
  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }
}

export { LinkedListNode };
