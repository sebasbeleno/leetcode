/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root == null) return [];

    let results = [],
        dq = new Deque(),
        reverse = false;
    dq.push(root);

    while (dq.length > 0) {
        let size = dq.length;
        results.push([]);

        for (let i = 0; i < size; i++) {
            if (reverse == false) {
                let node = dq.shift();
                results[results.length - 1].push(node.val);

                if (node.left != null) {
                    dq.push(node.left);
                }
                if (node.right != null) {
                    dq.push(node.right);
                }
            } else {
                let node = dq.pop();
                results[results.length - 1].push(node.val);

                if (node.right != null) dq.unshift(node.right);
                if (node.left != null) dq.unshift(node.left);
            }
        }
        reverse = !reverse;
    }
    return results;
};

// --------------------- Deque AND Node Implementation ---------------------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //  add value to the beginning of the list
    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    //  add value to the end of the list
    push(value) {
        const newNode = new Node(value);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    //  remove value from the beginning of the list
    shift() {
        if (!this.head) {
            return null;
        }

        const removed = this.head;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
        }

        this.length--;

        return removed.value;
    }

    //  remove value from the end of the list
    pop() {
        if (!this.tail) {
            return null;
        }

        const removed = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
        }

        this.length--;

        return removed.value;
    }

    // get the front value
    peekFront() {
        return this.head ? this.head.value : null;
    }

    // get the last value
    peekBack() {
        return this.tail ? this.tail.value : null;
    }

    // check if the deque is empty or not
    isEmpty() {
        return this.length === 0;
    }

    // helper function to convert the values into a string
    toString() {
        if (this.head === null) return "[]";

        let result = "[";
        let current = this.head;
        while (current.next !== null) {
            result += current.value.data + ",";
            current = current.next;
        }
        result += current.value.data + "]";
        return result;
    }
}