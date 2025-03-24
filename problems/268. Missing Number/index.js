/**
 * SOLUTION USING SET
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const set1 = new Set(nums)

    let ans = 0
    for (let i = 1; i <= nums.length; i++) {
        if (!set1.has(i)) {
            ans = i
        }
    }

    return ans
};

// --------------------------------------------------------------------------------

/**
 * SOLUTION USING CYCLIC SORT
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let i = 0;

    while (i < nums.length) {
        let value = nums[i]

        if (value < nums.length && nums[value] != value) {
            [nums[i], nums[value]] = [nums[value], nums[i]]
        } else {
            i += 1
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != j) {
            return j
        }
    }

    return nums.length
};