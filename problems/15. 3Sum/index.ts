function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  let ans: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum < 0) {
        l += 1;
        continue;
      } else if (sum > 0) {
        r -= 1;
        continue;
      } else {
        let triplet = [nums[i], nums[l], nums[r]];
        ans.push(triplet);

        l += 1;
        r -= 1;

        while (l < r && nums[l] == nums[l - 1]) {
          l += 1;
        }
      }
    }
  }

  return ans;
}
