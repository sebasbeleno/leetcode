# [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

We will use top K elements algorithm to solve this problem. We will use a min heap to store the top K elements. We will iterate through the array and add the elements to the heap. If the heap size exceeds K, we will remove the smallest element from the heap. Finally, we will return the top element from the heap.

## Complexity Analysis
**Time Complexity:** `O(NlogK)` where `N` is the number of elements in the array and `K` is the value of `k`.
**Space Complexity:** `O(K)` where `K` is the value of `k`.
