/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let pair = position.map((p, i) => [p, speed[i]])
    pair.sort((a, b) => b[0] - a[0])

    let flets = 1;

    let prevTime = (target - pair[0][0]) / pair[0][1]

    for (let i = 1; i < pair.length; i++) {
        let current = (target - pair[i][0]) / pair[i][1]

        if (current > prevTime) {
            flets++
            prevTime = current
        }
    }

    return flets
};