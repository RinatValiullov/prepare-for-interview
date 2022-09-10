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

class LinkedList {
  head: any;
  tail: any;
  comparator: (() => any) | ((i: any, j: any) => number);
  constructor(comparator?: () => any) {
    this.head = null;
    this.tail = null;

    this.comparator =
      comparator ||
      function (i, j): number {
        if (i < j) return -1;
        if (i > j) return 1;
        return 0;
      };
  }

  prepend(item: any) {
    let newNode = new LinkedListNode(item, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return newNode;
  }

  append(item: any) {
    let newNode = new LinkedListNode(item);

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }

    return newNode;
  }

  delete(item: any) {
    if (!this.head) {
      return null;
    }

    let deleteNode = null;

    while (this.head && this.comparator(this.head.value, item) === 0) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let current = this.head;

    if (current !== null) {
      while (current.next) {
        if (this.comparator(current.next.value, item) === 0) {
          deleteNode = current.next;
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }

    if (this.comparator(this.tail.value, item)) {
      this.tail = current;
    }

    return deleteNode;
  }
}

const l_list = new LinkedList();
console.log("prepend value 5:", l_list.prepend(5));
console.log("prepend value 12:", l_list.prepend(12));
console.log("append value 6:", l_list.append(6));
console.log("append value 7:", l_list.append(7));
console.log("delete value 12:", l_list.delete(12));

console.log(l_list);

export { LinkedList };
