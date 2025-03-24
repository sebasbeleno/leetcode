/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let i = 0;

    while (i < nums.length) {
        const correctIndex = nums[i] - 1

        if (nums[i] >= 0 && correctIndex < nums.length && nums[correctIndex] != nums[i]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
        } else {
            i += 1
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != j + 1) {
            return j + 1
        }
    }

    return nums.length + 1
};