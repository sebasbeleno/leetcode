# [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

We will solve this problem using dynamic programming. We will use a list to store the number of ways to reach each step. We will start with the base cases of 1 and 2 steps. Then we will iterate from 3 to n steps and calculate the number of ways to reach each step. The number of ways to reach the current step is the sum of the number of ways to reach the previous two steps. Finally, we will return the number of ways to reach the nth step.

## Complexity Analysis
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$