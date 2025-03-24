/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let numsSum = nums.reduce((a, b) => a + b, 0)

    if (numsSum % 2 !== 0) {
        return false
    }

    const target = numsSum / 2
    const dp = new Array(target + 1).fill(0)

    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
        }
    }

    return dp[target] == target
};