import { LinkedListNode } from "./createLinkedListNode.js";

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

  deleteHead() {
    if (!this.head) {
      return null;
    }
    let deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  deleteTail() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    let current = this.head;
    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }

    this.tail = current;

    return deletedTail;
  }

  forEach(fn_cb: (node: any) => void) {
    let current = this.head;
    while (current) {
      fn_cb(current);
      current = current.next;
    }
  }
}

const l_list = new LinkedList();
console.log("prepend value 5:", l_list.prepend(5));
console.log("prepend value 12:", l_list.prepend(12));
console.log("append value 6:", l_list.append(6));
console.log("append value 7:", l_list.append(7));
console.log("delete value 12:", l_list.delete(12));
console.log("append value 4:", l_list.append(4));
console.log("delete head:", l_list.deleteHead());
console.log("delete tail:", l_list.deleteTail());

l_list.forEach((node) => console.log("doubled:", node.value * 2));

console.log(l_list);

export { LinkedList };
