/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;

    let l = 0
    let r = 0

    while (r < nums.length - 1) {
        let far = 0

        for (let i = l; i <= r; i++) {
            far = Math.max(far, i + nums[i])
        }

        l = r + 1
        r = far
        jumps++
    }

    return jumps
};