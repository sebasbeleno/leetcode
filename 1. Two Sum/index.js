/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let complement = target - num

            let complementIndex = map.get(complement)
            let isTarget = map.has(complement);

            if (isTarget) {
                return [i, complementIndex]
            }

            map.set(num, i)
        }

        return [-1, -1]
};