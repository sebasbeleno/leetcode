/**
 * Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return root

    let mostLeft = root;

    while(mostLeft.left) {
        let current = mostLeft;

        while(current) {
            current.left.next = current.right

            if (current.next) {
                current.right.next = current.next.left
            }

            current = current.next
        }

        mostLeft = mostLeft.left
    }

    return root;
};