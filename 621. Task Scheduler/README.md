# [621. Task Scheduler](https://leetcode.com/problems/task-scheduler/)

We will approach this problem by using merging intervals. We will first count the frequency of each task. Then, we will sort the tasks based on their frequency. We will then iterate through the tasks and merge the intervals. We will keep track of the idle time required to complete the tasks. Finally, we will return the total time required to complete all the tasks.

## Complexity Analysis
**Time Complexity:** `O(n)`, where `n` is the number of tasks.
**Space Complexity:** `O(1)`. We are using a constant amount of space.