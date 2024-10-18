# [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

We will use prefix and suffix products to solve this problem.

First we calculate the prefix sum for each element of the array. We create an empty array of size n + 1 and in the first position we add 1, this to avoid out of bounds errorss.

We do the same for the suffix sum, but we start from the end of the array and adding 1 to the last position.

Finally, we iterate over the array and calculate the product of the prefix and suffix sums.
