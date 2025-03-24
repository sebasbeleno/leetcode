/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let LIS = Array(nums.length).fill(1)

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                LIS[i] = Math.max(LIS[i], 1 + LIS[j])
            }
        }
    }

    return Math.max(...LIS)

};