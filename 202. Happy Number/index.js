/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n
    let fast = getSumOfSquaredDigits(n)

    while (fast !== 1 && slow !== fast) {
        slow = getSumOfSquaredDigits(slow)
        fast = getSumOfSquaredDigits(getSumOfSquaredDigits(fast))
    }

    return fast == 1
};

function getSumOfSquaredDigits(number) {
    let totalSum = 0;

    while (number > 0) {
        const digit = number % 10 // get the last digit
        number = Math.floor(number / 10) // remove the last digit

        totalSum += digit**2
    }

    return totalSum
}