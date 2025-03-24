/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = []
    let output = []

    backtrack(n, 0, 0, output, result)

    return result
};

function backtrack(n, left, right, output, result) {
    if (left >= n && right >= n) {
        const str = output.join("")
        result.push(str)
        return
    }

    if (left < n) {
        output.push("(")
        backtrack(n, left + 1, right, output, result)
        output.pop()
    }

    if (right < left) {
        output.push(")")
        backtrack(n, left, right + 1, output, result)
        output.pop()
    }
}


