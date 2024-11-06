# [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

We will use an stack to keep track of the indices of the temperatures. We will iterate the temperatures from the end to the beginning. For each temperature, we will pop the indices from the stack until we find a temperature that is greater than the current temperature. The difference between the index of the current temperature and the index of the temperature at the top of the stack will be the number of days until the next warmer temperature.

## Complexity Analysis
**Time Complexity:** `O(N)`
**Space Complexity:** `O(N)`