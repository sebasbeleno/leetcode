# [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

We will use sliding window to solve this problem. We will keep track of the maximum element in the window and add it to the result array. We will use a deque to keep track of the maximum element in the window. We will add the element to the deque if it is greater than the last element in the deque. We will remove the last element from the deque if it is smaller than the current element. We will add the maximum element in the window to the result array.

## Complexity Analysis
**Time Complexity:** `O(N)`
**Space Complexity:** `O(N)`

### Alternative
We can solve this problem using a heap. We will keep track of the maximum element in the window using a heap. We will add the element to the heap if it is greater than the last element in the heap. We will remove the last element from the heap if it is smaller than the current element. We will add the maximum element in the window to the result array.

Using a heap will increase the time complexity to `O(NlogK)`, where `K` is the size of the window.