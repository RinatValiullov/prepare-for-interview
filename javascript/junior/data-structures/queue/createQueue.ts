/* 1 way: O(1) time complexity */

class Queue {
  #storage: any = {};
  #first = 0;
  #last = 0;

  enqueue(item: any) {
    this.#storage[this.#last] = item;
    this.#last++;

    return this.size;
  }

  dequeue() {
    if (this.size === 0) {
      console.warn("The queue is empty");
      return;
    }
    const value = this.#storage[this.#first];

    delete this.#storage[this.#first];
    this.#first++;

    return value;
  }

  peek() {
    console.log(this.#storage[this.#first]);
    return this.#storage[this.#first];
  }

  get size() {
    return this.#last - this.#first;
  }

  print() {
    console.log("Queue", this.#storage);
    return this.#storage;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(12);
queue.dequeue();
queue.print();
queue.peek();
queue.enqueue(7);

queue.print();

console.log("Queue size:", queue.size);

export { Queue };
