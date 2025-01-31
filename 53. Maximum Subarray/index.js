/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let ans = nums[0]
    let currentSum = 0

    for (let num of nums) {
        currentSum += num
        ans = Math.max(currentSum, ans)

        if (currentSum <= 0) {
            currentSum = 0
        }
    }

    return ans
};