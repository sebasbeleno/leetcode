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
 * @return {number}
 */
var rob = function(root) {
    let result = heist(root);

    return Math.max(result[0], result[1]);
};

function heist(root) {
    if (root == null) {
        return [0, 0]
    }

    let leftSubtree = heist(root.left)
    let rightSubtree = heist(root.right)

    let includeRoot = root.val + leftSubtree[1] + rightSubtree[1]
    let excludeRoot = Math.max(leftSubtree[0], leftSubtree[1]) + Math.max(rightSubtree[0], rightSubtree[1])

    return [includeRoot, excludeRoot]
}