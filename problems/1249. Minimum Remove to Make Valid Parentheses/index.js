/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let stack = []
    let s_array = Array.from(s)

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (stack.length > 0 && stack[stack.length - 1][0] == "(" && char == ")") {
            stack.pop()
        } else if (char == "(" || char == ")") {
            stack.push([char, i])
        }
    }

    for (const p of stack) {
        s_array[p[1]] = ""
    }

    return s_array.join("")
};