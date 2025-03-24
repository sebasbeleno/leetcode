function trap(height: number[]): number {
  let l = 0;
  let r = height.length - 1;

  let maxL = height[l];
  let maxR = height[r];

  let ans = 0;

  while (l < r) {
    if (maxL < maxR) {
      l++;
      maxL = Math.max(maxL, height[l]);
      ans += maxL - height[l];
    } else {
      r--;
      maxR = Math.max(maxR, height[r]);
      ans += maxR - height[r];
    }
  }

  return ans;
}
