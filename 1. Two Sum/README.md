# [Two Sum](https://leetcode.com/problems/two-sum/)
The aproach for this problem is map each number of the given array.
For each number, we check the difference between the target and the number.

If the difference is in the map, we return the indexes of the number and the index of the difference.

```javascript
map = {number: index}
```
