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
            __classPrivateFieldSet(this, _tail, node);
        }
        __classPrivateFieldSet(this, _length, +__classPrivateFieldGet(this, _length) + 1);
        return node;
    }
    removeFirst() {
        if (__classPrivateFieldGet(this, _length) === 0) {
            console.warn("The linked list is empty");
            return;
        }
        const value = __classPrivateFieldGet(this, _head).value;
        __classPrivateFieldSet(this, _head, __classPrivateFieldGet(this, _head).next);
        __classPrivateFieldSet(this, _length, +__classPrivateFieldGet(this, _length) - 1);
        return value;
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
    }
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
