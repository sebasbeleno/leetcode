# [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/) 

The approach for this problem is using two pointers, one at the start and one at the end of the array.

We calculate the area between the two pointers and store the maximum area found. We calculate the area by the following formula:

```javascript
// get the minimum height between the two pointers
const height = Math.min(heights[left], heights[right]);
// calculate the distance between the two pointers
const width = right - left;
// calculate the area
const area = height * width;
```

Then we move the pointer with the smallest height, because the area is limited by the smallest height. If we move the pointer with the largest height, the area will be limited by the smallest height, so the area will not increase.

One edge case to consider is when the height of the two pointers is the same. In this case, we can move either pointer.

## Complexity Analysis
**Time complexity:** O(n)
**Space complexity:** O(1)