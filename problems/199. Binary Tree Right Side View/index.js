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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) {
        return []
    }

    const rside = []
    dfs(root, 0, rside)

    // Replace this placeholder return statement with your code
    return rside;
};

function dfs(node, level, rside) {
    if (level == rside.length) {
        rside.push(node.val)
    }

    for (const child of [node.right, node.left]) {
        if (child) {
            dfs(child, level + 1, rside)
        }
    }
}