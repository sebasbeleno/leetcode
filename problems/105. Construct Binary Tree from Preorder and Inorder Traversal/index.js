/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const pIndex = [0]
    const mapping = new Map()

    for (let i = 0; i < inorder.length; i++) {
        mapping.set(inorder[i], i)
    }

    return dfs(preorder, inorder, 0, preorder.length - 1, mapping, pIndex)
};

function dfs(preorder, inorder, left, right, mapping, pindex) {
    if (left > right) {
        return null
    }

    let curr = preorder[pindex[0]]
    pindex[0]++
    let root = new TreeNode(curr)

    if (left == right) {
        return root
    }

    let inIndex = mapping.get(curr)

    root.left = dfs(preorder, inorder, left, inIndex - 1, mapping, pindex)
    root.right = dfs(preorder, inorder, inIndex + 1, right, mapping, pindex)

    return root
}
