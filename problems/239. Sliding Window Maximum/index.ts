function maxSlidingWindow(nums: number[], k: number): number[] {
  const q = new Deque(); // Deque is a custom data structure that supports pushBack, popBack, pushFront, popFront. Is automatically imported from the leetcode playground
  let output: number[] = [];

  let r = 0;
  let l = 0;
  let n = nums.length;

  while (r < n) {
    while (q.size() && nums[q.back()] < nums[r]) {
      q.popBack();
    }

    q.pushBack(r);

    if (l > q.front()) {
      q.popFront();
    }

    if (r + 1 >= k) {
      output[l] = nums[q.front()];
      l++;
    }
    r++;
  }

  return output;
}
