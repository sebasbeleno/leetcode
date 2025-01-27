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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root == null) return;

    let current = root;

    while (current != null) {

        if (current.left != null) {
            let last = current.left;
            while (last.right != null) {
                last = last.right;
            }

            last.right = current.right;
            current.right = current.left;
            current.left = null;
        }
        current = current.right;
    }
    return root;
};