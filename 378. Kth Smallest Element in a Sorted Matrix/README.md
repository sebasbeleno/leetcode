# [378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

We will approach this problem by using a minHeap. We will start by adding the first element of each row to the minHeap. We will also keep track of the row number and column number of each element. We will then remove the smallest element from the minHeap and add the next element from the same row to the minHeap. We will repeat this process k times. The kth element removed from the minHeap will be the kth smallest element in the matrix.

## Complexity Analysis
**Time Complexity:** O(klogn), where ‘n’ is the total number of elements in the matrix.
**Space Complexity:** O(n), as we need to store all the elements in the min-heap.
