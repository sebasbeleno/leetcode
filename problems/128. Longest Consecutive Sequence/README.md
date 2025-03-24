# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

The aproach for this problem is to convert the array into a set, why? because we can check if a number is in the set in O(1) since the set is implemented as a hash table.

Then, we iterate over the set and check if the number is the start of a sequence. A number is the start of a sequence if the number - 1 is not in the set. If the number is the start of a sequence, we iterate over the numbers that are greater than the number and count how many numbers are in the sequence.

Finally, we return the maximum length of the sequences.
