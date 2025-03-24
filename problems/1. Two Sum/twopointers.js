function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const rightNumber = numbers[r];
    const leftNumber = numbers[l];

    const sum = rightNumber + leftNumber;
    if (sum > target) {
      r -= 1;
      continue;
    } else if (sum < target) {
      l += 1;
      continue;
    }

    return [l + 1, r + 1];
  }
}
