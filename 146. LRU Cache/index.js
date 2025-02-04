/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map()
    this.list = new DoublyLinkedList()
    this.capacity = capacity
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) {
        return -1
    }

    const value = this.map.get(key).val

    this.list.remove(this.map.get(key))
    this.map.set(key, this.list.push(key, value))

    return value


};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.list.remove(this.map.get(key))
    }

    this.map.set(key, this.list.push(key, value))

    if (this.list.length > this.capacity) {
        const curr = this.list.head.key
        this.map.delete(curr)
        this.list.remove(this.list.head)
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(key, val) {
        const newNode = new Node(key, val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    remove(node) {
        if (!node.next && !node.prev) { // if there's only 1 node
            this.head = null;
            this.tail = null;
        } else if (!node.next) { // if the node is tail node
            this.tail = node.prev;
            this.tail.next = null;
        } else if (!node.prev) { // if the node is head node
            this.head = node.next;
            this.head.prev = null;
        } else { // if the node is in between
            const prev = node.prev;
            const next = node.next;
            prev.next = next;
            next.prev = prev;
        }
        this.length--;
    }
}


