var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _length, _head, _tail;
class LinkedList {
    constructor() {
        _length.set(this, 0);
        _head.set(this, void 0);
        _tail.set(this, void 0);
    }
    addLast(item) {
        const node = {
            value: item,
            next: null
        };
        if (__classPrivateFieldGet(this, _length) === 0) {
            __classPrivateFieldSet(this, _head, node);
            __classPrivateFieldSet(this, _tail, node);
        }
        else {
            __classPrivateFieldGet(this, _tail).next = node;
            __classPrivateFieldSet(this, _tail, node);
        }
        __classPrivateFieldSet(this, _length, +__classPrivateFieldGet(this, _length) + 1);
        return node;
    }
    removeFirst() {
        if (__classPrivateFieldGet(this, _length) === 0) {
            console.warn("The structure is empty");
            return null;
        }
        const value = __classPrivateFieldGet(this, _head).value;
        __classPrivateFieldSet(this, _head, __classPrivateFieldGet(this, _head).next);
        __classPrivateFieldSet(this, _length, +__classPrivateFieldGet(this, _length) - 1);
        return value;
    }
    getFirst() {
        if (__classPrivateFieldGet(this, _length) === 0) {
            console.warn("The structure is empty");
            return null;
        }
        return __classPrivateFieldGet(this, _head).value;
    }
    size() {
        return __classPrivateFieldGet(this, _length);
    }
}
_length = new WeakMap(), _head = new WeakMap(), _tail = new WeakMap();
class QueueLL extends LinkedList {
    constructor() {
        super();
        this.enqueue = this.addLast;
        this.dequeue = this.removeFirst;
        this.peek = this.getFirst;
    }
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
