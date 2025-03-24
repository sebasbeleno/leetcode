# [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

We will use two heaps to solve this problem. One heap will store the smaller half of the numbers, and the other heap will store the larger half of the numbers. We will keep the size of the two heaps balanced so that the median can be calculated in constant time.

If the size of the two heaps is equal, the median will be the average of the top elements of the two heaps. If the size of the two heaps is not equal, the median will be the top element of the heap with the larger size.

When we add a new number to the stream, we will add it to the smaller half heap if the number is less than the top element of the larger half heap. Otherwise, we will add it to the larger half heap. After adding the number, we will balance the two heaps by moving the top element of the larger half heap to the smaller half heap if the size of the two heaps differs by more than one.

## Complexity Analysis
**Time Complexity:** `O(logn)` for adding a number to the heap and `O(1)` for finding the median.
**Space Complexity:** `O(n)` - where `n` is the number of elements in the stream.
