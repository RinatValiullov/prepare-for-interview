import { describe, expect, it } from "@jest/globals";
import { Queue } from "../data-structures/queue/createQueue";

describe("testing the createQueue function", () => {
  const queue = new Queue();

  it('check "enqueue" method', () => {
    expect(queue.enqueue(1)).toBe(1);
    expect(queue.enqueue(25)).toBe(2);
    expect(queue.enqueue(3)).toBe(3);
    expect(queue.enqueue(8)).toBe(4);
  });

  it('check "dequeue" method', () => {
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(25);
  });

  it('check "peek" method', () => {
    expect(queue.peek()).toBe(3);
  });

  it('check "size" method', () => {
    expect(queue.size).toBe(2);
  });

  it('check "print" method', () => {
    expect(queue.print()).toMatchObject({ 2: 3 });
  });
});
