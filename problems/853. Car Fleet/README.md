# [853. Car Fleet](https://leetcode.com/problems/car-fleet/)

First, we create an sorted array wich contains a pair of `(position, time)`. We sort the array by the position in descending order. Then, we iterate the array and calculate the time to reach the target for each car. If the time is greater than the previous car, we update the time and increment the fleet count.

## Complexity Analysis
**Time Complexity:** `O(NlogN)`
**Space Complexity:** `O(N)`