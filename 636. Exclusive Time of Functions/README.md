# [636. Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions/)

We will create a stack to keep track of the functions that are currently running. We will iterate through the logs and parse each log to extract the function id, the start/end time, and the time taken by the function. If the log indicates the start of a function, we will push the function id and the start time to the stack. If the log indicates the end of a function, we will pop the function id and the start time from the stack and calculate the time taken by the function. We will add the time taken by the function to the result array. If there are functions that are currently running, we will add the time taken by the function to the time taken by the function that is currently running. Finally, we will return the result array.

## Complexity Analysis
- The time complexity is `O(n)` because we iterate through the logs once.
- The space complexity is `O(n)` because we use a stack to keep track of the functions that are currently running.