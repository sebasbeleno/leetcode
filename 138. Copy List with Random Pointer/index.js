/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    const map = new Map()
    map.set(null, null)
    let curr = head

    while (curr) {
        const newNode = new Node(curr.val)

        map.set(curr, newNode)
        curr = curr.next
    }

    curr = head

    while (curr) {
        const copy = map.get(curr)
        copy.next = map.get(curr.next)
        copy.random = map.get(curr.random)

        curr = curr.next
    }

    return map.get(head)
};