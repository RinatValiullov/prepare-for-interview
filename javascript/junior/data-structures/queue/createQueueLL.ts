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
      this.#tail = node;
    }

    this.#length++;

    return node;
  }

  removeFirst() {
    if (this.#length === 0) {
      console.warn("The linked list is empty");
      return;
    }

    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#length--;

    return value;
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
  }

  enqueue: (item: any) => void;
  dequeue: () => any;

  get sizeQueue() {
    return super.size();
  }
}

const queue = new QueueLL();
queue.enqueue(5);
queue.enqueue(12);
console.log(queue.dequeue());
console.log(queue.enqueue(7));

console.log("Queue size: ", queue.sizeQueue);

export { QueueLL };
