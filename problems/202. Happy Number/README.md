# [202. Happy Number](https://leetcode.com/problems/happy-number/description/)

We can aproach this problem by using a hash set to store the sum of the squares of the digits of the number. If the sum is already in the set, then we have a cycle and the number is not happy. If the sum is 1, then the number is happy.

While this approach works well for small numbers, we might have to perform several computations for larger numbers to get the required result. So, it might get infeasible for such cases. The time complexity of this approach is `O(log n)`. The space complexity is `O(log n)`. since we're using additional space to store our calculated sums.

For a more optimized approach, we can use fast and slow pointers. We can calculate the sum of the squares of the digits of the number using the slow pointer and the sum of the squares of the digits of the sum using the fast pointer. If the number is happy, the fast pointer will eventually reach 1. If the number is not happy, the fast pointer will eventually reach the same value as the slow pointer.

## Complexity Analysis
**Time Complexity:** `O(log n)`
**Space Complexity:** `O(1)`
