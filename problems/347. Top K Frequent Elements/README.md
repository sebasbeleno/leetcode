# [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

The aproach of this problem is to map the frequency of each number in the given array.

Then, we push the numbers in a max heap, and we pop the k most frequent numbers.

We push the numbers in the following format: (-frequency, number).
