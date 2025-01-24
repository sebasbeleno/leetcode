/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1

        if (nums[i] != nums[correctIndex]) {
            swapNumbers(nums, i, correctIndex)
        } else {
            i += 1
        }
    }

    let duplicated = 0
    let missing = 0

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != j + 1) {
            duplicated = nums[j]
            missing = j + 1
        }
    }

    return [duplicated, missing]
};

function swapNumbers(nums, currentIndex, newIndex) {
    [nums[currentIndex], nums[newIndex]] = [nums[newIndex], nums[currentIndex]]
}