# [373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)

To solve this problem, we will use K-way merge with a min heap. First, we add all the sums of the all elements of the first array with the first element of the second array to the min heap. We will also keep track of the index of the element from the second array that was added to the heap.

We will then pop the top element from the heap and add the next element from the second array to the heap. We will continue this process until we have found `k` pairs.

## Complexity Analysis
**Time Complexity:** `O(k log m)` - where `k` is the number of pairs we need to find and `m` is the size of the second array.
**Space Complexity:** `O(k)` - where `k` is the number of pairs we need to find.