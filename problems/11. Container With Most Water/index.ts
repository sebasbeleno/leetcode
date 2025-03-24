function maxArea(heights: number[]): number {
  let l = 0;
  let r = heights.length - 1;

  let ans = 0;

  while (l < r) {
    const min = Math.min(heights[l], heights[r]);
    const distance = r - l;
    const area = min * distance;

    ans = Math.max(ans, area);

    if (heights[l] <= heights[r]) {
      l++;
    } else {
      r--;
    }
  }

  return ans;
}
