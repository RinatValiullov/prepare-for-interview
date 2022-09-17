import { LinkedList } from "../linked-list/createLinkedList.js";

class Stack {
  linkedList: LinkedList;
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.head.value;
  }

  push(item: any): void {
    this.linkedList.prepend(item);
  }

  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}

const stack = new Stack();

stack.push(4);

console.log(stack.peek()); // 4

stack.push(6);
stack.push(8);

const popedValue = stack.pop(); // 8
console.log(popedValue);

const peekedValue = stack.peek(); // 6
console.log(peekedValue);

const checkIfEmpty = stack.isEmpty(); // false
console.log(checkIfEmpty);
