# [Two Sum](https://leetcode.com/problems/two-sum/)

## Hash Map Approach
The aproach for this problem is map each number of the given array.
For each number, we check the difference between the target and the number.

If the difference is in the map, we return the indexes of the number and the index of the difference.

```javascript
map = {number: index}
```

### Complexity Analysis
Time complexity: `O(n)`
Space complexity: `O(n)`

## Two Pointers Approach
Two use two pointers, we asume that the array is sorted in ascending order. We will use two pointers, one at the start of the array and the other at the end of the array. We will move the pointers towards each other and compare the sum of the numbers at each pointer.

If the sum is equal to the target, we return the indexes of the numbers.

### Complexity Analysis
**Time complexity:** `O(n)` / `(O(nlogn)` if the array is not sorted
**Space complexity:** `O(1)`