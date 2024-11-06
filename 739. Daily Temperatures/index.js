/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let output = new Array(temperatures.length).fill(0)
    let stack = [] // [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i]

        while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
            let [stackTempeturature, stackIndex] = stack.pop()
            output[stackIndex] = i - stackIndex
        }

        stack.push([temp, i])
    }

    return output
};