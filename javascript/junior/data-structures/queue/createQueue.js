/* 1 way: O(1) time complexity */
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
var _storage, _first, _last;
class Queue {
    constructor() {
        _storage.set(this, {});
        _first.set(this, 0);
        _last.set(this, 0);
    }
    enqueue(item) {
        __classPrivateFieldGet(this, _storage)[__classPrivateFieldGet(this, _last)] = item;
        __classPrivateFieldSet(this, _last, +__classPrivateFieldGet(this, _last) + 1);
        return this.size;
    }
    dequeue() {
        if (this.size === 0) {
            console.warn("The queue is empty");
            return;
        }
        const value = __classPrivateFieldGet(this, _storage)[__classPrivateFieldGet(this, _first)];
        delete __classPrivateFieldGet(this, _storage)[__classPrivateFieldGet(this, _first)];
        __classPrivateFieldSet(this, _first, +__classPrivateFieldGet(this, _first) + 1);
        return value;
    }
    get size() {
        return __classPrivateFieldGet(this, _last) - __classPrivateFieldGet(this, _first);
    }
    print() {
        console.log("Queue", __classPrivateFieldGet(this, _storage));
        return __classPrivateFieldGet(this, _storage);
    }
}
_storage = new WeakMap(), _first = new WeakMap(), _last = new WeakMap();
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(12);
queue.dequeue();
queue.enqueue(7);
queue.print();
console.log(queue.size);
export { Queue };
