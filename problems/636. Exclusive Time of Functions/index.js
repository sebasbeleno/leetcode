/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    let stack = []
    let result = new Array(n).fill(0)

    for (let log of logs) {
        const entry = new Log(log)

        if (entry.isStart) {
            stack.push(entry)
        } else {
            const top = stack.pop()

            result[top.id] += entry.time - top.time + 1

            if (stack.length > 0) {
                result[stack[stack.length - 1].id] -= entry.time - top.time + 1
            }
        }
    }

    return result
};

class Log {
    constructor(content) {
        this.content = content.replace(" ", "")
        this.str = content.split(":")
        this.id = parseInt(this.str[0])
        this.isStart = this.str[1] == "start"
        this.time = parseInt(this.str[2])
    }
}