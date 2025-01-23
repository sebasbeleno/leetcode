/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let gasSum = gas.reduce((a, b) => a + b, 0)
    let costSum = cost.reduce((a, b) => a + b, 0)

    if (costSum > gasSum) {
        return -1
    }

    let start = 0
    let currentGas = 0

    for (let i = 0; i < gas.length; i++) {
        currentGas = currentGas + (gas[i] - cost[i])

        if (currentGas < 0) {
            currentGas = 0
            start = i + 1
        }
    }

    return start

};