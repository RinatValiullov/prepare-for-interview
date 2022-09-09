class LinkedList {
  #length = 0;
  #head: any;
  #tail: any;

  addLast(item: any) {
    const node = {
      value: item,
      next: null
    };

    if (this.#length === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }

    this.#length++;

    return node;
  }

  removeFirst() {
    if (this.#length === 0) {
      console.warn("The structure is empty");
      return null;
    }

    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#length--;

    return value;
  }

  getFirst() {
    if (this.#length === 0) {
      console.warn("The structure is empty");
      return null;
    }

    return this.#head.value;
  }

  size() {
    return this.#length;
  }
}

class QueueLL extends LinkedList {
  constructor() {
    super();

    this.enqueue = this.addLast;
    this.dequeue = this.removeFirst;
    this.peek = this.getFirst;
  }

  enqueue: (item: any) => void;
  dequeue: () => any;
  peek: () => any;

  get sizeQueue() {
    return super.size();
  }
}

const queue = new QueueLL();
console.log("enqueue value 5", queue.enqueue(5));
console.log("enqueue value 12", queue.enqueue(12));

console.log("dequeue:", queue.dequeue());

console.log("enqueue value 7", queue.enqueue(7));

console.log("get the head:", queue.peek());

console.log("dequeue:", queue.dequeue());
console.log("get the head:", queue.peek());
console.log("dequeue:", queue.dequeue());
console.log("get the head:", queue.peek());

console.log("Queue size: ", queue.sizeQueue);

export { QueueLL };
